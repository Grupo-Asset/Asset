import React, { useState, useEffect } from 'react';
import CtCSS from '../../css/Contacto.module.css';

function Contactos() {
  const [contactos, setContactos] = useState([]);

  useEffect(() => {
    async function fetchContactos() {
      try {
        const response = await fetch('https://api.holded.com/api/invoicing/v1/contacts', {
          headers: {
            'key': '343654e3d1014f792344a19ee8f40503',
            'accept': 'application/json',
            'Acces-Control-Allow-Origin': '*'
          }
        });
        const data = await response.json();
        setContactos(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchContactos();
  }, []);

  return (
    <div>
      <h1>Nombre de contacto:</h1>
      <ul>
        {contactos.map((contacto) => (
          <>
          <li className={CtCSS.nombre} key={contacto.id}>{contacto.name}</li>
          
          
          <li className={CtCSS.mail} key={contacto.id}>{contacto.email}</li>
          </>
        ))}
      </ul>
    </div>
  );
}

export default Contactos;