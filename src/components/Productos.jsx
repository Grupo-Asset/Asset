import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import CACSS from '../css/CardAsset.module.css';

const Productos = ( card, cardData ) => {

  return (
    <div className={CACSS.productCard}>

      <div className={CACSS.productRightSection}>
        <div
          className={`${CACSS.productImageContainer}`}
        >
          <div className={CACSS.productFront}>
            <img className={CACSS.productImg} src={card.imageUrl} alt="" />
          </div>
          <div className={CACSS.productBack}>
            <span>{card.description}</span>
          </div>
        </div>
      </div>
      
      <div className={CACSS.productLeftSection}>
        <div className={CACSS.productIcon}>
          <button className={CACSS.productBtn}>
            <FontAwesomeIcon icon={faPlus} />
            <p className={CACSS.productRegisterText}>{card.text}</p>
            {card.buttons && card.buttons.map((input, index) => (
            <div  key={index}>
                  <div>
                      <button className={CACSS.productBtn} onClick={input.onClick}> {input.button} </button>
                  </div>
              </div>
            ))}
          </button>
        </div>
        <div className={`${CACSS.productTitle}`}>
          <h2 className={CACSS.productTitle}>{card.title}</h2>
          <h3 className={CACSS.productSubtitle}>{card.subtitle}</h3>
        </div>
      </div>
    </div>
  );
};

export default Productos;
