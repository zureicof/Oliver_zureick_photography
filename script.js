$(document).ready(function () {
  $("h2").addClass("highlight");

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

  if ($(".materialboxed").length && typeof M !== "undefined") {
    $(".materialboxed").materialbox();
  }
});