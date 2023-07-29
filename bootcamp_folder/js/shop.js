function runActivity() {
  let cash = 1000;
  let choice = Number(
    prompt("Would you like to buy an AquaFlask for 600 pesos? 0: Yes, 1: No")
  );
  if (choice == 0 || cash >= 600) {
    console.log("Thank youo for buying my Aquaflask!");
    cash -= 600;
  } else {
    console.log("Aww too bad.");
  }

  choice = Number(
    prompt(
      "Would you like to buy a chicken joy buckett meal for 500 pesos? 0: yes, 1: No"
    )
  );
  if (choice == 0 && cash >= 500) {
    console.log("Bida ang saya!");
    cash -= 500;
  } else {
    console.log("Salbahe.");
  }

  console.log("You have " + cash + " left:");
}

// function runActivity() {
// let cash = 1000;
// if (!(cash == 1000) && cash < 5000) {
//   console.log("This is true");
// } else {
//   console.log("This is false");
// }
// }
