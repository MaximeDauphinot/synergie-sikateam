import { useRef, useState } from "react";
import { useInViewport } from "react-in-viewport";
import {
  Typography,
  TextField,
  Box,
  Grid,
  Button,
  CircularProgress,
} from "@mui/material";
import { Animated } from "react-animated-css";
import emailjs from "emailjs-com";

import "../../../styles/Contact.scss";

const initialState = {
  to_name: "",
  to_email: "",
  message: "",
};

const ViewportBlock = ({ data, isMobile }) => {
  const ref = useRef();
  const { inViewport } = useInViewport(ref);
  const [{ to_name, to_email, message }, setState] = useState(initialState);
  const [loading, setIsloading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const clearState = () => setState({ ...initialState });

  const handleSubmit = (e) => {
    setIsloading(true);
    e.preventDefault();
    console.log(to_name, to_email, message);
    emailjs
      .sendForm(data.service_id, data.template_id, e.target, data.user_id)
      .then(
        (result) => {
          console.log(result.text);
          setIsloading(false);
          clearState();
        },
        (error) => {
          console.log(error.text);
          setIsloading(false);
        }
      );

    //pour la creation du compte mail
    //https://medium.com/@skinsfannick/implementing-emailjs-in-react-300989edf380
  };

  return (
    <div className="container" ref={ref}>
      <Grid container className="container-alignment">
        <Grid item xs={12} sm={6}>
          <Animated
            isVisible={inViewport}
            animationIn="fadeInLeft"
            animationInDuration={2000}
          >
            <div className="form-title-container">
              <div className="title-container">
                <Typography component="h2">
                  {data ? data.title : "Chargement..."}
                </Typography>
                <Typography component="p">
                  {data ? data.text : "Chargement..."}
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
                      name="to_name"
                      autoComplete="name"
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      id="email"
                      label="Email"
                      name="to_email"
                      autoComplete="email"
                      onChange={handleChange}
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
                      autoComplete="message"
                      onChange={handleChange}
                    />
                  </Grid>
                </Grid>
                <div className="button">
                  {loading ? (
                    <CircularProgress />
                  ) : (
                    <Button
                      variant="outlined"
                      size="large"
                      color="inherit"
                      type="submit"
                    >
                      {data.button}
                    </Button>
                  )}
                </div>
              </Box>
            </div>
          </Animated>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Animated
            isVisible={inViewport}
            animationIn="fadeInRight"
            animationInDuration={2000}
          >
            <div className={`informations-container ${isMobile && `mobile`}`}>
              <div className="contact-item">
                <Typography component="h3">{data.contact}</Typography>
                <Typography component="span">{data.itemOne}</Typography>
                <Typography component="p">{data.contentItemOne}</Typography>
              </div>
              <div className="contact-item">
                <Typography component="span">{data.itemTwo}</Typography>
                <Typography component="p">{data.contentItemTwo}</Typography>
              </div>
              <div className="contact-item">
                <Typography component="span">{data.itemThree}</Typography>
                <Typography component="p">{data.contentItemThree}</Typography>
              </div>
            </div>
          </Animated>
        </Grid>
      </Grid>
    </div>
  );
};

export const Contact = ({ data, isMobile }) => {
  return (
    <div id="contact" className={`contact-container ${isMobile && `mobile`}`}>
      <ViewportBlock data={data} isMobile={isMobile} />
    </div>
  );
};
