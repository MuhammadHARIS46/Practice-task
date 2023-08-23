import { makeStyles } from "@mui/styles";

export default makeStyles({
  mainContainer: {
    display: "flex",
    padding: "24px",
    flexDirection: "column",
    gap: "8px",
    borderRadius: "16px",
    border: "1px solid var(--bg-blur-storke, rgba(255, 255, 255, 0.30))",
    background: "rgba(0, 0, 0, 0.05)",
    backdropFilter: "blur(22px)",
  },
  mainHeading:{
    color: "#FFF",
    fontSize: "32px !important",
    fontWeight: "800 !important",
    lineHeight: "100%"
  },
  wrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  arrowBox: {
    display: "flex",
    gap: "10px",
  },
  listBox: {
    display: "flex",
    flexDirection: "column",
  },
  itemWrapper: {
    display: "flex",
    padding: "12px 8px",
    alignItems: "center",
    gap: "8px",
    borderBottom: "1px solid rgba(255, 255, 255, 0.30)",
    justifyContent:"space-between"
  },
  title: {
    color: "#FFF",
    textEdge: "cap",
    fontSize: "12px !important",
    fontWeight: "700 !important",
    lineHeight: "100%",
    marginBottom: "5px",
  },
  description: {
    color: "#FFF",
    textEdge: "cap",
    fontSize: "12px !important",
    fontWeight: "300 !important",
    lineHeight: "100%",
  },
  sNoBox: {
    display: "flex",
    minWidth: "30px",
    maxWidth:"30px",
    height: "38px",
    padding: "10px 11px",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "8px",
    borderRadius: "8px",
    background: "rgba(249, 250, 251, 0.10)",
  },
  dltConWrap: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  seeAll:{
    color: "#FFF",
    fontSize: "14px !important",
    fontWeight: "700 14px !important",
    lineHeight: "100%"
  }
});
