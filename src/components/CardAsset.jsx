import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import CACSS from '../css/CardAsset.module.css';

const CardAsset = ({ card, cardData }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleButtonClick = () => {
    if (window.location.pathname === '/eventos') {
      // Realiza alguna acción específica para el botón en /eventos
      // Por ejemplo, redirige a la página de registro
      window.location.href = '/registro';
    } else if (window.location.pathname === '/sobreasset') {
      // Realiza otra acción para el botón en /sobreasset
      // Por ejemplo, cambia el estado de isFlipped
      setIsFlipped(!isFlipped);
    }
  };

  return (
    <div className={CACSS.card}>
      <div className={CACSS.leftSection}>
        <div className={CACSS.icon}>
          <button className={CACSS.btn} onClick={handleButtonClick}>
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </div>
        <div className={CACSS.title}>
          <h1 className={CACSS.h1}>{card.title}</h1>
          <h2 className={CACSS.h2}>{card.subtitle}</h2>
        </div>
      </div>
      <div className={CACSS.rightSection}>
        <div
          className={`${CACSS.imageContainer} ${isFlipped ? CACSS.flip : ''}`}
        >
          <div className={CACSS.front}>
            <img className={CACSS.img} src={card.imageUrl} alt="" />
          </div>
          <div className={CACSS.back}>
            <span>{card.description}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardAsset;