import React from "react";
import "./About.scss";
import Nat1 from "../../assets/img/nat-1.jpg";
import Nat2 from "../../assets/img/nat-2.jpg";
import Nat3 from "../../assets/img/nat-3.jpg";
const About = () => {
  return (
    <section className="about">
      <div className="about-heading">
        <h2 className="about-heading--primary">
          Exciting tours for adventurous people
        </h2>
      </div>
      <div className="about-main">
        <div className="about-main--content">
          <h3>You're going to fall in love with nature</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Repellendus veniam at dignissimos qui ullam dolore maxime atque.
            Nostrum quibusdam consequatur repudiandae alias quidem ducimus.
          </p>
          <h3>Live adventures like you never before</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab,
            dolorum, neque aut atque nisi ad iusto rem sed explicabo
            consequuntur sequi, maxime reprehenderit ipsum saepe.
          </p>
          <div className="about-main--content__ending">
            <a href="#!">Learn more &rarr; </a>
          </div>
        </div>
        <div className="about-main--image_box">
          <img className="img-1" src={Nat1} alt="nature-1" />
          <img className="img-2" src={Nat2} alt="nature-2" />
          <img className="img-3" src={Nat3} alt="nature-3" />
        </div>
      </div>
    </section>
  );
};
export default About;
