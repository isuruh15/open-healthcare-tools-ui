import {
  Icon,
  IconButton,
  Theme,
  createStyles,
  makeStyles,
} from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// const useStyles = makeStyles((theme: Theme) =>
//   createStyles({
//     root: {
//       "& > span": {
//         margin: theme.spacing(2),
//       },
//     },
//   })
// );

const ConvertButton = () => {
  return (
    <ArrowForwardIosIcon
      color="secondary"
      sx={{ fontSize: 100 }}
      onClick={()=>{console.log("Clicked")}}
    ></ArrowForwardIosIcon>
  );
};

export default ConvertButton;
