import React, { useState, useRef, useEffect, useContext, useMemo } from 'react';

import InputCSS from '../css/Inputs.module.css';
import useProducto from '../Service/APIproducto';
import useServicio from '../Service/APIservicio';
import {getProductos, getServicios } from '../Service/APIinventario'
import { getDolarAmbito } from '../Service/APIpagos';

import { initMercadoPago } from "@mercadopago/sdk-react";
import numeral from 'numeral';
import Checkout from "./Checkout";
import {Context} from "../Service/ContextProvider";
import { SpinnerCircular } from 'spinners-react';

import Payment from "./Payment";
import  {Context as NotificationContext} from '../context/notification-context'
import { OpacityOutlined } from '@mui/icons-material';

//credencial de prueba test user 1
initMercadoPago("TEST-8cc0de02-11c6-4f51-86f9-5243bcc0b1cd");
// credenciales de prueba:
// ASSET (it@asset)
// credencial  public key:  "TEST-026812a7-4811-43d1-8f09-8207c13823a5"
// credencial  Acces Token: TEST-6453243717102029-050120-8e42db516068f5814f7146cefe6696b4-1362723906  

// Produccion
// public key: APP_USR-cea272c1-a889-4a00-8d37-6f86ba43adb1
//Access Token: APP_USR-6453243717102029-050120-86625470ed742e0c3a8dfdfa709ade8a-1362723906
// Credenciales de prueba:

// Test user 1 vendedor TTEST53609
// test_user_1617378711@testuser.com
// credencial  public key:  "TEST-8cc0de02-11c6-4f51-86f9-5243bcc0b1cd"
// credencial  Acces Token: TEST-5990004718573364-050309-6f5ddb7d13b533596d97451683dcf03e-1365118455

// Produccion
// Publick key: "APP_USR-d1d798ac-ada1-4e7e-8ab8-512fe38520a4"
// Access token: APP_USR-5990004718573364-050309-e155277ff5747f15411c67de313903fd-1365118455

// Client Secret: oPB0PWcUBp0cTl9WzzqxW4XJJOjBCiok


//Test user 2  dor TTEST65297

