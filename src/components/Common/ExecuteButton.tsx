import PlayCircleFilledOutlinedIcon from "@mui/icons-material/PlayCircleFilledOutlined";
import { Box, IconButton, Tooltip } from "@mui/material";

interface Props {
  toolTipText: string;
  size?: number;
  handleExecute?: () => void;
  isDisabled?: boolean;
}

export const ExecuteButton = ({
  toolTipText,
  size = 23,
  handleExecute,
  isDisabled = false,
}: Props) => {
  return (
    <>
      <Tooltip
        key="execute-icon"
        title={toolTipText}
        placement="bottom"
        id="execute-tooltip"
      >
        <Box>
          <IconButton
            aria-label="Execute Tool"
            sx={{
              color: "secondary.main",
            }}
            onClick={handleExecute}
            disabled={isDisabled}
          >
            <PlayCircleFilledOutlinedIcon
              sx={{ fontSize: size, padding: 0 }}
              aria-hidden="true"
            />
          </IconButton>
        </Box>
      </Tooltip>
    </>
  );
};
