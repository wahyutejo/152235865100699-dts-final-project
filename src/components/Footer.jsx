import React from "react";
import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box sx={{ mt: 20, backgroundColor: "#ff5748", color: "#fff", p: 3 }}>
      <Typography sx={{ display: "flex", flexDirection: "row", justifyContent: "center", gap: 20, py: 2 }}> &copy; 2022 News allright reserved</Typography>
    </Box>
  );
};

export default Footer;
