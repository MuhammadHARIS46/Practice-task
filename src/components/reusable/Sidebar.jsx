import React from "react";
import { Box, IconButton, Button } from "@mui/material";
import useStyles from "./stylesheet";
import { SidebarData } from "../../Static";
import { ReactComponent as Logo } from "../../assets/Logo.svg";
import { Typography } from "@mui/material";
import DashboardIcon from "../../assets/Dashboard.svg";

const Sidebar = () => {
  const classes = useStyles();
  return (
    <Box className={classes.sidebarMain}>
      <Logo />
      <>
        <Button
          className={classes.IconLabelWrap}
          style={{
            borderRadius: "8px",
            background: "rgba(128, 128, 128, 0.30)",
            backgroundBlendMode: "luminosity",
            backdropFilter: "blur(50px)",
            padding:"15px"
          }}
        >
          <IconButton>
            <img src={DashboardIcon} alt="btn" />
          </IconButton>
          <Typography className={classes.sidebarlabel}>Dashboard</Typography>
        </Button>
        {SidebarData?.map((i, index) => (
          <Button key={index} className={classes.IconLabelWrap}>
            <IconButton>
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
