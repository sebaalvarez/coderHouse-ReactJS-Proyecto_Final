import { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (product, cantidad) => {
    isInCart(product.id)
      ? alert("El item ya existe en el carrito")
      : setCart([
          {
            id: product.id,
            img: product.img,
            titulo: product.titulo,
            cantidad: cantidad,
            precio: Number(product.precio) - Number(product.descuento),
          },
          ...cart,
        ]);
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
