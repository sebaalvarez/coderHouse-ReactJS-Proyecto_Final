import "./itemDetail.css";
import sinStockImg from "../../assets/sinStock.png";
import ofertaImg from "../../assets/oferta.png";
import ItemCount from "../itemCount/ItemCount";
import { useState, useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

const ItemDetail = ({ data }) => {
  const [cantidad, setCantidad] = useState(0);
  const { addItem } = useContext(CartContext);
  return (
    <>
      <div className="itemDetail-container">
        <div className="itemDetail-img-div">
          <img className="itemDetail-img" src={data.img} alt={data.titulo} />
        </div>
        <div className="itemDetail-info">
          <h1>{data.titulo}</h1>
          <p className="itemDetail-desc">{data.desc}</p>

          <div className="itemDetail-precio-div">
            <p
              className={
                data.descuento > 0
                  ? "itemDetail-precio-tachado"
                  : "itemDetail-precio"
              }
            >
              ${data.precio}
            </p>

            <p
              className={
                data.descuento > 0
                  ? "itemDetail-precio-descuento"
                  : "itemDetail-precio-oculto"
              }
            >
              ${data.precio - data.descuento}
            </p>
          </div>

          <p className="card-prod-stock">Stock: {data.stock}</p>
          <div className="card-prod-compra-div">
            <ItemCount
              stock={data.stock}
              cant={cantidad}
              setCant={setCantidad}
            />
            {cantidad > 0 ? (
              <button
                className="card-prod-button"
                onClick={() => {
                  addItem(data, cantidad);
                  setCantidad(0);
                }}
              >
                Agregar al Carrito
              </button>
            ) : (
              <></>
            )}
          </div>

          {data.stock == 0 ? (
            <img
              className="itemDetail-img-agotado"
              src={sinStockImg}
              alt="imagen producto"
            />
          ) : data.descuento > 0 ? (
            <img
              className="itemDetail-img-oferta"
              src={ofertaImg}
              alt="imagen producto"
            />
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
};

export default ItemDetail;
