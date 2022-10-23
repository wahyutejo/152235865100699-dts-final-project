import React from "react";
import { Box, Toolbar, AppBar, List, ListItem } from "@mui/material";
import { useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import SearchBar from "./Search";
import "../App.css";

const Navbar = () => {
  const navigate = useNavigate();

  const home = () => {
    navigate("/");
  };
  const business = () => {
    navigate("/business");
  };
  const entertainment = () => {
    navigate("/entertainment");
  };
  const health = () => {
    navigate("/health");
  };
  const nation = () => {
    navigate("/nation");
  };
  const science = () => {
    navigate("/science");
  };
  const sports = () => {
    navigate("/sports");
  };
  const technology = () => {
    navigate("/technology");
  };
  const world = () => {
    navigate("/world");
  };

  return (
    <AppBar className="navbar-1">
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <List
          sx={{
            display: "flex",
            justifyContent: "space-around",
            flexBasis: "20%",
          }}
        >
          <ListItem onClick={home} sx={{ ml: 5, "&:hover": { cursor: "pointer" } }}>
            <HomeIcon />
          </ListItem>
        </List>
        <Toolbar sx={{ justifyContent: "center", mx: 5 }}>
          <List
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <ListItem onClick={business} sx={{ "&:hover": { cursor: "pointer" } }}>
              Business
            </ListItem>
            <ListItem onClick={entertainment} sx={{ "&:hover": { cursor: "pointer" } }}>
              Entertainment
            </ListItem>
            <ListItem onClick={health} sx={{ "&:hover": { cursor: "pointer" } }}>
              Health
            </ListItem>
            <ListItem onClick={nation} sx={{ "&:hover": { cursor: "pointer" } }}>
              Nation
            </ListItem>
            <ListItem onClick={science} sx={{ "&:hover": { cursor: "pointer" } }}>
              Science
            </ListItem>
            <ListItem onClick={sports} sx={{ "&:hover": { cursor: "pointer" } }}>
              Sports
            </ListItem>
            <ListItem onClick={technology} sx={{ "&:hover": { cursor: "pointer" } }}>
              Technology
            </ListItem>
            <ListItem onClick={world} sx={{ "&:hover": { cursor: "pointer" } }}>
              World
            </ListItem>
          </List>
        </Toolbar>

        <List sx={{ mr: 5 }}>
          <ListItem>
            <SearchBar />
          </ListItem>
        </List>
      </Box>
    </AppBar>
  );
};

export default Navbar;
