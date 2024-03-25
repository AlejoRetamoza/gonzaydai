import React from 'react'
import '../assets/css/StepThree.css'


export default function StepThree() {

  const safePath = require.context('../assets/static/', true);

  const cvu = "28772522.PREX";

  const copyCVUToClipboard = () => {
    const input = document.createElement("input");
    input.value = cvu;
    document.body.appendChild(input);
    input.select();
    document.execCommand("copy");
    document.body.removeChild(input);
    alert(
      "Alias copiado, ya podes pegar el cvu en tu cuenta para transferir dinero!"
    );
  };

  const sendConfirm = () => {

    let text = 'Confirmo la invitación';
    const number = localStorage.getItem('tel');

    window.location.href =`https://wa.me/${number}?text=${text}`;
  }

  return (
    <div className="step-three">
    <div className="card">
      <img src={safePath("./dresscode.png")} alt="" />
      <p>Dresscode:</p>
      <h2>Elegante/Sport</h2>
    </div>
    <div className="card">
    <img src={safePath("./cbu.png")} alt="" />
      <h3>Si deseas hacernos un regalo</h3>
      <p>Alias: 28772522.PREX</p>
      <button className="primary-button" onClick={copyCVUToClipboard}>
        Copiar Alias
      </button>
    </div>
    <div className="step-three-confirm">
      <p>
        Gracias por acompañarnos en este momento tan especial 
      </p>
      <button className="primary-button" onClick={sendConfirm}>
        Confirmar asistencia
      </button>
    </div>
  </div>
  )
}
