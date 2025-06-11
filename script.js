// Mở/đóng menu trên mobile
function toggleMenu() {
  const menu = document.getElementById("mainMenu");
  menu.classList.toggle("active");
}

// Hiệu ứng cuộn hiện các phần tử
window.addEventListener("scroll", () => {
  document.querySelectorAll(".destination").forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add("visible");
    }
  });
});

// Tìm kiếm địa điểm
function searchDestinations() {
  const input = document.getElementById("searchInput").value.toLowerCase();
  const destinations = document.querySelectorAll(".destination");

  destinations.forEach(dest => {
    const title = dest.querySelector("h3").textContent.toLowerCase();
    const description = dest.querySelector("p").textContent.toLowerCase();

    if (title.includes(input) || description.includes(input)) {
      dest.style.display = "block";
    } else {
      dest.style.display = "none";
    }
  });

}

