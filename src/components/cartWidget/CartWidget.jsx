import "./cartWidget.css";
import cart3 from "../../assets/cart3.svg";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

const CartWidget = () => {
  const { cart } = useContext(CartContext);
  let total = cart.reduce((acc, e) => {
    return e.cantidad + acc;
  }, 0);
  return (
    <>
      <div className="conteiner-cartWidget">
        {cart.length > 0 ? (
          <>
            <img src={cart3} alt="carrito" />
            <p className="cartWidget-mostrar-cantidad">{total}</p>
          </>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};
export default CartWidget;
