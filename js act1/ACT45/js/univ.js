/*!
 * Start Bootstrap - Blog Home v5.0.8 (https://startbootstrap.com/template/blog-home)
 * Copyright 2013-2022 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-blog-home/blob/master/LICENSE)
 */
// This file is intentionally blank
// Use this file to add JavaScript to your project

// ---------------------------------------------------------------
//  #2:
//---------------------------------------------------------------
$(document).ready(function () {
  $("#darkMode").click(function () {
    $(".dark-mode").removeClass("bg-white text-dark");
    $(".dark-mode").toggleClass("bg-dark text-white");
    $("nav").toggleClass("navbar-dark");
    $("header").toggleClass("bg-dark");
    $(this).toggleClass("text-dark");
    $(this).toggleClass("btn-dark");
    $(this).toggleClass("btn-light");
  });
});
//---------------------------------------------------------------
// $(document).ready(function () {
//   $("#darkMode").click(function () {
//     $("body").toggleClass("dark-mode");
//     $(".navbar").toggleClass("dark-mode");
//     $(".card").toggleClass("dark-mode");
//     $("body").find("*:not(a)").toggleClass("text-light");
//     $(this).toggleClass("bg-dark");
//     $("footer").toggleClass("dark-mode");
//   });
// });

// ---------------------------------------------------------------
//  #1:
// ---------------------------------------------------------------
// $(document).ready(function () {
//   $("#studentButton").click(function () {
//     let curr_enrollees = Number($("#student-count").html()) + 1;
//     $("#student-count").text(curr_enrollees);
//   });
// });

// -------
// $(document).ready(function () {
//   $("#studentButton").click(function () {
//     let curr_enrollees = Number($("#student-count").text()) + 1;
//     $("#student-count").text(curr_enrollees);
//   });
// });
// ----------
$(document).ready(function () {
  $("#studentButton").click(function () {
    let student_count = Number($("#student-count").text());
    student_count++;
    $("#student-count").text(student_count);
  });
});

// ---------------------------------------------------------------
//  #1:
// ---------------------------------------------------------------

$(document).ready(function () {
  $("#studentButton").click(function () {
    let curr_enrollees = $("#student-count").text() + 1;
    let new_enrollees = "<h1><span>" + "</span></h1>";
    $("#student-count").html(curr_enrollees + new_enrollees);
  });
});
