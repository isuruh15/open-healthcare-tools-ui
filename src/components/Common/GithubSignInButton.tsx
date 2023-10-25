import { Box, Button } from "@mui/material";
import { GITHUB_SIGN_IN_BUTTON_LABEL } from "../Configs/TextConstants";

interface Props {
  handleLogin: (fidp: string) => void;
}

function GithubIcon() {
  return <Box component="img" src="github.png" width={30} height={29} />;
}

function GithubSignInButton({ handleLogin }: Props) {
  return (
    <Button
      component="label"
      variant="contained"
      startIcon={<GithubIcon />}
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
        handleLogin("github");
      }}
    >
      {GITHUB_SIGN_IN_BUTTON_LABEL}
    </Button>
  );
}

export default GithubSignInButton;
