import React from "react";
import { Box, IconButton, TextField } from "@mui/material";
import useStyles from "./stylesheet";
import { ReactComponent as StickIcon } from "../../assets/stick.svg";
import { ReactComponent as CalendarIcon } from "../../assets/navcalendar.svg";
import { ReactComponent as MessageIcon } from "../../assets/message.svg";
import { ReactComponent as Notification } from "../../assets/notification.svg";
import UserSample from "../../assets/userSample.png";

const Navbar = () => {
  const classes = useStyles();
  return (
    <Box className={classes.navbarMain}>
      <Box
        style={{
          width: "100%",
        }}
      >
        <TextField
          placeholder="Ask me anything"
          fullWidth
          InputProps={{
            startAdornment: <StickIcon />,
            disableUnderline: true,
            style: {
              borderRadius: "64px",
              border:
                "1px solid var(--bg-blur-storke, rgba(255, 255, 255, 0.30))",
              background: "rgba(255, 255, 255, 0.07)",
              backdropFilter: "blur(22px)",
            },
          }}
        />
      </Box>

      <Box className={classes.navicons}>
        <IconButton>
          <CalendarIcon />
        </IconButton>
        <IconButton>
          <MessageIcon />
        </IconButton>
        <IconButton>
          <Notification />
        </IconButton>
        <img src={UserSample} alt="user" />
      </Box>
    </Box>
  );
};

export default Navbar;
