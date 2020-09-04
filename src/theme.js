import { createMuiTheme } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#DFDDE5",
    },
    secondary: {
      main: "#F5CF5F",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#DFDDE5",
    },
  },
});

export default theme;
