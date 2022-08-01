import React from "react";
import { Box, Typography, ThemeProvider } from "@mui/material";
import theme from "../themes/Theme";

const Footer = () => {
  return (
<>
<ThemeProvider theme={theme}>
    
      <Box>
        <Typography sx={{ display: "flex", flexDirection: "row", justifyContent: "center", gap: 20, py: 2 }}>
                  

            2022 News allright reserved
        
        </Typography>
      </Box>
   
</ThemeProvider>
</>
  );
};

export default Footer;
