import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import { Alert, Box, IconButton, Tooltip, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { COPIED_INFO_MESSAGE } from "../../configs/TextConstants";

interface Props {
  data: string;
  size?: number;
  isDisabled?: boolean;
}

export const CopyContent = ({ data, size = 30, isDisabled = false }: Props) => {
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsCopied(false);
    }, 3000);
  }, [isCopied]);

  return (
    <Tooltip
      key="copy-icon"
      title="Copy Content"
      placement="bottom"
      id="comp-copy-content-tooltip"
    >
      <Box
        id="box-copy-content-alert"
        style={{ display: "flex" }}
        color="text.primary"
      >
        <Typography id="txt-copy-content-alert" component="span">
          {isCopied && (
            <Alert
              severity="success"
              icon={<TaskAltIcon sx={{ fontSize: 15 }} />}
              sx={{ fontSize: 10, py: 0.3 }}
              id="comp-copy-content-alert"
            >
              {COPIED_INFO_MESSAGE}
            </Alert>
          )}
        </Typography>
        <IconButton
          id="btn-copy-content"
          aria-label="Copy Content"
          aria-labelledby="copy-button"
          sx={{
            color: "text.primary",
          }}
          onClick={() => {
            navigator.clipboard.writeText(data!);
            setIsCopied(true);
          }}
          disabled={isDisabled}
        >
          <ContentCopyIcon
            id="icon-copy-content"
            sx={{ fontSize: size }}
            aria-hidden="true"
          />
        </IconButton>
      </Box>
    </Tooltip>
  );
};
