import PlayCircleFilledOutlinedIcon from "@mui/icons-material/PlayCircleFilledOutlined";
import { IconButton, Tooltip } from "@mui/material";

interface Props {
  size?: number;
  handleExecute?: () => void;
  isDisabled?: boolean;
}

export const ExecuteButton = ({
  size = 30,
  handleExecute,
  isDisabled = false,
}: Props) => {
  return (
    <>
      <Tooltip
        key="execute-icon"
        title="Execute Tool"
        placement="bottom"
        id="execute-tooltip"
      >
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
      </Tooltip>
    </>
  );
};
