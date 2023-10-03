import { Box, Grid, Link, Stack, Typography, alpha } from "@mui/material";

interface Props {
  content: {
    title: string;
  };
  marginTop?: number;
  marginBottom?: number;
}

function GithubBanner({ content, marginTop = 3, marginBottom = 2 }: Props) {
  const heading = "HEY! WANT TO KNOW HOW IT IS BUILT?";
  const linkText = "CHECK OUT OUR CODE REPOSITORIES >>";
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
            {heading}
          </Typography>
          <Typography variant="h5" align="center" color="#00255C" maxWidth="lg">
            <Link href="https://google.com" underline="none" target="_blank">
              {linkText}
            </Link>
          </Typography>
        </Stack>
      </Grid>
    </Box>
  );
}

export default GithubBanner;
