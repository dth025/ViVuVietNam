function toggleMenu() {
  const menu = document.getElementById("mainMenu");
  menu.classList.toggle("active");
}

window.addEventListener("scroll", () => {
  document.querySelectorAll(".destination").forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add("visible");
    }
  });
});
