import React from 'react';
import BannerCSS from '../css/BannerProductos.module.css'
import { Button } from '@mui/material';

const Banner = ({ imageUrl, title, subtitle, buttonAction, button }) => {
  return (
    <div className={BannerCSS.banner}>
      <img src={imageUrl} alt="Banner" className={BannerCSS.bannerImage} />
      <div className={BannerCSS.content}>
        <h2 className={BannerCSS.title}>{title}</h2>
        <h3 className={BannerCSS.subtitle}>{subtitle}</h3>
        <a className={BannerCSS.button} href={buttonAction}>
          {button}
        </a>
      </div>
    </div>
  );
};

export const BannerProductos = () => {
  const bannersData = [
    {
      imageUrl: 'https://res.cloudinary.com/dazsjxtmy/image/upload/f_auto/v1687751164/09_CALLE_INTERNA_BLUE_HOUR_4K_POS_mscfkm.jpg',
      title: 'Quarters Family',
      subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Condimentum vitae sapien pellentesque l.',
      buttonAction: '/quarters',
      button: 'Invertir'
    },
    {
      imageUrl: 'https://res.cloudinary.com/dazsjxtmy/image/upload/f_auto/v1687751164/09_CALLE_INTERNA_BLUE_HOUR_4K_POS_mscfkm.jpg',
      title: 'Towers',
      subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Condimentum vitae sapien pellentesque l.',
      buttonAction: '/towers',
      button: 'Invertir'
    },
    {
      imageUrl: 'https://res.cloudinary.com/dazsjxtmy/image/upload/f_auto/v1687751164/09_CALLE_INTERNA_BLUE_HOUR_4K_POS_mscfkm.jpg',
      title: 'Retails',
      subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Condimentum vitae sapien pellentesque l.',
      buttonAction: '/retails',
      button: 'Invertir'
    },
  ];

  return (
    <div>
      {bannersData.map((banner, index) => (
        <Banner
          key={index}
          imageUrl={banner.imageUrl}
          title={banner.title}
          subtitle={banner.subtitle}
          buttonAction={banner.buttonAction}
          button={banner.button}
        />
      ))}
    </div>
  );
};

export const QuartersBanners = () => {
  const bannersData = [
    {
      imageUrl: 'https://res.cloudinary.com/dazsjxtmy/image/upload/f_auto/v1687751164/09_CALLE_INTERNA_BLUE_HOUR_4K_POS_mscfkm.jpg',
      title: 'Quarters Family 1',
      subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Condimentum vitae sapien pellentesque l.',
      buttonAction: '/shop',
      button: 'Saber más'
    },
    {
      imageUrl: 'https://res.cloudinary.com/dazsjxtmy/image/upload/f_auto/v1687751164/09_CALLE_INTERNA_BLUE_HOUR_4K_POS_mscfkm.jpg',
      title: 'Quarters Family 2',
      subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Condimentum vitae sapien pellentesque l.',
      buttonAction: '/quarters2shop',
      button: 'Saber más'
    }
  ];

  return (
    <div>
      {bannersData.map((banner, index) => (
        <Banner
          key={index}
          imageUrl={banner.imageUrl}
          title={banner.title}
          subtitle={banner.subtitle}
          buttonAction={banner.buttonAction}
          button={banner.button}
        />
      ))}
    </div>
  );
};

export const TowersBanners = () => {
  const bannersData = [
    {
      imageUrl: 'https://res.cloudinary.com/dazsjxtmy/image/upload/f_auto/v1687751164/09_CALLE_INTERNA_BLUE_HOUR_4K_POS_mscfkm.jpg',
      title: 'Towers 1',
      subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Condimentum vitae sapien pellentesque l.',
      buttonAction: '/towers1',
      button: 'Saber más'
    },
    {
      imageUrl: 'https://res.cloudinary.com/dazsjxtmy/image/upload/f_auto/v1687751164/09_CALLE_INTERNA_BLUE_HOUR_4K_POS_mscfkm.jpg',
      title: 'Towers 2',
      subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Condimentum vitae sapien pellentesque l.',
      buttonAction: '/towers2',
      button: 'Saber más'
    }
  ];

  return (
    <div>
      {bannersData.map((banner, index) => (
        <Banner
          key={index}
          imageUrl={banner.imageUrl}
          title={banner.title}
          subtitle={banner.subtitle}
          buttonAction={banner.buttonAction}
          button={banner.button}
        />
      ))}
    </div>
  );
};

export const RetailsBanners = () => {
  const bannersData = [
    {
      imageUrl: 'https://res.cloudinary.com/dazsjxtmy/image/upload/f_auto/v1687751164/09_CALLE_INTERNA_BLUE_HOUR_4K_POS_mscfkm.jpg',
      title: 'Towers 1',
      subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Condimentum vitae sapien pellentesque l.',
      buttonAction: '/towers1',
      button: 'Saber más'
    },
    {
      imageUrl: 'https://res.cloudinary.com/dazsjxtmy/image/upload/f_auto/v1687751164/09_CALLE_INTERNA_BLUE_HOUR_4K_POS_mscfkm.jpg',
      title: 'Towers 2',
      subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Condimentum vitae sapien pellentesque l.',
      buttonAction: '/towers2',
      button: 'Saber más'
    }
  ];

  return (
    <div>
      {bannersData.map((banner, index) => (
        <Banner
          key={index}
          imageUrl={banner.imageUrl}
          title={banner.title}
          subtitle={banner.subtitle}
          buttonAction={banner.buttonAction}
          button={banner.button}
        />
      ))}
    </div>
  );
};
