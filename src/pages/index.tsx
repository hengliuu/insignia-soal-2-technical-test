import { Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import { Fragment, useEffect, useState } from "react";
import GetVideoSection, {
  GetVideoSectionResponse,
} from "./api/get-videos-section";
import GetActivitySection, {
  GetActivityHeaderSectionResponse,
} from "./api/get-activity-section";
import SecondSectionWebsite from "@/components/website/second-section-website";
import CustomButton from "@/components/custom-button";
import FirstSectionWebsite from "@/components/website/first-section-website";
import VideoPeopleDocumentSectionMobile from "@/components/mobile/video-people-document-section-mobile";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import ChannelSection from "@/components/channel-section";
import ActivitySection from "@/components/activity-section";

export default function Home() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  const [videosData, setVideosData] = useState<GetVideoSectionResponse[]>([]);
  const [activityData, setActivityData] = useState<
    GetActivityHeaderSectionResponse[]
  >([]);

  useEffect(() => {
    GetVideoSection({
      limit: 5,
      select: "title,price,images,description",
      skip: 5,
    })
      .then((data) => {
        setVideosData(data);
      })
      .catch((error) => console.log(error));

    GetActivitySection({ limit: 10, select: "id,body,user", skip: 10 })
      .then((data) => {
        setActivityData(data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <Fragment>
      <Grid item sx={{ paddingTop: matches ? "175px" : "120px" }}>
        <Grid
          item
          xs={12}
          padding={matches ? "0px 120px 10px 120px" : "0px 16px 16px 16px"}
        >
          <Typography
            variant={matches ? "h3" : "h4"}
            textAlign={"center"}
            fontWeight="bolder"
            color="#0d47a1"
          >
            Join the SocialNetwork community and connect with like-minded
            individuals around the globe. Discover new friendships, share your
            passions, and stay updated on the latest trends. Your journey to a
            more connected world starts here!
          </Typography>
          <Typography
            variant="h6"
            textAlign={"center"}
            fontWeight="bolder"
            color="black"
            paddingTop={5}
          >
            Reach Your Connections Using Social Network
          </Typography>
          <Grid
            item
            xs={12}
            container
            justifyContent="center"
            alignItems="center"
            paddingTop={2}
          >
            <Grid item xs={5} md={3} lg={2}>
              <CustomButton
                text={"Get Started"}
                styleHover={"#0d47a1"}
                styleBackground={"#1565c0"}
              />
            </Grid>
          </Grid>
          <Box component="img" src="/images/header-banner.png" width="100%" />
        </Grid>
        <Grid item style={{ backgroundColor: "#fafafa" }}>
          <Grid item xs={12}>
            <Typography
              variant={matches ? "h4" : "h3"}
              textAlign={"center"}
              fontWeight="bolder"
              color="#0d47a1"
              paddingTop={3}
            >
              Lets Get Started!
            </Typography>
          </Grid>
          {matches ? (
            <Grid item sx={{ padding: "0px 120px" }}>
              <FirstSectionWebsite
                videoData={videosData}
                activityData={activityData}
              />
              <SecondSectionWebsite videosData={videosData} />
            </Grid>
          ) : (
            <Grid item sx={{ padding: 2 }}>
              <VideoPeopleDocumentSectionMobile
                id={"videos"}
                videoData={videosData}
                title="Videos"
                anotherText="Browse alll videos"
                maxWidthCard={300}
                showViewers={true}
                showDividers={false}
              />
              <ActivitySection
                titleFontSize="25"
                activityData={activityData}
                firstGridPadding={5}
                imageWidth={100}
                variantText="h5"
                icon={
                  <KeyboardDoubleArrowRightIcon style={{ color: "#0d47a1" }} />
                }
              />
              <VideoPeopleDocumentSectionMobile
                id={"peoples"}
                videoData={videosData}
                title="People"
                anotherText="View All"
                maxWidthCard={200}
                showViewers={false}
                showDividers={false}
              />
              <ChannelSection
                icon={
                  <KeyboardDoubleArrowRightIcon style={{ color: "#0d47a1" }} />
                }
                firstGridPaddingTop={2}
                imageListCols={3}
                imageListGaps={5}
                imageListItemHeight="80px"
              />
              <VideoPeopleDocumentSectionMobile
                id={"documents"}
                videoData={videosData}
                title="Documents"
                anotherText="Browse all"
                maxWidthCard={200}
                showViewers={true}
                showDividers={true}
              />
            </Grid>
          )}
        </Grid>
      </Grid>
    </Fragment>
  );
}
