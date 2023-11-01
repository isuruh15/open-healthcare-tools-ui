import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import { Box, Button, Link, Typography } from "@mui/material";
import { ArticleType, IArticle } from "../Configs/ArticleConfig";

function ArticleTile({ title, type = ArticleType.article, link }: IArticle) {
  return (
    <Link href={link} target="_" sx={{ textDecoration: "none" }}>
      <Box
        bgcolor="background.paper"
        borderRadius={5}
        padding={2}
        sx={{
          flexDirection: "column",
          display: "flex",
          justifyContent: "space-between",
          boxShadow: 3,
          width: { xs: 300, md: 350 },
          height: { xs: 180, md: 200 },
        }}
      >
        <Box sx={{ alignItems: "flex-start" }}>
          <Typography
            variant="h6"
            bgcolor="black"
            color="white"
            width={70}
            borderRadius={1}
            paddingLeft={1}
            paddingRight={1}
          >
            {type}
          </Typography>
        </Box>

        <Box sx={{ alignItems: "flex-start" }}>
          <Typography variant="h5">{title}</Typography>
        </Box>

        <Box sx={{ alignItems: "flex-end" }}>
          <Button
            variant="text"
            size="large"
            sx={{ color: "info.main", fontSize: "1rem" }}
            endIcon={<ArrowForwardOutlinedIcon />}
          >
            Read more
          </Button>
        </Box>
      </Box>
    </Link>
  );
}

export default ArticleTile;
