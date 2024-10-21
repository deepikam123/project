// src/components/Hero.js
import React from "react";
import { Container, Typography, Button } from "@mui/material";

const Hero = () => {
  return (
    <div
      style={{
        backgroundImage: 'url("/path/to/image.jpg")',
        backgroundSize: "cover",
        height: "90vh",
        color: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Container>
        <Typography variant="h2" gutterBottom>
          Empowering Orphaned Children
        </Typography>
        <Typography variant="h5" gutterBottom>
          Helping them build a brighter future through education and care.
        </Typography>
        <Button variant="contained" color="primary" size="large">
          Learn More
        </Button>
      </Container>
    </div>
  );
};

export default Hero;
