function runActivity() {
  const fruit = [];
  const price = [];

  let input = 0;
  while (input >= 0) {
    let fruit_name = prompt("Give me the name of the fruit:");
    let price_entered = prompt("Give me the price of the fruit:");
    let fruit_price = Number(price_entered);

    if (fruit_price < 0 || price_entered == "" || fruit_price != fruit_price) {
      console.log("Error: Invalid input. Please use a positive number.");
      return;
    }
    fruit.push(fruit_name);
    price.push(fruit_price);

    let add_more = prompt("Would you like to add more fruits? (yes/no)");
    if (add_more == "yes") {
      input++;
    } else {
      input = -1;
    }
  }
  console.log("List of fruits and their prices:");
  for (let i = 0; i < fruit.length; i++) {
    console.log(fruit[i] + " | PHP " + price[i]);
  }

  let buy = prompt("What fruit do you want to buy?");
  let quantity_to_buy = prompt("How many pieces do you want to buy?");
  let quantity = Number(quantity_to_buy);

  let total_amount = 0;
  let selected_fruit = false;
  for (let i = 0; i < fruit.length; i++) {
    if (fruit[i] == buy) {
      selected_fruit = true;
      total_amount = price[i] * quantity;
      break;
    }
  }
  if (!selected_fruit) {
    console.log("Error: The fruit name wasn't entered.");
  } else if (quantity < 0 || quantity_to_buy == "" || quantity != quantity) {
    console.log("Error: Invalid input. Please use a positive number.");
  } else {
    console.log("The total amount of " + buy + ": PHP " + total_amount);
  }
}
