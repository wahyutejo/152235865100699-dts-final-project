import React from "react";
import { Box, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export function CardNews(props) {
  return (
    <Box sx={{ m: 3, display: "flex" }}>
      <CardMedia component="img" sx={{ height: 300, width: 500 }} image={props.news.urlToImage} alt={props.news.title}></CardMedia>
      <Box sx={{ display: "flex", flexDirection: "column", p: 5 }}>
        <Typography variant="h5" sx={{ "&:hover": { cursor: "pointer" } }}>
          <Link to={`/detail/${props.news.publishedAt}`}>{props.news.title}</Link>
        </Typography>
        <Typography variant="7">{props.news.publishedAt}</Typography>
        <Typography variant="7">{props.news.description}</Typography>
      </Box>
    </Box>
  );
}
