import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
// import useEditarUsuario from '../Service/APIeditarUsuario'
import {updateUser} from '../Service/APIusuario'
import PerfilCSS from '../css/Perfil.module.css';


function BirthdayCard() {
  const [fechaNacimiento, setFechaNacimiento] = useState(null);

  // const editar =useEditarUsuario(); esta era la funcion anterior que 
  // utilizaba un router especifico por cada funcion de usuario, funciona
  //pero no tiene validaciones  ni nada
  const usuarioJson = sessionStorage.getItem('user');
  const usuario = usuarioJson ? JSON.parse(usuarioJson) : null;
  
  const fechaActual = new Date();

  const handleFechaNacimientoChange = (date) => {
    setFechaNacimiento((date.getTime()));//sinceramente no me acuerdo por que existe esto
  };
  const handleClick = () => { 
    usuario.fechaNac =(fechaNacimiento)/1000;
    //lo divide por 1000 por uqe el holded usan UNIX y aca js tiene su propio sistema
    updateUser(usuario);
  }

  return (
    <div className={PerfilCSS.cumple}>
      {/* <h2>Seleccionar Fecha de Nacimiento</h2> */}
      <DatePicker className={PerfilCSS.cumpleInput}
        selected={fechaNacimiento}
        onChange={handleFechaNacimientoChange}
        dateFormat="dd/MM/yyyy"
        showYearDropdown
        maxDate={fechaActual}
        yearDropdownItemNumber={100}
        scrollableYearDropdown
        placeholderText="Seleccionar fecha de nacimiento"
      />
      <button className={PerfilCSS.boton} onClick={handleClick}>Cambiar</button>
    </div>
  );
}

export default BirthdayCard;
