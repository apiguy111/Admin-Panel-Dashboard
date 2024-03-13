import React from "react";
import Sidebar from "./components/sidebar/Sidebar";
import Container from "./components/container/Container";
import "./homescreen.css";

function HomeScreen() {
  return (
    <div className="homeContainer">
      <Sidebar />
      <Container />
    </div>
  );
}

export default HomeScreen;
