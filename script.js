
document.getElementById("year").textContent = new Date().getFullYear();

const menu = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
menu.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  if (open) {
    nav.style.display = "flex";
    nav.style.position = "absolute";
    nav.style.left = "0";
    nav.style.right = "0";
    nav.style.top = "82px";
    nav.style.padding = "22px 4%";
    nav.style.background = "#fff";
    nav.style.flexDirection = "column";
    nav.style.borderBottom = "1px solid #dfe5ec";
  } else {
    nav.removeAttribute("style");
  }
});

document.getElementById("estimateForm").addEventListener("submit", function(e){
  e.preventDefault();
  const data = new FormData(this);
  const subject = encodeURIComponent("Free Estimate Request - Ridgeforge Website");
  const body = encodeURIComponent(
`Name: ${data.get("name")}
Phone: ${data.get("phone")}
Email: ${data.get("email") || ""}
Service: ${data.get("service") || ""}

Project details:
${data.get("details") || ""}`
  );
  window.location.href = `mailto:Sanchez.e2855@gmail.com?subject=${subject}&body=${body}`;
});
