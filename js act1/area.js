function runActivity() {
  let shape = Number(
    prompt(
      "What do you want to solve for? 1. The area of a triangle, 2. The area of a circle, 3. The area of a rectangle"
    )
  );

  if (shape === 1) {
    let base = Number(prompt("Enter the base of the triangle: "));
    let height = Number(prompt("Enter the height of the triangle: "));

    let area = 0.5 * (base * height);
    console.log("The area of the triangle is: " + area);
  } else if (shape === 2) {
    let radius = Number(prompt("Enter the radius of the circle: "));

    let area = 3.1416 * (radius * radius);
    console.log("The area of the circle is: " + area);
  } else if (shape === 3) {
    let length = Number(prompt("Enter the length of the rectangle: "));
    let width = Number(prompt("Enter the width of the rectangle: "));

    let area = length * width;
    console.log("The area of the rectangle is: " + area);
  } else {
    console.error(
      "Error: Incorrect shape selection. Please choose a number between 1 and 3."
    );
    alert(
      "Error: Incorrect shape selection. Please choose a number between 1 and 3."
    );
  }
}
