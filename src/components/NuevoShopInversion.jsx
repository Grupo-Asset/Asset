import React, { useState } from 'react';
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react';
import { Paso1, Paso2, Paso3, Paso4, Paso5 } from './PasosCompra';
import InputCSS from '../css/Inputs.module.css';
import Inputs from '../components/InputsCompra'

initMercadoPago("TEST-8cc0de02-11c6-4f51-86f9-5243bcc0b1cd"); // Inicializa MercadoPago después de las importaciones

const ShopInversion = () => {
  const [tipoInversion, setTipoInversion] = useState('comercial');
  const [montoInversion, setMontoInversion] = useState(0);
  const [step, setStep] = useState(1);
  const [mostrarContenidoInversion, setMostrarContenidoInversion] = useState(true);
  const [mostrarContenedorPrincipal, setMostrarContenedorPrincipal] = useState(true);

  const handleTipoInversionChange = (event) => {
    setTipoInversion(event.target.value);
  };

  const handleMontoInversionChange = (event) => {
    setMontoInversion(parseFloat(event.target.value));
  };

  const calcularGananciaAnual = () => {
    const gananciaAnual = montoInversion * 0.02;
    return (montoInversion + gananciaAnual).toFixed(2);
  };

  const handleNext = () => {
    setStep(step + 1);
  };

  const handleInvertir = () => {
    setMostrarContenidoInversion(false);
    setMostrarContenedorPrincipal(false);
  };


  const [seleccion, setSeleccion]= useState({});
  
  const handleSeleccionUpdate = (nuevaSeleccion)=>{
    setSeleccion(nuevaSeleccion);
    // console.log('hola desde shop')

  }

  return (
    <div>
      {mostrarContenedorPrincipal && (
        <div className={InputCSS.containers}>
          <h3 className={InputCSS.title}>¿Qué tipo de inversión estás buscando?</h3>
          <h4 className={InputCSS.subtitle}>¿Cuál es la mejor opción?</h4>
          <div className={InputCSS.tabs}>
            <input
              type="radio"
              id="radio1"
              name="tabs"
              value="comercial"
              checked={tipoInversion === 'comercial'}
              onChange={handleTipoInversionChange}
            />
            <label htmlFor="radio1" className={InputCSS.tab}>
              Comercial
            </label>
            <input
              type="radio"
              id="radio2"
              name="tabs"
              value="residencial"
              checked={tipoInversion === 'residencial'}
              onChange={handleTipoInversionChange}
            />
            <label htmlFor="radio2" className={InputCSS.tab}>
              Residencial
            </label>
            <span className={InputCSS.glider}></span>
          </div>

          {/* Contenido específico para inversión comercial */}
          {tipoInversion === 'comercial' && mostrarContenidoInversion && (
            <div className={InputCSS.content}>
              <h3 className={InputCSS.title}>Simulá tu inversión</h3>
              <div className={InputCSS.monto}>
                <label htmlFor="monto" className={InputCSS.label}>Monto de la inversión</label>
                <input
                  type="number"
                  id="monto"
                  placeholder="Monto"
                  className={InputCSS.inputMonto}
                  value={montoInversion}
                  onChange={handleMontoInversionChange}
                />
              </div>
              <div className={`${InputCSS.montoSelected} ${InputCSS.separado}`}>
                <p className={InputCSS.result}>Ganancia anual estimada</p>
                <p>$ {calcularGananciaAnual()}</p>
              </div>
              
              <div className={InputCSS.datos}>
                <div>
                  <p>Plazo mínimo</p>
                  <p>Superficie en m²</p>
                  <p>Rentabilidad anual</p>
                </div>
                <div className={InputCSS.datosAlign}>
                  <p>2 años</p>
                  <p>20.7</p>
                  <p>2%</p>
                </div>
              </div>
              
              <div>
                <button onClick={handleInvertir}>Confirmar</button>
              </div>
            </div>
          )}

          {/* Contenido específico para inversión residencial */}
          {tipoInversion === 'residencial' && (
            <div className={InputCSS.content}>
              <h3 className={InputCSS.title}>Selecciona la mejor opcion para vos</h3>
              <div>
              <Inputs seleccion={handleSeleccionUpdate}/>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Aquí puedes agregar otro contenido que reemplazará el contenedor principal */}
      {!mostrarContenedorPrincipal && (
        <div className={InputCSS.containers}>
          <h3 className={InputCSS.title}>Inversion</h3>
          <h4 className={InputCSS.subtitle}>Tu futuro asegurado</h4>
          <div className={InputCSS.tabs}>
            <input
              type="radio"
              id="radio1"
              name="tabs"
              value="comercial"
              checked={tipoInversion === 'comercial'}
              onChange={handleTipoInversionChange}
            />
            <label htmlFor="radio1" className={InputCSS.tab}>
              Pesos
            </label>
            <input
              type="radio"
              id="radio2"
              name="tabs"
              value="residencial"
              checked={tipoInversion === 'residencial'}
              onChange={handleTipoInversionChange}
            />
            <label htmlFor="radio2" className={InputCSS.tab}>
              Dólares
            </label>
            <span className={InputCSS.glider}></span>
          </div>
          <div>
            <div id="wallet_container"></div>
            <Wallet initialization={{ preferenceId: '<PREFERENCE_ID>' }} customization={{ texts:{ valueProp: 'smart_option'}}} />
          </div>
          
          {tipoInversion === 'comercial' && mostrarContenidoInversion && (
            <div className={InputCSS.content}>
              <h3 className={InputCSS.title}>Simulá tu inversión</h3>
              <div className={InputCSS.monto}>
                <label htmlFor="monto" className={InputCSS.label}>Monto de la inversión</label>
                <input
                  type="number"
                  id="monto"
                  placeholder="Monto"
                  className={InputCSS.inputMonto}
                  value={montoInversion}
                  onChange={handleMontoInversionChange}
                />
              </div>
              <div className={InputCSS.montoSelected}>
                <p className={InputCSS.result}>Ganancia anual estimada: ${calcularGananciaAnual()}
                </p>
              </div>
              
              <div className={InputCSS.datos}>
                <div>
                  <p>Plazo mínimo</p>
                  <p>Superficie en m²</p>
                  <p>Rentabilidad anual</p>
                </div>
                <div className={InputCSS.datosAlign}>
                  <p>2 años</p>
                  <p>20.7</p>
                  <p>2%</p>
                </div>
              </div>
              
              <div>
                <button onClick={handleInvertir}>Invertir</button>
              </div>
            </div>
          )}

          {/* Contenido específico para inversión residencial */}
          {tipoInversion === 'residencial' && (
            <div className={InputCSS.content}>
              <h3 className={InputCSS.title}>Contenido para inversión residencial</h3>
              {/* lista de inputs */}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ShopInversion;
