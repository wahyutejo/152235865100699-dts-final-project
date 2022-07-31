import React from "react";
import { Button, Toolbar, AppBar, Typography, List, ListItem } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { useNavigate } from "react-router-dom";
import { logoutFromApps } from "../authentication/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../authentication/firebase";

const Navbar = () => {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);

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
          <ListItem>Hallo Icon</ListItem>
        </List>
        <Toolbar sx={{ justifyContent: "center" }}>
          <List
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <ListItem sx={{ flexShrink: 2 }}>Home</ListItem>
            <ListItem sx={{ flexShrink: 2 }}>Series</ListItem>
            <ListItem sx={{ flexShrink: 2 }}>Movies</ListItem>
            <ListItem sx={{ flexShrink: 1.5 }}>New and Popular</ListItem>
            <ListItem sx={{ flexShrink: 2 }}>MyList</ListItem>
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
            <Button color="inherit" onClick={buttonLogout}>
              Logout
            </Button>
          </ListItem>
          <ListItem>
            <CardGiftcardIcon />
          </ListItem>
          <ListItem>
            <NotificationsIcon />
          </ListItem>
          <ListItem>
            Halo,
            {user ? <strong>{user.email}</strong> : ""}
          </ListItem>
        </List>
      </Typography>
    </AppBar>
  );
};

export default Navbar;
