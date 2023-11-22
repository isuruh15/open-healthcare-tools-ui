import { Box, Grid, Link, Stack, Typography } from "@mui/material";
import { GITHUB_LINK_LABEL, GITHUB_TITLE } from "../../Configs/TextConstants";

interface Props {
  marginTop?: number;
  marginBottom?: number;
}

function GithubBanner({ marginTop = 3, marginBottom = 2 }: Props) {
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
            {GITHUB_TITLE}
          </Typography>
          <Typography variant="h5" align="center" maxWidth="lg">
            <Link
              href="https://google.com"
              underline="hover"
              target="_blank"
              color="text.secondary"
            >
              {GITHUB_LINK_LABEL}
            </Link>
          </Typography>
        </Stack>
      </Grid>
    </Box>
  );
}

export default GithubBanner;
