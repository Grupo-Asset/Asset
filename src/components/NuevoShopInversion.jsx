// ShopInversion.js
import React, { useState } from 'react';
import { Paso1, Paso2, Paso3, Paso4, Paso5 } from './PasosCompra';

const ShopInversion = () => {
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
  );
};

export default ShopInversion;
