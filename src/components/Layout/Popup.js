import React from "react";
import Image1 from "../../assets/img/nat-8.jpg";
import Image2 from "../../assets/img/nat-9.jpg";
import Button from "../UI/Button";
import "./Popup.scss";
const Popup = () => {
  return (
    <section id="popup" className="popup">
      <div className="popup--card">
        <div className="popup--card__image-container">
          <img src={Image1} alt="A lady" className="image-1" />
          <img src={Image2} alt="A guy" className="image-2" />
        </div>
        <div className="popup--card__detail">
          <div className="popup-header">
            <div className="popup-close_box">
              <a href="#tours" className="popup__close">
                X
              </a>
            </div>

            <div className="heading">
              <h2>START Booking Now</h2>
            </div>
          </div>
          <div className="popup-terms">
            <div className="sub--heading">
              important - please read the terms before booking
            </div>
            <div className="terms">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Similique dolorum veritatis delectus eligendi recusandae ut non
                sit iure. Autem pariatur aperiam repellat laborum nesciunt!
                Doloribus alias et ipsam beatae deleniti, sequi incidunt
                laudantium vitae ab nostrum maxime odio odit quasi dicta fugiat
                ullam voluptatum saepe. Expedita deleniti saepe nobis odio.
                Veritatis amet dicta, asperiores accusamus ab deserunt illum eum
                eveniet dignissimos nemo est nesciunt fuga aut quos quisquam
                accusantium assumenda vitae dolorum corrupti possimus optio! Ad
                soluta, odit autem molestiae sunt iste doloremque neque officia
                voluptatum quos totam ipsum. Nemo voluptas veritatis, mollitia
                pariatur autem, provident blanditiis reiciendis quam, aspernatur
                maiores tempore! Non aspernatur tempora expedita animi autem
                iusto error eveniet laudantium libero quam, eos accusamus neque
                sit eligendi facilis, deleniti voluptas ut labore nulla?
                Reiciendis eius, porro laborum quod culpa amet voluptas ratione
                velit unde deserunt laboriosam aliquam aspernatur, hic
                asperiores obcaecati omnis maiores similique voluptatem incidunt
                error perspiciatis quisquam aperiam excepturi? Deserunt omnis
                amet nobis hic laborum fugiat suscipit, quaerat accusantium
                iusto eaque odio totam sunt voluptates distinctio consequuntur
                non deleniti minus ratione aut dolores error rerum praesentium
                unde perferendis? Commodi maiores accusamus, magni alias ratione
                nobis minus, temporibus et, quasi sapiente laborum soluta!
                Suscipit ea numquam vel
              </p>
            </div>
          </div>
          <div class="book-button-box">
            <Button className="book-button" color="green" href="#!">
              Book Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Popup;
