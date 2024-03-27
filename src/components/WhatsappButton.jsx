import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import WhatsappCSS from '../css/Whatsapp.module.css'

const WhatsappButton = ({ phoneNumber, message }) => {
  const handleClick = () => {
    // Si deseas abrir un chat para atención al cliente, puedes usar el siguiente enlace
    // const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    // Si prefieres redirigir a los usuarios al WhatsApp de la empresa
    const whatsappUrl = `https://wa.me/${phoneNumber}`;
    
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className={WhatsappCSS.divButton}>
      <button className={WhatsappCSS.buttonWpp} onClick={handleClick}>
        <FontAwesomeIcon className={WhatsappCSS.font} icon={faWhatsapp} />
      </button>
    </div>
  );
};

export default WhatsappButton;
