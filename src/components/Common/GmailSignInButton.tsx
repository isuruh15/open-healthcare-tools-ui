import { Box, Button, CircularProgress } from "@mui/material";
import React from "react";
import { GMAIL_SIGN_IN_BUTTON_LABEL } from "../Configs/TextConstants";

interface Props {
  handleLogin: (fidp: string) => void;
}

function GmailIcon() {
  return (
    <Box
      component="img"
      src="google.png"
      width={{ xs: 20, md: 30 }}
      height={{ xs: 20, md: 30 }}
    />
  );
}

function GmailSignIn({ handleLogin }: Props) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  return (
    <Button
      component="label"
      variant="contained"
      startIcon={<GmailIcon />}
      endIcon={
        isLoading && (
          <CircularProgress size={16} sx={{ color: "black", ml: 0.46 }} />
        )
      }
      size="large"
      sx={{
        margin: 1,
        justifyContent: "flex-start",
        width: { xs: 240, md: 250 },
        backgroundColor: "common.white",
        color: "common.black",
        "&:hover": {
          backgroundColor: "#dadce0",
        },
      }}
      onClick={() => {
        setIsLoading(true);
        handleLogin("google");
      }}
    >
      {GMAIL_SIGN_IN_BUTTON_LABEL}
    </Button>
  );
}

export default GmailSignIn;
