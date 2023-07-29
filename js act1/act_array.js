function runActivity() {
  // ---------------------------------------
  // Utilizing the array, output "Suspect is wanted!" if the suspect is in the wanted list.
  const suspects = [
    "Alfred",
    "Bonnie",
    "Craig",
    "Danny",
    "Eric",
    "Flint",
    "Gayle",
    "Heidi",
    "Isabel",
    "Jacobs",
  ];
  const wanted = ["Alfred", "Danny", "Jacobs"];

  for (let i = 0; i < suspects.length; i++) {
    console.log("Checking wanted list for " + suspects[i] + "...");
    for (let j = 0; j < wanted.length; j++) {
      if (suspects[i] == wanted[j]) {
        console.log("Suspect is wanted!");
        break;
      }
    }
  }

  //   // ---------------------------------------
  //   I want to display the following via console
  // horse
  // alpaca
  // lemur
  // crocodile
  // What line of code would I need to  replace the blank with?
  //   const animals = ["horse", "alpaca", "lemur", "crocodile"];
  //   for (let i = 0; i < animals.length; i++) {
  //     console.log(animals[i]);
  //   }

  //   // ---------------------------------------
  //   //   Utilizing the array, output all of the animal's name with the format I want to pet [animal's name] the [animal's species]!
  //   const animals = [
  //     "alpaca",
  //     "badger",
  //     "caribou",
  //     "dolphin",
  //     "emu",
  //     "ferret",
  //     "gnu",
  //     "hedgehog",
  //     "iguana",
  //     "jackal",
  //   ];
  //   const names = [
  //     "Alex",
  //     "Barth",
  //     "Cammie",
  //     "Dyno",
  //     "Eri",
  //     "Felix",
  //     "Gina",
  //     "Hilbert",
  //     "Irene",
  //     "Josephi",
  //   ];

  //   for (i = 0; i < animals.length; i++) {
  //     console.log("I want to pet " + names[i] + " the " + animals[i]);
  //   }

  // ---------------------------------------
  // Utilizing the array, output all of the animal's species with the format I want to pet a [animal]!
  //   const animal = [
  //     "alpaca",
  //     "badger",
  //     "caribou",
  //     "dolphin",
  //     "emu",
  //     "ferret",
  //     "gnu",
  //     "hedgehog",
  //     "iguana",
  //     "jackal",
  //   ];
  //   for (i = 0; i < animal.length; i++) {
  //     console.log("I want to pet a " + animal[i]);
  //   }
  // ---------------------------------------
  // Utilizing the array, show iguana via the console.
  //   const animals = [
  //     "alpaca",
  //     "badger",
  //     "caribou",
  //     "dolphin",
  //     "emu",
  //     "ferret",
  //     "gnu",
  //     "hedgehog",
  //     "iguana",
  //     "jackal",
  //   ];
  //   console.log(animals[8]);
}
