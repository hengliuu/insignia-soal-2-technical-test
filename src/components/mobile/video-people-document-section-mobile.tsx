import { GetVideoSectionResponse } from "@/pages/api/get-videos-section";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import Link from "next/link";
import React from "react";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

type Props = {
  videoData: GetVideoSectionResponse[];
  title: string;
  anotherText: string;
  showViewers: boolean;
  maxWidthCard: number;
  showDividers: boolean;
  id: string;
};

export default function VideoPeopleDocumentSectionMobile(props: Props) {
  return (
    <div id={props.id}>
      <Grid container item xs={12} paddingTop={3}>
        <Grid container item xs={6}>
          <Typography
            fontSize="20px"
            fontWeight="bold"
            flexGrow={1}
            color="#0d47a1"
          >
            {props.title}
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
            {props.anotherText}
          </Link>
          <KeyboardDoubleArrowRightIcon style={{ color: "#0d47a1" }} />
        </Grid>
        <Grid container item xs={12} sx={{ overflowX: "auto", paddingTop: 2 }}>
          <Grid sx={{ display: "flex", justifyContent: "center" }}>
            {props.videoData.map((item, key) => (
              <Card
                key={key}
                sx={{
                  maxWidth: props.maxWidthCard,
                  marginRight: 2,
                }}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={item.images[0]}
                    alt={item.images[0]}
                  />
                  <CardContent>
                    <Grid
                      item
                      sx={{
                        textOverflow: "ellipsis",
                        overflow: "hidden",
                        whiteSpace: "nowrap",
                      }}
                    >
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: "bolder",
                        }}
                      >
                        {item.description}
                      </Typography>
                    </Grid>
                    <Typography color="text.secondary">{item.title}</Typography>
                    {props.showDividers ? (
                      <Divider
                        sx={{
                          borderWidth: "1px",
                          borderColor: "black",
                          width: "20px",
                          marginTop: 1,
                          marginBottom: 1,
                        }}
                      />
                    ) : (
                      <span />
                    )}
                    {props.showViewers ? (
                      <Typography color="text.secondary">
                        {item.price}k views
                      </Typography>
                    ) : (
                      <span />
                    )}
                  </CardContent>
                </CardActionArea>
              </Card>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
