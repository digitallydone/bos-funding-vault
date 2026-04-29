window.FIV_CONFIG = {
  brandName: "BOSs | Business Opportunity Systems",
  productName: "Funding Intelligence Vault",
  guideLink: "guide-full.html",
  betaLink: "request-access.html",
  onboardingLink: "customer-start.html",
  contactEmail: "subscribe@itsdigitally.com",
  contactLink: "mailto:subscribe@itsdigitally.com?subject=Funding%20Intelligence%20Vault%20Early%20Access",
  formEndpoint: "https://formspree.io/f/xaqagedq",
  // Customer workspace templates. Once you've published your Airtable base
  // and your Google Sheet as templates, paste the share/copy URLs here.
  // The customer-facing flow uses these as the primary deliverable.
  templateAirtableLink: "",  // e.g. https://airtable.com/templates/...
  templateSheetsLink: "",    // e.g. https://docs.google.com/spreadsheets/d/.../copy
  // Optional: a 60–120 second welcome video the buyer sees on thank-you.html.
  // Paste a Loom share URL once you've recorded it.
  welcomeVideoUrl: "",
  // Customer-facing template URLs — fill these in once you've published the templates.
  // Airtable: Share → Share as template → Get share link (looks like https://airtable.com/.../shr...)
  // Sheets: take the regular share URL and replace /edit?... with /copy
  airtableTemplateUrl: "",
  sheetsTemplateUrl: "https://docs.google.com/spreadsheets/d/18Jhi4D0HyMQpcVPc84KzbGtNx2rpFx2FFnY999Ui7z4/copy",
  // Welcome video — Loom share link OR a self-hosted MP4 URL.
  // Used on thank-you.html and in the welcome email.
  welcomeVideoUrl: "",
  paystack: {
    // Public key from Paystack dashboard → Settings → API Keys & Webhooks → Public Key.
    // Public keys are safe to commit (they live in client-side code on every Paystack-integrated site).
    // Use pk_test_... while testing, swap to pk_live_... when going live.
    publicKey: "",
    // Currency code. Common values: NGN, GHS, KES, ZAR, USD.
    // USD requires a Paystack account with USD enabled — confirm in your Paystack settings before using it.
    currency: "USD",
    // Amount in the smallest unit of the chosen currency (kobo/cents/pesewas).
    // 4900 = $49.00 USD or ₦49.00 NGN. Adjust if you change the price.
    amountInSubunits: 4900,
    productLabel: "Funding Intelligence Vault — Early Access"
  },
  footerNote: "Replace config.js values before publishing."
};
