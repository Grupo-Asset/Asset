import React,{useState, useEffect} from 'react';
import ShopCSS from '../css/Shop.module.css';
import Carousel from '../components/Carousel';
import Inputs from '../components/InputsCompra';
import FAQ from '../components/PreguntasFrecuentes';
// import Comparative from '../components/Comparative';
import Resumen from '../components/ResumenCompra';
import ShopInversion from '../components/NuevoShopInversion';

function Shop() {
  const [seleccion, setSeleccion]= useState({});
  
  const handleSeleccionUpdate = (nuevaSeleccion)=>{
    setSeleccion(nuevaSeleccion);
    // console.log('hola desde shop')
  }
  
  return (
    <div className={ShopCSS.body}>
      <div className={ShopCSS.container}>
        <div className={ShopCSS.carousel}>
          <Carousel/>
        </div>
        <div className={ShopCSS.inputs}>
          {/* <Inputs seleccion={handleSeleccionUpdate}/> */}
          <ShopInversion/>
        </div>
      </div>
      
    </div>
  );
}

export default Shop;