export default function RadioInputs({seleccion}) {
  
  //MERCADO PAGO 
  const { preferenceId,setPreferenceId, orderData, setOrderData, dolarValue, setDolarValue } = React.useContext(Context);
  const [showLoged, setShowLoged] = useState(false);
  const {activar, playAnimation, notificar} = useContext(NotificationContext);
  const refA = useRef(null);

  
useEffect(()=> {
  const valorDolar = getDolarAmbito()
  console.log(valorDolar)
 
})

// const [preferenceId, setPreferenceId] = useState(null);
const [isLoading, setIsLoading] = useState(false);


//FIN DE MERCADO PAGO
  
  const [input6Disabled, setInput6Disabled] = useState(true ); 
  const [input7Disabled, setInput7Disabled] = useState(true ); 
  const [cargaron,             setCargaron] = useState(false);
  const [selectedTerreno,         setSelectedTerreno]         = useState('');
  const [financiacionGrid,        setFinanciationGrid]        = useState('contado');
  const [selectedFinanciation,    setSelectedFinanciation]    = useState(parseFloat(1));
  const [productos, setProductos] = useState([]);
  const [servicios, setServicios] = useState([]);
  
  const urlParams = new URLSearchParams(window.location.search);
  const status = Object.fromEntries(urlParams).status;
  // console.log("params del link:",Object.fromEntries(urlParams))
  
  const pagoRef           = useRef(null);
  const FinanciationRef   = useRef(null);

  const request = {
    terreno         : selectedTerreno,
    // pago            : selectedPago
  }

orderData.description=request.terreno;
orderData.financiation= 'contado'
const usuarioJson = sessionStorage.getItem('user');
const usuario = usuarioJson ? JSON.parse(usuarioJson) : null;
orderData.user = usuario;

useEffect(() => {
  const logOrderData = async () => {
    console.table("orderData:", await orderData);
  };

  logOrderData();
}, [orderData,selectedTerreno]);


//deberia hacer que productos tenga un useState y para que se ejecute cuando cambia la lista (reducir sto

// useEffect(
//   () => {
//     if(!(selectedTerreno==='')){
//     console.log('useEffect terreno','selectedTerreno:', selectedTerreno)
//   cardRef.current.scrollIntoView({ behavior: 'smooth' });
//   }
// }, [selectedTerreno,input2Disabled]);

useEffect(() => {
    window.scrollTo({top: 0, behavior: 'smooth' });  
}, []);

useEffect(()=>{
  seleccion(orderData);
},[orderData, setOrderData,selectedTerreno]);

useEffect(() => {
  async function cargar(){
    if(!cargaron){
      const prods = await getProductos();
      const servs = await getServicios();
      
      setProductos(prods);
      setServicios(servs);
      
      console.log(" finalizo y dice:",productos);
      
      setCargaron(true);
    }
  }
  cargar();
}, []);

  useEffect(() => {
    if (usuario) setShowLoged(false);
    else setShowLoged(true);
  }, [usuario]);

  

  useEffect(() => {
    if(orderData.description){    
      // console.log(refA.current)
      // console.log(refA.current.offsetHeight)
      activar(true);
      // notificar(<div style={{height: refA.current.offsetHeight}}></div>);}
      // setIsLoading(true);
      notificar(
      
        <div className={InputCSS["col-md-12"] + " " + InputCSS["col-lg-4"]} style={{ width: '100%', paddingBottom: '5px'}}>
        <div className={orderData.description ? InputCSS.summaryShow : InputCSS.summary}>
        <span className={InputCSS.raya}></span>
        <p>Costo de reserva</p>
        <span className={InputCSS.raya}></span>
          {showLoged ? (
            <div className={InputCSS["textContainer"]}>
            <span className={InputCSS["textNotification"]}>Debes iniciar sesión para comprar.</span>
            {/* <button
                className={InputCSS.test}
                onClick={onClick}
                id={InputCSS["checkout-btn-disabled"]}
                disabled='true'
              >
                Checkout
              </button> */}

            </div>
          ) : (
            <div className={InputCSS["summaryGroup"]}>
{renderSpinner()}
              <div className={InputCSS["summary-item"]}>
                <span className={InputCSS["text"]}>Subtotal USD</span>
                <span className={InputCSS["price"]} id={InputCSS["cart-total"]}>{(orderData.amount/dolarValue).toLocaleString('es-AR', { style: 'decimal', minimumFractionDigits: 2, maximumFractionDigits: 2 })}
+ IVA</span>
                
                <span className={InputCSS["text"]}>Subtotal ARS</span>
                <span className={InputCSS["price"]} id={InputCSS["cart-total"]}>{orderData.amount.toLocaleString('es-AR', { style: 'decimal', minimumFractionDigits: 2, maximumFractionDigits: 2 })}
+ IVA</span>
              </div>
              {/* <button
                className={InputCSS.test}
                onClick={onClick}
                id={InputCSS["checkout-btn"]}
                disabled={disabled}
                >
                Comprar
              </button> */}
            </div>
          )}
          
          
        </div>
          <Payment />
      </div>
                    );}
                    else{
                      activar(false)
                    }

      // setTimeout(() => {
      //   activar(false);
      // }, 3000);
  }, [orderData.amount, refA, isLoading,orderData,selectedTerreno]); 



function checkSKUByName(name) {
  const obj = productos.find(item => item.name === name);
  if (obj.sku) {
    return obj.sku;
  } else {
    return "no habia";
  }
}

function checkStockByName(name) {

  const obj = productos.find(item => item.name === name);
  if (obj && obj.stock > 0) {
    return true;
  } else {
    return false;
  }
}

function checkPriceByName(name) {
  // console.log(productos)
  const obj = productos.find(item => item.name === name);
  if (obj && obj.price > 0) {
    // console.log(obj.price)
    return obj.price;
  } else {
    return 0;
  }
}

function randomNum(){return 123}
const randomNumber = () => {return 666}

orderData.price = checkPriceByName(request.terreno);
//MERCADO PAGO
  sessionStorage.setItem("compra", JSON.stringify(orderData));

const handleClick = () => {
  orderData.sku=checkSKUByName(orderData.description);
  orderData.stock=checkStockByName(orderData.description);
  orderData.backURL="feedback"
  orderData.transfer = "\a\a\a\a\a\a\\tatatatatataaaaaaaaaaaaa" 
  orderData.tax = 0.21;
  setIsLoading(true);

  // postVenta();
  fetch("http://localhost:8080/payment", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(orderData),
  })
    .then((response) => {
      return response.json();
    })
    .then((preference) => {
      setPreferenceId(preference.id);
    })
    .catch((error) => {
      console.error(error);
    })
    .finally(() => {
      setIsLoading(false);
    });
};

