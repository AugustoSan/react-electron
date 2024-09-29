import React, { useEffect } from 'react';
// import logo from './logo.svg';
import './App.css';
import { Box, Container, Link, Typography } from '@mui/material';
import ProTip from './ProTip';
import DashboardLayoutBranding from './DashboardPage';

function Copyright() {
  return (
    <Typography
      variant="body2"
      align="center"
      sx={{
        color: 'text.secondary',
      }}
    >
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

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
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        {/* <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
          Material UI Create React App example
        </Typography> */}
        {/* <ProTip /> */}
        <DashboardLayoutBranding />
        {/* <Copyright /> */}
      </Box>
    </Container>
  );
}

export default App;
