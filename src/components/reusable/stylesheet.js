import { makeStyles } from "@mui/styles";

export default makeStyles({
  navbarMain: {
    display: "flex",
    height: "75px",
    padding: "16px",
    justifyContent: "space-between",
    alignItems: "center",
    flexShrink: 0,
    borderRadius: "88px",
    border: "1px solid var(--bg-blur-storke, rgba(255, 255, 255, 0.30))",
    background: "rgba(0, 0, 0, 0.15)",
    backdropFilter: "blur(22px)",
  },
  sidebarMain: {
    borderRadius: "0px 0px 24px 0px",
    border: "1px solid rgba(255, 255, 255, 0.30)",
    background: "rgba(255, 255, 255, 0.10)",
    backdropFilter: "blur(22px)",
    display: "flex",
    height: "100vh",
    padding: "32px 16px 16px 16px",
    flexDirection: "column",
    gap: "16px",
    width:"240px"
  },
  IconLabelWrap: {
    display: "flex",
    alignItems: "center",
    gap: "5px",
  },
  sidebarlabel: {
    color: "white",
    textAlign: "justify",
    leadingTrim: "both",
    textEdge: "cap",
    fontSize: "16px",
    fontWeight: 400,
    lineHeight: "100%",
  },
  navicons:{
    display:"flex",
    alignItems:"center",
    gap:"15px"
  }
});
