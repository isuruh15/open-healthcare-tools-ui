import { Box, Container } from "@mui/material";
import Header from "./components/header/Header";
import Footer from "./components/header/footer/Footer";

const App = () => {
  return (
    <Box sx={{display:"flex", flexDirection:"column", height:"100vh"}}>
      <Header />
      <Container sx={{flexGrow:1}}></Container>
      <Footer />
    </Box>
  );
};

export default App;
