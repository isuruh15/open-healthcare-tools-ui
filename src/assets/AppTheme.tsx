import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    background: {
      paper:'#FFFFFF' // white
    },
    primary: {
      light: '#A5A5A5', // grey
      main: '#5567D5', // blue
      dark: '#222228', // black
    },
    secondary: {
      light: '212A3E', // light black
      main: '#5567D5', // blue
      dark: '#00255C', // dark blue
    },
    success: {
      main: "#34B474", // green
    },
  },
  typography: {
    fontFamily: ["Poppins", "sans-serif"].join(","),
    fontSize: 12,
    h1: {
      fontFamily: ["Poppins", "sans-serif"].join(","),
      fontSize: 40,
    },
    h2: {
      fontFamily: ["Poppins", "sans-serif"].join(","),
      fontSize: 32,
    },
    h3: {
      fontFamily: ["Poppins", "sans-serif"].join(","),
      fontSize: 26,
    },
    h4: {
      fontFamily: ["Poppins", "sans-serif"].join(","),
      fontSize: 20,
    },
    h5: {
      fontFamily: ["Poppins", "sans-serif"].join(","),
      fontSize: 16,
    },
    h6: {
      fontFamily: ["Poppins", "sans-serif"].join(","),
      fontSize: 14,
    },
  },
});

export default theme;
