import React from "react";
import { Box, Typography } from "@mui/material";
import useStyles from "./stylesheet";
import Sidebar from "../reusable/Sidebar";
import Navbar from "../reusable/navbar";
import WelcomeBack from "../WelcomeBack/WelcomeBack";
import Card from "./Card";
import { heroCardData } from "../../Static";
import AddIcon from "../../assets/Add.svg";
import TodoList from "../TodoList/TodoList";
const HeroSection = () => {
  const classes = useStyles();

  return (
    <Box
      style={{
        display: "flex",
        background: "#192841",
        flexDirection: "column",
      }}
    >
        
      <Box sx={{ display: "flex", height: "100%", overflowY: "hidden",  background: "#192841",  }}>
        <Sidebar />
        <Box
          className={classes.heroRight}
          style={{
            backgroundImage: `url(${require("../../assets/HeroBg.png")})`,
            backgroundSize: "100vw 100%",
            backgroundRepeat: "no-repeat",
          }}
        >
          <Navbar />

          <Box
            style={{
              display: "flex",
              marginTop: "40px",
              gap: "25px",
              alignItem: "center",
            }}
          >
            <Box>
              <WelcomeBack />
              <Box className={classes.heroCardContainer}>
                {heroCardData.map((i, index) => (
                  <Box key={index}>
                    <Card
                      title={i.title}
                      description={i.description}
                      logo={i.logo}
                    />
                  </Box>
                ))}
                <Box className={classes.addTitleCard}>
                  <img src={AddIcon} alt="AddIcon" />
                  <Typography className={classes.cardTitle}>
                    Add a new title
                  </Typography>
                </Box>
              </Box>
            </Box>
            <TodoList />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default HeroSection;
