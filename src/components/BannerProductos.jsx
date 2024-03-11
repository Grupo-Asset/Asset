import React from 'react';
import '../css/BannerProductos.module.css'; // Estilos del banner

const Banner = ({ backgroundImage, title, subtitle }) => {
  return (
    <div className="banner" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="content">
        <h1 className="title">{title}</h1>
        <h2 className="subtitle">{subtitle}</h2>
        <button className="button">Invertir</button>
      </div>
    </div>
  );
};

export default Banner;