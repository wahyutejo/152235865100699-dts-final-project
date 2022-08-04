import React from "react";
import { Box, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export function CardNews(props) {
  return (
    <Box sx={{ m: 3, display: "flex", justifyContent: "center" }}>
      <Box>
        <CardMedia component="img" sx={{ height: 300, width: 500 }} image={props.news.urlToImage} alt={props.news.title}></CardMedia>
      </Box>
      <Box sx={{ mx: 3, my: 1 }}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography variant="h5" sx={{ "&:hover": { cursor: "pointer" }, mb: 2 }}>
            <Link to={`/detail/${props.news.publishedAt}`} style={{ textDecoration: "none", color: "black" }}>
              {props.news.title}
            </Link>
          </Typography>
          <Typography variant="7" sx={{ mb: 2 }}>
            {props.news.publishedAt}{" "}
          </Typography>
          <Typography variant="7">{props.news.description}</Typography>
        </Box>
      </Box>
    </Box>
  );
}
