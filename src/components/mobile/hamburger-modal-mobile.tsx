import {
  Modal,
  Backdrop,
  Fade,
  Box,
  Typography,
  Divider,
  Grid,
} from "@mui/material";
import React from "react";
import { useRouter } from "next/router";
import { Link as ScrollLink } from "react-scroll";

type HamburgerModalProps = {
  onClose: () => void;
  open: boolean;
  text: any[];
};

const style = {
  position: "absolute" as "absolute",
  top: "40%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  borderRadius: "15px",
  paddingBottom: 1,
};

export default function HamburgerModal(props: HamburgerModalProps) {
  const router = useRouter();

  return (
    <Box>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={props.open}
        onClose={props.onClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={props.open}>
          <Box sx={style}>
            <Grid item padding={3}>
              <Typography
                id="transition-modal-title"
                variant="h6"
                component="h2"
                sx={{ textAlign: "center", fontWeight: "bold" }}
              >
                Main Menu
              </Typography>
              <Divider sx={{ paddingTop: 2 }} />
            </Grid>
            {props.text.map((data, key) => (
              <Grid
                item
                container
                key={key}
                xs={12}
                paddingBottom={5}
                justifyContent={"center"}
              >
                <ScrollLink
                  to={data.url}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  style={{
                    color: "black",
                    fontWeight: "normal",
                    textDecoration: "none",
                    cursor: "pointer",
                    width: "100%",
                    textAlign: "center",
                    transition: "box-shadow 0.3s ease",
                  }}
                  onClick={() => {
                    router.push(`/#${data.url}`);
                    props.onClose();
                  }}
                >
                  {data.header_list_name}
                </ScrollLink>
              </Grid>
            ))}
          </Box>
        </Fade>
      </Modal>
    </Box>
  );
}
