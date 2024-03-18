import React, { useState } from 'react';
import { Paso1, Paso2, Paso3, Paso4, Paso5 } from './PasosCompra';
import InputCSS from '../css/Inputs.module.css';

const ShopInversion = () => {
  const [tipoInversion, setTipoInversion] = useState('comercial');
  const [montoInversion, setMontoInversion] = useState(0);
  const [step, setStep] = useState(1); // Agrega el estado 'step'
  const [mostrarContenidoInversion, setMostrarContenidoInversion] = useState(true); // Estado para controlar la visualización del contenido de inversión
  const [mostrarContenedorPrincipal, setMostrarContenedorPrincipal] = useState(true); // Estado para controlar la visualización del contenedor principal

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
    setStep(step + 1); // Avanza al siguiente paso
  };

  const handleInvertir = () => {
    setMostrarContenidoInversion(false); // Oculta el contenido de inversión
    setMostrarContenedorPrincipal(false); // Oculta el contenedor principal
  };

  return (
    <div>
      {mostrarContenedorPrincipal && ( // Verifica si se debe mostrar el contenedor principal
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
                <button onClick={handleInvertir}>Confirmar</button>
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
          {/* {metodos de pago} */}
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
