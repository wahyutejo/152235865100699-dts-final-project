import { headlineApi } from "../services/NewsAPI";
import React, { useState, useEffect } from "react";
import { Box, Typography, CardMedia, Grid, ThemeProvider } from "@mui/material";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import theme from "../themes/Theme";

const NewsDetail = () => {
  const [headline, setHeadline] = useState([]);
  let { publishedAt } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseHeadline = await headlineApi.get("/top-headlines");
        setHeadline(responseHeadline.data.articles);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Box sx={{ m: 10 }}>
        {headline
          .filter((card) => card.publishedAt === publishedAt)
          .map((card) => (
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Grid container justifyContent="center" alignItems="center">
                <CardMedia component="img" sx={{ height: 500, width: 700, borderRadius: "0.5rem" }} image={card.image} alt={card.title}></CardMedia>
              </Grid>

              <Typography variant="h5" textAlign="center" sx={{ m: 4 }}>
                {card.title}
              </Typography>
              <Typography variant="body2">{card.description}</Typography>
              <Typography variant="body1">{card.content}</Typography>
              <Typography sx={{ mt: 5 }}>
                <a href={card.url}>Read more</a> {card.source.name}
              </Typography>
            </Box>
          ))}
      </Box>
      <Footer />
    </ThemeProvider>
  );
};

export default NewsDetail;
