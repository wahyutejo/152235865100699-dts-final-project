import React, { useState, useEffect } from "react";
import { Typography, Box } from "@mui/material";
import { useParams } from "react-router-dom";
import { Detail } from "../components/CardNews";
import NewsApi from "../services/NewsAPI";

const NewsDetail = () => {
  const cek = Detail();
  console.log(cek);
  const [news, setNews] = useState({});
  const params = useParams();

  useEffect(() => {
    const newsDetail = Detail(params.publishedAt);
    const data = async () => {
      try {
        const responseNews = await NewsApi.get(`/top-headline/${newsDetail}`);
        setNews(responseNews);
      } catch (err) {
        console.log(err);
      }
    };
    data();
  }, [params.publishedAt]);

  return (
    <>
      <Box sx={{ m: 3 }}>
        <Typography variant="h3">Halo</Typography>
        <Typography variant="h3">{news.title}</Typography>
        <Typography variant="h3">{news?.title}</Typography>
      </Box>
    </>
  );
};

export default NewsDetail;
