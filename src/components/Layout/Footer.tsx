import CopyrightIcon from "@mui/icons-material/Copyright";
import { Box, Grid, Link, Stack, Typography } from "@mui/material";
import { Logo } from "../Logo";
import { text } from "stream/consumers";

export const Footer = () => {
  return (
    <Box
      sx={{ display: "flex" }}
      id="footer-container"
      borderTop={2}
      borderColor="secondary.main"
      color="text.primary"
      bgcolor="background.paper"
    >
      <Grid container spacing={1} paddingLeft={2} paddingRight={2}>
        <Grid
          item
          container
          xs={12}
          md={6}
          direction="row"
          alignItems="center"
          justifyContent={{ xs: "center", md: "flex-start" }}
        >
          <Logo />
        </Grid>
        <Grid
          item
          container
          xs={12}
          md={6}
          direction="row"
          justifyContent={{ xs: "center", md: "flex-end" }}
          alignItems="center"
        >
          <Stack spacing={1}>
            <Stack direction="row">
              <CopyrightIcon
                sx={{
                  color: "text.secondary",
                  mr: { sm: 0.5 },
                  // fontSize: 19,
                }}
                aria-hidden="true"
              />
              <Link href="https://wso2.com/" target="_blank" underline="hover">
                <Typography
                  variant="body1"
                  sx={{ color: "grey.500" }}
                  id="footer-text"
                  color="text.secondary"
                >
                  {new Date().getFullYear()} WSO2 LLC.
                </Typography>
              </Link>
            </Stack>
            <Link href="" target="_blank">
              <Typography color="text.secondary">Terms of service</Typography>
            </Link>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};
