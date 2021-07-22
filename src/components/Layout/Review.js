import React from "react";
import ReviewVideo from "../../assets/img/video.mp4";
import ReviewVideoAlter from "../../assets/img/video.webm";
import Customer1 from "../../assets/img/nat-8.jpg";
import Customer2 from "../../assets/img/nat-9.jpg";

import "./Review.scss";
const Review = () => {
  return (
    <section className="review">
      <div className="bg-video">
        <video
          className="bg-video__content"
          // src={ReviewVideoAlter}
          autoplay="true"
          muted
          loop="true"
        >
          <source src={ReviewVideo} type="video/mp4" />
          <source src={ReviewVideoAlter} type="video/webm" />
          Your browser is not supported!
        </video>
      </div>
      <div className="review-heading">
        <h2 className="review-heading__primary">
          We Make people genuinely happy
        </h2>
      </div>
      <div className="review-box">
        <div className="review-box__content">
          <figure class="review-box__content__shape">
            <img
              src={Customer1}
              alt="Customer-1"
              class="review-box__content__img"
            />
            <figcaption class="review-box__content__caption">
              Mary Smith
            </figcaption>
          </figure>
          <div className="review-box__content__text">
            <h3>I had the best week ever with my family</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
              eius, voluptatem rem explicabo magnam voluptatum debitis
              aspernatur sed quibusdam? Delectus quisquam nostrum cumque iure
              officiis nam facilis! Aut eaque facilis fugiat amet quaerat at
              odit, libero in, perferendis soluta fugit!
            </p>
          </div>
        </div>
        <div className="review-box__content">
          <figure class="review-box__content__shape">
            <img
              src={Customer2}
              alt="Customer-2"
              class="review-box__content__img"
            />
            <figcaption class="review-box__content__caption">
              Jack Wilson
            </figcaption>
          </figure>
          <div className="review-box__content__text">
            <h3>Wow!My life is completely different now</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
              eius, voluptatem rem explicabo magnam voluptatum debitis
              aspernatur sed quibusdam? Delectus quisquam nostrum cumque iure
              officiis nam facilis! Aut eaque facilis fugiat amet quaerat at
              odit, libero in, perferendis soluta fugit!
            </p>
          </div>
        </div>
      </div>
      <div className="review-read__more-button">
        <a href="#!">Read all stories &rarr; </a>
      </div>
    </section>
  );
};

export default Review;
