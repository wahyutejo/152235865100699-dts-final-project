import * as React from "react";
import { styled, useTheme, alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import List from "@mui/material/List";

import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import InputBase from "@mui/material/InputBase";
import { useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import "../App.css";

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginRight: -drawerWidth,
  ...(open && {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: 0,
  }),
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-start",
}));

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: 10,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginRight: theme.spacing(1),
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

export default function PersistentDrawerRight() {
  const theme = useTheme();
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
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

  return (
    <Box className="navbar-2" sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <Box onClick={home} sx={{ "&:hover": { cursor: "pointer" }, flexGrow: 1, mr: 2 }}>
            <HomeIcon />
          </Box>

          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase placeholder="Search…" inputProps={{ "aria-label": "search" }} />
          </Search>

          <IconButton color="inherit" aria-label="open drawer" edge="end" onClick={handleDrawerOpen} sx={{ ...(open && { display: "none" })}}>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Main open={open}>
        <DrawerHeader />
      </Main>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
          },
        }}
        variant="persistent"
        anchor="right"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>{theme.direction === "rtl" ? <ChevronLeftIcon /> : <ChevronRightIcon />}</IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <MailIcon />
              </ListItemIcon>
              <ListItemText onClick={business} sx={{ "&:hover": { cursor: "pointer" } }}>
                Business
              </ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <MailIcon />
              </ListItemIcon>
              <ListItemText onClick={entertainment} sx={{ "&:hover": { cursor: "pointer" } }}>
                Entertainment
              </ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <MailIcon />
              </ListItemIcon>
              <ListItemText onClick={health} sx={{ "&:hover": { cursor: "pointer" } }}>
                Health
              </ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <MailIcon />
              </ListItemIcon>
              <ListItemText onClick={nation} sx={{ "&:hover": { cursor: "pointer" } }}>
                Nation
              </ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <MailIcon />
              </ListItemIcon>
              <ListItemText onClick={science} sx={{ "&:hover": { cursor: "pointer" } }}>
                Science
              </ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            {" "}
            <ListItemButton>
              <ListItemIcon>
                <MailIcon />
              </ListItemIcon>
              <ListItemText onClick={sports} sx={{ "&:hover": { cursor: "pointer" } }}>
                Sports
              </ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <MailIcon />
              </ListItemIcon>
              <ListItemText onClick={technology} sx={{ "&:hover": { cursor: "pointer" } }}>
                Technology
              </ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <MailIcon />
              </ListItemIcon>
              <ListItemText onClick={world} sx={{ "&:hover": { cursor: "pointer" } }}>
                World
              </ListItemText>
            </ListItemButton>
          </ListItem>
        </List>
        <Divider />
      </Drawer>
    </Box>
  );
}
