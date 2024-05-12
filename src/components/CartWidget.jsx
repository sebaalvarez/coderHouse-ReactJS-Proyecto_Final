import cart3 from "../assets/cart3.svg";
import "./cartWidget.css";

const CartWidget = ({ cant }) => {
  return (
    <>
      <div className="conteiner-cartWidget">
        <img src={cart3} alt="carrito" />
        <p>{cant}</p>
      </div>
    </>
  );
};
export default CartWidget;
