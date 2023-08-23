import React from "react";
import { Box, Typography, IconButton, Button } from "@mui/material";
import useStyles from "./stylesheet";
import LeftArrow from "../../assets/LeftArrow.svg";
import { TodoListData } from "../../Static";
import confirmIcon from "../../assets/Confirm.svg";
import deleteIcon from "../../assets/Delete.svg";
const TodoList = () => {
  const classes = useStyles();

  return (
    <Box className={classes.mainContainer}>
      <Box className={classes.wrapper}>
        <Typography className={classes.mainHeading}>To Do List</Typography>
        <Typography className={classes.seeAll}>See All</Typography>
      </Box>
      <Box className={classes.wrapper}>
        <Typography className={classes.seeAll}>01-April-2023</Typography>
        <Box className={classes.arrowBox}>
          <IconButton>
            <img src={LeftArrow} alt="left" />
          </IconButton>
          <IconButton style={{ transform: "rotate(180deg)" }}>
            <img src={LeftArrow} alt="left" />
          </IconButton>
        </Box>
      </Box>
      <Box className={classes.listBox}>
        {TodoListData?.map((i) => (
          <Box key={i.id} className={classes.itemWrapper}>
            <Box className={classes.arrowBox}>
              <Box className={classes.sNoBox}>
                <Typography className={classes.title}>{i.id}</Typography>
              </Box>
              <Box>
                <Typography className={classes.title}>{i.title}</Typography>
                <Typography className={classes.description}>
                  {i.desc}
                </Typography>
              </Box>
            </Box>

            <Box className={classes.dltConWrap}>
              <IconButton>
                <img src={confirmIcon} alt="icon" />
              </IconButton>
              <IconButton>
                <img src={deleteIcon} alt="icon" />
              </IconButton>
            </Box>
          </Box>
        ))}
      </Box>
      <Button
        style={{
          display: "flex",
          padding: "16px",
          justifyContent: "center",
          alignItems: "center",
          gap: "8px",
          alignSelf: "stretch",
          borderRadius: "8px",
          border: "1px solid #E5E7EB",
          background: "rgba(255, 255, 255, 0.10)",
        }}
      >
        <Typography
          className={classes.title}
          style={{ fontSize: "14px !important" }}
        >
          Create new item
        </Typography>
        <Typography
          className={classes.description}
          style={{ color: "rgba(255, 255, 255, 0.30) !important" }}
        >
          +
        </Typography>
      </Button>
    </Box>
  );
};

export default TodoList;
