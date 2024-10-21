// src/components/Education.js
import React from "react";
import { Container, Typography, Button } from "@mui/material";

const Education = () => {
  return (
    <div
      style={{
        backgroundImage: 'url("/background.jpg")',
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
          Sri Pakala Yadaiah Trust and Foundation
        </Typography>
        <Typography variant="h5" gutterBottom>
          Helping them build a brighter future through education and care.
        </Typography>
        <Typography variant="h5" gutterBottom>
          Safe Home for the forgotten
        </Typography>
        <Button variant="contained" color="primary" size="large">
          Learn More
        </Button>
      </Container>
    </div>
  );
};

export default Education;
