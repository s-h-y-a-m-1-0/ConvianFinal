import { Box, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import Navbar from "../../components/navbar";

import "./styles.css";

function Account() {
  return (
    <div>
      <Navbar />
      <Grid container component="main" sx={{ height: "100vh" }}>
        <Grid item md={12}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
            style={{ backgroundColor: "#0d3f6b" }}
          >
            <Paper
              elevation={12}
              style={{
                padding: 15,
                height: "50vh",
                width: "100%",
                backgroundColor: "#0d3f6b",
              }}
            >
              <Grid container alignItems="center" spacing={2}>
                <Grid item>
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
                    alt="profile"
                    className="profileAvatarAccount"
                  />
                </Grid>
                <Grid item>
                  <Typography variant="h3">My Account</Typography>
                  <Typography variant="p">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
          </Box>
          <Box
            sx={{
              display: "inline",
              flexDirection: "column",
              alignItems: "center",
            }}
            style={{ backgroundColor: "#0d3f6b" }}
          >
            <Paper
              elevation={0}
              style={{
                padding: 15,
                height: "30vh",
                width: "100%",
              }}
            >
              <h3>Pending Forms:</h3>
              <p></p>
            </Paper>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}

export default Account;
