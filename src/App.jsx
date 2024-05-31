import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/navBar/NavBar";
import ItemListContainer from "./components/itemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/itemDetailContainer/ItemDetailContainer";
import Cart from "./components/cart/Cart";
import NoEncontrado from "./components/noEncontrado/NoEncontrado";
import "../public/css/style.css";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

let mensaje = "Bienvenido a Bebidas OnLine visitante";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <NavBar nomMarca="Bebidas OnLine" />
      <Routes>
        <Route
          exact
          path="/"
          element={<ItemListContainer greeting={mensaje} />}
        />
        <Route
          exact
          path="/category/:id"
          element={<ItemListContainer greeting={mensaje} />}
        />
        <Route exact path="/item/:id" element={<ItemDetailContainer />} />
        <Route exact path="/carrito" element={<Cart />} />
        <Route path="/*" element={<NoEncontrado />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
