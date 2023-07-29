// --------------------------------
// #1:
// --------------------------------
$("#checkup").submit(function (x) {});

// --------------------------------
// #2:
// --------------------------------
$("#oil_change").change(function () {});

// --------------------------------
// #3:
// --------------------------------
let x = $("p").text();

// --------------------------------
// #4:
// --------------------------------
let x = $("#debit_transaction").html();
let newRow = "<tr><td>4/5/2021</td><td>Mark Rivers</td></tr>";
$("#debit_transaction").html(x + new_row);

// --------------------------------
// #5:
// --------------------------------
$(document).ready(function () {});

// --------------------------------
// #6:
// --------------------------------
let street = $("#street").val();
let barangay = $("#barangay").val();
let town = $("#town").prop(checked);
let province = $("#province").val();

// --------------------------------
// #7:
// --------------------------------
$("img").click(function () {
  $(this).width("50%");
});

// --------------------------------
// #8:
// --------------------------------
$("li").mouseenter(function () {
  $(this).css("color", "red");
});

$("li").mouseleave(function () {
  $(this).css("color", "blue");
});
// --------------------------------
// #9:
// --------------------------------
let timer = 5000;

setinterval(run, timer);

function run() {
  $(document).ready(function () {
    console.log("alright");
    timer += 1000;
    setTimeout(run, timer);
  });
}

// --------------------------------
// #10:
// --------------------------------
setTimeout(run, 3000);

function run() {
  $(".red_team").css("color", "red");
  $(".blue_team").css("color", "blue");
  $(".team").css("font-size", "20px");
}
