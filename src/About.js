// src/components/About.js
import React from "react";
import {
  Container,
  Grid,
  Typography,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";

const About = () => {
  return (
    <Container style={{ marginTop: "50px", marginBottom: "50px" }}>
      <Typography variant="h3" align="center" gutterBottom>
        About Us
      </Typography>
      <Typography variant="h6" align="center" gutterBottom>
        Sri Pakala Yadaiah Charitable Trust and Foundation is dedicated to
        educating and empowering orphaned children, ensuring they receive the
        care and guidance they need.
      </Typography>
      <Grid item xs={12} sm={6} md={4}>
        <Card>
          <CardMedia
            component="img"
            alt="Community"
            height="300"
            image="/donate_food.jpg"
          />
          <CardContent>
            <Typography variant="h5">Donate Food</Typography>
            <Typography variant="body2" color="textSecondary">
              Nourish a child's future with every meal.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Card>
          <CardMedia
            component="img"
            alt="Orphanage"
            height="300"
            image="/education.jpg"
          />
          <CardContent>
            <Typography variant="h5">Education First</Typography>
            <Typography variant="body2" color="textSecondary">
              We ensure every child has access to quality education.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Card>
          <CardMedia
            component="img"
            alt="Orphanage"
            height="500"
            image="/donate_blood.jpg"
          />
          <CardContent>
            <Typography variant="h5">Donate Blood</Typography>
            <Typography variant="body2" color="textSecondary">
              Every Drop Counts. Every Life Matters{" "}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid container spacing={4} style={{ marginTop: "30px" }}>
        <Grid item xs={12} sm={6} md={6}>
          <Card>
            <CardMedia
              component="img"
              alt="Children Education"
              height="200"
              image="/vision.jpg"
            />
            <CardContent>
              <Typography variant="h5">Our Vision</Typography>
              <Typography variant="body2" color="textSecondary">
                To provide education, shelter, and love to every child.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <Card>
            <CardMedia
              component="img"
              alt="Community"
              height="200"
              image="/community.jpg"
            />
            <CardContent>
              <Typography variant="h5">Community Support</Typography>
              <Typography variant="body2" color="textSecondary">
                We collaborate with communities to ensure a safe environment.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default About;
