// Mở/đóng menu trên mobile
function toggleMenu() {
    const menu = document.getElementById("mainMenu");
    menu.classList.toggle("active");
  }
  
  // Hiệu ứng cuộn hiện các phần tử
  function handleScrollAnimation() {
    const destinations = document.querySelectorAll(".destination");
    const triggerPoint = window.innerHeight - 100;
  
    destinations.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < triggerPoint) {
        el.classList.add("visible");
      } else {
        el.classList.remove("visible"); // Thêm để ẩn khi cuộn lên trên
      }
    });
  }
  
  // Đợi trang load xong và sự kiện scroll mới kích hoạt
  window.addEventListener("scroll", handleScrollAnimation);
  window.addEventListener("load", handleScrollAnimation);
  
  // Debounce giúp giới hạn số lần gọi hàm search khi người dùng gõ input nhanh
  function debounce(fn, delay) {
    let timeoutId;
    return function(...args) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => fn.apply(this, args), delay);
    };
  }
  
  // Tìm kiếm địa điểm
  function searchDestinations() {
    const input = document.getElementById("searchInput").value.toLowerCase();
    const destinations = document.querySelectorAll(".destination");
  
    destinations.forEach(dest => {
      const title = dest.querySelector("h3")?.textContent.toLowerCase() || "";
      const description = dest.querySelector("p")?.textContent.toLowerCase() || "";
  
      if (title.includes(input) || description.includes(input)) {
        dest.style.display = "block";
      } else {
        dest.style.display = "none";
      }
    });
  }
  
  // Gắn debounce cho tìm kiếm input
  const searchInput = document.getElementById("searchInput");
  if (searchInput) {
    searchInput.addEventListener("input", debounce(searchDestinations, 300));
  }
  function showSection(id) {
    // ẩn tất cả section
    document.querySelectorAll('main section').forEach(section => {
      section.style.display = 'none';
    });
  
    // hiển thị section được chọn
    const section = document.getElementById(id);
    if (section) section.style.display = 'block';
  
    // đóng menu trên mobile nếu có
    const menu = document.getElementById('mainMenu');
    menu.classList.remove('active');
  }
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
  
  // Hiển thị phần đầu tiên khi load trang luôn
  window.addEventListener("load", () => {
    document.querySelectorAll(".destination").forEach(el => el.classList.add("visible"));
  });
  
