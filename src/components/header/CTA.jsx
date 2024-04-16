import React from "react";
import CVE from "../../Assets/CV_FronrEnd_Dev_RarturoSomuanoG_Eng.pdf";
import CV from "../../Assets/CV_FrontEnd_Dev_RArturoSomuanoG_.pdf";

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} download className="btn">
        Descarga CV en Español
      </a>
      <a href={CVE} download className="btn">
        Download CV in English
      </a>
      <a href="#contact" className="btn btn-primary">
        🗣️ Contacto
      </a>
    </div>
  );
};

export default CTA;
