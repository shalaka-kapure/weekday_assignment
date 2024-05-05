import React, { useState } from "react";
import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import HourglassBottomTwoToneIcon from "@mui/icons-material/HourglassBottomTwoTone";
import BoltIcon from "@mui/icons-material/Bolt";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import CheckBoxIcon from "@mui/icons-material/CheckBox";

function CardComponent() {
  const [expanded, setExpanded] = useState(false);

  const toggleExpansion = () => {
    setExpanded(!expanded);
  };
  return (
    <Box
      sx={{
        minWidth: 275,
      }}
    >
      <Card
        variant="outlined"
        sx={{
          borderRadius: "20px !important",
          padding: "15px 5px 10px 10px!important",
          maxWidth: "360px",
        }}
      >
        <Box
          sx={{
            fontSize: 14,
            padding: "4px 6px",
            display: "flex",
            alignItems: "center",
            width: "170px",
            boxShadow: "rgba(6, 6, 6, 0.05) 0px 2px 6px 0px",
            borderRadius: "10px",
            border: "1px solid rgb(230, 230, 230)",
          }}
          color="text.secondary"
          gutterBottom
        >
          <HourglassBottomTwoToneIcon style={{ color: "#93D2FF" }} /> Posted 10
          days ago
        </Box>
        <CardContent>
          <Box style={{ display: "flex", gap: "0.5rem" }}>
            <img
              src="https://storage.googleapis.com/weekday-assets/airtableAttachment_1713271734116_1ci60.png"
              alt="logo"
              className="logo"
            />
            <div>
              <div className="info-container">
                <h3>DeGenerous</h3>
                <h2>Frontend Engineer</h2>
              </div>
              <p className="card-location">India</p>
            </div>
          </Box>
          <Typography
            sx={{
              fontWeight: 400,
              fontSize: "14px !important",
              margin: "8px 0 !important",
              fontFamily: "Lexend, sans-serif",
              display: "flex",
              justifyContent: "flex-start",
              gap: "5px",
            }}
            color="rgb(77, 89, 106)"
          >
            Estimated Salary: &#8377; 10-12 LPA{" "}
            <CheckBoxIcon style={{ color: "#01BD0D" }} />
          </Typography>
          <Box style={{ height: expanded ? "auto" : "235px" }}>
            <Typography
              sx={{ fontWeight: 500, fontFamily: "Lexend, sans-serif" }}
            >
              {" "}
              About Company:
            </Typography>
            <Box
              sx={{
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: expanded ? "normal" : "wrap",
                height: expanded ? "auto" : "180px",
                position: "relative",
              }}
            >
              This is a sample job and you must have displayed it to understand
              that its not just some random lorem ipsum text but something which
              was manually written. Oh well, if random text is what you were
              looking for then here it is: Lorem Ipsum is simply dummy text of
              the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to make a
              type specimen book. It has survived not only five centuries, but
              also the leap into electronic typesetting, remaining essentially
              unchanged. It was popularised in the 1960s with the release of
              Letraset sheets containing Lorem Ipsum passages and now in this
              assignment.
              {!expanded && (
                <Box
                  sx={{
                    position: "absolute",
                    bottom: "0",
                    right: "0",
                    left: "0",
                    height: "20px",
                    background:
                      "linear-gradient(rgba(255, 255, 255, 0), white)",
                  }}
                />
              )}
            </Box>
            {expanded ? (
              <Button
                onClick={toggleExpansion}
                sx={{
                  marginTop: "5px",
                  textTransform: "none",
                  width: "100%",
                }}
              >
                Show less
              </Button>
            ) : (
              <Button
                onClick={toggleExpansion}
                sx={{
                  marginTop: "5px",
                  textTransform: "none",
                  width: "100%",
                }}
              >
                View job
              </Button>
            )}
          </Box>
          <div className="info-container" style={{ margin: "10px 0" }}>
            <h3>Minimum Experience</h3>
            <h2 className="card-location">1 years</h2>
          </div>
        </CardContent>
        <CardActions>
          <ButtonGroup
            orientation="vertical"
            aria-label="Vertical button group"
            variant="contained"
            sx={{ borderRadius: "0", boxShadow: "none", width: "96%" }}
          >
            <Button
              sx={{
                marginBottom: "10px",
                backgroundColor: "rgb(85, 239, 196)",
                color: "rgb(0, 0, 0)",
                fontWeight: "500!important",
                padding: "8px 18px",
                borderRadius: "8px!important",
                margin: "5px 0",
                textTransform: "none",
                width: "100%",
              }}
            >
              <BoltIcon style={{ color: "#FF822D" }} /> Easy Apply
            </Button>
            <Button
              sx={{
                marginBottom: "10px",
                color: "white",
                fontWeight: "500!important",
                padding: "8px 18px",
                borderRadius: "8px!important",
                margin: "5px 0",
                textTransform: "none",
                width: "100%",
                gap:"5px"
              }}
            >
              <Stack direction="row">
                <Avatar alt="Remy Sharp" src="/assests/3.jpg" sx={{ filter: "blur(2px)" }}  />
                <Avatar alt="Travis Howard" src="/assests/2.jpg" sx={{ filter: "blur(2px)" }} />
              </Stack>
              Unlock referrals asks
            </Button>
          </ButtonGroup>
        </CardActions>
      </Card>
    </Box>
  );
}

export default CardComponent;
