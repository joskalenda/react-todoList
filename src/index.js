// import react from "react";
import React from "react";
import reactDom from "react-dom";
import TdodoContainer from "./components/TodoContainer";

const ROOT = document.getElementById("root")
reactDom.render(
  <React.StrictMode>
    <TdodoContainer/>
  </React.StrictMode>,
  ROOT
  )