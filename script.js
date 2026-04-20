$(document).ready(function () {
  $("h2").addClass("highlight");

  if ($("#welcomeBtn").length) {
    $("#welcomeBtn").click(function () {
      $("#welcomeMessage").fadeToggle(250);
    });
  }

  if ($("#hideBtn").length) {
    $("#hideBtn").click(function () {
      $("#box").fadeToggle(250);
    });
  }

  if ($("#slideBtn").length) {
    $("#slideBtn").click(function () {
      $("#serviceList").slideToggle(250);
    });
  }

  if ($("#submitBtn").length) {
    $("#submitBtn").click(function () {
      const name = $("#nameInput").val().trim();

      if (name === "") {
        $("#output").text("Please enter your name.");
      } else {
        $("#output").text(`Thanks, ${name}. I’d be glad to connect about a project. You can reach me at zureicof@miamioh.edu.`);
      }
    });
  }

  const revealItems = document.querySelectorAll(".reveal");

  if (revealItems.length) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.12 }
    );

    revealItems.forEach((item) => observer.observe(item));
  }
});