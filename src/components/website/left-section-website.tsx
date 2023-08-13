import { GetVideoSectionResponse } from "@/pages/api/get-videos-section";
import {
  Grid,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Typography,
} from "@mui/material";
import React from "react";
import CustomButton from "../custom-button";
import Link from "next/link";

type Props = {
  title: string;
  anotherText: string;
  buttonText: string;
  buttonIcon: any;
  id: string;
  videoData: GetVideoSectionResponse[];
};

export default function LeftSectionWebsite(props: Props) {
  return (
    <div id={props.id}>
      <Grid item container lg={12} alignItems="end">
        <Typography
          fontSize="30px"
          fontWeight="bold"
          flexGrow={1}
          color="#0d47a1"
        >
          {props.title}
        </Typography>
        <Link
          href={`#${props.id}`}
          style={{
            flexGrow: 1,
            textDecoration: "none",
            fontWeight: "bold",
            color: "#0d47a1",
          }}
        >
          {props.anotherText}
        </Link>
      </Grid>
      <Grid item container lg={12}>
        <ImageList
          sx={{ width: "100%", height: "100%" }}
          variant="quilted"
          cols={4}
        >
          {props.videoData.map((item, key) =>
            key < 3 ? (
              <ImageListItem
                key={item.title}
                cols={key === 0 ? 3 : 1}
                rows={key === 0 ? 2 : 1}
              >
                <img
                  src={item.images[0]}
                  alt={item.title}
                  loading="lazy"
                  style={{ borderRadius: 10 }}
                />
                <ImageListItemBar
                  sx={{
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.7) 0%, " +
                      "rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
                    justifyContent: "space-between",
                    borderRadius: "5px 5px",
                  }}
                  title={
                    key === 0 ? (
                      <Grid item container justifyContent={"space-between"}>
                        <Grid item lg={10}>
                          <Typography
                            sx={{
                              fontWeight: "bold",
                              overflow: "hidden",
                            }}
                          >
                            {item.description}
                          </Typography>
                          <Typography alignItems={"center"}>
                            {item.title}
                          </Typography>
                        </Grid>
                        <Grid
                          item
                          lg={2}
                          container
                          alignItems={"center"}
                          justifyContent={"end"}
                        >
                          <Typography fontSize="12px">
                            {item.price} views
                          </Typography>
                        </Grid>
                      </Grid>
                    ) : (
                      <Grid item container justifyContent={"space-between"}>
                        <Grid item lg={7}>
                          <Typography alignItems={"center"} overflow={"hidden"}>
                            {item.title}
                          </Typography>
                        </Grid>
                        <Grid
                          item
                          lg={5}
                          container
                          alignItems={"center"}
                          justifyContent={"end"}
                        >
                          <Typography fontSize="12px">
                            {item.price} views
                          </Typography>
                        </Grid>
                      </Grid>
                    )
                  }
                />
              </ImageListItem>
            ) : (
              <span key={key} />
            )
          )}
        </ImageList>
        <ImageList
          sx={{ width: "100%", height: "100%" }}
          variant="quilted"
          cols={3}
        >
          {props.videoData.map((item, key) =>
            key >= 3 ? (
              <ImageListItem key={item.title} cols={1} rows={1}>
                <img
                  src={item.images[0]}
                  alt={item.title}
                  style={{ borderRadius: 10 }}
                  loading="lazy"
                />
                <ImageListItemBar
                  sx={{
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.7) 0%, " +
                      "rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
                    borderRadius: "5px 5px",
                  }}
                  title={
                    <Grid item container justifyContent={"space-between"}>
                      <Grid item lg={7}>
                        <Typography alignItems={"center"} overflow={"hidden"}>
                          {item.title}
                        </Typography>
                      </Grid>
                      <Grid
                        item
                        lg={5}
                        container
                        alignItems={"center"}
                        justifyContent={"end"}
                      >
                        <Typography fontSize="12px">
                          {item.price} views
                        </Typography>
                      </Grid>
                    </Grid>
                  }
                />
              </ImageListItem>
            ) : (
              <span key={key} />
            )
          )}
          <ImageListItem cols={1} rows={1}>
            <CustomButton
              styleHover="#f5f5f5"
              styleBackground="#ffffff"
              borderColor="black"
              text={props.buttonText}
              textColor="black"
              borderRadius={2}
              icon={props.buttonIcon}
            />
          </ImageListItem>
        </ImageList>
      </Grid>
    </div>
  );
}
