// Landing.js
import React from 'react';
import { BannerProductos } from '../components/BannerInfo';
import WhatsappButton from '../components/WhatsappButton';
import {BackgroundQuarters} from '../components/Background';

const Landing = () => {
  return (
    <div className="App">
      {/* Muestra los banners definidos en BannerProductos */}
      <BackgroundQuarters />
      <BannerProductos />
      <WhatsappButton phoneNumber="5492213141311" message="Hola, tengo una pregunta sobre..." />
    </div>
  );
};

export default Landing;