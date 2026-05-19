$(document).ready(function () {
  $("h2").addClass("highlight");

  if ($("#welcomeBtn").length) {
    $("#welcomeBtn").click(function () {
      $("#welcomeMessage").fadeToggle(250);
    });
  }

  if ($("#hidePortfolioBtn").length) {
    $("#hidePortfolioBtn").click(function () {
      $("#portfolioSummary").fadeToggle(250);
    });
  }

  if ($(".filter-btn").length) {
    $(".filter-btn").click(function () {
      const filter = $(this).attr("data-filter");

      $(".filter-btn").removeClass("active-filter");
      $(this).addClass("active-filter");

      if (filter === "all") {
        $(".filter-item").hide().fadeIn(300);
      } else {
        $(".filter-item").hide();
        $("." + filter).fadeIn(300);
      }
    });

    $('.filter-btn[data-filter="all"]').trigger("click");
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
        $("#output").text(`Thanks, ${name}. I’d be glad to connect about a project. Email me at zureicof@miamioh.edu.`);
      }
    });
  }

  if ($("#welcomeMessage").length) {
    $("#welcomeMessage").show();
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
