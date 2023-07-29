function runActivity() {
  let counter = Number(prompt("Please enter a number from 2 to 20:"));
  if (counter < 2 || counter > 20) {
    alert(
      "Error: You typed in an incorrect number. Please use numbers ranging from 2 to 20."
    );
    return;
  }
  let even = 0;
  let odd = 0;
  let positive = 0;
  let negative = 0;
  let integer = 0;
  let decimal = 0;
  for (let i = 0; i < counter; i++) {
    let number = Number(
      prompt("#" + (i + 1) + ". " + "Please enter a number:")
    );
    if (number % 1 === 0) {
      integer++;
    } else {
      decimal++;
    }
    if (number % 2 === 0) {
      even++;
    } else {
      odd++;
    }
    if (number > 0) {
      positive++;
    } else if (number < 0) {
      negative++;
    }
  }
  console.log("Number count: " + counter);
  console.log("Even numbers: " + even);
  console.log("Odd numbers: " + odd);
  console.log("Positive numbers: " + positive);
  console.log("Negative numbers: " + negative);
  console.log("Integers: " + integer);
  console.log("Decimal numbers: " + decimal);
}
