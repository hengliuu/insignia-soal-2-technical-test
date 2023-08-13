import Layout from "@/components/layout";
import { ThemeProvider, createTheme } from "@mui/material";
import type { AppProps } from "next/app";
import { Roboto } from "next/font/google";

const inter = Roboto({
  subsets: ["latin"],
  weight: ["400"],
});

const themeLayout = createTheme({
  palette: {
    primary: {
      main: "#FFFFFF",
      contrastText: "#000000",
    },
    background: {
      default: "#FFFFFF",
    },
  },
  typography: {
    fontFamily: inter.style.fontFamily,
    fontSize: 12.5,
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={themeLayout}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}
