import { Grid, Typography } from "@mui/material";
import { Box, alpha } from "@mui/system";

interface Wso2BladeProps {
    solution: {
        title: string;
    };
    language: {
        title: string;
    }
}

export const Banner = ({ solution, language }: Wso2BladeProps) => {
    return (
        <Box>
            <Box
                sx={{
                    backgroundImage: "url('https://ngspl.com/wp-content/uploads/2017/03/background-check-process.jpg-1.jpg')",
                    backgroundBlendMode: "multiply",
                    position: "relative",
                    minHeight: 300,
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <Box
                    sx={{
                        minHeight: 300,
                        backgroundColor: "#00A79D60",
                        backdropFilter: "blur(5px)",
                        flexDirection: "row",
                        display: "flex",
                    }}
                    padding={5}
                >
                    <Grid container alignItems="center" justifyContent="center" marginLeft={6}>
                    <Grid container alignItems="center" justifyContent="center" paddingTop={6} paddingLeft={5} paddingBottom={2}>
                        <Typography variant="h2" align="center" color="#00255C" maxWidth="lg">
                            {solution.title}
                        </Typography>
                    </Grid>
                    <Grid container alignItems="center" justifyContent="center" paddingLeft={5} >
                        <Typography
                            variant="body1"
                            align="justify"
                            color="#00255C"
                            maxWidth="lg"
                            lineHeight={1.7}
                        >
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint, odio
                            reprehenderit accusantium animi vitae necessitatibus molestiae eaque
                            repellendus eos tempora cupiditate magni laboriosam ex enim sapiente
                            voluptatum facilis, voluptatem unde. Lorem, ipsum dolor sit amet
                            consectetur adipisicing elit. Sint, odio reprehenderit accusantium
                            animi vitae necessitatibus molestiae eaque repellendus eos tempora
                            cupiditate magni laboriosam ex enim sapiente voluptatum facilis,
                            voluptatem unde.Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit.
                        </Typography>
                    </Grid>
                    </Grid>
                    <Grid container alignItems="center" justifyContent="center" paddingLeft={2}>
                        <Box 
                            component={"img"}
                            src="https://wso2.cachefly.net/wso2/sites/all/2023/images/webp/wso2-logo.webp"
                            alt="Healthcare Logo"
                            sx={{
                                height: 100,
                                width: 350,
                                maxHeight: { xs: 233, md: 167 },
                                maxWidth: { xs: 350, md: 250 },
                              }}
                        >
                        </Box>
                    </Grid>
                </Box>
            </Box>
            <Box
                minHeight={300}
                alignItems="center"
                justifyContent="center"
                display={"flex"}
                flexDirection={"row"}
                padding={5}
                sx={{
                    backgroundColor: "grey.300",
                    mb: 2,
                }}
            >
                <Grid container alignItems="center" justifyContent="center" marginLeft={6}>
                    <Grid container alignItems="center" justifyContent="center" paddingTop={6}>
                        <Typography variant="h2" align="center" color="#00255C" maxWidth="lg">
                            {language.title}
                        </Typography>
                    </Grid>
                    <Grid container alignItems="center" justifyContent="center" padding={2}>
                        <Typography
                            variant="body1"
                            align="justify"
                            color="#00255C"
                            maxWidth="lg"
                            lineHeight={1.7}
                        >
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint, odio
                            reprehenderit accusantium animi vitae necessitatibus molestiae eaque
                            repellendus eos tempora cupiditate magni laboriosam ex enim sapiente
                            voluptatum facilis, voluptatem unde. Lorem, ipsum dolor sit amet
                            consectetur adipisicing elit. Sint, odio reprehenderit accusantium
                            animi vitae necessitatibus molestiae eaque repellendus eos tempora
                            cupiditate magni laboriosam ex enim sapiente voluptatum facilis,
                            voluptatem unde.Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit.
                        </Typography>
                    </Grid>
                    </Grid>
                    <Grid container alignItems="center" justifyContent="center" padding={2}>
                        <Box 
                            component={"img"}
                            src="https://ballerina.io/images/logo/ballerina-logo-grey.svg"
                            alt="Healthcare Logo"
                            sx={{
                                height: 100,
                                width: 350,
                                maxHeight: { xs: 233, md: 167 },
                                maxWidth: { xs: 350, md: 250 },
                              }}
                        >
                        </Box>
                    </Grid>
            </Box>
        </Box>
    );
}

export default Banner;