const renderSpinner = () => {
  console.log("orderData de renderSpiner",orderData);
  if (isLoading) {
    return (
      <div className={InputCSS["spinner-wrapper"]}>
        <SpinnerCircular color='#009EE3' />
      </div>
    );
  }
  return null;
};


//FIN MERCADO PAGO





orderData.dolarValue = dolarValue;
  //IMPORTANTE!!!!!!!!
  //ESTA FUNCION ES LA QUE DEFINE CUANTO SE VA A FACTURAR, EN PESOS!!, multiplica por .05 por que es el 5% de la reserva
  //por ahora no hace el return de los servicios pero es copiar lo que dice el console log aun que cw da problemas
  const calculateAmount = (financiation, terreno, almacenamiento, guarderia, sum, cw) => {
    const terrenoPrice = terreno ? checkPriceByName(terreno) : 0;

    return (((terrenoPrice)* parseFloat(financiation)*dolarValue).toFixed(2)*0.05);
  };








  const handleSelectTerreno = (event) => {
    setSelectedTerreno(event.target.value);
    orderData.amount = calculateAmount(selectedFinanciation, event.target.value);
    };
  

  const handleSelectFinanciation = (value) => {
    console.log(value);
    orderData.financiation= value.grid;
    setSelectedFinanciation(value.financiation);
    setFinanciationGrid(value.grid)
    orderData.amount = calculateAmount(value.financiation, selectedTerreno);
    handleClick();
    
    
    
  };
  
  
  //Para corregir:
  // ahora si el cliente llegua hasta financiacion y luego cambia algo ese algo no se va a impactar en mercado pago
  // para solucionarlo se puede hacer varias cosas 
  // 1: se puede agregar handleClick() en calculateAmount, pero esto haria que el boton de mercado pago aparezca desde la primera 
  //2: 1 pero corroborando que solo lo ejecute una vez qeu todo tenga un valor disitinto al inicial 
  //3: bueno claramente eso es lo mas facil deberias hacerlo ahora pajerito


  let itemGrilla1;
  let itemGrilla2;
  let itemGrilla3;
  let itemGrilla4;
  let itemGrilla5;
  let itemGrilla6;
  let itemGrilla7;
  let itemGrilla8;
  let itemGrilla9;
  switch (selectedTerreno) {
    case 'Lote 1':
      itemGrilla1 = '11,50 x 23,00m';
      itemGrilla2 = '264,50m2';
      itemGrilla3 = '132,25m2';
      break;
    case 'Lote 2':
      itemGrilla1 = '11,50 x 23,00m';
      itemGrilla2 = '264,50m2';
      itemGrilla3 = '132,25m2';
      break;
    case 'Lote 3':
      itemGrilla1 = '12,00 x 23,00m';
      itemGrilla2 = '275,91m2';
      itemGrilla3 = '137,96m2';
      break;
    case 'Lote 4':
      itemGrilla1 = '12,00 x 23,00m';
      itemGrilla2 = '276,00m2';
      itemGrilla3 = '138,00m2';
      break;
    case 'Lote 5':
      itemGrilla1 = '11,50 x 23,00m';
      itemGrilla2 = '264,50m2';
      itemGrilla3 = '132,25m2';
      break;
    case 'Lote 6':
      itemGrilla1 = '11,50 x 23,00m';
      itemGrilla2 = '264,50m2';
      itemGrilla3 = '132,25m2';
      break;
    case 'Lote 7':
      itemGrilla1 = '9,00 x 23,00m';
      itemGrilla2 = '207,00m2';
      itemGrilla3 = '103,50m2';
      break;
    case 'Lote 8':
      itemGrilla1 = '11,50 x 23,00m';
      itemGrilla2 = '264,50m2';
      itemGrilla3 = '132,25m2';
      break;
    case 'Lote 9':
      itemGrilla1 = '11,50 x 23,00m';
      itemGrilla2 = '264,50m2';
      itemGrilla3 = '132,25m2';
      break;
    case 'Lote 10':
      itemGrilla1 = '12,00 x 27,50m';
      itemGrilla2 = '330,00m2';
      itemGrilla3 = '165,00m2';
      break;
    case 'Lote 11':
      itemGrilla1 = '12,00 x 27,50m';
      itemGrilla2 = '329,85m2';
      itemGrilla3 = '164,93m2';
      break;
    case 'Lote 12':
      itemGrilla1 = '11,50 x 23,00m';
      itemGrilla2 = '264,50m2';
      itemGrilla3 = '132,25m2';
      break;
    case 'Lote 13':
      itemGrilla1 = '11,50 x 23,00m';
      itemGrilla2 = '264,50m2';
      itemGrilla3 = '132,25m2';
      break;
    default:
      itemGrilla1 = '-';
      itemGrilla2 = '-';
      itemGrilla3 = '-';
      break;
  }


  switch (financiacionGrid) {
    case 'contado':
      itemGrilla7 = 'contado 1';
      itemGrilla8 = 'No aplica';
      itemGrilla9 = 'No aplica';
      break;
    case '70/30':
      itemGrilla7 = '70/30 primero';
      itemGrilla8 = ( (((orderData.amount*20)/dolarValue)*0.7)/12).toFixed(2);
      itemGrilla9 = '70% en 11 cuotas';
      break;
    case '100%':
      itemGrilla7 = '100 primero';
      itemGrilla8 =  ( (((orderData.amount*20)/dolarValue))/12).toFixed(2);
      itemGrilla9 = '12 cuotas';
      break;
      default:
        itemGrilla7 = '-';
        itemGrilla8 = '-';
        itemGrilla9 = '-';
        break;
    }
    // className={selectedTerreno? "" : InputCSS.transparency50}

