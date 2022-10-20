import React from "react";
import { Box, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import showFormattedDates from "./datesFormat";
import "../App.css";

export function CardNews(props) {
  const date = showFormattedDates(props.news.publishedAt);

  return (
    <Box className="card-news" sx={{ m: 3, display: "flex", justifyContent: "left" }}>
      <Box className="card-img">
        <CardMedia component="img" sx={{ height: 300, width: 500 }} image={props.news.image} alt={props.news.title}></CardMedia>
      </Box>
      <Box className="card-box">
        <Box className="card-box-inner" sx={{ display: "flex", flexDirection: "column" }}>
          <Typography className="title" variant="h5" sx={{ "&:hover": { cursor: "pointer" }, mb: 2 }}>
            <Link to={`/detail/${props.news.publishedAt}`} style={{ textDecoration: "none", color: "black" }}>
              {props.news.title}
            </Link>
          </Typography>
          <Typography variant="7" sx={{ mb: 1, fontStyle: "italic" }}>
            {date}
          </Typography>
          <Typography variant="7">{props.news.description}</Typography>
          <Typography sx={{ mt: 1 }}>
            <a href={props.news.url} target="_blank" rel="noopener noreferrer">
              Read more
            </a>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
