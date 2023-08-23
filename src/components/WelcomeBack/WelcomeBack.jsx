import React from "react";
import { Box, Typography } from "@mui/material";
import useStyles from "./stylesheet";

const WelcomeBack = () => {
  const classes = useStyles();

  return (
    <Box >
      <Typography className={classes.welcomeTitle}>Welcome back!</Typography>
      <Typography className={classes.welcomeTitle}>Hanaa Kurz</Typography>
      <Typography className={classes.smallDescription}>
        Developer, Digital Transformation, 9103221
      </Typography>
      <Box className={classes.inoutContainer}>
        <Box
          className={classes.InOutBox}
          style={{
            background: "rgba(132, 255, 112, 0.10)",
          }}
        >
          <Typography className={classes.welcomeTitle}>In</Typography>
          <Typography className={classes.smallDescription}>08:04 AM</Typography>
        </Box>
        <Box
          className={classes.InOutBox}
          style={{
            background: "rgba(255, 130, 130, 0.10)",
          }}
        >
          <Typography className={classes.welcomeTitle}>Out</Typography>
          <Typography className={classes.smallDescription}>06:04 PM</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default WelcomeBack;
