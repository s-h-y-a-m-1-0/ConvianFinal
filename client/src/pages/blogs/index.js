import React from "react";
import Navbar from "../../components/navbar";
import { Link } from "react-router-dom";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";

import Card from "../../components/card-blog";
import "./styles.css";

const Blogs = () => {
  return (
    <>
      <Navbar />
      <div className="fabContainer">
        <Link to="/addBlog">
          <Fab color="primary" aria-label="add">
            <AddIcon />
          </Fab>
        </Link>
      </div>
      <div className="container">
        <p className="requestsTitle">View Blogs,</p>
        <div className="cardContainer">
          <Card />
          <Card />
          <Card />
        </div>
        <div className="cardContainer">
          <Card />
          <Card />
          <Card />
        </div>
        <div className="cardContainer">
          <Card />
          <Card />
          <Card />
        </div>
        <div className="cardContainer">
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </>
  );
};

export default Blogs;
