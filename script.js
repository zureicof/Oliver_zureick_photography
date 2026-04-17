const welcomeBtn = document.getElementById("welcomeBtn");
const welcomeMessage = document.getElementById("welcomeMessage");

if (welcomeBtn && welcomeMessage) {
  welcomeBtn.addEventListener("click", function () {
    welcomeMessage.textContent =
      "Welcome to my portfolio. This site highlights my sports photography, training content, and creative design work.";
  });
}

function filterSelection(category) {
  const items = document.getElementsByClassName("filter-item");

  if (category === "all") {
    category = "";
  }

  for (let i = 0; i < items.length; i++) {
    items[i].classList.remove("show");
    if (items[i].className.indexOf(category) > -1) {
      items[i].classList.add("show");
    }
  }
}

if (document.getElementsByClassName("filter-item").length > 0) {
  filterSelection("all");
}