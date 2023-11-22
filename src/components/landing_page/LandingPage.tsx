import { Box } from "@mui/system";
import Banner from "./Banner";
import Tools from "./Tools";
import { Footer } from "../footer/Footer";

function LandingPage() {
  return (
    <Box color="text.primary">
      <Banner></Banner>
      <Tools></Tools>
      <Footer></Footer>
    </Box>
  );
}

export default LandingPage;
