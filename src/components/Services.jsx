import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import EmojiObjectsOutlinedIcon from "@mui/icons-material/EmojiObjectsOutlined";
import { Container, Grid } from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
import TelegramIcon from "@mui/icons-material/Telegram";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function Services() {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "#F9F9F9",
          pt: { xs: "100px", md: "140px" },
          pb: { xs: "80px", md: "138px" },
        }}
        id="services"
      >
        <Container>
          <Box textAlign="start">
            <Typography
              sx={{
                mb: 1.5,
                fontSize: "large",
                fontWeight: 700,
                color: "#E65F78",
                ml: { xs: "0", md: "20px" },
              }}
              variant="h1"
              component="div"
            >
              SERVICES
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
              Quality services
            </Typography>
          </Box>
          <Grid container spacing={4} sx={{ pt: "87px" }}>
            <AnimationOnScroll animateIn="animate__fadeIn">
              <Grid item container>
                <Grid item lg={4} xs={12}>
                  <Card sx={{ minWidth: 275, mx: "20px", mb: { xs: "15px" } }}>
                    <Box
                      sx={{
                        p: { xs: "20px", md: "40px 30px 20px" },
                      }}
                    >
                      <CardContent>
                        <EmojiObjectsOutlinedIcon
                          color="primary"
                          sx={{
                            mb: "17px",
                            fontSize: { xs: "40px", md: "50px" },
                          }}
                        />
                        <Typography
                          sx={{
                            mb: "25px",
                            fontSize: "18px",
                            fontWeight: "600",
                          }}
                          variant="h4"
                          component="div"
                        >
                          Creative design
                        </Typography>
                        <Typography
                          sx={{
                            mb: 1.5,
                            fontSize: { xs: "14px", md: "medium" },
                            lineHeight: "2",
                          }}
                          color="text.secondary"
                        >
                          Web design is a similar process of creation, with the
                          intention of presenting...
                        </Typography>
                      </CardContent>
                    </Box>
                  </Card>
                </Grid>

                <Grid item lg={4} xs={12}>
                  <Card sx={{ minWidth: 275, mx: "20px", mb: { xs: "15px" } }}>
                    <Box sx={{ p: "40px 30px 20px " }}>
                      <CardContent>
                        <CodeIcon
                          color="primary"
                          sx={{ mb: "17px", fontSize: "50px" }}
                        />
                        <Typography
                          sx={{
                            mb: "25px",
                            fontSize: "18px",
                            fontWeight: "600",
                          }}
                          variant="h4"
                          component="div"
                        >
                          Web development
                        </Typography>
                        <Typography
                          sx={{ mb: 1.5, fontSize: "medium", lineHeight: "2" }}
                          color="text.secondary"
                        >
                          Web design is a similar process of creation, with the
                          intention of presenting...
                        </Typography>
                      </CardContent>
                    </Box>
                  </Card>
                </Grid>
                <Grid item lg={4} xs={12}>
                  <Card sx={{ minWidth: 275, mx: "20px", mb: { xs: "15px" } }}>
                    <Box sx={{ p: "40px 30px 20px " }}>
                      <CardContent>
                        <EmojiObjectsOutlinedIcon
                          color="primary"
                          sx={{ mb: "17px", fontSize: "50px" }}
                        />
                        <Typography
                          sx={{
                            mb: "25px",
                            fontSize: "18px",
                            fontWeight: "600",
                          }}
                          variant="h4"
                          component="div"
                        >
                          Social Media
                        </Typography>
                        <Typography
                          sx={{ mb: 1.5, fontSize: "medium", lineHeight: "2" }}
                          color="text.secondary"
                        >
                          Web design is a similar process of creation, with the
                          intention of presenting...
                        </Typography>
                      </CardContent>
                    </Box>
                  </Card>
                </Grid>
              </Grid>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="animate__fadeIn">
              <Grid item container>
                <Grid item lg={4} xs={12}>
                  <Card sx={{ minWidth: 275, mx: "20px", mb: { xs: "15px" } }}>
                    <Box sx={{ p: "40px 30px 20px " }}>
                      <CardContent>
                        <TelegramIcon
                          color="primary"
                          sx={{
                            mb: "17px",
                            width: "50px",
                            height: "50px",
                          }}
                        />
                        <Typography
                          sx={{
                            mb: "25px",
                            fontSize: "18px",
                            fontWeight: "600",
                          }}
                          variant="h4"
                          component="div"
                        >
                          Brand Identity{" "}
                        </Typography>
                        <Typography
                          sx={{ mb: 1.5, fontSize: "medium", lineHeight: "2" }}
                          color="text.secondary"
                        >
                          Web design is a similar process of creation, with the
                          intention of presenting...
                        </Typography>
                      </CardContent>
                    </Box>
                  </Card>
                </Grid>
                <Grid item lg={4} xs={12}>
                  <Card sx={{ minWidth: 275, mx: "20px", mb: { xs: "15px" } }}>
                    <Box sx={{ p: "40px 30px 20px " }}>
                      <CardContent>
                        <EmojiObjectsOutlinedIcon
                          color="primary"
                          sx={{ mb: "17px", fontSize: "50px" }}
                        />
                        <Typography
                          sx={{
                            mb: "25px",
                            fontSize: "18px",
                            fontWeight: "600",
                          }}
                          variant="h4"
                          component="div"
                        >
                          Adobe Photoshop{" "}
                        </Typography>
                        <Typography
                          sx={{ mb: 1.5, fontSize: "medium", lineHeight: "2" }}
                          color="text.secondary"
                        >
                          Web design is a similar process of creation, with the
                          intention of presenting...
                        </Typography>
                      </CardContent>
                    </Box>
                  </Card>
                </Grid>
                <Grid item lg={4} xs={12}>
                  <Card sx={{ minWidth: 275, mx: "20px", mb: { xs: "15px" } }}>
                    <Box sx={{ p: "40px 30px 20px " }}>
                      <CardContent>
                        <EmojiObjectsOutlinedIcon
                          color="primary"
                          sx={{ mb: "17px", fontSize: "50px" }}
                        />
                        <Typography
                          sx={{
                            mb: "25px",
                            fontSize: "18px",
                            fontWeight: "600",
                          }}
                          variant="h4"
                          component="div"
                        >
                          Adobe Illustrator{" "}
                        </Typography>
                        <Typography
                          sx={{ mb: 1.5, fontSize: "medium", lineHeight: "2" }}
                          color="text.secondary"
                        >
                          Web design is a similar process of creation, with the
                          intention of presenting...
                        </Typography>
                      </CardContent>
                    </Box>
                  </Card>
                </Grid>
              </Grid>
            </AnimationOnScroll>
          </Grid>
        </Container>
      </Box>
    </>
  );
}
