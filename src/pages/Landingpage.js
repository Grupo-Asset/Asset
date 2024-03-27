// Landing.js
import React from 'react';
import { BannerProductos } from '../components/BannerInfo';
import WhatsappButton from '../components/WhatsappButton';

const Landing = () => {
  return (
    <div className="App">
      {/* Muestra los banners definidos en BannerProductos */}
      <BannerProductos />
      <WhatsappButton phoneNumber="123456789" message="Hola, tengo una pregunta sobre..." />
    </div>
  );
};

export default Landing;