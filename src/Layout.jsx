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
      <AppBar color="transparent" elevation={0}>
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
                <HomeIcon sx={{color: 'black'}} fontSize="large" />
              </IconButton>
            </Box>
            <Box>
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
                      borderBottom: isActive ? "solid 5px" : "",
                      borderColor: isActive ? "black" : "",
                    })}
                  >
                    <Typography sx={{ fontSize: "1rem" }} variant="body">
                      {title}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
        </Container>
      </AppBar>

      <Outlet />
    </>
  );
};

export default Layout;
