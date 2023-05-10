import { Box, Divider, Grid, Typography } from "@mui/material";
import ViewDocument from "./ViewDocument";

interface Props {
  heading: string;
  description: string;
  url: string;
}

const Heading = ({ heading, description, url }: Props) => {
  return (
    <>
      <Box>
        <Typography
          color="secondary.dark"
          variant="h3"
          sx={{ fontWeight: 600 }}
        >
          {heading}
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={8} xl={8}>
            <Typography
              color="primary.dark"
              variant="h6"
              sx={{ fontWeight: 400, lineHeight: "3" }}
            >
              {description}
            </Typography>
          </Grid>
          <Grid item xs={4} xl={4}>
            <ViewDocument url={url}></ViewDocument>
          </Grid>
        </Grid>
        <Divider />
      </Box>
    </>
  );
};

export default Heading;
