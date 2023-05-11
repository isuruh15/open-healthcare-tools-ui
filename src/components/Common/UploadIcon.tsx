import React from "react";
import { Button } from "@mui/material";
import { CloudUploadRounded } from "@mui/icons-material";

interface Props {
  size: number;
}

const UploadIcon = ({ size }: Props) => {
  return (
    <Button variant="text">
      <CloudUploadRounded
        color="secondary"
        sx={{ fontSize: size }}
        onClick={() => {
          console.log("Clicked");
        }}
      ></CloudUploadRounded>
    </Button>
  );
};

export default UploadIcon;
