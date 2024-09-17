import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from '@mui/material';

const App = () => {
  useEffect(() => {
    // const getClients = async () => {
    //   const clients = await window.electronAPI.getAllClients();
    //   console.log('clients: ', clients);
    // }
    // getClients();
    window.electronAPI.getAllClients()
    .then((clients) => {
      console.log(clients);
    })
    .catch((error) => {
      console.error('Error fetching clients:', error);
    });
  }, []);
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Button variant="contained">Contained</Button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
