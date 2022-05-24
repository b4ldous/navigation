import React, { useState } from "react";
import {
  AppBar,
  Drawer,
  IconButton,
  List,
  ListItemText,
  Toolbar,
  ListItemButton,
  Box,
  Container,
  Divider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import { NavLink, Outlet } from "react-router-dom";

const navLinks = [
  { title: "About", path: "/first" },
  {
    title: "Contact",
    path: "/second",
  },
];

const Layout = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <>
      <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <Box sx={{ width: 250 }}>
          <Toolbar>hello</Toolbar>
          <Divider />

          <List>
            {navLinks.map(({ title, path }) => (
              <ListItemButton
                button
                key={title}
                component={NavLink}
                to={path}
                style={({ isActive }) => ({
                  color: isActive ? "#fff" : "",
                  background: isActive ? "black" : "",
                })}
                onClick={() => setOpenDrawer(false)}
              >
                <ListItemText primary={title} />
              </ListItemButton>
            ))}
          </List>
        </Box>
      </Drawer>

      <Outlet />

      <AppBar position="fixed" color="inherit" elevation={1}>
        <Container fixed>
          <Toolbar>
            <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
              <MenuIcon sx={{ color: "black" }} />
            </IconButton>

            <IconButton to="/" component={NavLink}>
              <HomeIcon sx={{ color: "black" }} />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      <Outlet />
    </>
  );
};

export default Layout;
