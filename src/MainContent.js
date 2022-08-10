import React from "react";
import { Typography, Box, Button } from "@mui/material";
import "./MainContent.css";
function MainContent() {
  return (
    <div style={{ marginTop: "65px" }}>
      <div
        style={{ display: "grid", placeItems: "center", marginTop: "150px" }}
      >
        <Box
          sx={{
            // border: "1px solid black",
            textAlign: "center",
            width: "60vw",
            marginBottom: "30px",
          }}
        >
          <Typography
            variant="text"
            sx={{ fontWeight: "bold", fontSize: "4.5vw" ,color:"gray"}}
          >
            Pinpoint Your Ideal Client
          </Typography>
        </Box>
        <Box
          sx={{
            textAlign: "center",
            width: "60vw",
            marginBottom: "30px",
            fontSize: "2vw",
          }}
        >
          <Typography variant="text" style={{color:"gray"}}>
            Find the right audience for your Facebook, Instagram, AND Google ads
            with AdEspresso’s split testing and optimization. Claim your free
            14-day trial of AdEspresso now.
          </Typography>
        </Box>
      </div>
      <div style={{ display: "flex" }}>
        {" "}
        <div style={{ flexGrow: "1", textAlign: "end" }}>
          <Button
            variant="contained"
            color="success"
            sx={{ width: "30vw", height: "5vw", fontSize: "1.5vw" }}
          >
            Start your Free trial Now
          </Button>
        </div>
        <div className="logo_joker" style={{ flexGrow: "0.5" }}>
          <img
            src="joker.svg"
            alt="joker"
          />
        </div>
      </div>
      <div
        className="main_bottom_container"
        style={{ backgroundColor: "#264792", border: "2px solid gray" }}
      >
        <div style={{ display: "flex" }}>
          <div className="bottom_container">
            <div className="circle">
              <i class="fa-solid fa-book"></i>
            </div>
            <h4 className="bottom_container_heading">Video Courses</h4>
            <p className="bottom_container_para">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer
            </p>
          </div>
          <div className="bottom_container">
            <div className="circle">
              <i class="fa-solid fa-book"></i>
            </div>
            <h4 className="bottom_container_heading">Video Courses</h4>
            <p className="bottom_container_para">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer
            </p>
          </div>
          <div className="bottom_container">
            <div className="circle">
              <i class="fa-solid fa-book"></i>
            </div>
            <h4 className="bottom_container_heading">Video Courses</h4>
            <p className="bottom_container_para">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer
            </p>
          </div>
          <div className="bottom_container">
            <div className="circle">
              <i class="fa-solid fa-book"></i>
            </div>
            <h4 className="bottom_container_heading">Video Courses</h4>
            <p className="bottom_container_para">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainContent;
