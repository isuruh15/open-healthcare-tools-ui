import { Box, Grid, Stack, Typography, alpha } from "@mui/material";

interface Props {
  content: {
    title: string;
  };
  marginTop?: number;
  marginBottom?: number;
}

function GithubBanner({ content, marginTop = 3, marginBottom = 2 }: Props) {
  return (
    <Box
      bgcolor={alpha("#00A79D", 0.75)}
      alignItems="center"
      justifyContent="center"
      padding={5}
      marginTop={marginTop}
      marginBottom={marginBottom}
    >
      <Grid container alignItems="center" justifyContent="center" padding={1}>
        <Stack spacing={3}>
          <Typography variant="h2" align="center" color="#00255C" maxWidth="lg">
            HEY! WANT TO KNOW HOW IT IS BUILT?
          </Typography>
          <Typography variant="h5" align="center" color="#00255C" maxWidth="lg">
            HEY! WANT TO KNOW HOW IT IS BUILT?
          </Typography>
        </Stack>
      </Grid>
    </Box>
  );
}

export default GithubBanner;
