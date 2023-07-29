let user_name = "";
let operation = "+";

function changeOp(op){
    operation = op;
    $("#operation").text(operation);
}

$(document).ready(function () {
    setInterval(calculate, 250);

    function calculate() {
        let first_num = Number($("#first_num").val());
        let second_num = Number($("#second_num").val());
        let result;
    
        if (operation == "+") {
            result = first_num + second_num;
        } else if (operation == "-") {
            result = first_num - second_num;
        } else if (operation == "*") {
            result = first_num * second_num;
        } else if (operation == "/") {
            result = first_num / second_num;
        }

        $("#result").text(result);
    }

  setTimeout(showAd, 2000);

  $("#ad").hide();

  function showAd() {
    $("#ad").show();
  }

//   you can have multiple interval in 1 prgogram but this will eat up your computer's meomry
  setInterval(getName, 500);

  function getName()
  user_name = $("#name_entry").val();
  $("#name").text(user_name);
});
