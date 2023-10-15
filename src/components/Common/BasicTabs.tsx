import { Button, Grid } from "@mui/material";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Typography from "@mui/material/Typography";
import * as React from "react";

interface Props {
  inputeditor: React.ReactNode;
  outputeditor: React.ReactNode;
  isInterectable: boolean;
  handleLogin: () => void;
}

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs({
  inputeditor,
  outputeditor,
  isInterectable,
  handleLogin,
}: Props) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Input" {...a11yProps(0)} />
          <Tab label="Output" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        {!isInterectable && (
          <Box
            sx={{
              position: "absolute",
              bgcolor: "background.paper",
              color: "common.black",
              height: "100px",
              width: "100%",
              zIndex: 1,
            }}
            marginTop={20}
            alignItems="center"
            justifyContent="center"
          >
            <Grid
              container
              alignItems="center"
              justifyContent="center"
              height="100px"
            >
              <Grid container item alignItems="center" justifyContent="center">
                <Typography variant="h5">
                  Please login to try out the Open Healthcare tool
                </Typography>
              </Grid>
              <Grid container item alignItems="center" justifyContent="center">
                <Button variant="contained" size="large" onClick={handleLogin}>
                  Login
                </Button>
              </Grid>
            </Grid>
          </Box>
        )}
        {inputeditor}
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        {outputeditor}
      </CustomTabPanel>
    </Box>
  );
}
