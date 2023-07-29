// This program does the following:
// 1. Determine whether a numer is at least a dozen.
// 2. Determine how many dozens that number is.
// 3. Determine if it is exact to the dozen.
// Author: Daiben Angelo Sanchez

function runActivity() {
  let num = Number(prompt("Give me a number."));
  if (num >= 12) {
    //   "500" === 500 on how to use triple equal sign
    console.log(num + " is at least a dozen!");
    let dozens = num / 12;
    console.log("That is " + dozens + "dozen(s)!");
    if (num % 12 == 0) {
      console.log("That is an exact dozen(s)!");
      //   if() {
      // } else {
      // }
      //          if() {
      //              } else {
      //                  }
      //   we can use nested else if or if statements inside a partent IF
    }
  } else {
    console.log(num + " is NOT a dozen!");
  }
}
// if {
//  if {
// }
// }
// to avoid this use loops

// function runActivity() {
// let x = true;
// let x = 5 > 10;
// if (x) {
//   console.log("This is true!");
// } else {
//   console.log("This is false!");
// }
// }
