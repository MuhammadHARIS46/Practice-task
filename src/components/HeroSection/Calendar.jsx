import React from "react";
import { Box, Typography, IconButton, Button } from "@mui/material";
import useStyles from "./stylesheet";
import LeftArrow from "../../assets/LeftArrow.svg";

const Calendar = () => {
  const classes = useStyles();
  return (
    <Box className={classes.offerMainBox}>
      <Typography className={classes.offerHeading}>Offers</Typography>
      <Box className={classes.flexCSpBet}>
        <Typography
          style={{
            color: "#FFF",
            fontSize: "14px ",
            fontWeight: "700 ",
          }}
        >
          01-April-2023
        </Typography>
        <Box
          style={{
            display: "flex",
            gap: "10px",
          }}
        >
          <IconButton>
            <img src={LeftArrow} alt="left" />
          </IconButton>
          <IconButton style={{ transform: "rotate(180deg)" }}>
            <img src={LeftArrow} alt="left" />
          </IconButton>
        </Box>
      </Box>
      <Box
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography className={classes.bigCardDesc}>Mon</Typography>
        <Typography
          className={classes.bigCardDesc}
          style={{
            width: "20px",
          }}
        >
          Tue
        </Typography>
        <Typography
          className={classes.bigCardDesc}
          style={{
            width: "20px",
          }}
        >
          Wed
        </Typography>
        <Typography
          className={classes.bigCardDesc}
          style={{
            width: "20px",
          }}
        >
          Thu
        </Typography>
        <Typography
          className={classes.bigCardDesc}
          style={{
            width: "20px",
          }}
        >
          Fri
        </Typography>
        <Typography
          className={classes.bigCardDesc}
          style={{
            width: "20px",
          }}
        >
          Sat
        </Typography>
        <Typography
          className={classes.bigCardDesc}
          style={{
            width: "20px",
          }}
        >
          Sun
        </Typography>
      </Box>
      <Box
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography
          className={classes.bigCardDesc}
          style={{
            width: "20px",
          }}
        >
          14
        </Typography>
        <Typography
          className={classes.bigCardDesc}
          style={{
            width: "20px",
          }}
        >
          15
        </Typography>
        <Typography
          className={classes.bigCardDesc}
          style={{
            width: "20px",
          }}
        >
          16
        </Typography>
        <Typography
          className={classes.bigCardDesc}
          style={{
            width: "20px",
          }}
        >
          17
        </Typography>
        <Typography
          className={classes.bigCardDesc}
          style={{
            width: "20px",
          }}
        >
          18
        </Typography>
        <Typography
          className={classes.bigCardDesc}
          style={{
            width: "20px",
          }}
        >
          19
        </Typography>
        <Typography
          className={classes.bigCardDesc}
          style={{
            width: "20px",
          }}
        >
          20
        </Typography>
      </Box>
      <Box
        style={{
          display: "flex",
          padding: "16px",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: "16px",
          borderRadius: "8px",
          background: "rgba(249, 250, 251, 0.10)",
        }}
      >
        <Box
          style={{
            display: "flex",
            padding: "8px",
            alignItems: "center",
            gap: "16px",
            borderRadius: "8px",
            background: "rgba(255, 255, 255, 0.10)",
            width: "-webkit-fill-available",
          }}
        >
          <Box>
            <Typography
              style={{
                color: "#FFF",
                fontSize: "14px ",
                fontWeight: "700 ",
              }}
            >
              11:00
            </Typography>
            <Typography className={classes.bigCardDesc}>AM</Typography>
          </Box>
          <Box
            style={{
              width: "2px",
              height: "53px",
              background: "rgb(255,255,255,0.1)",
            }}
          ></Box>
          <Box>
            <Typography
              style={{
                color: "#FFF",
                fontSize: "12px",
                fontWeight: "700",
                marginBottom: "5px",
              }}
            >
              Daily Standup
            </Typography>
            <Typography
              style={{
                color: "#FFF",
                fontSize: "12px",
                fontWeight: "400",
                marginBottom: "3px",
              }}
            >
              zoom.info/meeting+room+39348......
            </Typography>
            <Typography
              style={{
                color: "#FFF",
                fontSize: "12px",
                fontWeight: 300,
              }}
            >
              View meeting details
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "10px",
        }}
      >
        <Typography
          style={{
            fontSize: "12px",
            fontWeight: 300,
            color: "white",
            marginBottom: "5px",
          }}
        >
          Are you Attending the meeting?
        </Typography>
        <Typography
          style={{
            fontSize: "12px",
            fontWeight: 300,
            color: "white",
          }}
        >
          <span
            style={{
              color: "#F47524",
            }}
          >
            Yes
          </span>{" "}
          / No
        </Typography>
      </Box>

      <Box
        style={{
          display: "flex",
          padding: "16px",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: "16px",
          borderRadius: "8px",
          background: "rgba(249, 250, 251, 0.10)",
        }}
      >
        <Box
          style={{
            display: "flex",
            padding: "8px",
            alignItems: "center",
            gap: "16px",
            borderRadius: "8px",
            width: "-webkit-fill-available",
            background: "rgba(255, 255, 255, 0.10)",
          }}
        >
          <Box>
            <Typography
              style={{
                color: "#FFF",
                fontSize: "14px ",
                fontWeight: "700 ",
              }}
            >
              12:00
            </Typography>
            <Typography className={classes.bigCardDesc}>AM</Typography>
          </Box>
          <Box
            style={{
              width: "2px",
              height: "53px",
              background: "rgb(255,255,255,0.1)",
            }}
          ></Box>
          <Box>
            <Typography
              style={{
                color: "#FFF",
                fontSize: "12px",
                fontWeight: "700",
                marginBottom: "5px",
              }}
            >
              Call with HR manager
            </Typography>
            <Typography
              style={{
                color: "#FFF",
                fontSize: "12px",
                fontWeight: "400",
                marginBottom: "3px",
              }}
            >
              zoom.info/meeting+room+39348......
            </Typography>
            <Typography
              style={{
                color: "#FFF",
                fontSize: "12px",
                fontWeight: 300,
              }}
            >
              View meeting details
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "10px",
        }}
      >
        <Typography
          style={{
            fontSize: "12px",
            fontWeight: 300,
            color: "white",
            marginBottom: "5px",
          }}
        >
          Are you Attending the meeting?
        </Typography>
        <Typography
          style={{
            fontSize: "12px",
            fontWeight: 300,
            color: "white",
          }}
        >
          <span
            style={{
              color: "#F47524",
            }}
          >
            Yes
          </span>{" "}
          / No
        </Typography>
      </Box>

      <Box
        style={{
          display: "flex",
          padding: "16px",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: "16px",
          borderRadius: "8px",
          background: "rgba(249, 250, 251, 0.10)",
        }}
      >
        <Box
          style={{
            display: "flex",
            padding: "8px",
            alignItems: "center",
            gap: "16px",
            borderRadius: "8px",
            background: "rgba(255, 255, 255, 0.10)",
            width: "-webkit-fill-available",
          }}
        >
          <Box>
            <Typography
              style={{
                color: "#FFF",
                fontSize: "14px ",
                fontWeight: "700 ",
              }}
            >
              01:00
            </Typography>
            <Typography className={classes.bigCardDesc}>AM</Typography>
          </Box>
          <Box
            style={{
              width: "2px",
              height: "53px",
              background: "rgb(255,255,255,0.1)",
            }}
          ></Box>
          <Box>
            <Typography
              style={{
                color: "#FFF",
                fontSize: "12px",
                fontWeight: "700",
                marginBottom: "5px",
              }}
            >
              Lunch break
            </Typography>
            <Typography
              style={{
                color: "#FFF",
                fontSize: "12px",
                fontWeight: "400",
                marginBottom: "3px",
              }}
            >
              zoom.info/meeting+room+39348......
            </Typography>
            <Typography
              style={{
                color: "#FFF",
                fontSize: "12px",
                fontWeight: 300,
              }}
            >
              View meeting details
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "10px",
        }}
      >
        <Typography
          style={{
            fontSize: "12px",
            fontWeight: 300,
            color: "white",
            marginBottom: "5px",
          }}
        >
          Are you Attending the meeting?
        </Typography>
        <Typography
          style={{
            fontSize: "12px",
            fontWeight: 300,
            color: "white",
          }}
        >
          <span
            style={{
              color: "#F47524",
            }}
          >
            Yes
          </span>{" "}
          / No
        </Typography>
      </Box>
      <Button className={classes.cretNew}>
        <Typography
          sx={{
            color: "rgb(25, 40, 65)",
            fontWeight: "700",
            textTransform: "capitalize",
          }}
        >
          Create new item
        </Typography>
        <Typography
          sx={{
            color: "blue !important",
          }}
        >
          +
        </Typography>
      </Button>
    </Box>
  );
};
export default Calendar;
