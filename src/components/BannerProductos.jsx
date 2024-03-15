import React from 'react';
import BannerCSS from '../css/BannerProductos.module.css';

const Banner = ({ imageUrl, title, subtitle, buttonAction }) => {
  return (
    <div className={BannerCSS.banner}>
      <img src={imageUrl} alt="Banner" className={BannerCSS.bannerImage} />
      <div className={BannerCSS.content}>
        <h2 className={BannerCSS.title}>{title}</h2>
        <h3 className={BannerCSS.subtitle}>{subtitle}</h3>
        <a className={BannerCSS.button} href={buttonAction}>
          Invertir
        </a>
      </div>
    </div>
  );
};

export default Banner;
