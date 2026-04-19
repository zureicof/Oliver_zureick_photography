$(document).ready(function () {
  // Add red heading style
  $("h2").addClass("highlight");

  // Home page intro
  $("#welcomeBtn").click(function () {
    $("#welcomeMessage").fadeToggle();
  });

  // Portfolio summary toggle
  $("#hidePortfolioBtn").click(function () {
    $("#portfolioSummary").toggle();
  });

  // Portfolio filtering
  $(".filter-btn").click(function () {
    const filter = $(this).attr("data-filter");

    if (filter === "all") {
      $(".filter-item").hide().fadeIn(400);
    } else {
      $(".filter-item").hide();
      $("." + filter).fadeIn(400);
    }
  });

  // Services page interaction 1
  $("#hideBtn").click(function () {
    $("#box").toggle();
  });

  // Services page interaction 2
  $("#slideBtn").click(function () {
    $("#serviceList").slideToggle();
  });

  // Services page interaction 3
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

  // Materialize gallery images
  if ($(".materialboxed").length) {
    $(".materialboxed").materialbox();
  }

  // Keep intro visible when page loads
  $("#welcomeMessage").show();
});