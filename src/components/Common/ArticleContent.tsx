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
    <Card sx={{ maxWidth: 1200, minWidth: 180 }}>
      <Box sx={{ position: "relative" }}>
        <CardMedia component="img" sx={{minHeight: 250, maxHeight: 350}} image={imgPath} />
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
            <Grid container item xs={6} justifyContent="center">
              <Button
                href={link}
                target="_blank"
                variant="outlined"
                sx={{
                  borderRadius: 35,
                  border: "solid 2px #FF7300",
                  color: "#FFFFFF",
                  padding: {sm: "0px", md:"1px", lg: "8px"},
                  width: {sm:100, md: 100, lg:100, xl: 110},
                }}
              >
                <Typography justifyContent="center" alignItems="center" variant="body2" sx={{fontSize: {sm: "0.55rem", md: "0.75rem",lg:"0.8rem", xl: "0.857rem"}}}>Read more</Typography>
                
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Card>
  );
}

export default ArticleContent;
