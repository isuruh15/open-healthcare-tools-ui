import { Box, Button } from "@mui/material";
import { GMAIL_SIGN_IN_BUTTON_LABEL } from "../Configs/TextConstants";

interface Props {
  handleLogin: (fidp: string) => void;
}

function GmailIcon() {
  return <Box component="img" src="google.png" width={30} height={30} />;
}

function GmailSignIn({ handleLogin }: Props) {
  return (
    <Button
      component="label"
      variant="contained"
      startIcon={<GmailIcon />}
      size="large"
      sx={{
        margin: 1,
        justifyContent: "flex-start",
        width: 230,
        backgroundColor: "common.white",
        color: "common.black",
        "&:hover": {
          backgroundColor: "#dadce0",
        },
      }}
      onClick={() => {
        handleLogin("google");
      }}
    >
      {GMAIL_SIGN_IN_BUTTON_LABEL}
    </Button>
  );
}

export default GmailSignIn;
