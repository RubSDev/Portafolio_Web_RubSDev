import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { ImGithub } from "react-icons/im";

const HeaderSocial = () => {
  return (
    <div className="header_socials">
      <a
        href="https://www.linkedin.com/in/ruben-arturo-somuano-garc%C3%ADa-a43a03198/"
        target="_blanck"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/RubSDev" target="_blanck">
        <ImGithub />
      </a>
    </div>
  );
};

export default HeaderSocial;
