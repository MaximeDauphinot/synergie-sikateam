import { useRef } from "react";
import { Animated } from "react-animated-css";
import { Typography, Grid, Box } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import FolderIcon from "@mui/icons-material/Folder";
import { useInViewport } from "react-in-viewport";

import "../../../styles/Features.scss";

const ViewportBlock = ({ data }) => {
  const ref = useRef();
  const { inViewport } = useInViewport(ref);

  return (
    <div className="container" ref={ref}>
      {/* {inViewport && ( */}
      <>
        <Animated animationIn="bounceInLeft" animationInDuration={2000}>
          <div className="features-title-container">
            <Typography component="h2">
              {data ? data.title : "Chargement..."}
            </Typography>
          </div>
        </Animated>
        <Grid container className="features-content-container">
          {data.content.map((item, index) => (
            <Grid key={index} item xs={12} sm={6} md={3}>
              <Animated
                animationIn="bounceInRight"
                animationInDuration={2000}
                animationInDelay={index * 250}
              >
                <Box className="list-item">
                  <Avatar>
                    <FolderIcon />
                  </Avatar>
                  <Typography component="h3">{item.name}</Typography>
                  <Typography component="p">{item.text}</Typography>
                </Box>
              </Animated>
            </Grid>
          ))}
        </Grid>
      </>
      {/* )} */}
    </div>
  );
};

export const Features = ({ data, isMobile }) => {
  return (
    <div id="features" className={`features-container ${isMobile && `mobile`}`}>
      <ViewportBlock data={data} />
    </div>
  );
};
