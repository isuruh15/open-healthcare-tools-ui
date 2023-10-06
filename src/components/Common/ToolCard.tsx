import { CardActionArea } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useState } from "react";

interface Props {
  title: string;
  description: string;
  image: string;
  link: string;
}

function Toolcard({ title, description, image, link }: Props) {
  const [isHover, setIsHover] = useState(false);
  return (
    <Card
      sx={{
        maxWidth: 345,
        transform: isHover
          ? "scale3d(1.05, 1.05, 1.0)"
          : "scale3d(1.0, 1.0, 1.0)",
      }}
      color="#00255C"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <CardActionArea href={link} target="_">
        <CardMedia
          component="img"
          alt="green iguana"
          height="170"
          image={image}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            align="center"
            color="#text.primary"
          >
            {title}
          </Typography>
          <Typography variant="body1" color="text.secondary" lineHeight={1.5}>
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default Toolcard;