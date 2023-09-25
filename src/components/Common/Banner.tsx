import { Grid, Typography } from "@mui/material";
import { Box, alpha } from "@mui/system";

interface BannerProps {
    content: {
        title: string;
    };
}

export const Banner = ({ content }: BannerProps) => {
  return (
    <Box
      bgcolor={alpha("#00A79D", 0.75)}
      height={300}
      alignItems="center"
      justifyContent="center"
    //   paddingTop={5}
      padding={5}
    //   marginTop={2}
    >
      <Grid container alignItems="center" justifyContent="center" padding={1}>
        <Typography variant="h2" align="center" color="#00255C" maxWidth="lg">
          {content.title}
        </Typography>
      </Grid>
      <Grid container alignItems="center" justifyContent="center" padding={2}>
        <Typography
          variant="body1"
          align="justify"
          color="#00255C"
          maxWidth="lg"
          lineHeight={1.7}
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint, odio
          reprehenderit accusantium animi vitae necessitatibus molestiae eaque
          repellendus eos tempora cupiditate magni laboriosam ex enim sapiente
          voluptatum facilis, voluptatem unde. Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. Sint, odio reprehenderit accusantium
          animi vitae necessitatibus molestiae eaque repellendus eos tempora
          cupiditate magni laboriosam ex enim sapiente voluptatum facilis,
          voluptatem unde.Lorem, ipsum dolor sit amet consectetur adipisicing
          elit.
        </Typography>
      </Grid>
    </Box>
  );
}

export default Banner;