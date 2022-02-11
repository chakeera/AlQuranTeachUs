import React from 'react';
import './assets/styles/App.css';
import theme from './core/theme';
import Router from './router/index.js';
import { ThemeProvider } from '@mui/material/styles';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router />
      <Footer></Footer>
    </ThemeProvider>
  );
}

export default App;
