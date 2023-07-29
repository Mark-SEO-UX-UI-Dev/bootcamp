$(document).ready(function () {
  $("#food-order").submit(function (x) {
    let item = $("#food-select").val();
    let amount = $("#food-amount").val();

    if (item != "") {
      let food_table = $("#food-table");
      let price_of_item = 0;

      switch (item) {
        case "burger":
          price_of_item = 60.0;
          break;
        case "steak":
          price_of_item = 80.0;
          break;
        case "fries":
          price_of_item = 50.0;
          break;
        case "salad":
          price_of_item = 70.0;
          break;
        case "sprite":
          price_of_item = 25.0;
          break;
        case "icecream":
          price_of_item = 25.0;
          break;
        default:
          break;
      }

      let total_price = price_of_item * amount;

      let order =
        "<tr><td>" +
        item +
        "</td><td>" +
        amount +
        "</td><td>" +
        "₱" +
        total_price +
        ".00" +
        "</td></tr>";

      food_table.append(order);
    } else {
      alert("ERROR: Specify your order!");
    }
    x.preventDefault();
  });

  // --------------------------------------
  // --------------------------------------
  // #2:
  // --------------------------------------
  //   $("#get_all").click(function () {
  //     $("input:checkbox").not(this).prop("checked", this.checked);
  //   });

  $("#get_all").change(function () {
    if (this.checked) {
      $(".sauce").prop("checked", true);
      //   alert("check");
    } else {
      $(".sauce").prop("checked", false);
    }
  });

  $(".sauce").change(function () {
    if (!this.checked) {
      $(".sauce, #get_all").prop("checked", false);
      //   alert("check");
    } else {
      $(".sauce").prop("checked", true);
    }
  });
});
