import PropTypes from "prop-types";
import "./card.css";
import sinStockImg from "../../assets/sinStock.png";
import ofertaImg from "../../assets/oferta.png";
import ItemCount from "../itemCount/ItemCount";
import { Link } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { CartContext } from "../../contexts/CartContext";

const Card = ({ product }) => {
  const [cantidad, setCantidad] = useState(0);
  const { addItem } = useContext(CartContext);

  useEffect(() => {}, [cantidad]);

  const oferta = product.descuento > 0 ? true : false;

  return (
    <>
      <div className="card-prod">
        <div className="card-prod-div-info">
          <div className="card-prod-div-agotado">
            {product.stock == 0 ? (
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
          <Link to={`/item/${product.id}`} className="card-prod-link">
            <img
              className="card-prod-img"
              src={product.img}
              alt={product.titulo}
            />
            <div className="card-prod-titulo">{product.titulo}</div>
          </Link>
          <div className="card-prod-precio-div">
            <p
              className={
                oferta ? "card-prod-precio-tachado" : "card-prod-precio"
              }
            >
              ${product.precio}
            </p>
            <p
              className={
                oferta
                  ? "card-prod-precio-descuento"
                  : "card-prod-precio-oculto"
              }
            >
              ${product.precio - product.descuento}
            </p>
          </div>
          <p className="card-prod-desc">{product.desc}</p>
        </div>

        <div className="card-prod-div-compra">
          <p className="card-prod-stock">Stock: {product.stock}</p>
          <ItemCount
            stock={product.stock}
            cant={cantidad}
            setCant={setCantidad}
          />
          {cantidad > 0 ? (
            <button
              className="card-prod-button"
              onClick={() => {
                addItem(product, cantidad);
                setCantidad(0);
              }}
            >
              Agregar al Carrito
            </button>
          ) : (
            <Link to={`/item/${product.id}`} className="card-prod-link">
              <button className="card-prod-button">Ver detalle</button>
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

Card.propType = {
  titulo: PropTypes.string.isRequired,
};

export default Card;
