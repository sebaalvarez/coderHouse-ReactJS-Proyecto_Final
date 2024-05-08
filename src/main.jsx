import React from "react";
import ReactDOM from "react-dom/client";
import Titulo from "./components/Titulo";
import Card from "./components/Card";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Titulo />
    <Card />
    <Card />
    <Card />
    <Card />
  </React.StrictMode>
);
