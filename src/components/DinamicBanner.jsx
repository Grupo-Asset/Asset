import React from 'react';
import Banner from './Banner';

const DynamicBanner = ({ banners }) => {
  return (
    <div>
      {banners.map((banner, index) => (
        <Banner
          key={index}
          backgroundImage={banner.backgroundImage}
          title={banner.title}
          subtitle={banner.subtitle}
        />
      ))}
    </div>
  );
};

export default DynamicBanner;
