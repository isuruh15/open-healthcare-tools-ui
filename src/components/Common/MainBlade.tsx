import { Box, Button, Grid, Typography } from "@mui/material";
import { useRef, useState } from "react";

interface MainBladeProps {
  title: string;
  description: string;
  image: string;
  backgroundImage?: string;
}

export const MainBlade = ({
  title,
  description,
  image,
  backgroundImage,
}: MainBladeProps) => {
  const [active] = useState(true);
  const ref = useRef(null);

  // const handleClick = () => {
  //   ref.current?.scrollIntoView({ behavior: 'smooth' });
  // };
  return (
    <Box bgcolor="background.paper">
      <Grid container alignItems="center" justifyContent="center">
        <Grid
          container
          item
          alignItems="center"
          justifyContent="center"
          maxWidth={{ xl: "xl", lg: "lg", md: "md", sm: "sm", xs: "xs" }}
          sx={{ padding: { xs: 3, sm: 0, md: 0, lg: 0, xl: 0 } }}
          spacing={8}
        >
          <Grid
            container
            item
            md={6}
            alignItems="center"
            justifyContent="center"
          >
            <Grid container item alignItems="center" justifyContent="flexStart">
              <Typography
                variant="h2"
                sx={{
                  mt: 3,
                  mb: 6,
                }}
                alignItems="center"
                color="text.primary"
              >
                {title}
              </Typography>
            </Grid>

            <Grid container item alignItems="center" justifyContent="center">
              <Typography
                variant="body1"
                color="text.secondary"
                marginTop={1}
                align="justify"
                lineHeight={1.7}
              >
                {description}
              </Typography>
            </Grid>
            {/* <Grid
              container
              item
              alignItems="center"
              marginTop={3}
              paddingLeft={5}
            >
              <Button
                variant="contained"
                color="info"
                sx={{
                  borderRadius: 2,
                  border: "solid 1px #FF7300",
                }}
              >
                <Typography color="#FFFFFF">Try-out</Typography>
              </Button>
            </Grid> */}
          </Grid>
          <Grid
            container
            item
            md={6}
            alignItems={{ lg: "center", xl: "left" }}
            justifyContent={{ lg: "center", xl: "start" }}
          >
            <Box
              component="img"
              sx={{
                height: { xs: 197, sm: 254, lg: 310, xl: 395 },
                width: { xs: 350, sm: 450, lg: 550, xl: 700 },
                // maxHeight: { xs: 233, md: 167 },
                // maxWidth: { xs: 350, md: 250 },
              }}
              width={700}
              height={395}
              alt="Healthcare Logo"
              src={image}
            />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};
function scrollIntoView(arg0: { behavior: string }) {
  throw new Error("Function not implemented.");
}
