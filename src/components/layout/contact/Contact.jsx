import { useState, useRef } from "react";
import { useInViewport } from "react-in-viewport";
import { Typography, TextField, Box, Grid, Button } from "@mui/material";
import { Animated } from "react-animated-css";

import "../../../styles/Contact.scss";

const defaultValues = {
  name: "",
  email: "",
  message: "",
};

const ViewportBlock = (props) => {
  const [formValues, setFormValues] = useState(defaultValues);
  const ref = useRef();
  const { inViewport } = useInViewport(ref);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formValues);
  };

  return (
    <div className="container" ref={ref}>
      {inViewport && (
        <>
          <div className="container-alignment">
            <Animated animationIn="fadeInLeft" animationInDuration={2000}>
              <div className="form-title-container">
                <div className="title-container">
                  <Typography component="h2">
                    {props.data ? props.data.title : "Chargement..."}
                  </Typography>
                  <Typography component="p">
                    {props.data ? props.data.text : "Chargement..."}
                  </Typography>
                </div>
                <Box
                  component="form"
                  noValidate
                  onSubmit={handleSubmit}
                  sx={{ mt: 3 }}
                >
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        required
                        fullWidth
                        id="name"
                        label="Name"
                        name="name"
                        autoComplete="given-name"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        required
                        fullWidth
                        id="email"
                        label="Email"
                        name="email"
                        autoComplete="email"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        multiline
                        id="message"
                        label="Message"
                        name="message"
                        autoComplete="family-name"
                      />
                    </Grid>
                  </Grid>
                  <div className="button">
                    <Button variant="outlined" size="large" color="inherit">
                      {props.data.button}
                    </Button>
                  </div>
                </Box>
              </div>
            </Animated>
            <Animated animationIn="fadeInRight" animationInDuration={2000}>
              <div className="informations-container">
                <div className="contact-item">
                  <Typography component="h3">{props.data.contact}</Typography>
                  <Typography component="span">{props.data.itemOne}</Typography>
                  <Typography component="p">
                    {props.data.contentItemOne}
                  </Typography>
                </div>
                <div className="contact-item">
                  <Typography component="span">{props.data.itemTwo}</Typography>
                  <Typography component="p">
                    {props.data.contentItemTwo}
                  </Typography>
                </div>
                <div className="contact-item">
                  <Typography component="span">
                    {props.data.itemThree}
                  </Typography>
                  <Typography component="p">
                    {props.data.contentItemThree}
                  </Typography>
                </div>
              </div>
            </Animated>
          </div>
        </>
      )}
    </div>
  );
};

export const Contact = (props) => {
  return (
    <div id="contact" className="contact-container">
      <ViewportBlock data={props.data} />
    </div>
  );
};
