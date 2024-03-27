import React, { useEffect, useState, useContext, useRef } from "react";
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react';
import { Paso1, Paso2, Paso3, Paso4, Paso5 } from './PasosCompra';
import InputCSS from '../css/Inputs.module.css';
import Inputs from '../components/InputsCompra';
import BannerCSS from '../css/BannerProductos.module.css';
import { Button } from '@mui/material';
import Checkout from "./Checkout";

initMercadoPago("TEST-8cc0de02-11c6-4f51-86f9-5243bcc0b1cd");




const ShopInversion = () => {
  const [tipoInversion, setTipoInversion] = useState('comercial');
  const [montoInversion, setMontoInversion] = useState();
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
    const resultado = montoInversion + gananciaAnual;
    return isNaN(resultado) ? "0" : resultado.toFixed(2);
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
          <h3 className={InputCSS.titleInv}>¿Qué tipo de inversión estás buscando?</h3>
          <h4 className={InputCSS.subtitleInv}>Selecciona la mejor opcion para vos</h4>
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
              <h3 className={InputCSS.titleSim}>Simulá tu inversión</h3>
              <div className={InputCSS.monto}>
                <label htmlFor="monto" className={InputCSS.label}>Monto de la inversión</label>
                <input
                  type="number"
                  id="monto"
                  placeholder="Monto"
                  className={InputCSS.inputMonto}
                  value={montoInversion}
                  onChange={handleMontoInversionChange}
                  required
                />
              </div>
              <div className={`${InputCSS.monto} ${InputCSS.separado}`}>
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
              
              <div className={InputCSS.botonComercial}>
                <Button
                    onClick={handleInvertir}
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
                    className={`${BannerCSS.button} ${BannerCSS.backButton} ${BannerCSS.backButtonAnimation}`}>
                    Confirmar
                  </Button>
              </div>
            </div>
          )}

          {/* Contenido específico para inversión residencial */}
          {tipoInversion === 'residencial' && (
            <div className={InputCSS.content}>
              {/* <h3 className={InputCSS.titleSel}>Selecciona la mejor opcion para vos</h3> */}
              <div>
              <Inputs seleccion={handleSeleccionUpdate}/>
                <div className={InputCSS.botonComercial}>
                  <Button
                          onClick={handleInvertir}
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
                        Continuar
                    </Button>
                  </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Aquí puedes agregar otro contenido que reemplazará el contenedor principal */}
      {!mostrarContenedorPrincipal && (
        <div className={InputCSS.containers}>
          <h3 className={InputCSS.titleInv}>Completa tus datos para continuar</h3>
          <h4 className={InputCSS.subtitleInv}>Crear cuenta</h4>

          <div className={InputCSS.inputs}>
            <div className={InputCSS.inpustPart}>
              <label htmlFor="nombre" className={InputCSS.label}>Nombre</label>
              <input
                type="text"
                id="nombre"
                
                className={InputCSS.input}
                required
              />
            </div>
            
            <div className={InputCSS.inpustPart}>
              <label htmlFor="apellido" className={InputCSS.label}>Apellido</label>
              <input
                type="text"
                id="apellido"
                className={InputCSS.input}
                required
              />
            </div>

            <div className={InputCSS.inpustPart}>
              <label htmlFor="email" className={InputCSS.label}>Email</label>
              <input
                type="email"
                id="email"
                className={InputCSS.input}
                required
              />
            </div>

            <div className={InputCSS.inpustPart}>
              <label htmlFor="dni" className={InputCSS.label}>DNI</label>
              <input
                type="dni"
                id="dni"
                className={InputCSS.input}
                required
              />
            </div>

            <div className={InputCSS.inpustPart}>
              <label htmlFor="cbu-alias" className={InputCSS.label}>CBU o Alias</label>
              <input
                type="cbu-alias"
                id="cbu-alias"
                className={InputCSS.input}
                required
              />
            </div>

            <div className={InputCSS.inpustPart}>
              <label htmlFor="telefono" className={InputCSS.label}>Teléfono</label>
              <input
                type="telefono"
                id="telefono"
                className={InputCSS.input}
                required
              />
            </div>

            <div className={InputCSS.inpustPart}>
              <label htmlFor="domicilio" className={InputCSS.label}>Domicilio</label>
              <input
                type="domicilio"
                id="domicilio"
                className={InputCSS.input}
                required
              />
            </div>

            <div className={InputCSS.inpustPart}>
              <label htmlFor="cuilcuit" className={InputCSS.label}>CUIL o CUIT</label>
              <input
                type="cuilcuit"
                id="cuilcuit"
                className={InputCSS.input}
                required
              />
            </div>

            <div className={InputCSS.inpustPart}>
              <label htmlFor="inversión" className={InputCSS.label}>Inversión</label>
              <input
                type="inversión"
                id="inversión"
                className={InputCSS.input}
                required
              />
            </div>
            <div className={InputCSS.labelTerm}>
              <label htmlFor="terminosCondiciones" className={InputCSS.label}>
                <input
                  type="checkbox"
                  id="terminosCondiciones"
                  className={InputCSS.checkbox}
                  required
                />
                Acepto los términos y condiciones
              </label>
            </div>

            <div className={InputCSS.botonComercial}>
            <Button
            
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
                        Finalizar
                    </Button>
            </div>
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






