import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';



  // main body core part website
  function App() {
    const person = {
      firstName: 'Nayem',
      lastName: 'Khan',
      job: 'Programmer'
    }
 
    return (
      <div className="App" >
        <header className="App-header" >
          <img src={logo} className="App-logo" alt="logo" />
          <p> My Heading:  </p>
        </header>
      </div>
    );
  }

export default App;