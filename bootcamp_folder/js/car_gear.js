// This program does the following:
// 1. Asks the user for a gear setting.
// 2. Adjusts speed accordingly.

function runActivity() {
  let gear = Number(prompt("What gear level would you like?"));
  switch (gear) {
    case 1:
      console.log("You car is going 20kph");
      alert("Your car is going very slow.");
      break;
    case 2:
      console.log("You car is goign 40kph");
      alert("Your car is going slow.");
      break;
    case 3:
      console.log("You car is going 60kph");
      alert("Your car is going at an average speed.");
      break;
    case 4:
      console.log("You car is goign 80kph");
      alert("Your car is going fast.");
      break;
    case 4:
      console.log("You car is goign 100kph");
      alert("Your car is overheating.");
      break;
    default:
      console.error("Not an appropriate gear setting!");
  }
}

// for cases, you can't add operators.
// everything that is under te break function, everything will not be executed.

// function runActivity() {
//   let gear = prompt("What gear level would you like?");
//   switch (gear) {
//     case A:
//       console.log("You car is going 20kph");
//       alert("Your car is going very slow.");
//       break;
//     case B:
//       console.log("You car is goign 40kph");
//       alert("Your car is going slow.");
//       break;
//     case C:
//       console.log("You car is going 60kph");
//       alert("Your car is going at an average speed.");
//       break;
//     case D:
//       console.log("You car is goign 80kph");
//       alert("Your car is going fast.");
//       break;
//     case E:
//       console.log("You car is goign 100kph");
//       alert("Your car is overheating.");
//       break;
//     default:
//       console.error("Not an appropriate gear setting!");
//   }
// }

// case sensitive pag strings like for example capital letter iyong nasa case pero ang inenter ay small letter eh mag eerror siya.

// pwede ding multiple like case ("A", "a"):
