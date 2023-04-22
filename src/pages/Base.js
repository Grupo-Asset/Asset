import React from 'react';
import { Routes, Route} from 'react-router-dom';
import Quarters from './Quarters';
import Eventos from './Eventos';
import Inicio from './Inicio';
import Registro from './Registro';
import PreguntasFrecuentes from './PreguntasFrecuentes';
import Shop from './Shop';
import Perfil from './Perfil';




const Base = () => {
  return (
    <React.Fragment>

      <Routes>
        <Route path='/' element={<Inicio/>}/>
        <Route path='/quarters' element={<Quarters/>}/>
        <Route path='/eventos' element={<Eventos/>}/>
        <Route path='/registro' element={<Registro/>}/>
        <Route path='/preguntasfrecuentes' element={<PreguntasFrecuentes/>}/>
        <Route path='/shop' element={<Shop/>}/>
        <Route path='/perfil' element={<Perfil/>}/>
      </Routes>
      </React.Fragment>
  );
}
export default Base;
//xd
