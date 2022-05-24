import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { IconButton } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";

const navLinks = [
  { title: "About", path: "/first" },
  { title: "Contact", path: "/second" },
];

const Layout = () => {
  return (
    <>
      <AppBar color="transparent" elevation={1}>
        <Container>
          <Box
            sx={{
              height: "70px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box>
              <IconButton component={NavLink} to="/">
                <HomeIcon fontSize="large" />
              </IconButton>
            </Box>
            <Box sx={{ display: "flex" }}>
              {navLinks.map(({ title, path }) => (
                <Box
                  sx={{
                    padding: "10px",
                    textDecoration: "none",
                    color: "black",
                  }}
                  key={title}
                  component={NavLink}
                  to={path}
                  style={({ isActive }) => ({
                    color: isActive ? "#fff" : "",
                    background: isActive ? "orange" : "",
                    borderRadius: isActive ? "10px" : "",
                  })}
                >
                  <Typography variant="button">{title}</Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Container>
      </AppBar>

      <Outlet />
    </>
  );
};

export default Layout;
