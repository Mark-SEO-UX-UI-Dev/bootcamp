import { Component } from "react";
import image from "../img/food.jpg";
import "../css/styles.css";

class Home extends Component {
  render() {
    return (
      <>
        <div class="container">
          <div class="row text-center home">
            <span
              class="background-image"
              role="img"
              alt="Cheeseburger and Fries"
            >
              {"../img1/food.jpg"}
            </span>
            <h1 class="text-dark fw-bold">Home page</h1>
            <a href="./ordering" class="btn btn-primary">
              Order Now!
            </a>
          </div>
        </div>
      </>
    );
  }
}

export default Home;
