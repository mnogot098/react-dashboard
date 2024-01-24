import React from "react";
import "./mainDashboard.css";
import Cards from "../Cards/Cards";
import Table from "../table/Table";

const MainDashboard = () => {
  return (
    <div className="MainDash">
      <h1>Dashboard</h1>
      <Cards />
      <Table />
    </div>
  );
};

export default MainDashboard;
