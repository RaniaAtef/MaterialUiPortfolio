import {
  Box,
  Container,
  Grid,
  ImageList,
  ImageListItem,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

const images = [
  {
    src: "/public/shoes.jpg",
    type: "Branding",
  },
  {
    src: "/coffe.jpg",
    type: "Design",
  },
  {
    src: "/icecream.jpg",
    type: "Photography",
  },
  {
    src: "/avocado.jpg",
    type: "design3",
  },
  {
    src: "/rasberry.jpg",
    type: "design3",
  },
  {
    src: "/orange.jpg",
    type: "design3",
  },
];

const News = () => {
  //all design branding photography
  const [type, setType] = useState("All");
  let renderedImages = images;
  if (type !== "All") {
    renderedImages = images.filter((img) => type === img.type);
  }
  //   console.log(renderedImages);
  return (
    <>
      <Container sx={{ pb: "140px" }} id="portfolio">
        <Box sx={{ pt: "140px", pb: "45px" }} id="portfolio">
          <Typography
            sx={{
              mb: 1.5,
              fontSize: "large",
              fontWeight: 700,
              color: "#E65F78",
              ml: "20px",
            }}
            variant="h1"
            component="div"
          >
            PORTFOLIO
          </Typography>
          <Typography
            sx={{
              mb: 1.5,
              fontSize: "30px",
              fontWeight: 800,
              color: "#000",
              ml: "20px",
            }}
            variant="h1"
            component="div"
          >
            Featured Work{" "}
          </Typography>
        </Box>
        <Container>
          <Box>
            <ul
              style={{
                listStyle: "none",
                padding: "3px",
                display: "flex",
                gap: "30px",
              }}
            >
              <Box
                component="li"
                onClick={() => setType("All")}
                sx={{
                  color: type === "All" ? "#E65F78" : "black",
                  cursor: "pointer",
                  fontWeight: "500",
                  fontSize: "19px",
                  pb: "20px",
                }}
              >
                All
              </Box>
              <Box
                component="li"
                onClick={() => setType("Design")}
                sx={{
                  color: type === "Design" ? "#E65F78" : "black",
                  cursor: "pointer",
                  fontWeight: "500",
                  fontSize: "19px",
                }}
              >
                Design
              </Box>{" "}
              <Box
                component="li"
                onClick={() => setType("Branding")}
                sx={{
                  color: type === "Branding" ? "#E65F78" : "black",
                  cursor: "pointer",
                  fontWeight: "500",
                  fontSize: "19px",
                }}
              >
                Branding
              </Box>
              <Box
                component="li"
                onClick={() => setType("Photography")}
                sx={{
                  color: type === "Photography" ? "#E65F78" : "black",
                  cursor: "pointer",
                  fontWeight: "500",
                  fontSize: "19px",
                }}
              >
                Photography
              </Box>
            </ul>
          </Box>

          <Grid container spacing={4}>
            {renderedImages.map((img) => (
              <Grid item xs={12} md={4}>
                <ImageListItem
                  sx={{
                    overflow: "hidden",

                    "& img": {
                      transition: "all 0.3s",
                    },
                    "& :hover": { transform: "scale(1.1)" },
                  }}
                >
                  <img
                    src={img.src}
                    loading="lazy"
                    style={{ height: "50vh" }}
                    // height="100vh"
                  />
                </ImageListItem>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Container>
    </>
  );
};

export default News;
