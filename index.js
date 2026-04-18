function setActiveLink() {
  const links = document.querySelectorAll(".nav-link");

  let currentPage = window.location.pathname.split("/").pop();
  if (currentPage === "" || currentPage === "/") {
    currentPage = "index.html";
  }

  links.forEach(link => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    }
  });
}

/* FADE IN */
window.addEventListener("DOMContentLoaded", () => {
  const content = document.querySelector(".page-content");
  if (content) content.classList.remove("fade-out");
});

/* FADE OUT CONTENT */
document.addEventListener("click", (e) => {
  const link = e.target.closest("a");

  if (!link || !link.href.includes(".html")) return;

  e.preventDefault();

  const content = document.querySelector(".page-content");
  const destination = link.href;

  if (content) content.classList.add("fade-out");

  setTimeout(() => {
    window.location.href = destination;
  }, 300);
});
