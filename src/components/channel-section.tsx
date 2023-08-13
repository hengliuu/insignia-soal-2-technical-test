import { GetDummyChannels } from "@/pages/api/get-dummy-channels";
import {
  Grid,
  Typography,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  IconButton,
} from "@mui/material";
import Link from "next/link";
import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";

type Props = {
  icon?: any;
  firstGridPaddingTop: number;
  imageListCols: number;
  imageListGaps: number;
  imageListItemHeight: string;
};

export default function ChannelSectionMobile(props: Props) {
  const dummyChannels: { title: string; image_url: string }[] =
    GetDummyChannels();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div id="channels">
      <Grid
        item
        xs={12}
        container
        alignItems="end"
        paddingTop={props.firstGridPaddingTop}
      >
        <Grid container item xs={6}>
          <Typography
            fontSize="25px"
            fontWeight="bold"
            flexGrow={1}
            color="#0d47a1"
          >
            Channels
          </Typography>
        </Grid>
        <Grid container item xs={6} alignItems={"center"}>
          <Link
            href="#channels"
            style={{
              flexGrow: 1,
              textDecoration: "none",
              fontWeight: "bold",
              color: "#0d47a1",
            }}
          >
            Browse all channels
          </Link>
          {props.icon}
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <ImageList cols={props.imageListCols} gap={props.imageListGaps}>
          {dummyChannels.map((item, key) => (
            <ImageListItem
              key={key}
              onMouseEnter={() => {
                setHoveredIndex(key);
              }}
              onMouseLeave={() => {
                setHoveredIndex(null);
              }}
              sx={{ ":hover": { boxShadow: 10 } }}
            >
              {hoveredIndex === key && (
                <IconButton
                  style={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    color: "black",
                    backgroundColor: "#fafafa", // Your desired background color
                    borderRadius: "25%", // Rounded shape
                    width: 20,
                    height: 20,
                  }}
                >
                  <CloseIcon sx={{ height: 15, width: 15, textAlign: "end" }} />
                </IconButton>
              )}
              <img
                src={item.image_url}
                alt={item.title}
                style={{
                  borderRadius: 10,
                  maxHeight: props.imageListItemHeight,
                }}
              />
              <ImageListItemBar title={item.title} />
            </ImageListItem>
          ))}
        </ImageList>
      </Grid>
    </div>
  );
}
