import { Grid, Typography } from "@mui/material";
import { toolGroups } from "../Configs/Config";
import Toolcard from "./ToolCard";

function Tools() {
  return (
    <>
      <Grid container rowSpacing={2} color="text.primary">
        <Grid
          container
          item
          xs={12}
          marginTop={7}
          alignItems="center"
          justifyContent="center"
        >
          <Typography
            variant="h4"
            align="center"
            maxWidth="lg"
          >
            Health IT Developer Toolkit
          </Typography>
        </Grid>

        <Grid
          container
          item
          xs={12}
          alignItems="center"
          justifyContent="center"
          maxWidth="lg"
        >
          <Typography
            variant="body1"
            align="center"
            color="text.secondary"
            maxWidth="lg"
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Dignissimos iste odio repellendus, quas minima quibusdam consequatur
            nulla quia, eius inventore voluptates tempore neque obcaecati libero
            voluptate laudantium provident. Vero, obcaecati!
          </Typography>
        </Grid>

        {toolGroups.map((toolGroup) => (
          <Grid
            container
            item
            xs={12}
            marginTop={2}
            marginBottom={4}
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
