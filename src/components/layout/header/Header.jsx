// import { useRef } from "react";
import { Typography, Button, Link } from "@mui/material";
import { Animated } from "react-animated-css";
import { Slide } from "react-slideshow-image";
// import { useInViewport } from "react-in-viewport";
import "react-slideshow-image/dist/styles.css";

import "../../../styles/Header.scss";

const slideImages = [
  "./img/carousel/data01.jpeg",
  "./img/carousel/data03.jpeg",
  "./img/carousel/data04.jpeg",
  "./img/carousel/data05.jpeg",
];

// const ViewportBlock = ({ data, isMobile }) => {
//   const ref = useRef();
//   // const { inViewport } = useInViewport(ref);

//   return (
//     <div ref={ref}>
//       {/* {inViewport && ( */}
//       <>
//         <Animated animationIn="bounceInLeft" animationInDuration={2000}>
//           <div className={`header-title-container ${isMobile && `mobile`}`}>
//             <Typography component="h1">
//               {data ? data.title : "Chargement..."}
//             </Typography>
//           </div>
//         </Animated>
//         <Animated animationIn="bounceInRight" animationInDuration={2000}>
//           <div className="header-paragraphe-container">
//             <Typography component="p">
//               {data ? data.paragraph : "Chargement..."}
//             </Typography>
//           </div>
//         </Animated>
//         <Animated animationIn="bounceInUp" animationInDuration={2000}>
//           <Button variant="contained" className="header-button">
//             <Link href="#" underline="none" color="inherit">
//               {data && data.button}
//             </Link>
//           </Button>
//         </Animated>
//       </>
//       {/* )} */}
//     </div>
//   );
// };

export const Header = ({ data, isMobile }) => {
  const properties = {
    duration: 4000,
    autoplay: true,
    transitionDuration: 2000,
    arrows: false,
    infinite: true,
    easing: "ease",
  };

  return (
    <div id="top" className="header-container">
      <div className="slide-container">
        <Slide {...properties} className="slider-component">
          {slideImages.map((each, index) => (
            <div key={index} className="each-slide">
              <img src={each} alt="sample" />
            </div>
          ))}
        </Slide>
      </div>
      <div className="overlay">
        <div className="container">
          {/* <ViewportBlock data={data} isMobile={isMobile} /> */}
          <div>
            <Animated animationIn="bounceInLeft" animationInDuration={2000}>
              <div className={`header-title-container ${isMobile && `mobile`}`}>
                <Typography component="h1">
                  {data ? data.title : "Chargement..."}
                </Typography>
              </div>
            </Animated>
            <Animated animationIn="bounceInRight" animationInDuration={2000}>
              <div className="header-paragraphe-container">
                <Typography component="p">
                  {data ? data.paragraph : "Chargement..."}
                </Typography>
              </div>
            </Animated>
            <Animated animationIn="bounceInUp" animationInDuration={2000}>
              <Button variant="contained" className="header-button">
                <Link href="#" underline="none" color="inherit">
                  {data && data.button}
                </Link>
              </Button>
            </Animated>
          </div>
        </div>
      </div>
    </div>
  );
};
