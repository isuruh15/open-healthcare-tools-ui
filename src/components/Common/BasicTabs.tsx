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
              bgcolor: "rgba(0, 0, 0, 0.50)",
              color: "common.white",
              height: "calc(100vh - 197px)",
              width: { xs: "80%", sm: "88.5%" },
              zIndex: 1,
            }}
            marginTop={4.6}
            alignItems="center"
            justifyContent="center"
          >
            <Grid
              container
              alignItems="center"
              justifyContent="center"
              height="calc(100vh - 197px)"
            >
              <Box
                alignItems="center"
                justifyContent="center"
                flexDirection="column"
                display="flex"
                bgcolor="background.paper"
                width="80%"
                padding={1}
                borderRadius={1}
              >
                <Typography
                  variant="h6"
                  marginBottom={2}
                  color="common.black"
                  textAlign="center"
                >
                  Please sign in to try out the Healthcare tool
                </Typography>
                <Button
                  variant="contained"
                  size="large"
                  onClick={handleLogin}
                  sx={{
                    backgroundColor: "primary.main",
                    color: "primary.contrastText",
                    borderRadius: "8px",
                    fontWeight: 600,
                    fontSize: { xs: "1rem" },
                    textTransform: "none",
                    alignSelf: "center",
                    "&:hover": {
                      backgroundColor: "secondary.main",
                    },
                  }}
                >
                  Sign In
                </Button>
              </Box>
              <Box alignItems="center" justifyContent="center"></Box>
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
