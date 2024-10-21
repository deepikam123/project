// src/Contact.js
import React from "react";
import {
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  TextField,
  Button,
  CardMedia,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const Contact = () => {
  return (
    <Container style={{ marginTop: "50px", marginBottom: "50px" }}>
      <Typography variant="h3" gutterBottom align="center">
        Contact Us
      </Typography>

      {/* Contact Person Details Section */}
      <Grid
        container
        spacing={4}
        justifyContent="center"
        style={{ marginTop: "30px" }}
      >
        <Grid item xs={12} sm={6} md={4}>
          <Card
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <CardMedia
              component="img"
              alt="Contact Person"
              height="200"
              image="/path/to/contact-person.jpg" // Add contact person's image here
            />
            <CardContent>
              <Typography variant="h5">Rahul Pakala</Typography>
              <Typography variant="subtitle1" color="textSecondary">
                Founder
              </Typography>
              <Typography variant="body2" style={{ marginTop: "10px" }}>
                <EmailIcon
                  style={{ verticalAlign: "middle", marginRight: "5px" }}
                />
                rahulpakala95@gmail.com
              </Typography>
              <Typography variant="body2">
                <PhoneIcon
                  style={{ verticalAlign: "middle", marginRight: "5px" }}
                />
                +91 8522 9924 22
              </Typography>
              {/* <Typography variant="body2">
                <LocationOnIcon
                  style={{ verticalAlign: "middle", marginRight: "5px" }}
                />
                123 Orphanage St, City Name, Country
              </Typography> */}
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Contact Form Section */}
      {/* <Typography
        variant="h4"
        gutterBottom
        align="center"
        style={{ marginTop: "40px" }}
      >
        Get in Touch
      </Typography>

      <Grid container justifyContent="center">
        <Grid item xs={12} sm={8} md={6}>
          <form>
            <TextField
              label="Name"
              fullWidth
              margin="normal"
              variant="outlined"
            />
            <TextField
              label="Email"
              fullWidth
              margin="normal"
              variant="outlined"
            />
            <TextField
              label="Message"
              fullWidth
              multiline
              rows={4}
              margin="normal"
              variant="outlined"
            />
            <Button
              variant="contained"
              color="primary"
              fullWidth
              style={{ marginTop: "20px" }}
            >
              Submit
            </Button>
          </form>
        </Grid>
      </Grid> */}
    </Container>
  );
};

export default Contact;
