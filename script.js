// Ridgeforge Roofing & Construction
// Website interactions

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".estimate-form");

  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();

      const data = new FormData(form);

      const subject = encodeURIComponent(
        "Free Estimate Request - Ridgeforge Website"
      );

      const body = encodeURIComponent(
`Name: ${data.get("name") || ""}
Phone: ${data.get("phone") || ""}
Email: ${data.get("email") || ""}
Service: ${data.get("service") || ""}

Project Details:
${data.get("details") || ""}`
      );

      window.location.href =
        `mailto:Sanchez.e2855@gmail.com?subject=${subject}&body=${body}`;
    });
  }
});
