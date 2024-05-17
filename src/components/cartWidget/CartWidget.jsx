import "./cartWidget.css";
import cart3 from "../../assets/cart3.svg";

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
