import React, { useState } from 'react';
import PerfilCSS from '../css/Perfil.module.css';
import { Link } from 'react-router-dom';
import ModalCardInicio from './Modal';

function CardInicio({ card, cardData }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    if (card.id === 28) {
      setIsModalOpen(true);
    }
  };
  
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Link className={PerfilCSS.link} to={card.link}>
        <div className={PerfilCSS.cardInicio} onClick={handleOpenModal}>
          <div className={PerfilCSS.cardBodyInicio}>
            {card.icon && <img className={PerfilCSS.cardIcon} src={card.icon} alt="Logo" />}
            <h1 className={PerfilCSS.h1}>{card.title}</h1>
            {/* <p>{card.description}</p> */}
          </div>
          <img className={PerfilCSS.cardImg} src={card.imageUrl} alt="Imagen de la tarjeta" />
        </div>
      </Link>

      <ModalCardInicio card={card} isOpen={isModalOpen} onClose={handleCloseModal} />
    </>
  );
}

export default CardInicio;
