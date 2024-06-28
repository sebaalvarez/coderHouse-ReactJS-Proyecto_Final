import "./checkout.css";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { db } from "../../firebaseConfig";
import { addDoc, collection } from "firebase/firestore";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

const Checkout = () => {
  const { cart, clear } = useContext(CartContext);

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

  const handdlerSubmit = (e) => {
    e.preventDefault();

    e.target.mail.value != e.target.mailRepeat.value
      ? diferenciaDeMail()
      : generarCompra(e);
  };

  const generarCompra = async (e) => {
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
      fecha: new Date(),
      estado: "generada",
      Nombre: nya.value,
      Telefono: tel.value,
      Mail: mail.value,
      Total: total,
      detail: detail,
    };

    const docRef = await addDoc(collection(db, "checkout"), order);

    notify(`Se realizó la compra, Nº de pedido ${docRef.id}`, "ok");
    clear();
  };

  const diferenciaDeMail = () => {
    notify("Los mails no coinciden", "error");
  };

  return (
    <>
      <form className="checkout-container" onSubmit={handdlerSubmit}>
        <h3>Datos Cliente</h3>
        <div className="checkout-fila1">
          <input
            type="text"
            required={true}
            name="nya"
            placeholder="Nombre y Apellido"
          />

          <input
            type="text"
            required={true}
            name="tel"
            placeholder="Teléfono"
          />
        </div>
        <div className="checkout-fila2">
          <input
            type="email"
            required={true}
            name="mail"
            placeholder="correo electrónico"
          />
          <input
            type="email"
            required={true}
            name="mailRepeat"
            placeholder="confirmar correo electrónico"
          />
        </div>
        <div>
          <button className="card-prod-button" type="submit">
            Realizar Compra
          </button>
        </div>
      </form>
    </>
  );
};

export default Checkout;
