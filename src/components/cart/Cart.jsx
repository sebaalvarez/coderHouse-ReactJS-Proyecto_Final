import "./cart.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import Checkout from "../checkout/Checkout";

const Cart = () => {
  const { cart, clear, removeItem } = useContext(CartContext);

  let total = cart.reduce((acc, e) => {
    return e.cantidad * e.precio + acc;
  }, 0);

  return (
    <>
      <div className="cart-container">
        <h1>Mi Carrito</h1>
        {cart.length == 0 ? (
          <>
            <h3>No existen productos agregados</h3>
            <Link to={`/`} className="card-prod-link">
              <button className="card-prod-button">Seguir Comprando</button>
            </Link>
          </>
        ) : (
          <>
            <table className="cart-table">
              <thead>
                <tr>
                  <td></td>
                  <td>Nombre</td>
                  <td>cantidad</td>
                  <td>precio</td>
                  <td>Subtotal</td>
                  <td>Quitar</td>
                </tr>
              </thead>
              <tbody>
                {cart.map((e) => (
                  <tr key={e.id}>
                    <td>
                      <img
                        className="cart-prod-img"
                        src={e.img}
                        alt={e.titulo}
                      />
                    </td>
                    <td>{e.titulo}</td>
                    <td>{e.cantidad}</td>
                    <td>{e.precio}</td>
                    <td>{e.cantidad * e.precio}</td>
                    <td>
                      <button
                        className="cart-prod-button "
                        id={e.id}
                        onClick={(ev) => {
                          removeItem(ev.target.id);
                        }}
                      >
                        quitar
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>Total</td>
                  <td>{total}</td>
                  <td></td>
                </tr>
              </tfoot>
            </table>
            <div className="cart-btn">
              <button
                className="cart-prod-button "
                onClick={() => {
                  clear();
                }}
              >
                Vaciar Carrito
              </button>
            </div>
            <Checkout />
          </>
        )}
      </div>
    </>
  );
};

export default Cart;
