import {
  Card,
  CardActionArea,
  CardMedia,
  Grid,
  IconButton,
  Link,
  Typography,
} from "@mui/material";
import { GetActivityHeaderSectionResponse } from "@/pages/api/get-activity-section";
import ChatIcon from "@mui/icons-material/Chat";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";

type Props = {
  activityData: GetActivityHeaderSectionResponse[];
  firstGridPadding: number;
  imageWidth: number;
  icon?: any;
  titleFontSize: string;
  variantText: any;
};

export default function ActivitySection(props: Props) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div id="activities">
      <Grid container item xs={12} paddingTop={props.firstGridPadding}>
        <Grid container item xs={6}>
          <Typography
            fontSize={props.titleFontSize}
            fontWeight="bold"
            flexGrow={1}
            color="#0d47a1"
          >
            Activity
          </Typography>
        </Grid>
        <Grid container item xs={6} alignItems={"center"}>
          <Link
            href={`#`}
            style={{
              flexGrow: 1,
              textDecoration: "none",
              fontWeight: "bold",
              color: "#0d47a1",
            }}
          >
            View Timeline
          </Link>
          {props.icon}
        </Grid>
        <Grid
          item
          xs={12}
          style={{
            overflow: "auto",
            height: "auto",
            maxHeight: "63.5vh",
            paddingTop: 10,
          }}
        >
          {props.activityData.map((item, key) => (
            <Card
              key={key}
              sx={{
                display: "flex",
                marginBottom: 2,
                background: "#f5f5f5",
                ":hover": { boxShadow: 10 },
              }}
              onMouseEnter={() => {
                setHoveredIndex(key);
              }}
              onMouseLeave={() => {
                setHoveredIndex(null);
              }}
            >
              <CardMedia
                component="img"
                sx={{ width: props.imageWidth, height: "auto", padding: 1 }}
                image="https://mui.com/static/images/cards/paella.jpg"
                alt="Live from space album cover"
              />
              <CardActionArea>
                <Grid item xs={11}>
                  <Typography
                    component="div"
                    fontWeight="bolder"
                    variant={props.variantText}
                  >
                    {item.user.username}{" "}
                    <span
                      style={{
                        fontVariant: "normal",
                        fontWeight: "normal",
                        fontSize: "12px",
                      }}
                    >
                      commented
                    </span>
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary" noWrap>
                    {item.body}
                  </Typography>
                  <Grid item container paddingTop={1}>
                    <ChatIcon />
                    <Typography alignItems={"center"}>1 day ago</Typography>
                  </Grid>
                </Grid>
              </CardActionArea>
              {hoveredIndex === key && (
                <Grid item xs={1} justifyContent="end" textAlign="end">
                  <IconButton
                    aria-label="play/pause"
                    sx={{ justifyContent: "end" }}
                  >
                    <CloseIcon
                      sx={{ height: 15, width: 15, textAlign: "end" }}
                    />
                  </IconButton>
                </Grid>
              )}
            </Card>
          ))}
        </Grid>
      </Grid>
    </div>
  );
}
