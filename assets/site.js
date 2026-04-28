(function () {
  var config = window.FIV_CONFIG || {};
  var links = document.querySelectorAll("[data-config-link]");
  var emailNodes = document.querySelectorAll("[data-config-email]");
  var intakeForm = document.querySelector("[data-intake-form]");
  var formStatus = document.querySelector("[data-form-status]");
  var productNodes = document.querySelectorAll("[data-config-product]");

  links.forEach(function (node) {
    var key = node.getAttribute("data-config-link");
    var value = config[key];
    if (value) {
      node.setAttribute("href", value);
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
      var target = config.contactEmail || "hello@example.com";
      var endpoint = config.formEndpoint || "";
      var hasFormEndpoint =
        endpoint &&
        endpoint.indexOf("https://formspree.io/f/") === 0 &&
        endpoint.indexOf("your_form_id") === -1;

      if (formStatus) {
        formStatus.textContent = hasFormEndpoint
          ? "Sending your request..."
          : "Form service not connected yet. Opening your email app instead.";
      }

      if (hasFormEndpoint) {
        fetch(endpoint, {
          method: "POST",
          body: formData,
          headers: {
            Accept: "application/json"
          }
        })
          .then(function (response) {
            if (!response.ok) {
              throw new Error("Request failed");
            }
            return response.json();
          })
          .then(function () {
            window.location.href = "thank-you.html";
          })
          .catch(function () {
            if (formStatus) {
              formStatus.textContent =
                "There was a problem sending the form. Opening your email app instead.";
            }
            openMailClient();
          });
        return;
      }

      openMailClient();

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
          encodeURIComponent(target) +
          "?subject=" +
          encodeURIComponent(subject) +
          "&body=" +
          encodeURIComponent(lines.join("\n"));

        window.location.href = mailto;
        window.setTimeout(function () {
          window.location.href = "thank-you.html";
        }, 500);
      }
    });
  }
})();
