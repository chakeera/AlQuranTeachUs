import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  shape: {
    borderRadius: 15
  },
  palette: {
    primary: {
      main: '#CCD5AE',
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
