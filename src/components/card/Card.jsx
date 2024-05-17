import PropTypes from "prop-types";
import "./card.css";

const Card = ({ img, titulo, precio, desc }) => {
  return (
    <>
      <div className="card">
        <img className="card-img" src={img} alt="imagen producto" />
        <h3 className="card-titulo">{titulo}</h3>
        <p className="card-precio">{precio}</p>
        <p className="card-desc">{desc}</p>
        <button className="card-button">Agregar al Carrito</button>
      </div>
    </>
  );
};

Card.propType = {
  titulo: PropTypes.string.isRequired,
};

export default Card;
