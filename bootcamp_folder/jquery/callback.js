function run() {
  function getSum(x, y, z) {
    let sum = x + y;
    z(sum);
    // return x + y;
  }

  function print(x) {
    console.log(x);
    alert(x);
  }

  function displayMessage(x) {
    $(document).ready(function () {
      $("#message").text(x);
    });
  }

  let sum = getSum(6, 7, print);
  //   let sum = getSum(6, 7, displayMessage);
  //   print(sum);
}
