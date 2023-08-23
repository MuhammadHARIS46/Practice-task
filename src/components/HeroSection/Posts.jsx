import React from "react";
import { Box, Typography, Button } from "@mui/material";
import useStyles from "./stylesheet";
import heart from "../../assets/heart.svg";
import comment from "../../assets/comment.svg";
const Posts = ({ author, time, pic, desc, postPic }) => {
  const classes = useStyles();
  return (
    <Box className={classes.postMain}>
      <Box style={{
        display:"flex",
        alignItems:"center",
        gap:"10px"
      }}>
        <img
          src={pic}
          alt="alit"
          style={{
            width: "20px",
            height: "20px",
          }}
        />
        <Typography className={classes.seeAll}>{author}</Typography>
        <Box
          style={{ height: "14px", width: "2px", background: "#4B5563" }}
        ></Box>
        <Typography
          className={classes.seeAll}
          style={{ color: "#4B5563 !important" }}
        >
          {time}
        </Typography>
      </Box>
      <Box>
        <img src={postPic} alt="post" />
      </Box>
      <Typography className={classes.pgTypo}>{desc}</Typography>
      <Box
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <Button
          startIcon={<img src={heart} alt="heart" />}
          style={{
            color: "#6B7280",
            fontSize: "12px",
            textTransform: "none",
          }}
        >
          Like
        </Button>
        <Button
          startIcon={<img src={comment} alt="heart" />}
          style={{
            color: "#6B7280",
            fontSize: "12px",
            textTransform: "none",
          }}
        >
          Comment
        </Button>
      </Box>
    </Box>
  );
};
export default Posts;
