import CopyrightIcon from "@mui/icons-material/Copyright";
import { Box, Button, Divider, Grid, Link, Stack, Typography } from "@mui/material";

export const Footer = () => {
  return (
    <Grid container sx={{ mb: 2 }}>
      <Grid>
        <Box
          sx={{
            alignItems: "center",
            justifyContent: "center",
            minHeight: 300,
            backgroundColor: "background.paper",
            flexDirection: "column",
            display: "flex",
            padding: 5,
          }}
        >
          <Grid container alignItems="center" justifyContent="center">
            <Grid
              container
              // alignItems="center"
              justifyContent={{ xs: "center", md: "center" }}
            >
              <Box
                component={"img"}
                src="choreo-logo-black.svg"
                alt="Choreo Logo"
                sx={{
                  height: { xs: 60, sm: 90, md: 76, lg: 69 },
                  width: { xs: 198, sm: 297, md: 250, lg: 226 },
                }}>

              </Box>

              <Typography
                variant="h6"
                sx={{
                  color: "text.primary",
                  alignItems: "center",
                  display: 'flex',
                  ml: 3,
                }}
                id="footer-text"
              >
                By WSO2
              </Typography>
            </Grid>
            <Grid
              item
              alignItems="center"
              sx={{
                paddingRight: 5,
                paddingLeft: 2,
                paddingTop: 5,
                paddingBottom: 5,
              }}
            >
              <Typography
                variant="h2"
                align="center"
                color="text.primary"
                maxWidth="md"
              >
                Open Healthcare Tools is brought to you by Choreo
              </Typography>
            </Grid>
            <Grid
              container
              alignItems="center"
              justifyContent="center"
              padding={2}
            >
              <Grid item>
                <Stack spacing={1}>
                  <Typography
                    variant="h5"
                    align="center"
                    color="text.primary"
                    maxWidth="md"
                    marginBottom={2}
                  >
                    The all in  Internal Developer Platform as a Service.
                    Everything you need to deliver quality software on time and within budget.
                  </Typography>
                  <Link href="https://console.choreo.dev/" target="_blank" sx={{
                      alignSelf: "center",
                    }}>
                  <Button
                    variant="contained" sx={{
                      backgroundColor: "primary.main",
                      color: "primary.contrastText",
                      padding: "10px 20px",
                      borderRadius: "8px",
                      fontWeight: 600,
                      fontSize: "1.2rem",
                      textTransform: "none",
                      maxWidth: "300px",
                      alignSelf: "center",
                      "&:hover": {
                        backgroundColor: "secondary.main",
                      },
                    }}>
                    Get Started Free
                  </Button>
                  </Link>
                </Stack>
              </Grid>
            </Grid>
          </Grid>
        </Box>

      </Grid>
      <Divider />
      <Grid container spacing={1} paddingLeft={2} paddingRight={2} sx={{
        backgroundColor: "background.paper",
        justifyContent: "right",
      }}>
        <Grid
          item
          container
          xs={12}
          md={6}
          direction="row"
          justifyContent={{ xs: "center", md: "flex-start" }}
          alignItems="center"
        >
          <Stack direction="row" >
            <Box sx={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "center",
              flexDirection: "row",
              padding: 1,
            }}>
              <Link href="https://wso2.com/solutions/healthcare/" target="_blank" sx={{ ml: 1, mr: 1 }}>
                <Typography color="text.secondary">About</Typography>
              </Link>
              <Link href="https://wso2.com/contact/" target="_blank" sx={{ ml: 1, mr: 1 }}>
                <Typography color="text.secondary">Contact</Typography>
              </Link>
              <Link href="https://wso2.com/california-privacy#opt-out" target="_blank" sx={{ ml: 1, mr: 1 }}>
                <Typography color="text.secondary">Privacy Policy</Typography>
              </Link>
              <Link href="https://wso2.com/legal/" target="_blank" sx={{ ml: 1, mr: 6 }}>
                <Typography color="text.secondary">Terms of service</Typography>
              </Link>
            </Box>
          </Stack>
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
          <Stack direction="row" >
            <Box sx={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "center",
              flexDirection: "row",
              padding: 1,
            }}>
              <CopyrightIcon
                sx={{
                  color: "text.secondary",
                  mr: { sm: 0.5 },
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
            </Box>
          </Stack>
        </Grid>
      </Grid>
    </Grid>
  );
};
