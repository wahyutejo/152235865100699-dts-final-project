import React from "react";
import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box sx={{ background: "linear-gradient(45deg, #a70000 30%, #000000 90%)", color: "#fff", p: 3 }}>
      <Typography sx={{ display: "flex", flexDirection: "row", justifyContent: "center", gap: 20, py: 2 }}> &copy; 2022 Wahyutejo-News allright reserved</Typography>
    </Box>
  );
};

export default Footer;
