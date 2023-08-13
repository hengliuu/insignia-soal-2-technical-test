import { Grid } from "@mui/material";
import React from "react";
import { GetVideoSectionResponse } from "@/pages/api/get-videos-section";
import { GetActivityHeaderSectionResponse } from "@/pages/api/get-activity-section";
import UploadIcon from "@mui/icons-material/Upload";
import LeftSectionWebsite from "./left-section-website";
import ActivitySection from "../activity-section";

type Props = {
  videoData: GetVideoSectionResponse[];
  activityData: GetActivityHeaderSectionResponse[];
};

export default function FirstSectionWebsite(props: Props) {
  return (
    <Grid container item xs={12} spacing={2}>
      <Grid item lg={7} md={12} xs={12}>
        <LeftSectionWebsite
          id="videos"
          title="Videos"
          anotherText="Browse all videos"
          buttonText="Upload Your Owns Video"
          buttonIcon={<UploadIcon />}
          videoData={props.videoData}
        />
      </Grid>
      <Grid item lg={5} md={12} xs={12}>
        <ActivitySection
          activityData={props.activityData}
          firstGridPadding={0}
          imageWidth={250}
          titleFontSize="30px"
          variantText="h5"
        />
      </Grid>
    </Grid>
  );
}
