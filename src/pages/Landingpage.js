// Landing.js
import React from 'react';
import { BannerProductos } from '../components/BannerInfo';

const Landing = () => {
  return (
    <div className="App">
      {/* Muestra los banners definidos en BannerProductos */}
      <BannerProductos />
    </div>
  );
};

export default Landing;