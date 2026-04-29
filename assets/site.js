(function () {
  var config = window.FIV_CONFIG || {};
  var paystackConfig = config.paystack || {};
  var links = document.querySelectorAll("[data-config-link]");
  var emailNodes = document.querySelectorAll("[data-config-email]");
  var intakeForm = document.querySelector("[data-intake-form]");
  var formStatus = document.querySelector("[data-form-status]");
  var productNodes = document.querySelectorAll("[data-config-product]");
  var buyButton = document.querySelector("[data-buy-button]");

  links.forEach(function (node) {
    var key = node.getAttribute("data-config-link");
    var value = config[key];
    if (value) {
      node.setAttribute("href", value);
      // External links (templates, video) get target=_blank so the customer
      // doesn't lose the start page.
      if (/^https?:\/\//.test(value) && key !== "contactLink") {
        node.setAttribute("target", "_blank");
        node.setAttribute("rel", "noopener");
      }
    } else if (node.hasAttribute("data-hide-when-empty")) {
      // For optional links (e.g. Airtable template before it exists), hide
      // the button entirely instead of leaving a dead "#" CTA on the page.
      node.style.display = "none";
    }
  });

  emailNodes.forEach(function (node) {
    var email = config.contactEmail;
    if (email) {
      node.textContent = email;
      node.setAttribute("href", "mailto:" + email);
    }
  });

  productNodes.forEach(function (node) {
    if (config.productName) {
      node.textContent = config.productName;
    }
  });

  function paystackReady() {
    return (
      typeof window.PaystackPop !== "undefined" &&
      paystackConfig.publicKey &&
      paystackConfig.publicKey.indexOf("pk_") === 0 &&
      paystackConfig.amountInSubunits &&
      paystackConfig.currency
    );
  }

  function generateReference(emailValue) {
    var emailPart = (emailValue || "anon").split("@")[0].replace(/[^a-z0-9]/gi, "").slice(0, 12);
    var ts = Date.now().toString(36);
    var rand = Math.random().toString(36).slice(2, 8);
    return "BOSs-" + emailPart + "-" + ts + "-" + rand;
  }

  if (intakeForm) {
    intakeForm.addEventListener("submit", function (event) {
      event.preventDefault();

      var formData = new FormData(intakeForm);
      var name = formData.get("name") || "";
      var email = formData.get("email") || "";
      var organization = formData.get("organization") || "";
      var role = formData.get("role") || "";
      var organizationType = formData.get("organization_type") || "";
      var fundingFocus = formData.get("funding_focus") || "";
      var challenge = formData.get("challenge") || "";
      var notes = formData.get("notes") || "";

      var contactTarget = config.contactEmail || "hello@example.com";
      var endpoint = config.formEndpoint || "";
      var hasFormEndpoint =
        endpoint &&
        endpoint.indexOf("https://formspree.io/f/") === 0 &&
        endpoint.indexOf("your_form_id") === -1;

      var canPay = paystackReady();

      if (formStatus) {
        formStatus.textContent = canPay
          ? "Saving your details..."
          : hasFormEndpoint
          ? "Sending your request..."
          : "Form service not connected yet. Opening your email app instead.";
      }

      if (buyButton) {
        buyButton.disabled = true;
      }

      function reEnableButton() {
        if (buyButton) {
          buyButton.disabled = false;
        }
      }

      function logToFormspree() {
        if (!hasFormEndpoint) {
          return Promise.resolve(null);
        }
        var fd = new FormData();
        fd.append("name", name);
        fd.append("email", email);
        fd.append("organization", organization);
        fd.append("role", role);
        fd.append("organization_type", organizationType);
        fd.append("funding_focus", fundingFocus);
        fd.append("challenge", challenge);
        fd.append("notes", notes);
        fd.append("source", "request-access.html");
        return fetch(endpoint, {
          method: "POST",
          body: fd,
          headers: { Accept: "application/json" }
        })
          .then(function (response) {
            return response.ok ? response.json().catch(function () { return null; }) : null;
          })
          .catch(function () {
            return null;
          });
      }

      function startPaystack() {
        if (formStatus) {
          formStatus.textContent = "Opening secure checkout...";
        }

        var reference = generateReference(email);

        var handler = window.PaystackPop.setup({
          key: paystackConfig.publicKey,
          email: email,
          amount: paystackConfig.amountInSubunits,
          currency: paystackConfig.currency,
          ref: reference,
          label: paystackConfig.productLabel || config.productName || "Early Access",
          metadata: {
            custom_fields: [
              { display_name: "Name", variable_name: "name", value: name },
              { display_name: "Organization", variable_name: "organization", value: organization },
              { display_name: "Role", variable_name: "role", value: role },
              { display_name: "Organization Type", variable_name: "organization_type", value: organizationType },
              { display_name: "Funding Focus", variable_name: "funding_focus", value: fundingFocus }
            ]
          },
          callback: function (response) {
            var ref = (response && response.reference) || reference;
            window.location.href = "thank-you.html?ref=" + encodeURIComponent(ref);
          },
          onClose: function () {
            reEnableButton();
            if (formStatus) {
              formStatus.textContent =
                "Checkout closed before payment completed. Your details are saved — click the button again to retry.";
            }
          }
        });

        handler.openIframe();
      }

      function openMailClient() {
        var subject = "Funding Intelligence Vault Early Access Request";
        var lines = [
          "Name: " + name,
          "Email: " + email,
          "Organization: " + organization,
          "Role: " + role,
          "Organization type: " + organizationType,
          "Main funding focus: " + fundingFocus,
          "",
          "Biggest challenge:",
          challenge,
          "",
          "Additional notes:",
          notes || "None"
        ];

        var mailto =
          "mailto:" +
          encodeURIComponent(contactTarget) +
          "?subject=" +
          encodeURIComponent(subject) +
          "&body=" +
          encodeURIComponent(lines.join("\n"));

        window.location.href = mailto;
        window.setTimeout(function () {
          window.location.href = "thank-you.html";
        }, 500);
      }

      logToFormspree().then(function () {
        if (canPay) {
          startPaystack();
          return;
        }

        if (hasFormEndpoint) {
          // Lead captured but no payment configured yet — soft landing on thank-you page.
          if (formStatus) {
            formStatus.textContent = "Thanks — taking you to the next step...";
          }
          window.setTimeout(function () {
            window.location.href = "thank-you.html";
          }, 600);
          return;
        }

        // No form endpoint, no Paystack: fall back to mailto.
        openMailClient();
      });
    });
  }
})();
