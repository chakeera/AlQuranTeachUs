import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  shape: {
    borderRadius: 15
  },
  palette: {
    primary: {
      main: '#3A5683',
      dark: '#45503B',
      light: '#FAEDCD'
    },
    secondary: {
      main: '#D4A373',
      light: '#FEFAE0',
      dark: '#FAEDCD'
    }
  }
});

export default theme;
