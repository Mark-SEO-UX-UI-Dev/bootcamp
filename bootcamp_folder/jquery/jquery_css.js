$(document).ready(function () {
  $("#change_color").click(function () {
    $("#para").css("color", "yellow");
  });

  $("#text_larger").click(function () {
    let f_size = Number($("#para").css("font-size").replace("px", ""));
    f_size++;
    $("#para").css("font-size", f_size);
  });
});

// $("body, #para")
//       .css("color", prompt("What color?"))
//       .css("background-color", "pink");

// $(document).ready(function () {
//   $("#change_color").click(function () {
//     console.log($("#para").css("color"));
//     $("#para").css("color", "yellow");
//   });
// });
