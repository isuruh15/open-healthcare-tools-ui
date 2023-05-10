import { TextField, Typography } from "@mui/material";

interface Props {
  label: string;
  rows?: number;
  maxRows?: string;
  width?: string;
}

const TextArea = ({
  label,
  rows = 25,
  maxRows = "Infinity",
  width = "700px",
}: Props) => {
  return (
    <>
      <Typography
        color="secondary.dark"
        variant="h6"
        sx={{ fontWeight: 400, lineHeight: "3" }}
      >
        {label}
      </Typography>

      <TextField
        multiline
        rows={rows}
        maxRows={maxRows}
        variant="outlined"
        style={{ width: width }}
      />
    </>
  );
};

export default TextArea;
