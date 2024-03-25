import React from "react";
import "../assets/css/StepOne.css";

export default function StepOne() {
  const gotoCivil = () => {
    window.location.href =
      "https://maps.app.goo.gl/MUSx4wBcFxw5Uat56";
  };
  const gotoParty = () => {
    window.location.href =
      "https://maps.app.goo.gl/35ReFKkKwwjD8Fqt9";
  };
  return (
    <div className="civil-content">
      <div>
        <h2>Ceremonia</h2>
        <p>Dia 27 de abril a las 20.30hs en "Parroquia Sagrada Familia" (Berazategui) </p>
        <button className="primary-button" onClick={gotoCivil}>
          Cómo llegar
        </button>
      </div>
      <div>
        <h2>Fiesta</h2>
        <p>Dia 27 de abril a las 21.30hs en Salón de fiestas "Benevento" (Quilmes oeste)</p>
        <button className="primary-button" onClick={gotoParty}>
          Cómo llegar
        </button>
      </div>
    </div>
  );
}
