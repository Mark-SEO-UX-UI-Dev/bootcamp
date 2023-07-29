function runActivity() {
  let answer = "chicken";
  let x = false;

  while (x == false) {
    let guess = prompt("try to guess my animal!");
    if (guess == answer) {
      console.log("You get it: The answer is " + answer);
      x = true;
    } else {
      console.log(guess + " is not my animal!");
    }
  }
}
