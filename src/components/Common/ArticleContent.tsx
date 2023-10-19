import {
  Box,
  Button,
  Card,
  CardMedia,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { READ_MORE_BUTTON_LABEL } from "../Configs/TextConstants";

interface Props {
  imgPath: string;
  title: string;
  description: string;
  link: string;
}

function ArticleContent({ imgPath, title, description, link }: Props) {
  return (
    <Card sx={{ maxWidth: 1200, minWidth: { xs: 130, sm: 200, md: 250 } }}>
      <Box sx={{ position: "relative" }}>
        <CardMedia
          component="img"
          // sx={{ minHeight: 250, minWidth: 200 }}
          image={imgPath}
        />
        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            bgcolor: "rgba(0, 0, 0, 0.54)",
            color: "white",
            padding: "10px",
          }}
        >
          <Grid container>
            <Grid container item xs={10} md={8}>
              <Stack>
                <Typography variant="h6">{title}</Typography>
                <Typography variant="body2">{description}</Typography>
              </Stack>
            </Grid>
            <Grid
              container
              item
              xs={2}
              md={4}
              sx={{
                justifyContent: "flex-end",
                paddingRight: { xs: 0, md: 5, lg: 15 },
              }}
            >
              <Button
                href={link}
                target="_blank"
                variant="outlined"
                sx={{
                  borderRadius: 35,
                  border: { xs: "solid 1px #00A79D", md: "solid 2px #00A79D" },
                  color: "#FFFFFF",
                  padding: { xs: "0px", sm: "0px", md: "1px", lg: "8px" },
                  width: { xs: 100, sm: 100, md: 100, lg: 100, xl: 110 },
                }}
              >
                <Typography
                  justifyContent="center"
                  alignItems="center"
                  variant="body2"
                  sx={{
                    fontSize: {
                      xs: "0.6rem",
                      sm: "0.65rem",
                      md: "0.70rem",
                      lg: "0.8rem",
                      xl: "0.857rem",
                    },
                  }}
                >
                  {READ_MORE_BUTTON_LABEL}
                </Typography>
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Card>
  );
}

export default ArticleContent;
