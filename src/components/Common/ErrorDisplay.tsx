import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import ErrorIcon from "@mui/icons-material/Error";
import { Box, Grid, IconButton, Typography } from "@mui/material";
import React from "react";

interface Props {
  statusCode?: string;
  message?: string;
  width?: string;
}

function getTheStatusTitle(statusCode: string) {
  switch (statusCode) {
    case "400":
      return "Bad Request!";
    case "500":
      return "Internal Server Error!";
    default:
      return "Internal Server Error!";
  }
}

export default function ErrorDisplay({
  statusCode = "500",
  message = "Something went wrong! Please contact the administartion.",
  width = "48.5%",
}: Props) {
  const [visible, setVisible] = React.useState<boolean>(true);
  return (
    <Box
      sx={{
        position: "absolute",
        bgcolor: "rgba(0, 0, 0, 0.50)",
        height: "calc(100vh - 197px)",
        width: { xs: "80%", sm: "88%", md: "46.8%", lg: "47.5%", xl: "48.5%" },
        zIndex: 1,
        display: visible ? "block" : "none",
        marginTop: { xs: 4.8, sm: 5, md: 5.9 },
      }}
      marginTop={{ md: 5.8 }}
      alignItems="center"
      justifyContent="center"
      onClick={() => {
        setVisible(false);
      }}
    >
      <Box
        padding={1}
        sx={{ justifyContent: "flex-end" }}
        display="flex"
        width="100%"
      >
        <IconButton
          onClick={() => {
            setVisible(false);
          }}
        >
          <CloseOutlinedIcon sx={{ color: "red", fontSize: 30 }} />
        </IconButton>
      </Box>
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        height="calc(100vh - 197px)"
      >
        <Box
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
          display="flex"
          bgcolor="background.paper"
          width="98%"
          padding={3}
          borderRadius={1}
          // onClick={()=>{setVisible(visible)}}
        >
          <Box
            border={1}
            padding={1}
            justifyContent="center"
            alignItems="center"
          >
            <Grid item container alignContent="center" justifyContent="center">
              <ErrorIcon sx={{ color: "red", fontSize: { xs: 30, sm: 50 } }} />
            </Grid>
            <Grid item container alignContent="center" justifyContent="center">
              <Typography
                variant="h5"
                textAlign="center"
                padding={{ xs: 1, sm: 2 }}
              >
                {getTheStatusTitle(statusCode)}
              </Typography>
            </Grid>
            <Grid item container alignContent="center" justifyContent="center">
              <Typography
                variant="body1"
                textAlign="center"
                padding={{ xs: 1, sm: 2 }}
              >
                {message}
              </Typography>
            </Grid>
          </Box>
        </Box>
      </Grid>
    </Box>
  );
}
