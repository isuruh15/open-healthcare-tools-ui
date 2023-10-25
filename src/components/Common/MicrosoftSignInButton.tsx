import { Box, Button } from "@mui/material";
import { MICROSOFT_SIGN_IN_BUTTON_LABEL } from "../Configs/TextConstants";

interface Props {
  handleLogin: (fidp: string) => void;
}

function MicrosoftIcon() {
  return <Box component="img" src="microsoft.png" width={27} height={27} />;
}

function MicrosoftSignInButton({ handleLogin }: Props) {
  return (
    <Button
      component="label"
      variant="contained"
      startIcon={<MicrosoftIcon />}
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
        handleLogin("microsoft");
      }}
    >
      {MICROSOFT_SIGN_IN_BUTTON_LABEL}
    </Button>
  );
}

export default MicrosoftSignInButton;
