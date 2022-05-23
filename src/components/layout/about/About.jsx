import { useRef } from "react";
import { Typography, List, ListItem, ListItemText, Grid } from "@mui/material";
import { Animated } from "react-animated-css";
// import { useInViewport } from "react-in-viewport";

import "../../../styles/About.scss";

const ViewportBlock = ({ data, isMobile, isMobileMd }) => {
  const ref = useRef();
  // const { inViewport } = useInViewport(ref);

  return (
    <div className="container" ref={ref}>
      {/* {inViewport && ( */}
      <Grid container>
        <Grid
          item
          sm={0}
          className={`picture-container ${isMobile && `mobile`} ${
            isMobileMd && `mobileMd`
          }`}
        >
          <Animated animationIn="fadeInLeft" animationInDuration={3000}>
            <img src="./img/portfolio/01-large.jpg" alt="sample" />
          </Animated>
        </Grid>
        <Grid item xs={12} md={6} className="description-container">
          <div className="about-title-text-container">
            <Typography component="h2">
              <Animated animationIn="fadeInUp" animationInDuration={2000}>
                {data ? data.title : "Chargement..."}
              </Animated>
            </Typography>
            <Typography component="p">
              {data ? data.text : "Chargement..."}
            </Typography>
            <Typography component="h3">
              <Animated animationIn="fadeInRight" animationInDuration={2000}>
                {data ? data.secondTitle : "Chargement..."}
              </Animated>
            </Typography>
          </div>
          <div className="list-container">
            <List dense>
              {data.firstList.map((listText, index) => (
                <Animated
                  animationIn="fadeInRight"
                  animationInDuration={2000}
                  animationInDelay={index * 250}
                  key={index}
                >
                  <ListItem key={index}>
                    <ListItemText primary={listText} />
                  </ListItem>
                </Animated>
              ))}
            </List>
            <List dense>
              {data.secondList.map((listText, index) => (
                <Animated
                  animationIn="fadeInRight"
                  animationInDuration={2000}
                  animationInDelay={1000 + index * 250}
                  key={index}
                >
                  <ListItem key={index}>
                    <ListItemText primary={listText} />
                  </ListItem>
                </Animated>
              ))}
            </List>
          </div>
        </Grid>
      </Grid>
      {/* )} */}
    </div>
  );
};

export const About = ({ data, isMobile, isMobileMd }) => {
  return (
    <div id="about" className={`about-container ${isMobile && `mobile`}`}>
      <ViewportBlock data={data} isMobile={isMobile} isMobileMd={isMobileMd} />
    </div>
  );
};
