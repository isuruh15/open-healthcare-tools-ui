import CopyrightIcon from "@mui/icons-material/Copyright";
import {
  Box,
  Button,
  Divider,
  Grid,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import {
  ABOUT_LINK_LABEL,
  CONTACT_LINK_LABEL,
  FOOTER_BUTTON_LABEL,
  FOOTER_COPYRIGHT,
  FOOTER_DESCRIPTION,
  FOOTER_TITLE,
  POLICY_LINK_LABEL,
  TERMS_LINK_LABEL,
} from "../Configs/TextConstants";

export const Footer = () => {
  return (
    <Grid container sx={{ mb: 1 }}>
      <Grid>
        <Box
          sx={{
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "background.paper",
            flexDirection: "column",
            display: "flex",
            padding: 2,
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
                  height: { xs: 55, sm: 69, md: 61, lg: 61 },
                  width: { xs: 180, sm: 226, md: 200, lg: 200 },
                }}
              ></Box>

              <Typography
                variant="h6"
                sx={{
                  color: "text.primary",
                  alignItems: "center",
                  display: "flex",
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
                paddingBottom: 3,
              }}
            >
              <Typography
                variant="h2"
                align="center"
                color="text.primary"
                maxWidth="md"
              >
                {FOOTER_TITLE}
              </Typography>
            </Grid>
            <Grid
              container
              alignItems="center"
              justifyContent="center"
              padding={2}
            >
              <Grid item>
                <Stack spacing={2}>
                  <Typography
                    variant="h5"
                    align="center"
                    color="text.primary"
                    maxWidth="md"
                    marginBottom={1}
                  >
                    {FOOTER_DESCRIPTION}
                  </Typography>
                  <Link
                    href="https://console.choreo.dev/"
                    target="_blank"
                    sx={{
                      alignSelf: "center",
                    }}
                  >
                    <Button
                      variant="contained"
                      sx={{
                        backgroundColor: "primary.main",
                        color: "primary.contrastText",
                        padding: "10px 20px",
                        borderRadius: "8px",
                        fontWeight: 600,
                        fontSize: "1rem",
                        textTransform: "none",
                        maxWidth: "300px",
                        alignSelf: "center",
                        "&:hover": {
                          backgroundColor: "secondary.main",
                        },
                      }}
                    >
                      {FOOTER_BUTTON_LABEL}
                    </Button>
                  </Link>
                </Stack>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Grid>
      <Divider />
      <Grid
        container
        spacing={1}
        paddingLeft={2}
        paddingRight={2}
        sx={{
          backgroundColor: "background.paper",
          justifyContent: "right",
        }}
      >
        <Grid
          item
          container
          xs={12}
          md={6}
          direction="row"
          justifyContent={{ xs: "center", md: "flex-start" }}
          alignItems="center"
        >
          <Stack direction="row">
            <Box
              sx={{
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "center",
                flexDirection: "row",
                padding: 1,
              }}
            >
              <Link
                href="https://wso2.com/solutions/healthcare/"
                target="_blank"
                sx={{ ml: 1, mr: 1 }}
              >
                <Typography color="text.secondary">
                  {ABOUT_LINK_LABEL}
                </Typography>
              </Link>
              <Link
                href="https://wso2.com/contact/"
                target="_blank"
                sx={{ ml: 1, mr: 1 }}
              >
                <Typography color="text.secondary">
                  {CONTACT_LINK_LABEL}
                </Typography>
              </Link>
              <Link
                href="https://wso2.com/privacy-policy/"
                target="_blank"
                sx={{ ml: 1, mr: 1 }}
              >
                <Typography color="text.secondary">
                  {POLICY_LINK_LABEL}
                </Typography>
              </Link>
              <Link
                href="https://wso2.com/terms-of-use/"
                target="_blank"
                sx={{ ml: 1, mr: 6 }}
              >
                <Typography color="text.secondary">
                  {TERMS_LINK_LABEL}
                </Typography>
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
          <Stack direction="row">
            <Box
              sx={{
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "center",
                flexDirection: "row",
                padding: 1,
              }}
            >
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
                  {new Date().getFullYear()} {FOOTER_COPYRIGHT}
                </Typography>
              </Link>
            </Box>
          </Stack>
        </Grid>
      </Grid>
    </Grid>
  );
};
