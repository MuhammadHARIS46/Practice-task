import React from "react";
import { Box, Typography } from "@mui/material";
import useStyles from "./stylesheet";
import Offer1 from "../../assets/Offer1.svg";
import Offer2 from "../../assets/Offer2.svg";

const Offers = () => {
  const classes = useStyles();

  return (
    <Box className={classes.offerMainBox}>
      <Typography className={classes.offerHeading}>Offers</Typography>
      <Box>
        <img
          src={Offer1}
          alt="offer1"
          style={{
            width: "100%",
            height: "100%",
          }}
        />
        <Typography
          style={{
            color: "#FFF",
            fontSize: "14px",
            fontWeight: 700,
            marginTop: "10px",
          }}
        >
          Do not forget to apply our special employee code <br /> for your next
          checkout{" "} <br/>
          <span
            style={{
              color: "#3C3CF0",
              textDecorationLine: "underline",
            }}
          >
            T&C
          </span>
        </Typography>
      </Box>
      <Box>
        <img
          src={Offer2}
          alt="offer1"
          style={{
            width: "100%",
            height: "100%",
          }}
        />
        <Typography
          style={{
            color: "#FFF",
            fontSize: "14px",
            fontWeight: 700,
            marginTop: "10px",
          }}
        >
          Gifting season at Oud mall! <br />
          20% for TDF employees
        </Typography>
      </Box>
    </Box>
  );
};
export default Offers;
