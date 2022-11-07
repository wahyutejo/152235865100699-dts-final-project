import React from "react";
import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box sx={{ mt: 5, mb: 0, maxWidth: "100vw", background: "linear-gradient(45deg, #a70000 30%, #000000 90%)", color: "#fff", p: 3 }}>
      <Typography sx={{textAlign: "center"}}> &copy; 2022 Wahyutejo-News allright reserved</Typography>
    </Box>
  );
};

export default Footer;
