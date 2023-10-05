import { Grid, Typography } from "@mui/material";
import { toolGroups } from "../Configs/Config";
import Toolcard from "./ToolCard";

function Tools() {
  return (
    <>
      <Grid container rowSpacing={2}>
        <Grid
          container
          item
          xs={12}
          marginTop={8}
          alignItems="center"
          justifyContent="center"
        >
          <Typography variant="h3" align="center" color="#00255C">
            Health IT Developer Toolkit
          </Typography>
        </Grid>

        {toolGroups.map((toolGroup) => (
          <Grid
            container
            item
            xs={12}
            marginTop={2}
            marginBottom={4}
            bgcolor="#E8E8E8"
            alignItems="center"
            justifyContent="center"
          >
            <Grid
              container
              maxWidth="lg"
              rowSpacing={5}
              columnSpacing={3}
              padding={5}
            >
              <Grid item xs={12} alignItems="center" justifyContent="center">
                <Typography variant="h5" align="center" color="#00255C">
                  {toolGroup.title}
                </Typography>
              </Grid>
              <Grid container item xs={12} spacing={5} maxWidth={100}>
                {toolGroup.tools.map((toolObject) => (
                  <Grid
                    container
                    item
                    xs={12}
                    sm={6}
                    md={
                      toolGroup.tools.length > 2
                        ? 4
                        : toolGroup.tools.length == 2
                        ? 6
                        : 12
                    }
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Toolcard
                      title={toolObject.title}
                      description={toolObject.description}
                      image={toolObject.image}
                      link={toolObject.link}
                    ></Toolcard>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default Tools;