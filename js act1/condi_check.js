// 12
// function runActivity() {
//   let x = 4;
//   let z = 3;
//   let y = 0;
//   if (x > 2 && x < 5) {
//     if (x <= 4 || y != 0 || x + z > 9 || z == 4) {
//       if ((x > 4 && y < 2) || z == 4) {
//         x += 1;
//         y += 1;
//         z += 1;
//       }
//       x += 1;
//       y += 1;
//       z += 1;
//     }
//     x += 1;
//     z += 1;
//   }
//   console.log(x + z + y);
// }

// 15
// function runActivity() {
//   let x = 4;
//   let z = 3;
//   let y = 0;
//   if (x > 2 && x < 5) {
//     x += 1;
//     z += 1;
//   }

//   if (x <= 4 || y != 0 || x + z > 9 || z == 4) {
//     x += 1;
//     y += 1;
//     z += 1;
//   }

//   if ((x > 4 && y < 2) || z == 4) {
//     x += 1;
//     y += 1;
//     z += 1;
//   }
//   console.log(x + z + y);
// }

// ANS: 9
// function runActivity() {
//   let x = 3;
//   let z = 3;
//   let y = 0;
//   if (x > 2 && x < 5) {
//     y += 1;
//     if (x <= 1 || z != 4) {
//       y += 1;
//       if (x != 3) {
//         y += 1;
//       } else {
//         y += 5;
//       }
//     } else {
//       y -= 1;
//     }
//   } else {
//     y += 1;
//   }
//   if (y > 6) {
//     y += 1;
//   } else {
//     y = 0;
//   }
//   y += 1;
//   console.log(y);
// }

// ANSWER: 1
function runActivity() {
  let x = 3;
  let z = 3;
  let y = 0;
  if (x < 4 || z < 8) {
    y += 1;
    if (x > 5) {
      y += 1;
    } else {
      y -= 1;
    }
  } else {
    y += 1;
  }
  y += 1;
  console.log(y);
}

// ANSWER: 3
// function runActivity() {
//   let x = 3;
//   let y = 0;
//   if (x < 4) {
//     y += 1;
//     if (x < 5) {
//       y += 1;
//     }
//   }
//   y += 1;
//   console.log(y);
// }
