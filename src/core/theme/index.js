import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536
    }
  },
  shape: {
    borderRadius: 15
  },
  palette: {
    primary: {
      main: '#BED4BA',
      dark: '#45503B',
      light: '#FAEDCD'
    },
    secondary: {
      main: '#FEFAE0',
      light: '##D4A373',
      dark: '#FAEDCD'
    }
  }
});

export default theme;
