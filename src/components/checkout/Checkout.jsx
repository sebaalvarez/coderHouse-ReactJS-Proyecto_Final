import "./checkout.css";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { db } from "../../firebaseConfig";
import { addDoc, collection } from "firebase/firestore";

const Checkout = () => {
  const { cart, clear } = useContext(CartContext);

  const handdlerSubmit = (e) => {
    e.preventDefault();

    e.target.mail.value != e.target.mailRepeat.value ? error() : ok(e);
  };

  const ok = (e) => {
    let total = cart.reduce((acc, it) => {
      return it.cantidad * it.precio + acc;
    }, 0);

    const { nya, tel, mail } = e.target;

    let detail = cart.map((el) => ({
      id: el.id,
      titulo: el.titulo,
      cantidad: el.cantidad,
      precio: el.precio,
      subtotal: el.cantidad * el.precio,
    }));

    const order = {
      Nombre: nya.value,
      Telefono: tel.value,
      Mail: mail.value,
      Total: total,
      detail: detail,
    };

    addDoc(collection(db, "checkout"), order);

    clear();
  };

  const error = () => {
    alert("Error de mails");
  };

  return (
    <>
      <form className="checkout-container" onSubmit={handdlerSubmit}>
        <h3>Datos Cliente</h3>
        <div className="checkout-fila1">
          <input
            type="text"
            required="true"
            name="nya"
            placeholder="Nombre y Apellido"
          />

          <input
            type="text"
            required="true"
            name="tel"
            placeholder="Teléfono"
          />
        </div>
        <div className="checkout-fila2">
          <input
            type="email"
            required="true"
            name="mail"
            placeholder="correo electrónico"
          />
          <input
            type="email"
            required="true"
            name="mailRepeat"
            placeholder="confirmar correo electrónico"
          />
        </div>
        <div>
          <button className="card-prod-button" type="submit">
            Confirmar Compra
          </button>
        </div>
      </form>
    </>
  );
};

export default Checkout;
