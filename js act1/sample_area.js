function runActivity() {
  var shape = parseInt(
    prompt(
      "What do you want to solve for?\n1. The area of a triangle\n2. The area of a circle\n3. The area of a rectangle"
    )
  );

  if (shape === 1) {
    var base = parseFloat(prompt("Enter the base of the triangle:"));
    var height = parseFloat(prompt("Enter the height of the triangle:"));

    var area = 0.5 * base * height;
    console.log("The area of the triangle is: " + area);
  } else if (shape === 2) {
    var radius = parseFloat(prompt("Enter the radius of the circle:"));

    var area = 3.1416 * radius * radius;
    console.log("The area of the circle is: " + area);
  } else if (shape === 3) {
    var length = parseFloat(prompt("Enter the length of the rectangle:"));
    var width = parseFloat(prompt("Enter the width of the rectangle:"));

    var area = length * width;
    console.log("The area of the rectangle is: " + area);
  } else {
    console.log(
      "Error: Invalid shape selection. Please choose a number between 1 and 3."
    );
  }
}
