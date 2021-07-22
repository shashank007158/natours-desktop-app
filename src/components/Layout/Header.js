import React from "react";
import Logo from "../../assets/img/logo-white.png";
import Button from "../UI/Button";
import "./Header.scss";
const Header = () => {
  return (
    <header class="header">
      <div class="header__logo-box">
        <img src={Logo} alt="logo" class="header__logo" />
      </div>
      <div class="header__text-box">
        <h1 class="heading-primary">
          <span class="heading-primary--main">OUTDOORS</span>
          <span class="heading-primary--sub">is where life happens</span>
        </h1>
        <Button href="#!" color="white">
          Discover our tours
        </Button>
      </div>
    </header>
  );
};

export default Header;
