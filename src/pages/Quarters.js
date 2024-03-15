// Quarters.js
import React from 'react';
import { QuartersBanners } from '../components/BannerInfo';

const Quarters = () => {
  return (
    <div className="Quarters">
      {/* Muestra los banners definidos en QuartersBanners */}
      <QuartersBanners />
    </div>
  );
};

export default Quarters;
