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
import Feed from "./Feed"
const HeroSection = () => {
  const classes = useStyles();

  return (
    <>
      <Box className={classes.heroMain}>
        <Sidebar />

        <Box className={classes.heroRightMain} style={{width:"100%"}}>
          <Box
            style={{
              backgroundImage: `url(${require("../../assets/HeroBg.png")})`,
              backgroundSize: "100vw 100%",
              backgroundRepeat: "no-repeat",
            }}
            className={classes.heroRightTop}
          >
            <Navbar />
            <Box
              style={{
                display: "flex",
                marginTop: "40px",
                gap: "25px",
                alignItem: "center",
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

          <Box
            style={{
              paddingTop: "40px",
              paddingLeft: "25px",
              paddingRight: "25px",
              paddingBottom: "40px",
              width:"100%"
            }}
          >
            <Box style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <Typography
                style={{
                  color: "#F9FAFB",
                  fontSize: "18px !important",
                  textEdge: "cap",
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
              style={{
                display: "flex",
                justifyContent: "space-between",
              width:"100%"
              }}
            >
              {/* below box for bottom left */}

              <Box className={classes.bottomLeftWrapper} >
                <Box style={{
                  width:"100%",
                  height:"100%"
                }}>
                  <img src={InvestorSvg} alt="InvestorSvg" style={{
                  width:"100%",
                  height:"100%"
                }} />
                </Box>
                <Box
                 className={classes.cardPacket}
                >
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
                          style={{
                            marginBottom: "10px",
                          }}
                        >
                          Project Done last 30 days
                        </Typography>
                        <Box>
                          <Typography className={classes.smallCardDescTypo}>
                            7 Projects
                          </Typography>
                          <img src={increaseIcon} alt="" />
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

                <Box
                  className={classes.cardPacket}
                >
                  <Box className={classes.bigcardMain}>
                    <Box className={classes.flexCSpBet}>
                      <Box
                        style={{
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
                            style={{
                              display: "flex",
                              gap: "5px",
                            }}
                          >
                            <img src={analyticsIcon} alt="al" />
                            <Box>
                              <Typography
                                className={classes.seeAll}
                                style={{
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

                          <Box className={classes.flexCSpBet}>
                            <Typography className={classes.pgTypo}>
                              74% complete
                            </Typography>
                            <Typography className={classes.pgTypo}>
                              2 days left
                            </Typography>
                          </Box>
                        </Box>
                        <img src={forwardIcon} alt="forwardIcon" />
                      </Box>
                      <Box className={classes.singleListBox}>
                        <Box>
                          <Box
                            style={{
                              display: "flex",
                              gap: "5px",
                            }}
                          >
                            <img src={codeIcon} alt="al" />
                            <Box>
                              <Typography
                                className={classes.seeAll}
                                style={{
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
                          <Box className={classes.flexCSpBet}>
                            <Typography className={classes.pgTypo}>
                              61% complete
                            </Typography>
                            <Typography className={classes.pgTypo}>
                              11 days left
                            </Typography>
                          </Box>
                        </Box>
                        <img src={forwardIcon} alt="forwardIcon" />
                      </Box>
                    </Box>
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
                          Create new item
                        </Typography>
                        <Typography
                          style={{
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
                        style={{
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
                                style={{
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

              <Box className={classes.bottomRightWrapper} >
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
    </>
  );
};

export default HeroSection;
