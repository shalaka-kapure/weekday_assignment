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

function CardComponent({ job }) {
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
          boxShadow: "rgba(0, 0, 0, 0.25) 0px 1px 4px 0px !important"
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
        >
          <HourglassBottomTwoToneIcon style={{ color: "#93D2FF" }} /> Posted 10
          days ago
        </Box>
        <CardContent>
          <Box style={{ display: "flex", gap: "0.5rem" }}>
            <img src={job.logoUrl} alt="logo" className="logo" />
            <div>
              <div className="info-container">
                <h3>{job.companyName}</h3>
                <h2>{job.jobRole.charAt(0).toUpperCase() + job.jobRole.slice(1)}</h2>
              </div>
              <p className="card-location">{job.location.charAt(0).toUpperCase() + job.location.slice(1)}</p>
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
            Estimated Salary: {job.salaryCurrencyCode}  {job.minJdSalary !== null ? job.minJdSalary : 0} - {job.maxJdSalary !== null ? job.maxJdSalary : 0} 
            <CheckBoxIcon style={{ color: "#01BD0D" }} />
          </Typography>
          <Box style={{ height: expanded ? "auto" : "235px" }}>
            <Typography
              sx={{ fontWeight: 500, fontFamily: "Lexend, sans-serif", color:"rgba(0, 0, 0, 0.87)" }}
            >
              About Company:
            </Typography>
            <Box
              sx={{
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: expanded ? "normal" : "wrap",
                height: expanded ? "auto" : "180px",
                position: "relative",
                fontWeight:400
              }}
            >
              {job.jobDetailsFromCompany}
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
            <h2 className="card-location">{job.minExp!== null ? job.minExp : 0} years</h2>
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
              href={job.jdLink}
              target="_blank"
              rel="noopener noreferrer"
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
                gap: "5px",
              }}
              href={job.jdLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Stack direction="row">
                <Avatar
                  alt="Remy Sharp"
                  src="/assests/3.jpg"
                  sx={{ filter: "blur(2px)" }}
                />
                <Avatar
                  alt="Travis Howard"
                  src="/assests/2.jpg"
                  sx={{ filter: "blur(2px)" }}
                />
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
