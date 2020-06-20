import { createMuiTheme } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#fff",
    },
    secondary: {
      main: "#8b0000",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "rgb(243, 244, 249)",
    },
  },
});

export default theme;
