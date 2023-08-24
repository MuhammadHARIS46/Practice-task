import React from "react";
import { Box, Typography, Button } from "@mui/material";
import useStyles from "./stylesheet";
import Sidebar from "../reusable/Sidebar";
import Navbar from "../reusable/navbar";
import WelcomeBack from "../WelcomeBack/WelcomeBack";
import Card from "./Card";
import { heroCardData, NewJoiners } from "../../Static";
import AddIcon from "../../assets/Add.svg";
import TodoList from "../TodoList/TodoList";
import MagicWandIcon from "../../assets/MagicWand.svg";
import InvestorSvg from "../../assets/Investor.svg";
import coloredClock from "../../assets/coloredClock.svg";
import coloredWallet from "../../assets/coloredWallet.svg";
import increaseIcon from "../../assets/increase.svg";
import analyticsIcon from "../../assets/analytics.svg";
import codeIcon from "../../assets/code.svg";
import forwardIcon from "../../assets/forwardIcon.svg";
import Ornaments from "../../assets/Ornaments.svg";
import MenuIcon from "../../assets/Menu.svg";
import Offers from "./Offers";
import Feed from "./Feed";
import LinearProgress from "@mui/material/LinearProgress";
import { makeStyles } from "@mui/styles";
import Calendar from "./Calendar"
const useStyles2 = makeStyles({
  root: {
    height: 10,
    borderRadius: 5,
  },
  bar: ({ progress }) => ({
    borderRadius: 5,
    background: `linear-gradient(90deg, #3C3CF0 0%, #3451E6 17.00%, #2088CD 52.00%, #00DCA5 100% ${
      100 - progress
    }%, #D9D9D9 100%)`,
  }),
});
const Progress = ({ progress = 20 }) => {
  const classes = useStyles2({ progress });

  return (
    <LinearProgress
      classes={{ root: classes.root, bar: classes.bar }}
      variant="determinate"
      value={progress}
    />
  );
};

