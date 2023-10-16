import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import { IconButton, Tooltip } from "@mui/material";

interface Props {
  size?: number;
  handleDownload(): any;
  isDisabled?: boolean;
}

export const DownloadIcon = ({
  size = 30,
  handleDownload,
  isDisabled = false,
}: Props) => {
  return (
    <>
      <Tooltip
        key="download-icon"
        title="Download Content"
        placement="bottom"
        id="download-tooltip"
      >
        <IconButton
          aria-label="Download Content"
          sx={{
            color: "text.primary",
          }}
          onClick={handleDownload}
          disabled={isDisabled}
        >
          <FileDownloadOutlinedIcon
            sx={{ fontSize: size }}
            aria-hidden="true"
          />
        </IconButton>
      </Tooltip>
    </>
  );
};
