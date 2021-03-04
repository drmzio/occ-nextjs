import { createMuiTheme } from '@material-ui/core';
import { red, blue } from '@material-ui/core/colors';

// Create the theme instance
const theme = createMuiTheme({
  palette: {
    primary: blue,
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
        }
      }
    },
  }
});

export default theme;
