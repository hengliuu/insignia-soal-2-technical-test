import { GetVideoSectionResponse } from "@/pages/api/get-videos-section";
import { Grid } from "@mui/material";
import React from "react";
import LeftSectionWebsite from "./left-section-website";
import VisibilityIcon from "@mui/icons-material/Visibility";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import ChannelSectionMobile from "../channel-section";

type Props = {
  videosData: GetVideoSectionResponse[];
};

export default function SecondSectionWebsite(props: Props) {
  return (
    <Grid container spacing={2}>
      <Grid item lg={7}>
        <LeftSectionWebsite
          id="peoples"
          videoData={props.videosData}
          title="People"
          anotherText="View all"
          buttonText="Show your work"
          buttonIcon={<VisibilityIcon />}
        />
        <LeftSectionWebsite
          id="documents"
          videoData={props.videosData}
          title="Documents"
          anotherText="Browse all documents"
          buttonText="Share your documents"
          buttonIcon={<AddCircleOutlineIcon />}
        />
      </Grid>
      <Grid lg={5} md={12} item>
        <ChannelSectionMobile
          firstGridPaddingTop={0}
          imageListCols={2}
          imageListGaps={5}
          imageListItemHeight={"220px"}
        />
      </Grid>
    </Grid>
  );
}
