import { createContext, useState } from "react";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const notify = (message, tipo) => {
    let color =
      tipo == "ok"
        ? "linear-gradient(90deg, #49bb08 100%, #6ed136 100%)"
        : "linear-gradient(90deg, rgb(245,5,5) 0%, rgb(190,40,1) 100%)";
    Toastify({
      text: message,
      duration: 3000,
      newWindow: true,
      gravity: "top",
      position: "right",
      stopOnFocus: true,
      style: {
        maxWidth: "400px",
        color: "white",
        background: color,
      },
    }).showToast();
  };

  const addCart = (product, cantidad) => {
    setCart([
      {
        id: product.id,
        img: product.img,
        titulo: product.titulo,
        cantidad: cantidad,
        precio: Number(product.precio) - Number(product.descuento),
      },
      ...cart,
    ]);
    notify("Se agregó el ítem al carrito", "ok");
  };

  const addItem = (product, cantidad) => {
    isInCart(product.id)
      ? notify("El ítem ya se encuentra agregado al carrito", "error")
      : addCart(product, cantidad);
  };

  const removeItem = (itemId) => {
    let newCart = cart.filter((e) => e.id != itemId);
    setCart(newCart);
  };

  const clear = () => {
    setCart([]);
  };

  const isInCart = (id) => {
    let encontro = cart.find((e) => e.id == id);
    return encontro != undefined ? true : false;
  };

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, clear }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
