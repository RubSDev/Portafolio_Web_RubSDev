import React from "react";
import "./footer.css";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <a href="" className="footer__logo">
        RubSDev
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">HOME</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#certifications">Certifications</a>
        </li>
        <li>
          <a href="#portafolio">Portafolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/">
          <FaFacebookSquare />
        </a>
        <a href="https://www.instagram.com/">
          <FaInstagramSquare />
        </a>
        <a href="https://twitter.com/">
          <FaTwitterSquare />
        </a>
      </div>
      <div className="footer__copyright">
        <small>&copy; RubSDev Todos los derechos reservados</small>
      </div>
    </footer>
  );
};

export default Footer;
