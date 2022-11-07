import { headlineApi } from "../services/NewsAPI";
import React, { useState, useEffect } from "react";
import { Box, Typography, Container } from "@mui/material";
import { CardNews } from "../components/CardNews";

const HeadLine = () => {
  const [headline, setHeadline] = useState([]);

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
    <Container>
      <Box>
        <Typography variant="h5" sx={{ px: 9 }}>
          BREAKING NEWS
        </Typography>
        <Box>
          {headline.map((news) => {
            return <CardNews news={news} key={news.title} />;
          })}
        </Box>
      </Box>
    </Container>
  );
};

export default HeadLine;
