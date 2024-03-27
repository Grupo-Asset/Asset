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




// import React, { useEffect } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
// import WhatsappCSS from '../css/Whatsapp.module.css'

// const WhatsappButton = ({ phoneNumber, message }) => {
//   useEffect(() => {
//     // Cargar el script de la API de WhatsApp Business
//     const script = document.createElement('script');
//     script.src = 'https://whatsapp.chat/widget/client.js';
//     script.async = true;
//     document.body.appendChild(script);

//     // Cleanup
//     return () => {
//       document.body.removeChild(script);
//     };
//   }, []);

//   const handleClick = () => {
//     // Verificar si window.WhatsappChatWidget está definido
//     if (window.WhatsappChatWidget) {
//       // Abrir el chat de WhatsApp al hacer clic en el botón
//       window.WhatsappChatWidget.openChat(phoneNumber);
//     } else {
//       console.error('El objeto window.WhatsappChatWidget no está definido.');
//     }
//   };
  

//   return (
//     <div className={WhatsappCSS.divButton}>
//       <button className={WhatsappCSS.buttonWpp} onClick={handleClick}>
//         <FontAwesomeIcon className={WhatsappCSS.font} icon={faWhatsapp} />
//       </button>
//     </div>
//   );
// };

// export default WhatsappButton;
