import React from "react";
import { Box, IconButton,Button } from "@mui/material";
import useStyles from "./stylesheet";
import { SidebarData } from "../../Static";
import { ReactComponent as Logo } from "../../assets/Logo.svg";
import { Typography } from "@mui/material";
const Sidebar = () => {
  const classes = useStyles();
  return (
    <Box className={classes.sidebarMain}>
      <Logo />
      <>
      {SidebarData?.map((i, index) => (
        <Button key={index} className={classes.IconLabelWrap}>
          <IconButton >
            <img src={i.image} alt="btn" />
          </IconButton>
          <Typography className={classes.sidebarlabel}>{i.title}</Typography>
        </Button>
      ))}
      </>
    </Box>
  );
};
export default Sidebar;
