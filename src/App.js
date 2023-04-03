import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Cards from './components/Cards';
//import Login from './components/Login';
import Background from './components/Background';
import Footer from './components/Footer.jsx';
import testConectiones from './assets/Service/holdedConection';
import ContactCard from './components/ContactCard';

function App() {
  return (
    <div className="App">
      <header className="App-header">       
        <>
        <Navbar className='navbar'/>
        </>
      </header>
      <>
      <Background className="background"/>
      </>
      
      <div className="cards">
        <>
        <Cards className="card"/>
        <ContactCard/>
        </>
      </div>
      <div className="footer">
        <>
        <Footer/>
        </>
      </div>
    </div>
  );
}

export default App;
//xd