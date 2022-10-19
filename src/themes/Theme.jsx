import { createTheme } from "@mui/material/styles";
import { red, grey } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: red[400],
    },
    secondary: {
      main: grey[500],
    },
  },
});

export default theme;
