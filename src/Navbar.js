import React from "react";
import AppBar from "@mui/material/AppBar";
import { Button, Toolbar, Typography } from "@mui/material";
import './NavbarStyle.css';
function Navbar() {
  return (
    <div>
      <AppBar style={{backgroundColor:"#1284EB"}}>
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: "8" }}>
            {/* <i style={{ fontWeight: "bolder", }}>Adespresso</i> */}
            <img src="Aed-removebg-preview.png" alt="" style={{width:"20vw"}}/>
          </Typography>

          <div
            classname="buttons_container"
            style={{
              flexGrow: "1",
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <Button
              color="inherit"
              variant="outlined"
              style={{ fontSize: "1.5vw" }}
            >
              Signup
            </Button>
            <Button
              color="success"
              variant="contained"
              sx={{ fontSize: "1.5vw"}}
            >
              Login
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;
