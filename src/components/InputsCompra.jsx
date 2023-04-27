import React, { useState, useRef, useEffect } from 'react';
import InputCSS from '../css/Inputs.module.css';

export default function RadioInputs() {
  const [selectedTerreno, setSelectedTerreno] = useState('');
  const [input2Disabled, setInput2Disabled] = useState(true);
  const [input3Disabled, setInput3Disabled] = useState(true);
  const [input4Disabled, setInput4Disabled] = useState(true);
  const [input5Disabled, setInput5Disabled] = useState(true);
  const [input6Disabled, setInput6Disabled] = useState(true);
  const [selectedAlmacenamiento, setSelectedAlmacenamiento] = useState('');
  const [selectedCard, setSelectedCard] = useState('');
  const [selectedGuarderia, setSelectedGuarderia] = useState('');
  const [selectedSUM, setSelectedSUM] = useState('');
  const [selectedPago, setSelectedPago] = useState('');

  const almacenamientoRef = useRef(null);
  const cardRef = useRef(null);
  const guarderiaRef = useRef(null);
  const sumRef = useRef(null);
  const pagoRef = useRef(null);

  useEffect(() => {
    cardRef.current.scrollIntoView({ behavior: 'smooth' });
  }, [selectedTerreno]);

  useEffect(() => {
    almacenamientoRef.current.scrollIntoView({ behavior: 'smooth' });
  }, [selectedCard]);

  useEffect(() => {
    guarderiaRef.current.scrollIntoView({ behavior: 'smooth' });
  }, [selectedAlmacenamiento]);

  useEffect(() => {
    sumRef.current.scrollIntoView({ behavior: 'smooth' });
  }, [selectedGuarderia]);

  useEffect(() => {
    pagoRef.current.scrollIntoView({ behavior: 'smooth' });
  }, [selectedSUM]);

  const handleSelectTerreno = (event) => {
    setSelectedTerreno(event.target.value);

      if (event.target.value != '') {
        setInput2Disabled(false);
      } else {
        setInput2Disabled(true);
      }
    };

    const handleSelectCard = (event) => {
      setSelectedCard(event.target.value);
      
      if (event.target.value != '') {
        setInput3Disabled(false);
      } else {
        setInput3Disabled(true);
      }
    };
    
    const handleSelectAlmacenamiento = (event) => {
      setSelectedAlmacenamiento(event.target.value);
  
      if (event.target.value != '') {
        setInput4Disabled(false);
      } else {
        setInput4Disabled(true);
      }
    };

    const handleSelectGuarderia = (event) => {
      setSelectedGuarderia(event.target.value);

    if (event.target.value != '') {
      setInput5Disabled(false);
    } else {
      setInput5Disabled(true);
    }
  };

  const handleSelectSUM = (event) => {
    setSelectedSUM(event.target.value);

    if (event.target.value != '') {
      setInput6Disabled(false);
    } else {
      setInput6Disabled(true);
    }
  };

  const handleSelectPago = (event) => {
    setSelectedPago(event.target.value);
  };

  return (
    <div>
      <div>
        <p>
          <b>Terreno.</b> ¿Cuál es el mejor para su familia?
        </p>
        <div className={InputCSS['radioInputs']}>
          <label className={`${InputCSS['radioInput']} ${selectedTerreno === 'F1' ? InputCSS.selected : ''}`}>
            <input type="radio" value="F1" checked={selectedTerreno === 'F1'} onChange={handleSelectTerreno} />
            F1
          </label>
        <label className={`${InputCSS['radioInput']} ${selectedTerreno === 'F2' ? InputCSS.selected : ''}`}>
          <input type="radio" value="F2" checked={selectedTerreno === 'F2'} onChange={handleSelectTerreno} />
          F2
        </label>
        <label className={`${InputCSS['radioInput']} ${selectedTerreno === 'F3' ? InputCSS.selected : ''}`}>
          <input type="radio" value="F3" checked={selectedTerreno === 'F3'} onChange={handleSelectTerreno} />
          F3
        </label>
        <label className={`${InputCSS['radioInput']} ${selectedTerreno === 'F4' ? InputCSS.selected : ''}`}>
          <input type="radio" value="F4" checked={selectedTerreno === 'F4'} onChange={handleSelectTerreno} />
          F4
        </label>
        <label className={`${InputCSS['radioInput']} ${selectedTerreno === 'F5' ? InputCSS.selected : ''}`}>
          <input type="radio" value="F5" checked={selectedTerreno === 'F5'} onChange={handleSelectTerreno} />
          F5
        </label>
        <label className={`${InputCSS['radioInput']} ${selectedTerreno === 'F6' ? InputCSS.selected : ''}`}>
          <input type="radio" value="F6" checked={selectedTerreno === 'F6'} onChange={handleSelectTerreno} />
          F6
        </label>
        <label className={`${InputCSS['radioInput']} ${selectedTerreno === 'F7' ? InputCSS.selected : ''}`}>
          <input type="radio" value="F7" checked={selectedTerreno === 'F7'} onChange={handleSelectTerreno} />
          F7
        </label>
        <label className={`${InputCSS['radioInput']} ${selectedTerreno === 'F8' ? InputCSS.selected : ''}`}>
          <input type="radio" value="F8" checked={selectedTerreno === 'F8'} onChange={handleSelectTerreno} />
          F8
        </label>
        <label className={`${InputCSS['radioInput']} ${selectedTerreno === 'F9' ? InputCSS.selected : ''}`}>
          <input type="radio" value="F9" checked={selectedTerreno === 'F9'} onChange={handleSelectTerreno} />
          F9
        </label>
        <label className={`${InputCSS['radioInput']} ${selectedTerreno === 'F10' ? InputCSS.selected : ''}`}>
          <input type="radio" value="F10" checked={selectedTerreno === 'F10'} onChange={handleSelectTerreno} />
          F10
        </label>
        <label className={`${InputCSS['radioInput']} ${selectedTerreno === 'F11' ? InputCSS.selected : ''}`}>
          <input type="radio" value="F11" checked={selectedTerreno === 'F11'} onChange={handleSelectTerreno} />
          F11
        </label>
        <label className={`${InputCSS['radioInput']} ${selectedTerreno === 'F12' ? InputCSS.selected : ''}`}>
          <input type="radio" value="F12" checked={selectedTerreno === 'F12'} onChange={handleSelectTerreno} />
          F12
        </label>
        <label className={`${InputCSS['radioInput']} ${selectedTerreno === 'F13' ? InputCSS.selected : ''}`}>
          <input type="radio" value="F13" checked={selectedTerreno === 'F13'} onChange={handleSelectTerreno} />
          F13
        </label>
        <label className={`${InputCSS['radioInput']} ${selectedTerreno === 'F13' ? InputCSS.selected : ''}`}>
          <input type="radio" value="F13" checked={selectedTerreno === 'F13'} onChange={handleSelectTerreno}/>
          F13
        </label>
        <br/>
        
      </div>
        </div>


        <div className={InputCSS['ref']} ref={cardRef}>
        <p><b>Asset Card.</b> Cuántas personas viven con usted?</p>
        <div className={InputCSS['radioInputs']}>
        <label className={`${InputCSS['radioInput']} ${selectedCard === '1' ? InputCSS.selected : ''}`}>
          <input type="radio" value="1" checked={selectedCard === '1'} onChange={handleSelectCard} disabled={input2Disabled}/>
          1
        </label>
        <label className={`${InputCSS['radioInput']} ${selectedCard === '2' ? InputCSS.selected : ''}`}>
          <input type="radio" value="2" checked={selectedCard === '2'} onChange={handleSelectCard} disabled={input2Disabled}/>
          2
        </label>
        <label className={`${InputCSS['radioInput']} ${selectedCard === '3' ? InputCSS.selected : ''}`}>
          <input type="radio" value="3" checked={selectedCard === '3'} onChange={handleSelectCard} disabled={input2Disabled}/>
          3
        </label>
        <label className={`${InputCSS['radioInput']} ${selectedCard === '4' ? InputCSS.selected : ''}`}>
          <input type="radio" value="4" checked={selectedCard === '4'} onChange={handleSelectCard} disabled={input2Disabled}/>
          4
        </label>
        <label className={`${InputCSS['radioInput']} ${selectedCard === '5' ? InputCSS.selected : ''}`}>
          <input type="radio" value="5" checked={selectedCard === '5'} onChange={handleSelectCard} disabled={input2Disabled}/>
          5
        </label>
        <br/>
      </div>
      </div>

        <div className={InputCSS['ref']} ref={almacenamientoRef}>
        <p><b>Almacenamiento.</b> ¿Cuánto espacio necesitará para almacenar sus cosas?</p>
        <div className={InputCSS['radioInputs']}>
        <label className={`${InputCSS['radioInput']} ${selectedAlmacenamiento === 'Pequeño' ? InputCSS.selected : ''}`}>
          <input type="radio" value="Pequeño" checked={selectedAlmacenamiento === 'Pequeño'} onChange={handleSelectAlmacenamiento} disabled={input3Disabled} />
            Pequeño
        </label>
        <label className={`${InputCSS['radioInput']} ${selectedAlmacenamiento === 'Mediano' ? InputCSS.selected : ''}`}>
          <input type="radio" value="Mediano" checked={selectedAlmacenamiento === 'Mediano'} onChange={handleSelectAlmacenamiento} disabled={input3Disabled}/>
          Mediano
        </label>
        <label className={`${InputCSS['radioInput']} ${selectedAlmacenamiento === 'Grande' ? InputCSS.selected : ''}`}>
          <input type="radio" value="Grande" checked={selectedAlmacenamiento === 'Grande'} onChange={handleSelectAlmacenamiento} disabled={input3Disabled}/>
          Grande
        </label>
        <br/>
      </div>
      </div>


      <div className={InputCSS['ref']} ref={guarderiaRef}>
      <p><b> Guardería.</b> ¿Cuál es el plan que mejor se adapta a ti?</p>
      <div className={InputCSS['radioInputs']}>
        <label className={`${InputCSS['radioInput']} ${selectedGuarderia === '6' ? InputCSS.selected : ''}`}>
          <input type="radio" value="6" checked={selectedGuarderia === '6'} onChange={handleSelectGuarderia} disabled={input4Disabled}/>
          6 Meses
        </label>
        <label className={`${InputCSS['radioInput']} ${selectedGuarderia === '12' ? InputCSS.selected : ''}`}>
          <input type="radio" value="12" checked={selectedGuarderia === '12'} onChange={handleSelectGuarderia} disabled={input4Disabled}/>
          12 Meses
        </label>
        <label className={`${InputCSS['radioInput']} ${selectedGuarderia === '24' ? InputCSS.selected : ''}`}>
          <input type="radio" value="24" checked={selectedGuarderia === '24'} onChange={handleSelectGuarderia} disabled={input4Disabled}/>
          24 Meses
        </label>
        <br/>
      </div>
      </div>

      <div className={InputCSS['ref']} ref={sumRef}>
      <p><b> SUM.</b> Reservá el espacio para lo que tu quieras.</p>
      <div className={InputCSS['radioInputs']}>
        <label className={`${InputCSS['radioInput']} ${selectedSUM === '6' ? InputCSS.selected : ''}`}>
          <input type="radio" value="6" checked={selectedSUM === '6'} onChange={handleSelectSUM} disabled={input5Disabled}/>
          6 Meses
        </label>
        <label className={`${InputCSS['radioInput']} ${selectedSUM === '12' ? InputCSS.selected : ''}`}>
          <input type="radio" value="12" checked={selectedSUM === '12'} onChange={handleSelectSUM} disabled={input5Disabled}/>
          12 Meses
        </label>
        <label className={`${InputCSS['radioInput']} ${selectedSUM === '24' ? InputCSS.selected : ''}`}>
          <input type="radio" value="24" checked={selectedSUM === '24'} onChange={handleSelectSUM} disabled={input5Disabled}/>
          24 Meses
        </label>
        <br/>
      </div>
      </div>

      <div className={InputCSS['ref']} ref={pagoRef}>
      <p><b> Opciones de pago.</b> Seleccione el que funcione para usted.</p>
      <div className={InputCSS['radioInputs']}>
        <label className={`${InputCSS['radioInput']} ${selectedPago === '1' ? InputCSS.selected : ''}`}>
          <input type="radio" value="1" checked={selectedPago === '1'} onChange={handleSelectPago} disabled={input6Disabled}/>
          1 cuota
        </label>
        <label className={`${InputCSS['radioInput']} ${selectedPago === '6' ? InputCSS.selected : ''}`}>
          <input type="radio" value="6" checked={selectedPago === '6'} onChange={handleSelectPago} disabled={input6Disabled}/>
          6 cuotas
        </label>
        <label className={`${InputCSS['radioInput']} ${selectedPago === '12' ? InputCSS.selected : ''}`}>
          <input type="radio" value="12" checked={selectedPago === '12'} onChange={handleSelectPago} disabled={input6Disabled}/>
          12 cuotas
        </label>
        <br/>
      </div>
      </div>
    </div>
    



  );
} 