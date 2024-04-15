import React from "react";
import "./header.css";
import CTA from "./CTA";
import HeaderSocial from "./HeaderSocial";
import ME from "../../Assets/me.jpeg";

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>🙋‍♂️ Hola soy</h5>
        <h1>Ruben Somuano</h1>
        <h5 className="text-light">Front-end Web Developer </h5>

        <CTA />

        <HeaderSocial />
        <div className="me">
          <img src={ME} alt="" />
        </div>
        <a href="#contact" className="scroll_down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
