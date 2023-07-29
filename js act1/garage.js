function runActivity() {
  class Car {
    constructor(name, manufacturer, acceleration) {
      this.name = name;
      this.manufacturer = manufacturer;
      this.acceleration = acceleration;
      this.speed = 0;
      this.started = false;
    }

    start() {
      if (this.started == false) {
        this.speed = 30;
        this.started = true;
        console.log("The car has started.");
      } else {
        console.log("The care is already started.");
      }
    }

    accelerate() {
      if (this.started == true) {
        this.speed += this.acceleration;
        console.log("The new speed is: " + this.speed);
      } else {
        console.log("The car has not stared yet.");
      }
    }

    decelerate() {
      if (this.started == true) {
        this.speed = Math.max(this.speed / 2, 1);
        console.log("The new speed is: " + this.speed);
      } else {
        console.log("The car has not started yet.");
      }
    }

    checkSpeed() {
      console.log("The current speed is: " + this.speed);
    }

    stop() {
      if (this.started == true) {
        this.speed = 0;
        this.started = false;
        console.log("The car has stopped.");
      } else {
        console.log("The car has not started yet.");
      }
    }
  }

  function validation(value) {
    return value > 0;
  }

  function choice(message) {
    let input = prompt(message);
    return input;
  }

  function create_car() {
    let name = choice("Please enter the name of the car:");
    let manufacturer = choice("Please enter the manufacturer of the car:");
    let acceleration = Number(
      choice("Please enter the acceleration of the car:")
    );

    if (validation(acceleration)) {
      return new Car(name, manufacturer, acceleration);
    } else {
      console.error(
        "Error: Invalid value. Please enter a positive number for the acceleration."
      );
      alert(
        "Error: Invalid value. Please enter a positive number for the acceleration."
      );
      return null;
    }
  }

  let car = create_car();

  if (car !== null) {
    let choice2 = 0;
    while (choice2 != "6") {
      choice2 = prompt(
        "What method are you trying to access \n1. Start\n2. Accelerate\n3. Decelerate\n4. Check Speed\n5. Stop\n6. End program"
      );

      switch (choice2) {
        case "1":
          car.start();
          break;
        case "2":
          car.accelerate();
          break;
        case "3":
          car.decelerate();
          break;
        case "4":
          car.checkSpeed();
          break;
        case "5":
          car.stop();
          break;
        case "6":
          console.log("Program ended.");
          break;
        default:
          console.error("Error; Invalid input. Please try again.");
          alert("Error; Invalid input. Please try again.");
      }
    }
  }
}
