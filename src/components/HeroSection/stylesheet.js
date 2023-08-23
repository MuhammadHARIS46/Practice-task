import { makeStyles } from "@mui/styles";

export default makeStyles({
  heroMain: {
    display: "flex",
  },
  pageContent: {
    padding: "20px",
  },
  heroRight: {
    paddingTop: "40px",
    paddingRight: "25px",
    paddingLeft:"25px"
  },
  cardMain: {
    display: "flex",
    width: "198.5px",
    height: "146px",
    padding: "16px",
    justifyContent: "space-between",
    borderRadius: "16px",
    border: "1px solid rgba(255, 255, 255, 0.30)",
    background: "rgba(0, 0, 0, 0.05)",
    backdropFilter: "blur(22px)",
  },
  logoAndTextWrap: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  cardTitle: {
    color: "#F9FAFB",
    textEdge: "cap",
    fontSize: "16px !important",
    fontWeight: "800 !important",
    lineHeight: "100%",
    marginBottom: "5px",
  },
  cardDescription: {
    color: "#FFF",
    fontSize: "16px !important",
    fontWeight: "275 !important",
    lineHeight: "100%",
  },
  heroCardContainer: {
    display: "flex",
    alignItems: "center",
    gap: "30px",
    marginTop: "100px",
  },
  addTitleCard: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    width: "198.5px",
    height: "146px",
    padding: "16px",
    borderRadius: "16px",
    border: "1px solid var(--bg-blur-storke, rgba(255, 255, 255, 0.30))",
    background: "rgba(0, 0, 0, 0.05)",
    backdropFilter: "blur(22px)",
  },
});
