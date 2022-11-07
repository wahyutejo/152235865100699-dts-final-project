import React from "react";
import { ThemeProvider, Box } from "@mui/material";
import theme from "./themes/Theme";
import Navbar from "./components/Navbar";
import HeadLine from "./containers/HeadLine";
import Drawer from "./components/NavbarDrawer";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Navbar />
        <Drawer />
        <Box>
          <HeadLine />
        </Box>
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
