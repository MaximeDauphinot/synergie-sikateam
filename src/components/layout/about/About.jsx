import { useRef } from "react";
import { Typography, List, ListItem, ListItemText } from "@mui/material";
import { Animated } from "react-animated-css";
import { useInViewport } from "react-in-viewport";

import "../../../styles/About.scss";

const ViewportBlock = (props) => {
  const ref = useRef();
  const { inViewport } = useInViewport(ref);

  return (
    <div className="container" ref={ref}>
      {inViewport && (
        <>
          <div className="picture-container">
            <Animated animationIn="fadeInLeft" animationInDuration={3000}>
              <img src="./img/portfolio/01-large.jpg" alt="sample" />
            </Animated>
          </div>
          <div className="description-container">
            <div className="about-title-text-container">
              <Typography component="h2">
                <Animated animationIn="fadeInUp" animationInDuration={2000}>
                  {props.data ? props.data.title : "Chargement..."}
                </Animated>
              </Typography>
              <Typography component="p">
                {props.data ? props.data.text : "Chargement..."}
              </Typography>
              <Typography component="h3">
                <Animated animationIn="fadeInRight" animationInDuration={2000}>
                  {props.data ? props.data.secondTitle : "Chargement..."}
                </Animated>
              </Typography>
            </div>
            <div className="list-container">
              <List dense>
                {props.data.firstList.map((listText, index) => (
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
                {props.data.secondList.map((listText, index) => (
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
          </div>
        </>
      )}
    </div>
  );
};

export const About = (props) => {
  return (
    <div id="about" className="about-container">
      <ViewportBlock data={props.data} />
    </div>
  );
};
