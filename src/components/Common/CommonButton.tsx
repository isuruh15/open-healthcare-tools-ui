import Button from "@mui/material/Button";

interface ButtonProps {
  variant: "background" | "border";
  label: string;
  id?: string;
  onClick?: () => void;
}

export const CommonButton = ({ variant, label, id, onClick }: ButtonProps) => {
  return (
    <Button
      onClick={onClick}
      variant="outlined"
      id={id}
      sx={{
        fontSize: 14,
        borderRadius: 1,
        textTransform: "none",
        backgroundColor:
          variant === "background" ? "primary.main" : "transparent",
        color: variant === "background" ? "white" : "primary.main",
        border: 2,
        borderColor: "primary.main",
        ":hover": {
          border: 2,
          color: variant === "background" ? "primary.main" : "primary.contrastText",
          bgcolor: variant === "background" ? "secondary.light" : "secondary.main",
          borderColor:
            variant === "background" ? "secondary.light" : "secondary.main",
        },
      }}
    >
      {label}
    </Button>
  );
};
