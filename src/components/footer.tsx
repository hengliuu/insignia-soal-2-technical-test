import {
  Grid,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Link from "next/link";

type Props = {};

export default function Footer({}: Props) {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <Grid
      container
      padding={matches ? "50px 120px" : 5}
      sx={{
        bottom: 0,
        marginTop: "auto",
        backgroundColor: "#eeeeee",
        color: "black",
      }}
    >
      <Grid
        container
        item
        alignItems="center"
        justifyContent={matches ? "start" : "center"}
      >
        <IconButton
          size="large"
          edge="start"
          aria-label="menu"
          sx={{ color: "#0d47a1" }}
        >
          <FacebookIcon />
        </IconButton>
        <IconButton
          size="large"
          edge="start"
          aria-label="menu"
          sx={{ color: "#0d47a1" }}
        >
          <TwitterIcon />
        </IconButton>
        <IconButton
          size="large"
          edge="start"
          aria-label="menu"
          sx={{ color: "#0d47a1" }}
        >
          <LinkedInIcon />
        </IconButton>
      </Grid>
      <Grid
        container
        item
        spacing={2}
        alignItems="center"
        justifyContent={matches ? "start" : "center"}
      >
        <Grid item>
          <Link
            href=""
            style={{
              color: "#757575",
              textAlign: "start",
              textDecoration: "none",
              justifyContent: "start",
            }}
          >
            About
          </Link>
        </Grid>
        <Grid item>
          <Link
            href=""
            style={{
              color: "#757575",
              textAlign: "start",
              textDecoration: "none",
              justifyContent: "start",
            }}
          >
            For Business
          </Link>
        </Grid>
        <Grid item>
          <Link
            href=""
            style={{
              color: "#757575",
              textAlign: "start",
              textDecoration: "none",
              justifyContent: "start",
            }}
          >
            Suggestions
          </Link>
        </Grid>
        <Grid item>
          <Link
            href=""
            style={{
              color: "#757575",
              textAlign: "start",
              textDecoration: "none",
              justifyContent: "start",
            }}
          >
            Help & FAQs
          </Link>
        </Grid>
        <Grid item>
          <Link
            href=""
            style={{
              color: "#757575",
              textAlign: "start",
              textDecoration: "none",
              justifyContent: "start",
            }}
          >
            Contact Us
          </Link>
        </Grid>
        <Grid item>
          <Link
            href=""
            style={{
              color: "#757575",
              textAlign: "start",
              textDecoration: "none",
              justifyContent: "start",
            }}
          >
            Pricing
          </Link>
        </Grid>
      </Grid>
      <Grid
        container
        item
        alignItems="center"
        justifyContent={matches ? "start" : "center"}
        paddingTop={2}
      >
        <Grid item>
          <Typography sx={{ fontWeight: "bold", color: "#757575" }}>
            @Copyright 2013 companyname inc.
          </Typography>
        </Grid>
      </Grid>
      <Grid
        container
        item
        spacing={2}
        alignItems="center"
        justifyContent={matches ? "start" : "center"}
      >
        <Grid item>
          <Typography color="#757575">Privacy</Typography>
        </Grid>
        <Grid item>
          <Typography color="#757575">Terms</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}
