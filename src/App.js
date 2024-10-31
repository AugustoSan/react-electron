import React, { useEffect } from 'react';
// import logo from './logo.svg';
import './App.css';
import { Box, Container } from '@mui/material';
// import ProTip from './ProTip';
import ResponsiveAppBar from './components/AppBar';

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
    <Container 
      maxWidth={false} // Deshabilita el límite de ancho predeterminado
      sx={{
        margin: 0,
        padding: 0,
        width: '100%', // Asegúrate de que ocupe todo el ancho
      }}
    >
      <Box>
        <ResponsiveAppBar />
      </Box>
    </Container>
  );
}

export default App;
