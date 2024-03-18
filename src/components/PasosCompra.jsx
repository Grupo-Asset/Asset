import React, { useState } from 'react';
import InputCSS from '../css/Inputs.module.css';

const Paso1 = () => {

  const [tipoInversion, setTipoInversion] = useState('comercial');
  const [montoInversion, setMontoInversion] = useState(0);

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




  const [step, setStep] = useState(1);

  const handleNext = () => {
    if (step < 5) {
      setStep(step + 1);
    }
  };

  const handlePrevious = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleStepClick = (num) => {
    setStep(num);
  };


  return (
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
      {tipoInversion === 'comercial' && (
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
              {/* {Aca va el boton qeu redirecciona} */}
            </div>
        </div>
      )}

      {/* Contenido específico para inversión residencial */}
      {tipoInversion === 'residencial' && (
        <div className={InputCSS.content}>
          <h3 className={InputCSS.title}>Contenido para inversión residencial</h3>
          <div>
      <div>
        <h2>Paso {step} de 5</h2>
      </div>
      <div>
        {/* Lista de pasos representados como bolitas con números */}
        <ul style={{ display: 'flex', justifyContent: 'center', listStyleType: 'none', padding: 0 }}>
          {[1, 2, 3, 4, 5].map((num) => (
            <li
              key={num}
              style={{
                borderRadius: '50%',
                width: '30px',
                height: '30px',
                backgroundColor: num === step ? 'black' : 'gray', // Cambia el color de la bolita solo para el paso actual
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginRight: '10px',
                color: 'white',
                fontWeight: '200',
                cursor: 'pointer',
              }}
              onClick={() => handleStepClick(num)}
            >
              {num}
            </li>
          ))}
        </ul>
      </div>
      <div>
        {/* Muestra el componente del paso actual */}
        {step === 1 && <Paso1 />}
        {step === 2 && <Paso2 />}
        {step === 3 && <Paso3 />}
        {step === 4 && <Paso4 />}
        {step === 5 && <Paso5 />}
      </div>
      <div>
        <button onClick={handlePrevious} disabled={step === 1}>Anterior</button>
        <button onClick={handleNext} disabled={step === 5}>Siguiente</button>
      </div>
    </div>
        </div>
      )}
    </div>
  );
};


const Paso2 = () => {
  return (
    <div>
      {/* Contenido del paso 2 */}
      <h3>Paso 2</h3>
      <p>Contenido del paso 2</p>
    </div>
  );
};

const Paso3 = () => {
  return (
    <div>
      {/* Contenido del paso 3 */}
      <h3>Paso 3</h3>
      <p>Contenido del paso 3</p>
    </div>
  );
};

const Paso4 = () => {
  return (
    <div>
      {/* Contenido del paso 4 */}
      <h3>Paso 4</h3>
      <p>Contenido del paso 4</p>
    </div>
  );
};

const Paso5 = () => {
  return (
    <div>
      {/* Contenido del paso 5 */}
      <h3>Paso 5</h3>
      <p>Contenido del paso 5</p>
    </div>
  );
};

export { Paso1, Paso2, Paso3, Paso4, Paso5 };
