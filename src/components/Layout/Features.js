import React from "react";
import "./Features.scss";

const Features = () => {
  return (
    <section className="feature">
      <div class="feature-box">
        <div class="feature-box__container">
          <i class="feature-box__container-icon icon-basic-world"></i>
          <h3>Explore the world</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
            ipsum sapiente aspernatur.
          </p>
        </div>
        <div class="feature-box__container">
          <i class="feature-box__container-icon icon-basic-compass"></i>
          <h3>Meet nature</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
            ipsum sapiente aspernatur.
          </p>
        </div>
        <div class="feature-box__container">
          <i class="feature-box__container-icon icon-basic-map"></i>
          <h3>Find your way</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
            ipsum sapiente aspernatur.
          </p>
        </div>
        <div class="feature-box__container">
          <i class="feature-box__container-icon icon-basic-heart"></i>
          <h3>Live a healthier life</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
            ipsum sapiente aspernatur.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;
