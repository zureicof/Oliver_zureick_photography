$(document).ready(function () {
  $("h2").addClass("highlight");

  if ($("#welcomeBtn").length) {
    $("#welcomeBtn").click(function () {
      $("#welcomeMessage").fadeToggle();
    });
  }

  if ($("#hidePortfolioBtn").length) {
    $("#hidePortfolioBtn").click(function () {
      $("#portfolioSummary").toggle();
    });
  }

  if ($(".filter-btn").length) {
    $(".filter-btn").click(function () {
      const filter = $(this).attr("data-filter");

      if (filter === "all") {
        $(".filter-item").hide().fadeIn(400);
      } else {
        $(".filter-item").hide();
        $("." + filter).fadeIn(400);
      }
    });
  }

  if ($("#hideBtn").length) {
    $("#hideBtn").click(function () {
      $("#box").toggle();
    });
  }

  if ($("#slideBtn").length) {
    $("#slideBtn").click(function () {
      $("#serviceList").slideToggle();
    });
  }

  if ($("#submitBtn").length) {
    $("#submitBtn").click(function () {
      const name = $("#nameInput").val();

      if (name.trim() === "") {
        $("#output").text("Please enter your name.");
      } else {
        $("#output").text(
          "Thanks for reaching out, " +
            name +
            ". I would love to connect about your project."
        );
      }
    });
  }

  if ($("#welcomeMessage").length) {
    $("#welcomeMessage").show();
  }
});