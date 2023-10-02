import { Box, Grid, Typography, alpha } from "@mui/material";
import SwipeableTextMobileStepper from "./SwipeableTextMobileStepper";

interface Props {
  content: {
    title: string;
  };
  marginTop?: number;
  marginBottom?: number;
}

function ArticleBanner({ content, marginTop = 3, marginBottom = 2 }: Props) {
  return (
    <Box
      bgcolor="#00A79D75"
      alignItems="center"
      justifyContent="center"
      padding={5}
      marginTop={marginTop}
      marginBottom={marginBottom}
    >
      <Grid container alignItems="center" justifyContent="center" padding={1}>
        <Typography variant="h2" align="center" color="#00255C" maxWidth="lg">
          {content.title}
        </Typography>
      </Grid>
      <Grid container alignItems="center" justifyContent="center" padding={2}>
        <SwipeableTextMobileStepper />
      </Grid>
    </Box>
  );
}

export default ArticleBanner;
