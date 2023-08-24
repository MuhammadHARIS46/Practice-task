import React, { useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import useStyles from "./stylesheet";
import Posts from "./Posts";
import userSample from "../../assets/userSample.png";
import user2 from "../../assets/Ellipse 94.png";
import Post1 from "../../assets/Post1.svg";
import Post2 from "../../assets/Post2.svg";

const Feed = () => {
  const classes = useStyles();
  const [selectedOption, setSelectedOption] = useState("Recent");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const dropdownStyles = {
    borderRadius: "24px",
    background: "#192841",
    padding: "10px",
    display: "inline-block",
  };

  const selectStyles = {
    background: "transparent",
    border: "none",
    color: "white",
    padding: "8px",
    fontSize: "16px",
    borderRadius: "24px",
    cursor: "pointer",
    outline: "none",
  };
  const btnWrap = {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  };
  return (
    <Box className={classes.FeedMain}>
      <Box className={classes.flexCSpBet}>
        <Box
          style={{
            borderBottom: "1px solid #E5E7EB",
            paddingBottom: "10px",
          }}
        >
          <Typography className={classes.bigcardheading}>Projects</Typography>
        </Box>

        <div style={dropdownStyles}>
          <select
            value={selectedOption}
            onChange={handleOptionChange}
            style={selectStyles}
          >
            <option value="Recent">Recent</option>
            <option value="Popular">Popular</option>
            <option value="Featured">Featured</option>
          </select>
        </div>
      </Box>
      <Box style={btnWrap}>
        <Button
          style={{
            borderRadius: "24px",
            background: " #192841",
            color: "white",
            textTransform: "none",
          }}
        >
          Posts
        </Button>
        <Button
          style={{
            borderRadius: "24px",
            background: " #192841",
            color: "white",
            textTransform: "none",
          }}
        >
          Events
        </Button>
        <Button
          style={{
            borderRadius: "24px",
            background: " #192841",
            color: "white",
            textTransform: "none",
          }}
        >
          News
        </Button>
        <Button
          style={{
            borderRadius: "24px",
            background: " #192841",
            color: "white",
            textTransform: "none",
          }}
        >
          Articles
        </Button>
        <Button
          style={{
            borderRadius: "24px",
            background: " #192841",
            color: "white",
            textTransform: "none",
          }}
        >
          Announcements
        </Button>
        <Button
          style={{
            borderRadius: "24px",
            background: " #192841",
            color: "white ",
            textTransform: "none",
          }}
        >
          Argam
        </Button>
        <Button
          style={{
            borderRadius: "24px",
            background:
              "linear-gradient(90deg, #3C3CF0 0%, #3451E6 17.00%, #2088CD 52.00%, #00DCA5 100%)",
            color: "white",
            textTransform: "none",
          }}
        >
          New Post
        </Button>
      </Box>
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          marginTop: "15px",
        }}
      >
        <Box
          style={{
            display: "flex",
            alignItems: "center",
            gap: "15px",
            width: "100%",
          }}
        >
          <Posts
            author="Ahmed"
            time="10 min ago"
            pic={userSample}
            postPic={Post1}
            desc="Welcome to the team @ahmed.d! Please see all onboarding materials here!"
          />
          <Posts
            author="Saira"
            time="10 min ago"
            pic={user2}
            desc="New Office Design"
            postPic={Post2}
          />
        </Box>
      </Box>
    </Box>
  );
};
export default Feed;
