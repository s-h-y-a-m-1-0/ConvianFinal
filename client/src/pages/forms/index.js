import React from "react";
import Navbar from "../../components/navbar";

import Card from "../../components/card-full-width";
import "./styles.css";

const Home = () => {
  return (
    <>
      <Navbar />
      <p className="requestsTitle">Forms,</p>
      <div className="cardContainer">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </>
  );
};

export default Home;
