import NewsApi from "../services/NewsAPI";
import React, { useState, useEffect } from "react";
import { Box, Typography, CardMedia } from "@mui/material";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const NewsDetail = () => {
  const [headline, setHeadline] = useState([]);
  let { publishedAt } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseHeadline = await NewsApi.get("/top-headlines");
        setHeadline(responseHeadline.data.articles);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return (
    <Box sx={{ mt: 20 }}>
      {headline
        .filter((card) => card.publishedAt === publishedAt)
        .map((card) => (
          <>
          <Navbar />
          <Box>
            <CardMedia component="img" sx={{ height: 500, width: 700 }} image={card.urlToImage} alt={card.title}></CardMedia>
            <Typography variant="h5">{card.title}</Typography>
            <Typography variant="body2">{card.description}</Typography>
            <Typography variant="body1">{card.content}</Typography>
            <Typography variant="body1">{card.author}</Typography>
            <Typography>
            <a href={card.url}>Sumber</a>{card.source.name}
            </Typography>
          </Box>
          <Footer />
          </>
        ))}
    </Box>
  );
};

export default NewsDetail;
