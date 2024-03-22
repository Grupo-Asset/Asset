import React, { useState } from 'react';
import BannerCSS from '../css/BannerProductos.module.css';
import { Button } from '@mui/material';
// import Icon from '@mdi/react';
// import { mdiTextureBox } from '@mdi/js'; para después
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExpand } from '@fortawesome/free-solid-svg-icons';



const Banner = ({ imageUrl, title, subtitle, buttonAction, button }) => {
  const [showInfo, setShowInfo] = useState(false);

  const toggleInfo = () => {
    setShowInfo(!showInfo);
  };

  const handleClick = () => {
    if (button === 'Saber más') {
      toggleInfo();
    } else {
      localStorage.setItem('investTitle', title);
      window.location.href = buttonAction;
    }
  };
  
  const handleBack = () => {
    toggleInfo();
    window.scrollTo(0, 0);
  };
  

  const characteristics = [
    { icon: <FontAwesomeIcon icon={faExpand} />, text: "SUperficie total: 95m²" },
    { icon: <FontAwesomeIcon icon={faExpand} />, text: "Ambientes: 4" },
    { icon: <FontAwesomeIcon icon={faExpand} />, text: "Dormitorios: 3" },
    { icon: <FontAwesomeIcon icon={faExpand} />, text: "Expensas: ARS $70.000" },
    { icon: <FontAwesomeIcon icon={faExpand} />, text: "Pisos de la propiedad: 3" },
    { icon: <FontAwesomeIcon icon={faExpand} />, text: "Superficie cubierta: 58m²" },
    { icon: <FontAwesomeIcon icon={faExpand} />, text: "Baños: 1" },
    { icon: <FontAwesomeIcon icon={faExpand} />, text: "Antiguedad: A estrenar" },
    { icon: <FontAwesomeIcon icon={faExpand} />, text: "Apto crédito: Si" },
  ];

  return (
    <div className={BannerCSS.banner}>
      <img src={imageUrl} alt="Banner" className={BannerCSS.bannerImage} />
      <div className={BannerCSS.content}>
        <h2 className={BannerCSS.title}>{title}</h2>
        <h3 className={BannerCSS.subtitle}>{subtitle}</h3>
        <Button
          onClick={handleClick}
          sx={{
            color: 'white',
            backgroundColor: 'black',
            borderRadius: '50px',
            cursor: 'pointer',
            textTransform: 'none',
            padding: '5px 25px',
            border: 'none',
            '&:hover': {
              backgroundColor: 'black',
            },
          }}
          className={BannerCSS.button}
        >
          {button}
        </Button>
        {showInfo && (
          <div className={`${BannerCSS.additionalInfo}`}>
            <div className={BannerCSS.imgContainer}>
              <img className={BannerCSS.imageInfo} src={imageUrl} alt="" />
            </div>
              <h3 className={BannerCSS.additionalInfoTitle}>{title}</h3>
            <div className={BannerCSS.infoContainer}>
              <div className={BannerCSS.grillaInformacion}>
                <div>
                  <h2 className={BannerCSS.h2}>Descripción</h2>
                  <p className={BannerCSS.parrafoInfo}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet dictum sit amet justo. Netus et malesuada fames ac turpis egestas. Sollicitudin tempor id eu nisl nunc mi. Quam pellentesque nec nam aliquam sem et tortor consequat id. At risus viverra adipiscing at in tellus integer feugiat scelerisque. Sit amet consectetur adipiscing elit duis tristique sollicitudin. Tellus elementum sagittis vitae et leo duis ut diam. Ornare arcu dui vivamus arcu. At quis risus sed vulputate odio ut enim blandit volutpat. Aenean euismod elementum nisi quis eleifend. Facilisi morbi tempus iaculis urna. Ridiculus mus mauris vitae ultricies leo. Lacus sed turpis tincidunt id. Eu volutpat odio facilisis mauris sit. Mi proin sed libero enim sed faucibus turpis in eu. Nisl vel pretium lectus quam id leo in.
                    <br />
                    <br />
                  Scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus et. Eu non diam phasellus vestibulum lorem sed risus ultricies tristique. Pellentesque habitant morbi tristique senectus et netus et. Enim neque volutpat ac tincidunt vitae. Et netus et malesuada fames ac turpis egestas maecenas pharetra. Id leo in vitae turpis massa sed elementum. Pellentesque massa placerat duis ultricies lacus sed turpis tincidunt id. Malesuada bibendum arcu vitae elementum curabitur vitae nunc sed velit. Ac ut consequat semper viverra nam libero justo. Nibh tortor id aliquet lectus proin nibh nisl condimentum. Cursus sit amet dictum sit amet justo. Quis enim lobortis scelerisque fermentum dui faucibus in ornare.
                  </p>
                </div>
                <div>
                  <h2 className={BannerCSS.h2}>Ubicación</h2>
                  <iframe
                    title="Google Maps"
                    src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBElQDSJZlqIasWknhzqQRU84IeO2iqJ_M&zoom=15&q=C.+18+49,+B1894+Villa+Elisa,+Provincia+de+Buenos+Aires`}
                    width="100%"
                    height="500"
                    frameBorder="0"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    aria-hidden="false"
                    tabIndex="0"
                  ></iframe>
                </div>
              </div>
              <div className={BannerCSS.caracteristicas}>
                <h2>Características del desarrollo</h2>
                <div>
                  <p className={BannerCSS.parrafoInfo}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eleifend quam adipiscing vitae proin. Accumsan tortor posuere ac ut consequat. Maecenas pharetra convallis posuere morbi leo urna molestie at. Arcu risus quis varius quam quisque id diam vel. Integer enim neque volutpat ac tincidunt vitae semper quis lectus. Neque convallis a cras semper auctor neque vitae tempus quam. Vitae tempus quam pellentesque nec nam. Quis ipsum suspendisse ultrices gravida dictum fusce. Et malesuada fames ac turpis egestas sed tempus urna. Eget aliquet nibh praesent tristique magna sit. Quis enim lobortis scelerisque fermentum dui faucibus. Cursus vitae congue mauris rhoncus aenean.

Aliquam purus sit amet luctus venenatis lectus magna. Suspendisse faucibus interdum posuere lorem ipsum. Mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus. Suspendisse faucibus interdum posuere lorem ipsum dolor. Et malesuada fames ac turpis egestas integer eget. Ut porttitor leo a diam sollicitudin tempor id eu nisl. Augue eget arcu dictum varius duis at consectetur lorem. In fermentum posuere urna nec tincidunt praesent semper feugiat nibh. Tortor dignissim convallis aenean et. Volutpat lacus laoreet non curabitur gravida arcu ac tortor dignissim. Vitae proin sagittis nisl rhoncus mattis rhoncus. Dictum at tempor commodo ullamcorper a lacus. Ultricies mi quis hendrerit dolor magna. Maecenas ultricies mi eget mauris pharetra et ultrices. Porttitor massa id neque aliquam vestibulum morbi. Habitant morbi tristique senectus et netus et malesuada fames ac. Quis hendrerit dolor magna eget est lorem. Et odio pellentesque diam volutpat commodo sed egestas.
                  </p>
                </div>
              </div>
              <div>
                <h2 className={BannerCSS.valorVenta}>90.000 USD</h2>
              </div>
              <div>
              <div className={BannerCSS.grillaCaracter}>
                {characteristics.map((characteristic, index) => (
                  <div key={index} className={BannerCSS.caracteristica}>
                    <div className="icono">{characteristic.icon}</div>
                    <p className={BannerCSS.textCaract}>{characteristic.text}</p>
                  </div>
                ))}
              </div>
              </div>
              <div className={BannerCSS.botonesInfo}>
                  <Button
                    onClick={handleBack}
                    sx={{
                      color: 'white',
                      backgroundColor: 'black',
                      borderRadius: '50px',
                      cursor: 'pointer',
                      textTransform: 'none',
                      padding: '5px 25px',
                      border: 'none',
                      '&:hover': {
                        backgroundColor: 'black',
                      },
                    }}
                    className={`${BannerCSS.button} ${BannerCSS.backButton} ${BannerCSS.backButtonAnimation}`}
                  >
                    Volver
                  </Button>
                  <Button
                    onClick={() => window.location.href = '/shop'}
                    sx={{
                      color: 'white',
                      backgroundColor: 'black',
                      borderRadius: '50px',
                      cursor: 'pointer',
                      textTransform: 'none',
                      padding: '5px 25px',
                      border: 'none',
                      '&:hover': {
                        backgroundColor: 'black',
                      },
                    }}
                    className={`${BannerCSS.button} ${BannerCSS.backButton} ${BannerCSS.backButtonAnimation}`}
                  >
                    Invertir
                  </Button>
                </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Banner;


export const BannerProductos = () => {
  const bannersData = [
    {
      imageUrl: 'https://res.cloudinary.com/dazsjxtmy/image/upload/f_auto/v1687751164/09_CALLE_INTERNA_BLUE_HOUR_4K_POS_mscfkm.jpg',
      title: 'Quarters',
      subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Condimentum vitae sapien pellentesque l.',
      buttonAction: '/quarters',
      button: 'Saber  más'
    },
    {
      imageUrl: 'https://res.cloudinary.com/dazsjxtmy/image/upload/f_auto/v1687751164/09_CALLE_INTERNA_BLUE_HOUR_4K_POS_mscfkm.jpg',
      title: 'Towers',
      subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Condimentum vitae sapien pellentesque l.',
      buttonAction: '/towers',
      button: 'Saber  más'
    },
    {
      imageUrl: 'https://res.cloudinary.com/dazsjxtmy/image/upload/f_auto/v1687751164/09_CALLE_INTERNA_BLUE_HOUR_4K_POS_mscfkm.jpg',
      title: 'Retails',
      subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Condimentum vitae sapien pellentesque l.',
      buttonAction: '/retails',
      button: 'Saber  más'
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
      imageUrl: 'https://res.cloudinary.com/dazsjxtmy/image/upload/f_auto/v1687751162/10_INTERIOR_SUM_BLUE_HOUR_4K_POS_gr3ozf.jpg',
      title: 'Quarters Family 1',
      subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Condimentum vitae sapien pellentesque l.',
      buttonAction: '/shop',
      button: 'Saber más'
    },
    {
      imageUrl: 'https://res.cloudinary.com/dazsjxtmy/image/upload/f_auto/v1687751164/09_CALLE_INTERNA_BLUE_HOUR_4K_POS_mscfkm.jpg',
      title: 'Quarters Family 2',
      subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Condimentum vitae sapien pellentesque l.',
      buttonAction: '/shop',
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
      buttonAction: '/shop',
      button: 'Saber más'
    },
    {
      imageUrl: 'https://res.cloudinary.com/dazsjxtmy/image/upload/f_auto/v1687751164/09_CALLE_INTERNA_BLUE_HOUR_4K_POS_mscfkm.jpg',
      title: 'Towers 2',
      subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Condimentum vitae sapien pellentesque l.',
      buttonAction: '/shop',
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
      title: 'Retails 1',
      subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Condimentum vitae sapien pellentesque l.',
      buttonAction: '/shop',
      button: 'Saber más'
    },

    {
      imageUrl: 'https://res.cloudinary.com/dazsjxtmy/image/upload/f_auto/v1687751164/09_CALLE_INTERNA_BLUE_HOUR_4K_POS_mscfkm.jpg',
      title: 'Retails 2',
      subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Condimentum vitae sapien pellentesque l.',
      buttonAction: '/shop',
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
