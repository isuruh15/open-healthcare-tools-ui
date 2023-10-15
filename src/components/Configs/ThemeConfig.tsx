import { createTheme, responsiveFontSizes } from "@mui/material/styles";
export let theme = createTheme({
  typography: {
    fontFamily: "Plus Jakarta Sans",
    h1: {
      fontWeight: 700,
      fontSize: "2.8rem",
    },
    h2:{
      fontWeight: 700,
      fontSize: "2rem",
    },
    h3: {
      fontWeight: 700,
    },
    h4: {
      fontWeight: 600,
    },
    h5: {
      fontWeight: 500,
      fontSize: "1.2rem",
    },
  },
  palette: {
    primary: {
      main: "#000000", //Black
      contrastText: "#fff",
    },
    secondary: {
      main: "#00A79D", //Asgardeo Green
      light: "#f7f8fb", // Light grey + purple
    },
    text: {
      primary: "#000000", //Dark blue
      secondary: "#494848", //Light Grey
    },
    background: {
      paper: "#f7f8fb", // Light grey + purple
      default: "#ffffff", // White
    },
    info: {
      main: "#00A79D", //Asgardeo Green
    },
  },
});
theme = responsiveFontSizes(theme);
