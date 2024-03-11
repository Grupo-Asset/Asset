import React from 'react';
import Banner from './BannerProductos';
import DynamicBanner from './DinamicBanner';

const App = () => {
  const bannersData = [
    {
      backgroundImage: 'imagen1.jpg',
      title: 'Título 1',
      subtitle: 'Subtítulo 1'
    },
    {
      backgroundImage: 'imagen2.jpg',
      title: 'Título 2',
      subtitle: 'Subtítulo 2'
    }
    // Puedes añadir más objetos según sea necesario para más banners
  ];

  return (
    <div>
      {/* Banner individual */}
      <Banner
        backgroundImage="imagen.jpg"
        title="Título del banner"
        subtitle="Subtítulo del banner"
      />

      {/* Banners dinámicos */}
      <DynamicBanner banners={bannersData} />
    </div>
  );
};

export default App;
