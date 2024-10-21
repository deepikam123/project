// src/components/Header.js
import React from "react";
import { AppBar, Toolbar, Typography, Button, Container } from "@mui/material";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <AppBar position="static" style={{ backgroundColor: "#0288d1" }}>
      <Container>
        <Toolbar>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            Sri Pakala Yadaiah Trust and Foundation
          </Typography>
          <Button color="inherit" component={Link} to="/">
            Home
          </Button>

          <Button color="inherit" component={Link} to="/about">
            About
          </Button>
          <Button color="inherit" component={Link} to="/contact">
            Contact
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
