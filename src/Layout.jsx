import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

import HomeIcon from "@mui/icons-material/Home";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";

const navLinks = [
  { title: "About", path: "/first" },
  { title: "Contact", path: "/second" },
];

const Layout = () => {
  return (
    <Box>
      <AppBar position="fixed" color="inherit" elevation={1}>
        <Container maxWidth="xl">
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box>
              <IconButton to="/" component={NavLink}>
                <HomeIcon sx={{ fontSize: 30, color: "black" }} />
              </IconButton>
            </Box>
            <Box>
              {navLinks.map(({ title, path }) => (
                <Button
                  sx={{ fontSize: "1rem", borderRadius: "10px" }}
                  key={title}
                  component={NavLink}
                  to={path}
                  style={({ isActive }) => ({
                    color: isActive ? "#fff" : "black",
                    background: isActive ? "black" : "",
                  })}
                >
                  {title}
                </Button>
              ))}
            </Box>
          </Box>
        </Container>
      </AppBar>

      <Outlet />
    </Box>
  );
};

export default Layout;
