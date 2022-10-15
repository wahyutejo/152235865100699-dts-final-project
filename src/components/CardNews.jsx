import React from "react";
import { Box, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import showFormattedDates from "./datesFormat";

export function CardNews(props) {
  const date = showFormattedDates(props.news.publishedAt);

  return (
    <Box sx={{ m: 3, display: "flex", justifyContent: "left" }}>
      <Box>
        <CardMedia component="img" sx={{ height: 300, width: 500 }} image={props.news.image} alt={props.news.title}></CardMedia>
      </Box>
      <Box sx={{ mx: 3, my: 1 }}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography variant="h5" sx={{ "&:hover": { cursor: "pointer" }, mb: 2 }}>
            <Link to={`/detail/${props.news.publishedAt}`} style={{ textDecoration: "none", color: "black" }}>
              {props.news.title}
            </Link>
          </Typography>
          <Typography variant="7" sx={{ mb: 2, fontStyle: "italic" }}>
            {date}
          </Typography>
          <Typography variant="7">{props.news.description}</Typography>
          <Typography sx={{ mt: 5 }}>
            <a href={props.news.url} target="_blank" rel="noopener noreferrer">
              Read more
            </a>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
