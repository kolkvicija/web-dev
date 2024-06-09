// theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#f0728d', // Primary color
    },
    secondary: {
      main: '#f3a7b7', // Secondary color
    },
    text: {
      primary: '#e75e7c', // Text color
    },
    background: {
      default: '#f4f4f4', // Background color
    },
  },
  typography: {
    fontFamily: [
      'Lucida Sans',
      'Lucida Sans Regular',
      'Lucida Grande',
      'Lucida Sans Unicode',
      'Geneva',
      'Verdana',
      'sans-serif',
    ].join(','),
    h1: {
      fontSize: '7em',
      fontFamily: 'inherit',
      color: '#e75e7c',
      marginBottom: '1%',
    },
    h2: {
      fontSize: '2em',
      color: '#f0728d',
      marginTop: '1%',
    },
    body1: {
      fontSize: '1.5em',
      color: 'inherit',
      padding: '1% 0',
    },
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '.App-header': {
          backgroundColor: '#f3a7b7',
          height: '91.6vh',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        },
        '.Headers': {
          textAlign: 'center',
        },
        '.Card': {
          height: '24em',
          width: '15em',
          backgroundColor: 'white',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '1.5% 1%',
          borderRadius: '3%',
          margin: '2%',
          boxSizing: 'border-box',
        },
        '.Image': {
          height: '70%',
          width: 'auto',
          borderRadius: '2%',
        },
        '#Products': {
          display: 'flex',
          flexWrap: 'wrap',
          width: '80%',
        },
        '#Product-Gallery': {
          backgroundColor: '#f3a7b7',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        },
        '#Contact-Info': {
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-evenly',
        },
      },
    },
  },
});

export default theme;
