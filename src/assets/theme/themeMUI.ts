import { createTheme } from '@mui/material';

export const themeMUI = createTheme({
  palette: {
    primary: {
      main: '#FFCC26',
    },
    secondary: {
      main: '#414141',
    },
  },
  typography: {
    h5: {
      fontFamily: ['Anek Telugu', 'sans-serif'].join(','),
      fontSize: 24,
      fontWeight: '600',
      color: '#414141',
    },
    h1: {
      fontFamily: ['Anek Telugu', 'sans-serif'].join(','),
      fontSize: 28,
      color: '#414141',
    },
    body1: {
      fontFamily: ['Poppins', 'sans-serif'].join(','),
      fontSize: 18,
      color: '#414141',
      lineHeight: '30px',
    },
    body2: {
      fontFamily: ['Poppins', 'sans-serif'].join(','),
      fontSize: 16,
      fontWeight: 500,
      color: '#414141',
    },
    subtitle2: {
      fontFamily: ['Poppins', 'sans-serif'].join(','),
      fontSize: 16,
      color: '#414141',
    },
  },
});
