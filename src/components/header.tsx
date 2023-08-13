import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Slide from "@mui/material/Slide";
import { useMediaQuery, useTheme } from "@mui/material";
import HeaderMobile from "./mobile/header-mobile";
import HeaderWebsite from "./website/header-website";

interface Props {
  window?: () => Window;
}

function HideOnScroll(props: Props) {
  const { window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    // <Slide appear={false} direction="down" in={!trigger}>
    <AppBar
      style={{
        backgroundColor: "transparent",
        backdropFilter: "blur(30px)",
        boxShadow: trigger ? "10px" : "none",
      }}
    >
      <Toolbar>{matches ? <HeaderWebsite /> : <HeaderMobile />}</Toolbar>
    </AppBar>
    // </Slide>
  );
}

export default function Header() {
  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll />
    </React.Fragment>
  );
}
