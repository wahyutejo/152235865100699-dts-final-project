import { worldApi } from "../services/NewsAPI";
import React, { useState, useEffect } from "react";
import { Box, Typography, ThemeProvider, CardMedia } from "@mui/material";
import theme from "../themes/Theme";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const WorldPage = () => {
  const [world, setNews] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseHeadline = await worldApi.get("/top-headlines");
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
      <Box ClassName="headline" sx={{ mt: 20 }}>
        <Typography variant="h5" sx={{ px: 5 }}>
          WORLD
        </Typography>
        <Box>
          {world.map((news) => (
            <Box sx={{ m: 3, display: "flex", justifyContent: "center" }}>
              <Box>
                <CardMedia component="img" sx={{ height: 300, width: 500 }} image={news.image} alt={news.title}></CardMedia>
              </Box>
              <Box sx={{ mx: 3, my: 1 }}>
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <Typography variant="h5" sx={{ "&:hover": { cursor: "pointer" }, mb: 2 }}>
                    {news.title}
                  </Typography>
                  <Typography variant="7" sx={{ mb: 2 }}>
                    {news.publishedAt}
                  </Typography>
                  <Typography variant="7">{news.description}</Typography>
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
      <Footer />
    </ThemeProvider>
  );
};

export default WorldPage;
