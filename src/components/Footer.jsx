import React from "react";
import { AppBar, Box, Container, Toolbar, Typography } from "@mui/material";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";

const Footer = () => {
  return (
    <>
      <AppBar position="static" color="primary">
        <Toolbar
          sx={{
            minHeight: "157px",
            backgroundColor: "black",
            padding: "50px",
          }}
        >
          <Box>
            <Typography variant="body1" color="inherit">
              Copyright © 2023 ITI. All Rights Reserved.
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Footer;
