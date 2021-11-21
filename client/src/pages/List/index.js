import React from "react";
import Navbar from "../../components/navbar";

import Card from "../../components/card-list";
import "./styles.css";

const List = () => {
  return (
    <>
      <Navbar />
      <p className="requestsTitle">List,</p>
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

export default List;
