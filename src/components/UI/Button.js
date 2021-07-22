import React from "react";
import "./Button.scss";
const Button = (props) => {
  return (
    <a
      href={props.href}
      className={`btn btn--${props.color} ${props.className}`}
    >
      {props.children}
    </a>
  );
};
export default Button;
