import React, { useState, useEffect } from "react";
import Navbar from "../../components/navbar";

import Card from "../../components/card";
import "./styles.css";

const Home = () => {
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    setUserDetails(JSON.parse(localStorage.getItem("userDetails")));
  }, [localStorage, userDetails]);

  return (
    <>
      <Navbar />
      <div className="welcomeContainer">
        <p className="welcomeText">
          Hello, {userDetails ? userDetails.name : "Name"}
        </p>
      </div>
      <p className="requestsTitle">Current Requests,</p>
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
    </>
  );
};

export default Home;
