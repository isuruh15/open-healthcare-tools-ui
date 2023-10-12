import { Box, Grid, Link, Stack, Typography } from "@mui/material";

interface Props {
  content: {
    title: string;
  };
  marginTop?: number;
  marginBottom?: number;
}

function GithubBanner({ content, marginTop = 3, marginBottom = 2 }: Props) {
  const heading = "Hey! Want to know how it is built?";
  const linkText = "Check out our code repositories >>";
  return (
    <Box
      bgcolor="background.paper"
      alignItems="center"
      justifyContent="center"
      padding={5}
      marginTop={marginTop}
      marginBottom={marginBottom}
    >
      <Grid container alignItems="center" justifyContent="center" padding={1}>
        <Stack spacing={3}>
          <Typography
            variant="h2"
            align="center"
            color="text.primary"
            maxWidth="lg"
          >
            {heading}
          </Typography>
          <Typography variant="h5" align="center" maxWidth="lg">
            <Link
              href="https://google.com"
              underline="hover"
              target="_blank"
              color="text.secondary"
            >
              {linkText}
            </Link>
          </Typography>
        </Stack>
      </Grid>
    </Box>
  );
}

export default GithubBanner;
