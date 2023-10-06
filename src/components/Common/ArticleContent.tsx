import {
    Box,
    Button,
    Card,
    CardMedia,
    Grid,
    Stack,
    Typography
} from "@mui/material";

interface Props {
  imgPath: string;
  title: string;
  description: string;
  link: string;
}

function ArticleContent({ imgPath, title, description, link }: Props) {
  return (
    <Card sx={{ maxWidth: 1200 }}>
      <Box sx={{ position: "relative" }}>
        <CardMedia component="img" height="350" image={imgPath} />
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
            <Grid container item xs={6}>
              <Stack>
                <Typography variant="h5">{title}</Typography>
                <Typography variant="body2">{description}</Typography>
              </Stack>
            </Grid>
            <Grid container item xs={6}>
              <Button
                href={link}
                target="_blank"
                variant="outlined"
                style={{
                  borderRadius: 35,
                  border: "solid 2px #FF7300",
                  color: "#FFFFFF",
                }}
              >
                Read more
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Card>
  );
}

export default ArticleContent;
