$(document).ready(function () {
  $("h2").addClass("highlight");

  if ($("#welcomeBtn").length) {
    $("#welcomeBtn").click(function () {
      $("#welcomeMessage").fadeToggle(250);
    });
  }

  if ($("#hidePortfolioBtn").length) {
    $("#hidePortfolioBtn").click(function () {
      $("#portfolioSummary").slideToggle(250);
    });
  }

  if ($(".filter-btn").length) {
    $(".filter-btn").click(function () {
      const filter = $(this).attr("data-filter");

      if (filter === "all") {
        $(".filter-item").hide().fadeIn(250);
      } else {
        $(".filter-item").hide();
        $("." + filter).fadeIn(250);
      }
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
        $("#output").text("Thanks " + name + ", I’d love to connect about your project.");
      }
    });
  }

  if ($(".materialboxed").length && typeof M !== "undefined") {
    $(".materialboxed").materialbox();
  }

  if ($("#welcomeMessage").length) {
    $("#welcomeMessage").show();
  }
});