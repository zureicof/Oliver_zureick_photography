document.getElementById("welcomeBtn").onclick = function () {
  document.getElementById("welcomeMessage").innerHTML =
    "Welcome to Oliver Zureick Photography. Check out my work on the portfolio page.";
};

document.getElementById("contactBtn").onclick = function () {
  document.getElementById("contactMessage").innerHTML =
    "I am available for sports photography, graphics, and event coverage.";
};

function filterSelection(category) {
  let items = document.getElementsByClassName("filter-item");

  for (let i = 0; i < items.length; i++) {
    if (category === "all" || items[i].className.indexOf(category) > -1) {
      items[i].style.display = "block";
    } else {
      items[i].style.display = "none";
    }
  }
}