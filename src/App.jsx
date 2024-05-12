import React from "react";
import ReactDOM from "react-dom/client";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NavBar nomMarca="Bebidas OnLine" />
    <ItemListContainer greeting="Bienvenido a Bebidas Online visitante" />
  </React.StrictMode>
);
