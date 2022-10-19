import { scienceApi } from "../services/NewsAPI";
import React, { useState, useEffect } from "react";
import { Box, Typography, ThemeProvider, Container } from "@mui/material";
import theme from "../themes/Theme";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { CardNews } from "../components/CardNews";
import Drawer from "../components/NavbarDrawer";

const SciencePage = () => {
  const [science, setNews] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseHeadline = await scienceApi.get("/top-headlines");
        setNews(responseHeadline.data.articles);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Drawer />
      <Container>
        <Box>
          <Typography variant="h5" sx={{ px: 5 }}>
            SCIENCE
          </Typography>
          <Box>
            {science.map((news) => {
              return <CardNews news={news} key={news.title} />;
            })}
          </Box>
        </Box>
      </Container>
      <Footer />
    </ThemeProvider>
  );
};

export default SciencePage;
