function runActivity() {
  let choice = Number(
    prompt(
      "What do you want to solve for? 1. The area of a triangle, 2. The area of a circle, 3. The area of a rectangle"
    )
  );
  let area;
  let valid_choice = true;
  if (choice == 1) {
    let base = Number(prompt("Enter the base of the triangle: "));
    let height = Number(prompt("Enter the height of the triangle: "));
    area = 0.5 * (base * height);
  } else if (choice == 2) {
    let radius = Number(prompt("Enter the radius of the circle: "));
    area = 3.1416 * (radius * radius);
  } else if (choice == 3) {
    let length = Number(prompt("Enter the length of the rectangle: "));
    let width = Number(prompt("Enter the width of the rectangle: "));
    area = length * width;
  } else {
    console.error(
      "Error: Incorrect shape selection. Please choose a number between 1 and 3."
    );
  }
}

// let area;
// let result = "The result of the shape is: ";
// switch (choice) {
//   case 1:
//     let base = Number(prompt("Enter the base of the triangle: "));
//     let height = Number(prompt("Enter the height of the triangle: "));
//     area = 0.5 * (base * height);
//     console.log(result + area);
//     break;
//   case 2:
//     let radius = Number(prompt("Enter the radius of the circle: "));
//     area = 3.1416 * (radius * radius);
//     console.log(result + area);
//     break;
//   case 3:
//     let length = Number(prompt("Enter the length of the rectangle: "));
//     let width = Number(prompt("Enter the width of the rectangle: "));
//     area = length * width;
//     console.log(result + area);
//     break;
//   default:
//     console.error(
//       "Error: Incorrect shape selection. Please choose a number between 1 and 3."
//     );
//     alert(
//       "Error: Incorrect shape selection. Please choose a number between 1 and 3."
//     );
// }

//   let valid_choice = true; and no cnsole.log anymore on each shape.

//   let area;
//   switch (choice) {
//     case 1:
//       let base = Number(prompt("Enter the base of the triangle: "));
//       let height = Number(prompt("Enter the height of the triangle: "));
//       area = 0.5 * (base * height);
//       console.log("The area of the triangle is: " + area);
//       break;
//     case 2:
//       let radius = Number(prompt("Enter the radius of the circle: "));
//       area = 3.1416 * (radius * radius);
//       console.log("The area of the circle is: " + area);
//       break;
//     case 3:
//       let length = Number(prompt("Enter the length of the rectangle: "));
//       let width = Number(prompt("Enter the width of the rectangle: "));
//       area = length * width;
//       console.log("The area of the rectangle is: " + area);
//       break;
//     default:
//       console.error(
//         "Error: Incorrect shape selection. Please choose a number between 1 and 3."
//       );
//       alert(
//         "Error: Incorrect shape selection. Please choose a number between 1 and 3."
//       );
//   }
