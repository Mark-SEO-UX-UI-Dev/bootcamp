function runActivity() {
  // const num = [];
  // for (let i = 0; i <= 100; i++) {
  //     num[1] = Number(prompt("Give me a number"));
  // }
  // console.log(fishes)
  // accessing full array no nned to use brackets
  // const fishes = ["bangus", "tilapia", "tuna", "salmon", "shark"];
  // console.log(fishes.length);
  // console.log(fishes.sort());
  // let name = "Mark Tan";
  // console.log(name.length);
  // console.log(fishes[1].length);
  // console.log(fishes.reverse());
  // console.log(fishes[2]);
  // console.log(fishes[0]);
  // ------
  // fishes= fishes.sort();

  // ---------
  // To change an element, specify the name of an element
  // you can do it 1-by-1. Can't change everything at once.
  // fishes(0) = "milkfish"
  // ---------
  // ------------------------------
  //   FOR Loop
  // ------------------------------
  // const fishes = ["bangus", "tilapia", "tuna", "salmon", "shark"];
  // // to add an array in the items in the array
  // fishes.push("yellowfin");
  // // to add in the first index o index 0 use .unshift
  // fishes.unshift("yellowfish");
  // // splice method to add in the middle but you need to indicate the index
  // for (let i = 0; i < fishes.length; i++) {
  //     console.log("Fish #" + i + ": " + fishes[i]);
  //     if (fishes[i] == "shark");
  //         alert("DANGER! SHARK WARNING");
  // }

  // ------------------------------
  //   FOR Loop #2: Adding item in array
  // ------------------------------
  // const names = [];
  // for (let i = 0; i < 5; i++) {
  //     let name = prompt("Give me a name.");
  //     names.push(name);
  // }
  // console.log(names);
  // console.log(names[0]);
  // ------------------------------
  //   FOR Loop #3: Infinite WHILE Loop
  // ------------------------------
  const numbers = [];
  let x = 0;

  while (x == false) {
    let number = Number(prompt("Give me a number"));
    numbers.push(number);
    let choice = Number(
      prompt("Would you like to add another number? 0: No, Any key: Yes")
    );
    if (choice == 0) {
      x = true;
    }
  }

  console.log(numbers);
}
