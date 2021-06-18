import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';
// Our theme :D
const theme = createMuiTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#61dafb',
      light: '#61dafb',
      dark: '#21a1c4',
    },
    secondary: {
      main: '#b5ecfb',
      light: '#61dafb',
      dark: '#21a1c4',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#282c34',
    },
  },
  typography: {
    fontFamily: 'Rubik',
  },
  overrides: {
    MuiPaper: {
      root: {
        padding: '0',
        marginTop: '0',
        backgroundColor: '#fff', // 5d737e
      },
    },
    MuiButton: {
      root: {
        margin: '0',
      },
    },
  },
});
export default theme;