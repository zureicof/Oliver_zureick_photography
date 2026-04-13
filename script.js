const welcomeBtn = document.getElementById("welcomeBtn");
const welcomeMessage = document.getElementById("welcomeMessage");

if (welcomeBtn && welcomeMessage) {
  welcomeBtn.addEventListener("click", function () {
    welcomeMessage.textContent =
      "Welcome to my site. This is where I show my sports photography, creative work, and media projects.";
  });
}

const contactBtn = document.getElementById("contactBtn");
const contactMessage = document.getElementById("contactMessage");

if (contactBtn && contactMessage) {
  contactBtn.addEventListener("click", function () {
    contactMessage.textContent =
      "Booking is open for sports events, team content, athlete shoots, and creative design projects.";
  });
}

function filterSelection(category) {
  const items = document.getElementsByClassName("filter-item");

  for (let i = 0; i < items.length; i++) {
    items[i].classList.remove("show");

    if (category === "all" || items[i].classList.contains(category)) {
      items[i].classList.add("show");
    }
  }
}

document.addEventListener("DOMContentLoaded", function () {
  if (document.querySelector(".filter-item")) {
    filterSelection("all");
  }
});