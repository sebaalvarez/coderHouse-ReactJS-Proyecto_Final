import PropTypes from "prop-types";
import "./card.css";
import sinStockImg from "../../assets/sinStock.png";
import ofertaImg from "../../assets/oferta.png";
import ItemCount from "../itemCount/ItemCount";
import { Link } from "react-router-dom";

const Card = ({ id, img, titulo, precio, descuento, desc, stock }) => {
  const oferta = precio > descuento ? true : false;
  return (
    <>
      <div className="card-prod">
        <div className="card-prod-div-info">
          <div className="card-prod-div-agotado">
            {stock == 0 ? (
              <img
                className="card-prod-img-agotado"
                src={sinStockImg}
                alt="imagen sin stock"
              />
            ) : oferta ? (
              <img
                className="card-prod-img-oferta"
                src={ofertaImg}
                alt="imagen oferta"
              />
            ) : (
              <></>
            )}
          </div>
          <Link to={`/item/${id}`} className="card-prod-link">
            <img className="card-prod-img" src={img} alt={titulo} />
            <div className="card-prod-titulo">{titulo}</div>
          </Link>
          <div className="card-prod-precio-div">
            <p
              className={
                oferta ? "card-prod-precio-tachado" : "card-prod-precio"
              }
            >
              {precio}
            </p>
            <p
              className={
                oferta
                  ? "card-prod-precio-descuento"
                  : "card-prod-precio-oculto"
              }
            >
              {descuento}
            </p>
          </div>
          <p className="card-prod-desc">{desc}</p>
        </div>

        <div className="card-prod-div-compra">
          <p className="card-prod-stock">Stock: {stock}</p>
          <ItemCount stock={stock} inicial="0" />
          <button className="card-prod-button">Agregar al Carrito</button>
        </div>
      </div>
    </>
  );
};

Card.propType = {
  titulo: PropTypes.string.isRequired,
};

export default Card;
