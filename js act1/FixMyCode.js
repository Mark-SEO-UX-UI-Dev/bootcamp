// // // -----------------------------
// // // -----------------------------
// // // #6; Working code but need to recode it:
// // // -----------------------------
// var weather = prompt("Weather? (sunny, cloudy, rainy, stormy");
// if (weather == "sunny") {
//   console.log("You selected sunny");
// } else if (weather == "sunny") {
//   console.log("You selected cloudy");
// } else if (weather == "sunny") {
//   console.log("You selected rainy");
// } else if (weather == "sunny") {
//   console.log("You selected stormy");
// } else {
//   console.log("None of the choices");
// }

// // // -----------------------------
// // // -----------------------------
// // // #5; Error code:
// // // -----------------------------
// function runActivity() {
//   let choice = Number(prompt("Month or day? (1 or 2"));
//   let num;
//   if (choice == 1 || choice == 2) {
//     let num = Number(prompt("Give a number"));
//   } else {
//     console.log("Wrong choice!");
//   }

//   if (choice == 1) {
//     switch (num) {
//       case 1:
//         console.log("January");
//         break;
//       case 2:
//         console.log("February");
//         break;
//       case 3:
//         console.log("March");
//         break;
//       case 4:
//         console.log("April");
//         break;
//       case 5:
//         console.log("May");
//         break;
//       case 6:
//         console.log("June");
//         break;
//       case 7:
//         console.log("July");
//         break;
//       case 8:
//         console.log("August");
//         break;
//       case 9:
//         console.log("September");
//         break;
//       case 10:
//         console.log("October");
//         break;
//       case 11:
//         console.log("November");
//         break;
//       case 12:
//         console.log("December");
//         break;
//       default:
//         console.log("Not a month!");
//         break;
//     }
//   } else if (choice == 2) {
//     switch (num) {
//       case 1:
//         console.log("Monday");
//         break;
//       case 2:
//         console.log("Tuesday");
//         break;
//       case 3:
//         console.log("Wednesday");
//         break;
//       case 4:
//         console.log("Thursday");
//         break;
//       case 5:
//         console.log("Friday");
//         break;
//       case 6:
//         console.log("Saturday");
//         break;
//       case 7:
//         console.log("Sunday");
//         break;
//       default:
//         console.log("Not a day!");
//         break;
//     }
//   }
// }

// // // -----------------------------
// // // -----------------------------
// // // #1; Error code:
// // // -----------------------------
// function runActivity() {
//   var song_list = [
//     "Smoke Signals",
//     "Motion Sickness",
//     "Funeral",
//     "Demi Moore",
//     "Scott Street",
//     "Killer",
//     "Georgia",
//     "Chelsea",
//     "Would you Rather",
//   ];

//   var song_length = [
//     "524",
//     "329",
//     "352",
//     "318",
//     "505",
//     "309",
//     "407",
//     "442",
//     "319",
//     "657",
//     "653",
//   ];
// }

// for (let i = 0; i < song_list; i++) {
//   console.log(
//     song_list[i] +
//       " - " +
//       song_length[i].charAt(0) +
//       ":" +
//       song_length[i].charAt(1) +
//       song_length[i].charAt(2)
//   );
// }
// // // -----------------------------
// // // #1: Replace it with:
// // // -----------------------------
// function runActivity() {
//   var song_list = [
//     "Smoke Signals",
//     "Motion Sickness",
//     "Funeral",
//     "Demi Moore",
//     "Scott Street",
//     "Killer",
//     "Georgia",
//     "Chelsea",
//     "Would you Rather",
//   ];

//   var song_length = [
//     "524",
//     "329",
//     "352",
//     "318",
//     "505",
//     "309",
//     "407",
//     "442",
//     "319",
//     "657",
//     "653",
//   ];
// }

// for (let i = 0; i < song_list.length; i++) {
//   console.log(
//     song_list[i] +
//       " - " +
//       song_length[i].charAt(0) +
//       ":" +
//       song_length[i].charAt(1) +
//       song_length[i].charAt(2)
//   );
// }

// // -----------------------------
// // -----------------------------
// // #1; Error code:
// // -----------------------------
// function runActivity() {
//   let i = 0;
//   while (i == 0) {
//     let a = Number(prompt("What is a?"));
//     let b = Number(prompt("What is b?"));
//     let c = Number(prompt("What is c?"));
//     let result = (0 - b + (b ** 2 - 4 * (a * c))) / 2;
//     console.log(result);
//     let end = prompt("Do you want to continue? n to stop");
//     if (end == "n") {
//       break;
//     }
//   }
// }

// // -----------------------------
// // -----------------------------
// // #1; Error code:
// // -----------------------------
// function runActivity() {
//   var last_names = [];
//   var first_names = [];
//   var grades = [];

//   last_names.push("Aurora");
//   last_names.push("Barker");
//   last_names.push("Campbell");
//   last_names.push("Danao");
//   first_names.push("Emily");
//   first_names.push("Fantina");
//   first_names.push("Gabe");
//   first_names.push("Harold");
//   grades.push(90);
//   grades.push(85.5);
//   grades.push(70);
//   grades.push(95);

//   function getGrade(fn, ln) {
//     for (let i = first_names.length - 1; i >= 0; i--) {
//       if (first_names[0] == fn && last_names[0] == ln) {
//         console.log(grades[i]);
//       }
//     }
//   }

//   getGrade("Emily", "Aurora");
// }
// // -----------------------------
// // #1: Replace it with:
// // -----------------------------
// var last_names = [];
// var first_names = [];
// var grades = [];

// last_names.push("Aurora");
// last_names.push("Barker");
// last_names.push("Campbell");
// last_names.push("Danao");
// first_names.push("Emily");
// first_names.push("Fantina");
// first_names.push("Gabe");
// first_names.push("Harold");
// grades.push(90);
// grades.push(85.5);
// grades.push(70);
// grades.push(95);

// function getGrade(fn, ln) {
//   for (let i = first_names.length - 1; i >= 0; i--) {
//     if (first_names[i] == fn && last_names[i] == ln) {
//       console.log(grades[i]);
//     }
//   }
// }

// getGrade("Emily", "Aurora");

// -----------------------------
// -----------------------------
// #1; Error code:
// -----------------------------
// function getBMI() {
//   let bmi = w / (h * h);
//   if (bmi > 25) {
//     return "overweight";
//   } else if (bmi < 18.5) {
//     return "underweight";
//   } else {
//     return "normal";
//   }
// }
// let weight = Number(prompt("Weight?"));
// let height = Number(prompt("Height?"));
// console.log(getBMI(weight, height));
// -----------------------------
// #1: Replace it with:
// -----------------------------
// function getBMI(w, h) {
// let bmi = w / (h * h);
//   if (bmi > 25) {
//     return "overweight";
//   } else if (bmi < 18.5) {
//     return "underweight";
//   } else {
//     return "normal";
//   }
// }

// let weight = Number(prompt("Weight?"));
// let height = Number(prompt("Height?"));
// console.log(getBMI(weight, height));
