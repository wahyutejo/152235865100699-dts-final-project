import React from "react";
import { Button, Toolbar, AppBar, Typography, List, ListItem } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
// import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
// import NotificationsIcon from "@mui/icons-material/Notifications";
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
            <ListItem>Home</ListItem>
            <ListItem>Business</ListItem>
            <ListItem>Entertainment</ListItem>
            <ListItem>Health</ListItem>
            <ListItem>Science</ListItem>
            <ListItem>Sports</ListItem>
            <ListItem>Technology</ListItem>
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
          {/* <ListItem>
            <Button variant="outlined" size="small" onClick={buttonLoginOrLogout}>
              {loginOrLogout === "login" ? "Login" : "Logout"}
            </Button>

            {loginOrLogout === "login" ? (
              <Link to="/login">
                <Typography variant="body1">Keluar</Typography>
              </Link>
            ) : (
              <Link to="/login">
                <Typography variant="body1">Masuk</Typography>
              </Link>
            )}
          </ListItem> */}

          <ListItem>
            <Button color="inherit" onClick={buttonLogout}>
              Logout
            </Button>
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
