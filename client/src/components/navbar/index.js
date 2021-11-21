import { AppBar, Typography, Toolbar } from "@mui/material";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const Nav = () => {
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    setUserDetails(JSON.parse(localStorage.getItem("userDetails")));
  }, [localStorage, userDetails]);

  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography>
          <Link style={{ textDecoration: "none" }} to="/">
            <p className="logoText" to="./home">
              Convian
            </p>
          </Link>
        </Typography>
        <div className="right">
          <Link
            style={{ textDecoration: "none" }}
            to={
              userDetails
                ? userDetails.user_type === "Student"
                  ? "/addForm"
                  : "/forms"
                : "/"
            }
          >
            <p className="navbarLink">Forms</p>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/blogs">
            <p className="navbarLink">Blogs</p>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/list">
            <p className="navbarLink">List</p>
          </Link>
          <Link style={{ marginTop: 13 }} to="/account">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
              alt="profile"
              className="profileAvatar"
            />
          </Link>
        </div>
      </Toolbar>
    </AppBar>
  );
};
export default Nav;
