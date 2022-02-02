import React from 'react';
import './assets/styles/App.css';
import theme from './core/theme';
import Router from './router/index.js';
import { ThemeProvider } from '@mui/material/styles';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  );
}

export default App;
