import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import CACSS from '../css/CardAsset.module.css';

const CardAsset = ({ card, cardData }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  console.log(card, "card1");


  const handleButtonClick = () => {

    if (window.location.pathname === '/sobreasset') {
      // Realiza otra acción para el botón en /sobreasset
      // Por ejemplo, cambia el estado de isFlipped
      // setIsFlipped(!isFlipped);
    }
  };

  return (
    <div className={CACSS.card}>
      <div className={CACSS.rightSection}>
        <div className={`${CACSS.imageContainer} ${isFlipped ? CACSS.flip : ''}`}>
          <div className={CACSS.front}>
            <img className={CACSS.img} src={card.imageUrl} alt="" />
          </div>
          {/* <div className={CACSS.back}>
            <span>{card.description}</span>
          </div> */}
        </div>
      </div>
      
      <div className={CACSS.leftSection}>
        <div className={CACSS.icon}>
          <button className={CACSS.btn} onClick={handleButtonClick}>
            <FontAwesomeIcon icon={faPlus} />
            <p className={CACSS.registerText}>{card.text}</p>
            {card.buttons && card.buttons.map((input, index) => (
            <div  key={index}>
                  <div>
                      <button className={CACSS.btn} onClick={input.onClick}> {input.button} </button>
                  </div>
              </div>
            ))}
          </button>
        </div>
        <div className={`${CACSS.title} ${isFlipped ? CACSS.flipTitle : ''}`}>
          <h2 className={CACSS.h1}>{card.title}</h2>
          <h3 className={CACSS.h2}>{card.subtitle}</h3>
          <p>{card.description}</p>
        </div>
      </div>
    </div>
  );
};

export default CardAsset;
