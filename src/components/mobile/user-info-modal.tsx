import {
  Box,
  Modal,
  Backdrop,
  Fade,
  Grid,
  Typography,
  Divider,
} from "@mui/material";
import React from "react";
import CustomButton from "../custom-button";
import UploadIcon from "@mui/icons-material/Upload";
import LogoutIcon from "@mui/icons-material/Logout";

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

type Props = {
  onClose: () => void;
  open: boolean;
  firstName: string;
  lastName: string;
  image: string;
};

export default function UserInfoModal(props: Props) {
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
            <Grid item padding={1} textAlign="center">
              <img
                alt=""
                src={props.image}
                style={{
                  width: "100px",
                  height: "100px",
                }}
              />
              <Typography
                id="transition-modal-title"
                variant="h6"
                component="h2"
                sx={{ textAlign: "center" }}
              >
                {props.firstName} {props.lastName}
              </Typography>
              <Typography
                id="transition-modal-title"
                sx={{ textAlign: "center", paddingBottom: 2 }}
              >
                Front End Developer
              </Typography>
              <CustomButton
                text={"Start Upload"}
                styleHover={"#0d47a1"}
                styleBackground={"#1565c0"}
                icon={<UploadIcon />}
              />
              <Divider sx={{ paddingTop: 2 }} />
              <Grid item xs={12}>
                <Grid item padding={"12px 0"}>
                  <CustomButton
                    text={"My Profile"}
                    styleHover={"#f5f5f5"}
                    styleBackground={"#ffffff"}
                    borderRadius={0}
                    textColor="black"
                    justifyContent="start"
                  />
                </Grid>
                <Grid item padding={"12px 0"}>
                  <CustomButton
                    text={"Edit Profile"}
                    styleHover={"#f5f5f5"}
                    styleBackground={"#ffffff"}
                    borderRadius={0}
                    textColor="black"
                    justifyContent="start"
                  />
                </Grid>
                <Grid item padding={"12px 0"}>
                  <CustomButton
                    text={"Security"}
                    styleHover={"#f5f5f5"}
                    styleBackground={"#ffffff"}
                    borderRadius={0}
                    textColor="black"
                    justifyContent="start"
                  />
                </Grid>
              </Grid>
              <Divider />
            </Grid>
            <Grid item xs={12}>
              <CustomButton
                text={"Logout"}
                styleHover={"#f5f5f5"}
                styleBackground={"#ffffff"}
                borderRadius={0}
                textColor="black"
                justifyContent="center"
                icon={<LogoutIcon />}
              />
            </Grid>
          </Box>
        </Fade>
      </Modal>
    </Box>
  );
}
