import React from "react";
import { Box, Toolbar, AppBar, List, ListItem } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import HomeIcon from "@mui/icons-material/Home";
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

  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        width: "12ch",
        "&:focus": {
          width: "20ch",
        },
      },
    },
  }));

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
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase placeholder="Search…" inputProps={{ "aria-label": "search" }} />
            </Search>
          </ListItem>
        </List>
      </Box>
    </AppBar>
  );
};

export default Navbar;
