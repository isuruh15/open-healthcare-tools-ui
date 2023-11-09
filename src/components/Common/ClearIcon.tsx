import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { Box, IconButton, Tooltip } from "@mui/material";

interface Props {
  size?: number;
  onClear: () => void;
  isDisabled?: boolean;
}

export const ClearIcon = ({
  size = 30,
  onClear,
  isDisabled = false,
}: Props) => {
  return (
    <Tooltip key="clear-icon" title="Clear Content" placement="bottom">
      <Box>
        <IconButton
          onClick={onClear}
          id="clear-icon-button"
          aria-label="Clear Icon Button"
          sx={{
            color: "text.primary",
          }}
          disabled={isDisabled}
        >
          <DeleteOutlineOutlinedIcon
            sx={{ fontSize: size }}
            id="clear-icon"
            aria-label="Clear Icon"
          />
        </IconButton>
      </Box>
    </Tooltip>
  );
};
