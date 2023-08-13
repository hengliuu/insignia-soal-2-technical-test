import { Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import SearchBox from "../search-box";
import CustomButton from "../custom-button";
import { DummyHeader } from "@/pages/api/get-dummy-header";
import PersonIcon from "@mui/icons-material/Person";
import { GetUsersByIdResponse, getUsersById } from "../api/get-users-by-id";
import { Link as ScrollLink } from "react-scroll";
import UploadIcon from "@mui/icons-material/Upload";
import { useRouter } from "next/router";

export default function HeaderWebsite() {
  const router = useRouter();
  const [usersData, setUsersData] = useState<GetUsersByIdResponse>();
  const headerListData: { header_list_name: string; url: string }[] =
    DummyHeader();

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

  return (
    <Grid container padding={"25px 96px"}>
      <Grid container item alignItems="center" spacing={2} lg={12}>
        <Grid item lg={2} md={2} xs={4}>
          <Typography variant="h6" component="div" sx={{ fontWeight: "bold" }}>
            Social<span style={{ fontWeight: "normal" }}>Network</span>
          </Typography>
        </Grid>
        <Grid item lg={6} md={6} xs={8}>
          <SearchBox />
        </Grid>
        <Grid item lg={2} md={2} xs={6}>
          <CustomButton
            text="Upload"
            type="button"
            styleHover={"#0d47a1"}
            styleBackground={"#1565c0"}
            icon={<UploadIcon />}
          />
        </Grid>
        <Grid item lg={2} md={2} xs={6}>
          <CustomButton
            text={usersData ? usersData.firstName : ""}
            type="button"
            styleHover={"#0d47a1"}
            styleBackground={"#1565c0"}
            icon={<PersonIcon />}
          />
        </Grid>
      </Grid>
      <Grid container item lg={12} md={12} paddingTop={1}>
        {headerListData.map((data, key) => (
          <Grid item key={key} flexGrow={1}>
            <ScrollLink
              to={data.url}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              style={{
                color: "/#" + data.url === router.asPath ? "#1565c0" : "black",
                fontWeight: "/#" + data.url === router.asPath ? "bolder" : "",
                textDecoration: "none",
                cursor: "pointer",
              }}
              onClick={() => router.push(`/#${data.url}`)}
            >
              {data.header_list_name}
            </ScrollLink>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
}
