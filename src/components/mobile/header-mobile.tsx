import { Grid, IconButton, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import UploadIcon from "@mui/icons-material/Upload";
import PersonIcon from "@mui/icons-material/Person";
import SearchBox from "../search-box";
import HamburgerModal from "./hamburger-modal-mobile";
import { DummyHeader } from "@/pages/api/get-dummy-header";
import { GetUsersByIdResponse, getUsersById } from "../api/get-users-by-id";
import UserInfoModal from "./user-info-modal";

type Props = {};

export default function MobileHeader({}: Props) {
  const [openHamburgerModal, setOpenHamburgerModal] = useState(false);
  const [openUserInfoModal, setOpenUserInfoModal] = useState(false);
  const headerListData: { header_list_name: string; url: string }[] =
    DummyHeader();
  const [usersData, setUsersData] = useState<GetUsersByIdResponse>();

  useEffect(() => {
    getUsersById()
      .then((data) => {
        if (data !== undefined) {
          setUsersData(data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleClickHamburgerModal = () => {
    setOpenHamburgerModal(true);
  };

  const handdleClickUserInfoModal = () => {
    setOpenUserInfoModal(true);
  };

  return (
    <Grid container padding={1}>
      <HamburgerModal
        onClose={() => setOpenHamburgerModal(false)}
        open={openHamburgerModal}
        text={headerListData}
      />
      <UserInfoModal
        open={openUserInfoModal}
        onClose={() => setOpenUserInfoModal(false)}
        firstName={usersData ? usersData.firstName : ""}
        lastName={usersData ? usersData.lastName : ""}
        image={usersData ? usersData.image : ""}
      />
      <Grid container item alignItems="center">
        <IconButton
          size="large"
          edge="start"
          aria-label="menu"
          sx={{ mr: 2, color: "#0d47a1" }}
          onClick={handleClickHamburgerModal}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          variant="h6"
          component="div"
          sx={{ fontWeight: "bold", flexGrow: 1, textAlign: "center" }}
        >
          Social<span style={{ fontWeight: "normal" }}>Network</span>
        </Typography>
        <IconButton
          size="large"
          edge="start"
          sx={{ color: "#0d47a1" }}
          aria-label="menu"
        >
          <UploadIcon />
        </IconButton>
        <IconButton
          size="large"
          edge="start"
          sx={{ color: "#0d47a1" }}
          aria-label="menu"
          onClick={handdleClickUserInfoModal}
        >
          <PersonIcon />
        </IconButton>
      </Grid>
      <Grid container item>
        <SearchBox />
      </Grid>
    </Grid>
  );
}
