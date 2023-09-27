import { Typography, Box } from "@mui/material";
import logoBlack from "../../assets/system-integration.png";
import { PreLoader } from "./PreLoader";
import { useState } from "react";

interface MainBladeProps {
    title: string;
    description: string;
    image: string;
    backgroundImage?: string;
}

export const MainBlade = ({ title, description, image, backgroundImage }: MainBladeProps) => {
    const [active] = useState(true);
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
                gap: 15,
                alignItems: "center",
                height: 1,
                backgroundColor: "#00A79D75",
                ml: 0,
                mr: 0,
            }}>
            <Box sx={{ lineHeight: 1, textAlign: "justify", ml: 12,alignItems: "center", }}>
                {/* <PreLoader setActive={active} /> */}
                <Typography
                    variant="h1"
                    color="primary.dark"
                    fontWeight="500"
                    sx={{ mt: 3, mb: 6 }}>
                    {title}
                </Typography>
                <Typography variant="h6" sx={{ color: "balck.500", mt: 1 }}>
                    {description}
                </Typography>
            </Box>
            <Box
                sx={{  
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-around",
                    width: 1,
                    mr: 6,
                }}
            >
                <img src={image} alt="Healthcare Logo" style={{ width: "100" }} />
            </Box>
        </Box>
    );
};
