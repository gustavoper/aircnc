import React from 'react';

import './App.css';

import logo from "./assets/logo.svg";

function App() {
  return (
    //Classname pq Class é uma palavra reservada 
    <div className="container">
      <img src={logo} alt="AirCnc"/>
      <div className="content">
        <p>
          Ofereça spots para programadores e encontre talentos para sua empresa.
        </p>
      
      <form action="">
        <label htmlFor="email">E-mail</label>
        <input type="label" id="email" placeholder="Endereço de E-mail"/>
        <button type="submit">Entrar</button>
      </form>
      </div>
    </div>
    
  );
}

export default App;
