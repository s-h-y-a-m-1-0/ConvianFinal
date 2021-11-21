import {
  Button,
  Box,
  Grid,
  Paper,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import Navbar from "../../components/navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  let navigate = useNavigate();

  const paperStyle = {
    padding: 15,
    height: "30vh",
    width: "80%",
    marginLeft: "40%",
    marginRight: "25%",
    margin: "350px auto",
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    const { data } = await axios.post("http://localhost:9000/login", {
      srn: email,
      password: password,
    });

    if (data === null) {
      alert("invalid credentials");
    } else {
      localStorage.setItem("userDetails", JSON.stringify(data));
      navigate("/");
    }
  };

  const reloadPage = () => {
    window.location.reload();
  };

  return (
    <div>
      <Navbar />
      <Grid container component="main" sx={{ height: "100vh" }}>
        <Grid item xs={false} md={6}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
            style={{ backgroundColor: "#c05959" }}
          >
            <Paper elevation={10} style={paperStyle}>
              <Grid>
                <h2>Sign In</h2>
                <TextField
                  label="SRN/EMP ID"
                  variant="standard"
                  placeholder="SRN/EMP ID"
                  name="SRN"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  fullWidth
                  required
                />
                <TextField
                  type="password"
                  variant="standard"
                  label="Password"
                  name="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  fullWidth
                  required
                />
              </Grid>
              <Box mt={3}>
                <Button
                  type="submit"
                  color="primary"
                  variant="contained"
                  fullWidth
                  onClick={login}
                >
                  Sign In
                </Button>
              </Box>
              <Typography>
                <Link href="#">Forgot Password?</Link>
              </Typography>
            </Paper>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} component={Paper} elevation={0} square>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Paper
              elevation={0}
              style={{
                padding: 15,
                height: "15vh",
                width: "60%",
                marginLeft: "40%",
                marginRight: "25%",
                margin: "350px auto",
              }}
            >
              <Button
                fullWidth
                variant="contained"
                sx={{ mt: 6, mb: 2 }}
                onClick={reloadPage}
              >
                {" "}
                Sign in as CR
              </Button>
              <Button
                fullWidth
                variant="contained"
                sx={{ mt: 2, mb: 2 }}
                onClick={reloadPage}
              >
                {" "}
                Sign in as teacher
              </Button>
            </Paper>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}

export default Login;