const HeroSection = () => {
  const classes = useStyles();

  return (
    <>
      <Box
        style={{
          height: "100vh",
          overflowX: "hidden",
          position: "relative",
        }}
      >
        <Box
          style={{
            overflowX: "hidden",
          }}
        >
          <Box
            style={{
              backgroundImage: `url(${require("../../assets/HeroBg.png")})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
            className={classes.heroRightTop}
          >
            <Box
              style={{
                marginLeft: "250px",
              }}
            >
              <Navbar />
              <Box
                style={{
                  display: "flex",
                  marginTop: "40px",
                  gap: "25px",
                  alignItem: "center",
                  flexWrap: "wrap",
                }}
              >
                <Box>
                  <WelcomeBack />
                  <Box className={classes.heroCardContainer}>
                    {heroCardData.map((i, index) => (
                      <Box key={index}>
                        <Card
                          title={i.title}
                          description={i.description}
                          logo={i.logo}
                        />
                      </Box>
                    ))}
                    <Box className={classes.addTitleCard}>
                      <img src={AddIcon} alt="AddIcon" />
                      <Typography className={classes.cardTitle}>
                        Add a new title
                      </Typography>
                    </Box>
                  </Box>
                </Box>
                <TodoList />
              </Box>
            </Box>
          </Box>

          <Box
            style={{
              width: "100%",
              background: "#192841",
            }}
          >
            <Box
              style={{
                marginLeft: "250px",
                paddingLeft: "50px",
                paddingTop: "35px",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <Typography
                  sx={{
                    color: "#F9FAFB",
                    fontSize: "20px !important",
                    fontWeight: "800 !important",
                    lineHeight: "100%",
                    marginBottom: "5px",
                  }}
                >
                  Customize my Homepage
                </Typography>
                <img src={MagicWandIcon} alt="MagicWandIcon" />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                {/* below box for bottom left */}

                <Box className={classes.bottomLeftWrapper}>
                  <Box
                    style={{
                      width: "100%",
                      height: "100%",
                    }}
                  >
                    <img
                      src={InvestorSvg}
                      alt="InvestorSvg"
                      style={{
                        width: "100%",
                        height: "100%",
                      }}
                    />
                  </Box>
                  <Box className={classes.cardPacket}>
                    <Box className={classes.smallCards}>
                      <Box
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                        }}
                      >
                        <Box>
                          <Typography
                            className={classes.smallCardtitleTypo}
                            style={{
                              marginBottom: "10px",
                            }}
                          >
                            Holidays Left
                          </Typography>
                          <Typography className={classes.smallCardDescTypo}>
                            10 Days <span>Left!</span>
                          </Typography>
                        </Box>
                        <img src={coloredClock} alt="coloredClock" />
                      </Box>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <img
                          src={MenuIcon}
                          alt="forwardIcon"
                          style={{
                            transform: "rotate(90deg)",
                            width: "7px",
                          }}
                        />
                      </div>
                    </Box>
                    <Box className={classes.smallCards}>
                      <Box
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                        }}
                      >
                        <Box>
                          <Typography
                            className={classes.smallCardtitleTypo}
                            sx={{
                              marginBottom: "15px",
                            }}
                          >
                            Project Done last 30 days
                          </Typography>
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              gap: "5px",
                            }}
                          >
                            <Typography className={classes.smallCardDescTypo}>
                              7 Projects
                            </Typography>
                            <img src={increaseIcon} alt="increaseIcon" />
                          </Box>
                        </Box>
                        <img src={coloredWallet} alt="coloredClock" />
                      </Box>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <img
                          src={MenuIcon}
                          alt="forwardIcon"
                          style={{
                            transform: "rotate(90deg)",
                            width: "7px",
                          }}
                        />
                      </div>
                    </Box>
                  </Box>

                  <Box className={classes.cardPacket}>
                    <Box className={classes.bigcardMain}>
                      <Box className={classes.flexCSpBet}>
                        <Box
                          sx={{
                            borderBottom: "1px solid #E5E7EB",
                            paddingBottom: "10px",
                          }}
                        >
                          <Typography className={classes.bigcardheading}>
                            Projects
                          </Typography>
                        </Box>
                        <Typography className={classes.seeAll}>
                          See all
                        </Typography>
                      </Box>
                      <Box className={classes.projectListWrap}>
                        <Box className={classes.singleListBox}>
                          <Box>
                            <Box
                              sx={{
                                display: "flex",
                                gap: "10px",
                                alignItems: "flex-start",
                                marginBottom: "10px",
                              }}
                            >
                              <img src={analyticsIcon} alt="al" />
                              <Box>
                                <Typography
                                  className={classes.seeAll}
                                  sx={{
                                    marginBottom: "10px",
                                  }}
                                >
                                  New Analytics Dashboard
                                </Typography>
                                <Typography className={classes.bigCardDesc}>
                                  This is a new analytics dashboard to create a
                                  new one source of truth
                                </Typography>
                              </Box>
                            </Box>

                            <Box
                              className={classes.flexCSpBet}
                              style={{
                                marginBottom: "5px",
                              }}
                            >
                              <Typography className={classes.pgTypo}>
                                74% complete
                              </Typography>
                              <Typography className={classes.pgTypo}>
                                2 days left
                              </Typography>
                            </Box>
                            <Progress progress={74} />
                          </Box>
                          <img src={forwardIcon} alt="forwardIcon" />
                        </Box>
                        <Box className={classes.singleListBox}>
                          <Box>
                            <Box
                              sx={{
                                display: "flex",
                                gap: "10px",
                                alignItems: "flex-start",
                                marginBottom: "10px",
                              }}
                            >
                              <img src={codeIcon} alt="al" />
                              <Box>
                                <Typography
                                  className={classes.seeAll}
                                  sx={{
                                    marginBottom: "10px",
                                  }}
                                >
                                  Test new ML model, KNN
                                </Typography>
                                <Typography className={classes.bigCardDesc}>
                                  To test new machine learning algorithm to
                                  enhance the F1 values
                                </Typography>
                              </Box>
                            </Box>
                            <Box
                              className={classes.flexCSpBet}
                              style={{
                                marginBottom: "5px",
                              }}
                            >
                              <Typography className={classes.pgTypo}>
                                61% complete
                              </Typography>
                              <Typography className={classes.pgTypo}>
                                11 days left
                              </Typography>
                            </Box>
                            <Progress progress={61} />
                          </Box>
                          <img src={forwardIcon} alt="forwardIcon" />
                        </Box>
                      </Box>
                      <Box
                        sx={{
                          width: "100%",
                        }}
                      >
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
                        <img
                          src={Ornaments}
                          alt="Ornaments"
                          style={{ marginTop: "20px", width: "100%" }}
                        />
                      </Box>
                    </Box>
                    <Box className={classes.bigcardMain}>
                      <Box className={classes.flexCSpBet}>
                        <Box
                          sx={{
                            borderBottom: "1px solid #E5E7EB",
                            paddingBottom: "10px",
                          }}
                        >
                          <Typography className={classes.bigcardheading}>
                            New Joiners
                          </Typography>
                        </Box>
                        <Typography className={classes.seeAll}>
                          See all
                        </Typography>
                      </Box>
                      <Box className={classes.newJoinerListBox}>
                        {NewJoiners?.map((i) => (
                          <Box
                            className={classes.newJoinerListWrapper}
                            key={i.id}
                          >
                            <Box style={{ display: "flex", gap: "10px" }}>
                              <img
                                src={i.pic}
                                alt="i"
                                style={{
                                  width: "50px",
                                }}
                              />
                              <Box>
                                <Typography
                                  className={classes.seeAll}
                                  sx={{
                                    marginBottom: "10px",
                                  }}
                                >
                                  {i.name}
                                </Typography>
                                <Typography className={classes.bigCardDesc}>
                                  {i.desg}
                                </Typography>
                              </Box>
                            </Box>
                            <img src={forwardIcon} alt="forwardIcon" />
                          </Box>
                        ))}
                      </Box>
                      <Box
                        style={{
                          width: "100%",
                        }}
                      >
                        <img
                          src={Ornaments}
                          alt="Ornaments"
                          style={{ marginTop: "20px", width: "100%" }}
                        />
                      </Box>
                    </Box>
                  </Box>
                  <Feed />
                </Box>
                {/* above box for bottom left */}

                <Box className={classes.bottomRightWrapper}>
                  <Calendar />
                  <Offers />
                  <Box className={classes.offerMainBox}>
                    <Typography
                      className={classes.offerHeading}
                      style={{
                        marginBottom: "10px",
                      }}
                    >
                      Innovation Box
                    </Typography>
                    <Typography
                      style={{
                        color: "#FFF",
                        fontSize: "12px",
                        fontWeight: 400,
                        lineHeight: "21px",
                        letterSpacing: "0.429px",
                        marginBottom: "10px",
                      }}
                    >
                      Please submit your idea here
                    </Typography>
                    <Box
                      style={{
                        width: "100%",
                      }}
                    >
                      <Button className={classes.cretNew}>
                        <Typography
                          style={{
                            color: "rgb(25, 40, 65)",
                            fontWeight: "700",
                            textTransform: "capitalize",
                          }}
                        >
                          Submit idea
                        </Typography>
                      </Button>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          style={{
            position: "absolute",
            top: 0,
          }}
        >
          <Sidebar />
        </Box>
      </Box>
    </>
  );
};

export default HeroSection;
