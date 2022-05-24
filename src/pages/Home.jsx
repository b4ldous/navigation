import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";

const Home = () => {
  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "500px",
        }}
      >
        <Box
          sx={{ border: "solid 10px", padding: "20px", borderRadius: "20px" }}
        >
          <Typography variant="h1" sx={{ fontWeight: 1000 }}>
            Home
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default Home;
