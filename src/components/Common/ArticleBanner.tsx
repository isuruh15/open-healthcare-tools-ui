import { Box, Grid, Typography } from "@mui/material";
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
      // bgcolor="secondary.main"
      alignItems="center"
      justifyContent="center"
      padding={5}
      paddingTop={10}
    >
      <Grid container alignItems="center" justifyContent="center" padding={1}>
        <Typography
          variant="h2"
          align="center"
          maxWidth="lg"
          color="text.primary"
        >
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
