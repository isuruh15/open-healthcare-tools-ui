import { Box, Grid, Typography } from "@mui/material";
import { ARTICLE_BANNER_TITLE } from "../Configs/TextConstants";
import SwipeableTextMobileStepper from "./SwipeableTextMobileStepper";

interface Props {
  marginTop?: number;
  marginBottom?: number;
}

function ArticleBanner({ marginTop = 3, marginBottom = 2 }: Props) {
  return (
    <Box
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
         {ARTICLE_BANNER_TITLE}
        </Typography>
      </Grid>
      <Grid container alignItems="center" justifyContent="center" padding={2}>
        <SwipeableTextMobileStepper />
      </Grid>
    </Box>
  );
}

export default ArticleBanner;
