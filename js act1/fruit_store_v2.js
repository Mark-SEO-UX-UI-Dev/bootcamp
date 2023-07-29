function runActivity() {
  let store_name = prompt("Give your store a name:");
  alert("Your store name is: " + store_name);

  const store_items = [];

  function addItem() {
    let item_name = prompt("Please enter the item name to sell:");
    let item_price = Number(
      prompt("Please enter the price of the item to sell:")
    );

    if (!(item_price >= 0) || item_price == null || item_price == "") {
      console.error("Error: Invalid price entered.");
      alert(
        "Error: Invalid price entered. Please avoid using 0 or negative numbers."
      );
      return;
    }

    store_items[item_name] = {
      price: item_price,
      stock: 0,
    };

    console.log(
      item_name +
        " added as item for sale. Each " +
        item_name +
        " sells for " +
        item_price +
        ". Stock set to 0."
    );
  }

  function restock() {
    let item_name = prompt("Enter the name of the item to restock:");
    let stock_to_add = Number(prompt("Enter the quantity of stock to add:"));

    if (!(stock_to_add >= 0) || stock_to_add == null || stock_to_add == "") {
      console.error("Error: Invalid quantity entered.");
      alert("Error: Invalid quantity entered.");
      return;
    }

    if (store_items[item_name] == undefined) {
      console.error("Error: Invalid item name.");
      alert("Error: Invalid item name.");
      return;
    }

    store_items[item_name].stock += stock_to_add;
    console.log(
      stock_to_add +
        " stock has been added to " +
        item_name +
        ". New stock: " +
        store_items[item_name].stock
    );
  }

  function checkPrice() {
    let item_name = prompt("Enter the name of the item to check the price:");
    let item_amount = Number(prompt("Enter the quantity of the item:"));

    if (store_items[item_name] == undefined) {
      console.error("Error: Invalid item name.");
      alert("Error: Invalid item name.");
      return;
    }

    if (!(item_amount >= 0) || item_amount == null || item_amount == "") {
      console.error("Error: Invalid quantity entered.");
      alert("Error: Invalid quantity entered.");
      return;
    }

    let total_price = store_items[item_name].price * item_amount;
    console.log(item_amount + " of " + item_name + " is worth " + total_price);
  }

  function sell() {
    let item_name = prompt("Enter the name of the item to sell:");
    let amount_to_buy = Number(prompt("Enter the quantity to buy:"));

    if (store_items[item_name] == undefined) {
      console.error("Error: Invalid item name.");
      alert("Error: Invalid item name.");
      return;
    }

    if (!(amount_to_buy >= 0) || amount_to_buy == null || amount_to_buy == "") {
      console.error("Error: Invalid quantity entered.");
      alert("Error: Invalid quantity entered.");
      return;
    }

    if (amount_to_buy > store_items[item_name].stock) {
      console.error("Error: Insufficient stock.");
      alert("Error: Insufficient stock.");
      return;
    }

    let total_price = store_items[item_name].price * amount_to_buy;
    store_items[item_name].stock -= amount_to_buy;
    console.log(
      "Sold " +
        amount_to_buy +
        " " +
        item_name +
        "(s) for a total price of " +
        total_price +
        ". New stock: " +
        store_items[item_name].stock
    );
  }

  let choice = 0;
  while (choice !== 5) {
    choice = Number(
      prompt("(1) Add new item (2) Restock (3) Check price (4) Sell (5) Stop")
    );

    switch (choice) {
      case 1:
        addItem();
        break;
      case 2:
        restock();
        break;
      case 3:
        checkPrice();
        break;
      case 4:
        sell();
        break;
      case 5:
        break;
      default:
        console.error("Error: Invalid choice.");
        alert("Error: Invalid choice.");
        break;
    }
  }
}
