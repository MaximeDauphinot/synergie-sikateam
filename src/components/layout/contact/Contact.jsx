// import { useRef } from "react";
// import { useInViewport } from "react-in-viewport";
import { Typography, TextField, Box, Grid, Button } from "@mui/material";
import { Animated } from "react-animated-css";

import "../../../styles/Contact.scss";

// const defaultValues = {
//   name: "",
//   email: "",
//   message: "",
// };

// const ViewportBlock = ({ data, isMobile }) => {
//   // const [formValues, setFormValues] = useState(defaultValues);
//   const ref = useRef();
//   // const { inViewport } = useInViewport(ref);

//   // const handleInputChange = (e) => {
//   //   const { name, value } = e.target;
//   //   setFormValues({
//   //     ...formValues,
//   //     [name]: value,
//   //   });
//   // };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // console.log(formValues);
//   };

//   return (
//     <div className="container" ref={ref}>
//       {/* {inViewport && ( */}
//       <>
//         <Grid container className="container-alignment">
//           <Grid item xs={12} sm={6}>
//             <Animated animationIn="fadeInLeft" animationInDuration={2000}>
//               <div className="form-title-container">
//                 <div className="title-container">
//                   <Typography component="h2">
//                     {data ? data.title : "Chargement..."}
//                   </Typography>
//                   <Typography component="p">
//                     {data ? data.text : "Chargement..."}
//                   </Typography>
//                 </div>
//                 <Box
//                   component="form"
//                   noValidate
//                   onSubmit={handleSubmit}
//                   sx={{ mt: 3 }}
//                 >
//                   <Grid container spacing={2}>
//                     <Grid item xs={12} sm={6}>
//                       <TextField
//                         required
//                         fullWidth
//                         id="name"
//                         label="Name"
//                         name="name"
//                         autoComplete="given-name"
//                       />
//                     </Grid>
//                     <Grid item xs={12} sm={6}>
//                       <TextField
//                         required
//                         fullWidth
//                         id="email"
//                         label="Email"
//                         name="email"
//                         autoComplete="email"
//                       />
//                     </Grid>
//                     <Grid item xs={12}>
//                       <TextField
//                         required
//                         fullWidth
//                         multiline
//                         id="message"
//                         label="Message"
//                         name="message"
//                         autoComplete="family-name"
//                       />
//                     </Grid>
//                   </Grid>
//                   <div className="button">
//                     <Button variant="outlined" size="large" color="inherit">
//                       {data.button}
//                     </Button>
//                   </div>
//                 </Box>
//               </div>
//             </Animated>
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <Animated animationIn="fadeInRight" animationInDuration={2000}>
//               <div className={`informations-container ${isMobile && `mobile`}`}>
//                 <div className="contact-item">
//                   <Typography component="h3">{data.contact}</Typography>
//                   <Typography component="span">{data.itemOne}</Typography>
//                   <Typography component="p">{data.contentItemOne}</Typography>
//                 </div>
//                 <div className="contact-item">
//                   <Typography component="span">{data.itemTwo}</Typography>
//                   <Typography component="p">{data.contentItemTwo}</Typography>
//                 </div>
//                 <div className="contact-item">
//                   <Typography component="span">{data.itemThree}</Typography>
//                   <Typography component="p">{data.contentItemThree}</Typography>
//                 </div>
//               </div>
//             </Animated>
//           </Grid>
//         </Grid>
//       </>
//       {/* )} */}
//     </div>
//   );
// };

export const Contact = ({ data, isMobile }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(formValues);
  };

  return (
    <div id="contact" className={`contact-container ${isMobile && `mobile`}`}>
      {/* <ViewportBlock data={data} isMobile={isMobile} /> */}
      <div className="container">
        <Grid container className="container-alignment">
          <Grid item xs={12} sm={6}>
            <Animated animationIn="fadeInLeft" animationInDuration={2000}>
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
                      {data.button}
                    </Button>
                  </div>
                </Box>
              </div>
            </Animated>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Animated animationIn="fadeInRight" animationInDuration={2000}>
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
    </div>
  );
};
