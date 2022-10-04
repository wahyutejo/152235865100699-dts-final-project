import React from "react";
import { Button, Toolbar, AppBar, Typography, List, ListItem } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";
import { logoutFromApps } from "../authentication/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../authentication/firebase";

const Navbar = () => {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);

  const buttonLogin = () => {
    navigate("/login");
  };

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

  const buttonLogout = async () => {
    await logoutFromApps();
    navigate("/login");
  };

  return (
    <AppBar>
      <Typography sx={{ display: "flex", justifyContent: "space-between" }}>
        <List
          sx={{
            display: "flex",
            justifyContent: "space-around",
            flexBasis: "20%",
          }}
        >
          <ListItem onClick={home} sx={{ "&:hover": { cursor: "pointer" } }}>
            Home
          </ListItem>
        </List>
        <Toolbar sx={{ justifyContent: "center" }}>
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
        <List
          sx={{
            display: "flex",
            justifyContent: "space-around",
            flexBasis: "20%",
          }}
        >
          <ListItem>
            <SearchIcon />
          </ListItem>

          <ListItem>
            {user ? (
              <Button color="inherit" onClick={buttonLogout}>
                Logout
              </Button>
            ) : (
              <Button color="inherit" onClick={buttonLogin}>
                Login
              </Button>
            )}
          </ListItem>

          <ListItem>{user ? <strong>Halo, {user.email}</strong> : ""}</ListItem>
        </List>
      </Typography>
    </AppBar>
  );
};

export default Navbar;