if(cargaron === true){

  return (
    
    <div >
      <div>
        <div>
          <b className={InputCSS.b}>Terreno</b>
          <p className={InputCSS.p}> ¿Cuál es el mejor para su familia?</p>
          {/* <div className={InputCSS.moreInfo}>
            <Info1/>
          </div> */}
        </div>
        {/* <div className={InputCSS['icono']}>?</div> */}

        <div className={InputCSS.grilla}> 
          <div className={`${InputCSS.itemGrilla} ${InputCSS.itemGrilla1}`}>{itemGrilla1}</div>
          <div className={`${InputCSS.itemGrilla} ${InputCSS.itemGrilla2}`}>{itemGrilla2}</div>
          <div className={`${InputCSS.itemGrilla} ${InputCSS.itemGrilla3}`}>{itemGrilla3}</div>
          <div className={`${InputCSS.itemGrilla} ${InputCSS.itemGrilla4}`}>Ancho x Largo</div>
          <div className={`${InputCSS.itemGrilla} ${InputCSS.itemGrilla5}`}>Superficie terreno</div>
          <div className={`${InputCSS.itemGrilla} ${InputCSS.itemGrilla6}`}>Constructibilidad</div>
        </div>

      <div className={InputCSS['radioInputs']} style={{ maxHeight: '265px', overflowY: 'auto' }}>          <label className={`${InputCSS['radioInput']} ${selectedTerreno === 'Lote 1' ? InputCSS.selected : ''}`}>
            <span><input
              type="radio" 
              value="Lote 1"
              checked={selectedTerreno === 'Lote 1'} 
              onChange={handleSelectTerreno}
              disabled={!checkStockByName("Lote 1")} 
              />
            F1 </span> <div><span className={InputCSS['precio']}>${numeral((checkPriceByName("Lote 1")*selectedFinanciation).toFixed(2)).format('0,0.00')}</span>  {!checkStockByName("Lote 1") && <div className={InputCSS['end']}>  <span className={InputCSS['noDisp']}>‎ Lote no disponible</span></div>}</div>
          </label>
        <label className={`${InputCSS['radioInput']} ${selectedTerreno === 'Lote 2' ? InputCSS.selected : ''}`}>
          <span><input 
          type="radio" 
          value="Lote 2"
          checked={selectedTerreno === 'Lote 2'} 
          onChange={handleSelectTerreno}
          disabled={!checkStockByName("Lote 2")}    
          />
          F2 </span> <div><span className={InputCSS['precio']}>${numeral(checkPriceByName("Lote 2")*selectedFinanciation.toFixed(2)).format('0,0.00')}</span>  {!checkStockByName("Lote 2") && <div className={InputCSS['end']}>  <span className={InputCSS['noDisp']}>‎ Lote no disponible</span></div>}</div>
        </label>
        <label className={`${InputCSS['radioInput']} ${selectedTerreno === 'Lote 3' ? InputCSS.selected : ''}`}>
          <span><input 
          type="radio" 
          value="Lote 3" 
          checked={selectedTerreno === 'Lote 3'} 
          onChange={handleSelectTerreno}
          disabled={!checkStockByName("Lote 3")}  
          />
          F3 </span> <div><span className={InputCSS['precio']}>${(checkPriceByName("Lote 3")*selectedFinanciation).toFixed(2)}</span>  {!checkStockByName("Lote 3") && <div className={InputCSS['end']}>  <span className={InputCSS['noDisp']}>‎ Lote no disponible</span></div>}</div>
        </label>
        <label className={`${InputCSS['radioInput']} ${selectedTerreno === 'Lote 4' ? InputCSS.selected : ''}`}>
          <span><input 
          type="radio" 
          value="Lote 4"
          checked={selectedTerreno === 'Lote 4'} 
          onChange={handleSelectTerreno} 
          disabled={!checkStockByName("Lote 4")}
          />
          F4 </span> <div><span className={InputCSS['precio']}>${(checkPriceByName("Lote 4")*selectedFinanciation).toFixed(2)}</span>  {!checkStockByName("Lote 4") && <div className={InputCSS['end']}>  <span className={InputCSS['noDisp']}>‎ Lote no disponible</span></div>}</div>
        </label>
        <label className={`${InputCSS['radioInput']} ${selectedTerreno === 'Lote 5' ? InputCSS.selected : ''}`}>
          <span><input 
          type="radio" 
          value="Lote 5"
          checked={selectedTerreno === 'Lote 5'} 
          onChange={handleSelectTerreno} 
          disabled={!checkStockByName("Lote 5")} 
          />
          F5 </span> <div><span className={InputCSS['precio']}>${numeral(checkPriceByName("Lote 5")*selectedFinanciation.toFixed(2)).format('0,0.00')}</span>  {!checkStockByName("Lote 5") && <div className={InputCSS['end']}>  <span className={InputCSS['noDisp']}>‎ Lote no disponible</span></div>}</div>
        </label>
        <label className={`${InputCSS['radioInput']} ${selectedTerreno === 'Lote 6' ? InputCSS.selected : ''}`}>
          <span><input 
          type="radio" 
          value="Lote 6"
          checked={selectedTerreno === 'Lote 6'} 
          onChange={handleSelectTerreno}
          disabled={!checkStockByName("Lote 6")}  
          />
          F6</span> <div><span className={InputCSS['precio']}>${(checkPriceByName("Lote 6")*selectedFinanciation).toFixed(2)}</span>  {!checkStockByName("Lote 6") && <div className={InputCSS['end']}>  <span className={InputCSS['noDisp']}>‎ Lote no disponible</span></div>}</div>
        </label>
        <label className={`${InputCSS['radioInput']} ${selectedTerreno === 'Lote 7' ? InputCSS.selected : ''}`}>
          <span><input 
          type="radio" 
          value="Lote 7"
          checked={selectedTerreno === 'Lote 7'} 
          onChange={handleSelectTerreno} 
          disabled={!checkStockByName("Lote 7")} 
          />
          F7 </span> <div><span className={InputCSS['precio']}>${(checkPriceByName("Lote 7")*selectedFinanciation).toFixed(2)}</span>  {!checkStockByName("Lote 7") && <div className={InputCSS['end']}>  <span className={InputCSS['noDisp']}>‎ Lote no disponible</span></div>}</div>
        </label>
        <label className={`${InputCSS['radioInput']} ${selectedTerreno === 'Lote 8' ? InputCSS.selected : ''}`}>
          <span><input type="radio" value="Lote 8" checked={selectedTerreno === 'Lote 8'} onChange={handleSelectTerreno} disabled={!checkStockByName("Lote 8")} />
          F8 </span> <div><span className={InputCSS['precio']}>${(checkPriceByName("Lote 8")*selectedFinanciation).toFixed(2)}</span>  {!checkStockByName("Lote 8") && <div className={InputCSS['end']}>  <span className={InputCSS['noDisp']}>‎ Lote no disponible</span></div>}</div>
        </label>
        <label className={`${InputCSS['radioInput']} ${selectedTerreno === 'Lote 9' ? InputCSS.selected : ''}`}>
          <span><input type="radio" value="Lote 9" checked={selectedTerreno === 'Lote 9'} onChange={handleSelectTerreno} disabled={!checkStockByName("Lote 9")} />
          F9 </span> <div><span className={InputCSS['precio']}>${(checkPriceByName("Lote 9")*selectedFinanciation).toFixed(2)}</span>  {!checkStockByName("Lote 9") && <div className={InputCSS['end']}>  <span className={InputCSS['noDisp']}>‎ Lote no disponible</span></div>}</div>
        </label>
        <label className={`${InputCSS['radioInput']} ${selectedTerreno === 'Lote 10' ? InputCSS.selected : ''}`}>
          <span><input type="radio" value="Lote 10" checked={selectedTerreno === 'Lote 10'} onChange={handleSelectTerreno} disabled={!checkStockByName("Lote 10")}/>
          F10 </span> <div><span className={InputCSS['precio']}>${(checkPriceByName("Lote 10")*selectedFinanciation).toFixed(2)}</span>  {!checkStockByName("Lote 10") && <div className={InputCSS['end']}>  <span className={InputCSS['noDisp']}>‎ Lote no disponible</span></div>}</div>
        </label>
        <label className={`${InputCSS['radioInput']} ${selectedTerreno === 'Lote 11' ? InputCSS.selected : ''}`}>
          <span><input type="radio" value="Lote 11" checked={selectedTerreno === 'Lote 11'} onChange={handleSelectTerreno} disabled={!checkStockByName("Lote 11")} />
          F11 </span> <div><span className={InputCSS['precio']}>${(checkPriceByName("Lote 11")*selectedFinanciation).toFixed(2)}</span>  {!checkStockByName("Lote 11") && <div className={InputCSS['end']}>  <span className={InputCSS['noDisp']}>‎ Lote no disponible</span></div>}</div>
        </label>
        <label className={`${InputCSS['radioInput']} ${selectedTerreno === 'Lote 12' ? InputCSS.selected : ''}`}>
          <span><input type="radio" value="Lote 12" checked={selectedTerreno === 'Lote 12'} onChange={handleSelectTerreno} disabled={!checkStockByName("Lote 12")} />
          F12 </span> <div><span className={InputCSS['precio']}>${(checkPriceByName("Lote 12")*selectedFinanciation).toFixed(2)}</span>  {!checkStockByName("Lote 12") && <div className={InputCSS['end']}>  <span className={InputCSS['noDisp']}>‎ Lote no disponible</span></div>}</div>
        </label>
        <label className={`${InputCSS['radioInput']} ${selectedTerreno === 'Lote 13' ? InputCSS.selected : ''}`}>
          <span><input type="radio" value="Lote 13" checked={selectedTerreno === 'Lote 13'} onChange={handleSelectTerreno} disabled={!checkStockByName("Lote 13")} />
          F13 </span> <div><span className={InputCSS['precio']}>${(checkPriceByName("Lote 13")*selectedFinanciation).toFixed(2)}</span>  {!checkStockByName("Lote 13") && <div className={InputCSS['end']}>  <span className={InputCSS['noDisp']}>‎ Lote no disponible</span></div>}</div>
        </label>

        <br/>
        
      </div>
      </div>

        <div className={selectedTerreno?            "" : InputCSS.transparency50}>
          <div className={InputCSS['ref']} ref={FinanciationRef}>
            <div>
              <b className={InputCSS.b}>Financiación</b>
              <p className={InputCSS.p}>Selecciona el mejor para ti.</p>
              {/* <div className={InputCSS.moreInfo}>
                <Info6/>
              </div> */}
            </div>
              <div className={InputCSS.containers}>
                <div className={InputCSS.tabs}>
                  <input 
                    type="radio" 
                    id="radio1" 
                    name="tabs"
                    value="contado"
                    defaultChecked
                    onChange={() => handleSelectFinanciation({financiation:1, grid : 'contado'})}
                    disabled={input7Disabled}
                  />
                  <label htmlFor="radio1" className={InputCSS.tab}>Precio contado</label>
                  <input 
                    type="radio" 
                    id="radio2" 
                    name="tabs"
                    value="financiado7030"
                    onChange={() => handleSelectFinanciation({financiation :1.1917, grid :'70/30'})}
                    disabled={input7Disabled}

                  />
                  <label htmlFor="radio2" className={InputCSS.tab} >Financiado 70%/30%</label>
                  <input 
                    type="radio" 
                    id="radio3"   
                    name="tabs" 
                    value="financiado100"
                    onChange={() => handleSelectFinanciation({financiation :1.1917, grid :'100%'})}
                    disabled={input7Disabled}

                  />
                  <label htmlFor="radio3" className={InputCSS.tab}>Financiado 100%</label>
                  <span className={InputCSS.glider}></span>
                </div>
              </div>
                <div className={InputCSS.grilla}>
                  <div className={`${InputCSS.itemGrilla} ${InputCSS.itemGrilla4}`}>Precio para reservar</div>
                  <div className={`${InputCSS.itemGrilla} ${InputCSS.itemGrilla5}`}>Precio de cuota mensual</div>
                  <div className={`${InputCSS.itemGrilla} ${InputCSS.itemGrilla6}`}>Cantidad de cuotas</div>
                  <div className={`${InputCSS.itemGrilla} ${InputCSS.itemGrilla1}`}>USD {orderData.amount/dolarValue}</div>
                  <div className={`${InputCSS.itemGrilla} ${InputCSS.itemGrilla2}`}>{itemGrilla8}</div>
                  <div className={`${InputCSS.itemGrilla} ${InputCSS.itemGrilla3}`}>{itemGrilla9}</div>
                </div>
          </div>
        </div>
      </div>
    
  );
}else{
  
  return(
    <div>
    <div>
      <div className={InputCSS.textContainer}>
  <b className={InputCSS.text}>Terreno</b> <p className={InputCSS.p}>¿Cuál es el mejor para su familia?</p>
      </div>
      <div className={InputCSS['radioInputs']}>
        <label className={`${InputCSS['radioInput']} ${selectedTerreno === 'Lote 1' ? InputCSS.selected : ''}`}>
          <input 
            type="radio" 
            value="F1" 
            checked={selectedTerreno === 'Lote 1'} 
            readOnly
            
            />
          F 1 mock
        </label>
      <label className={`${InputCSS['radioInput']} ${selectedTerreno === 'Lote 2' ? InputCSS.selected : ''}`}>
        <span><input 
        type="radio" 
        value="F2" 
        checked={selectedTerreno === 'Lote 2'} 
        readOnly
        
        />
        F 2
      </span></label>
      <label className={`${InputCSS['radioInput']} ${selectedTerreno === 'Lote 3' ? InputCSS.selected : ''}`}>
        <span><input 
        type="radio" 
        value="F3" 
        checked={selectedTerreno === 'Lote 3'} 
        readOnly
        
        />
        F 3 
      </span></label>
      <label className={`${InputCSS['radioInput']} ${selectedTerreno === 'Lote 4' ? InputCSS.selected : ''}`}>
        <span><input 
        type="radio" 
        value="F4" 
        checked={selectedTerreno === 'Lote 4'} 
        readOnly
        
        />
        F 4 
      </span></label>
      <label className={`${InputCSS['radioInput']} ${selectedTerreno === 'Lote 5' ? InputCSS.selected : ''}`}>
        <span><input 
        type="radio" 
        value="F5" 
        checked={selectedTerreno === 'Lote 5'} 
        readOnly 
        
        />
        F 5 
      </span></label>
      <label className={`${InputCSS['radioInput']} ${selectedTerreno === 'Lote 6' ? InputCSS.selected : ''}`}>
        <span><input 
        type="radio" 
        value="F6" 
        checked={selectedTerreno === 'Lote 6'} 
        readOnly
         
        />
        F 6 
      </span></label>
      <label className={`${InputCSS['radioInput']} ${selectedTerreno === 'Lote 7' ? InputCSS.selected : ''}`}>
        <span><input 
        type="radio" 
        value="F7" 
        checked={selectedTerreno === 'Lote 7'} 
        readOnly 
        
        />
        F 7 
      </span></label>
      <label className={`${InputCSS['radioInput']} ${selectedTerreno === 'Lote 8' ? InputCSS.selected : ''}`}>
        <span><input type="radio" value="F8" checked={selectedTerreno === 'Lote 8'} 
        readOnly  
        />
        F 8 
      </span></label>
      <label className={`${InputCSS['radioInput']} ${selectedTerreno === 'Lote 9' ? InputCSS.selected : ''}`}>
        <span><input type="radio" value="F9" checked={selectedTerreno === 'Lote 9'} readOnly />
        F 9 
      </span></label>
      <label className={`${InputCSS['radioInput']} ${selectedTerreno === 'Lote 10' ? InputCSS.selected : ''}`}>
        <span><input type="radio" value="F10" checked={selectedTerreno === 'Lote 10'} readOnly  />
        F 10 
      </span></label>
      <label className={`${InputCSS['radioInput']} ${selectedTerreno === 'Lote 11' ? InputCSS.selected : ''}`}>
        <span><input type="radio" value="F11" checked={selectedTerreno === 'Lote 11'} readOnly  />
        F 11 
      </span></label>
      <label className={`${InputCSS['radioInput']} ${selectedTerreno === 'Lote 12' ? InputCSS.selected : ''}`}>
        <span><input type="radio" value="F12" checked={selectedTerreno === 'Lote 12'} readOnly   />
        F 12 
      </span></label>
      <label className={`${InputCSS['radioInput']} ${selectedTerreno === 'Lote 13' ? InputCSS.selected : ''}`}>
        <span><input type="radio" value="F13" checked={selectedTerreno === 'Lote 13'} readOnly   />
        F 13 
      </span></label>
      <br/>
      
    </div>
      </div>



    <div className={InputCSS['ref']} ref={pagoRef}>
    <div><b className={InputCSS.b}> Opciones de pago.</b> <p className={InputCSS.p}>Seleccione el que funcione para usted.</p></div>
    <div className={InputCSS['radioInputs']}>
      <label className={`${InputCSS['radioInput']} ${ InputCSS.selected}`}>
        <span><input type="radio" value="1" /**onChange={handleSelectPago}**/ disabled={input6Disabled}/>
        1 cuota
      </span></label>
      <label className={`${InputCSS['radioInput']} ${InputCSS.selected}`}>
        <span><input type="radio" value="6"  /**onChange={handleSelectPago}**/ disabled={input6Disabled}/>
        6 cuotas
      </span></label>
      <label className={`${InputCSS['radioInput']} ${ InputCSS.selected}`}>
        <span><input type="radio" value="12" /**onChange={handleSelectPago}**/ disabled={input6Disabled}/>
        12 cuotas
      </span></label>
      <br/>
    </div>
    </div>
  </div>
  

  )
}
} 