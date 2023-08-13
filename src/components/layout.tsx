import React from "react";
import Header from "./header";
import Head from "next/head";
import { Grid, useMediaQuery, useTheme } from "@mui/material";
import Footer from "./footer";

export default function Layout({ children }: any) {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <Grid>
      <Head>
        <title>Social Network</title>
        <meta name="description" content="social-network" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" type="image/x-icon" />
      </Head>
      <Header />
      <section
        style={{
          backgroundColor: theme.palette.background.default,
        }}
      >
        {children}
      </section>
      <Footer />
    </Grid>
  );
}
