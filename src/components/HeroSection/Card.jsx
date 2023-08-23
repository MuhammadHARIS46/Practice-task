import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import useStyles from "./stylesheet";
import MenuIcon from "../../assets/Menu.svg";
const Card = ({ logo, title, description }) => {
  const classes = useStyles();

  return (
    <Box className={classes.cardMain}>
      <Box className={classes.logoAndTextWrap}>
        <img src={logo} alt="logo" style={{
            width:"50px"
        }} />
        <Box>
          <Typography className={classes.cardTitle}>{title}</Typography>
          <Typography className={classes.cardDescription}>
            {description}
          </Typography>
        </Box>
      </Box>
      <IconButton style={{ width: "25px", height: "25px" }}>
        <img src={MenuIcon} alt="menu" />
      </IconButton>
    </Box>
  );
};
export default Card;
