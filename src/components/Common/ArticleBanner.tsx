import { Grid, Typography } from "@mui/material";
import { articles } from "../Configs/ArticleConfig";
import { ARTICLE_BANNER_TITLE } from "../Configs/TextConstants";
import ArticleTile from "./ArticleTile";

interface Props {
  marginTop?: number;
  marginBottom?: number;
}

function ArticleBanner({ marginTop = 3, marginBottom = 2 }: Props) {
  return (
    <Grid container alignItems="center" justifyContent="center">
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        spacing={5}
        paddingTop={10}
        paddingRight={5}
        paddingLeft={5}
        paddingBottom={5}
        maxWidth={{ xs: "xs", sm: "md", md: "md", lg: "lg" }}
      >
        <Grid
          container
          item
          alignItems="center"
          justifyContent="center"
          spacing={2}
          paddingBottom={5}
        >
          <Typography
            variant="h2"
            align="center"
            maxWidth="lg"
            color="text.primary"
          >
            {ARTICLE_BANNER_TITLE}
          </Typography>
        </Grid>
        <Grid
          container
          item
          alignItems="center"
          justifyContent="center"
          spacing={{ md: 2, lg: 3, xl: 5 }}
        >
          {articles.map((article, index) => (
            <Grid
              key={index}
              item
              container
              xl={4}
              lg={4}
              md={6}
              sm={6}
              xs={12}
              alignItems="center"
              justifyContent="center"
              spacing={3}
              paddingBottom={3}
            >
              <ArticleTile
                title={article.title}
                type={article.type}
                link={article.link}
              />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default ArticleBanner;
