import { Button } from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";

const ContactBtn = () => {
  return (
    <Button
      variant="outlined"
      aria-label="contact button"
      startIcon={<MailIcon />}
      sx={{
        fontSize: 16,
        mx: 2,
        my: 1.2,
        border: 2,
        borderRadius: 1,
        color: "success.main",
        transition: "0.2s",
        ":hover": {
          border: 2,
          bgcolor: "success.main",
          color: "primary.main",
          borderColor: "success.main",
        },
      }}
      component="a"
      href="https://wso2.com/contact/?src=healthcare"
      target="_blank"
    >
      Contact Us
    </Button>
  );
};

export default ContactBtn;
