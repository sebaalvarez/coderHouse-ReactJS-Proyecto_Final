import "./itemDetailContainer.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  getProductId,
  getProductsCategoria,
} from "../../service/products.service";
import loadImg from "../../assets/cargando.gif";
import sinStockImg from "../../assets/sinStock.png";
import ofertaImg from "../../assets/oferta.png";
import ItemCount from "../itemCount/ItemCount";
import SectionProducts from "../sectionPorducts/SectionPorducts";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [cargando, setCargando] = useState(true);
  const prod = getProductId(id);

  useEffect(() => {
    new Promise((resolve) => setInterval(() => resolve(prod), 1000)).then(
      (res) => {
        setData(res);
        setCargando(false);
      }
    );
  }, [id]);

  return (
    <>
      {cargando ? (
        <div className="div-cargando">
          <img src={loadImg} alt="imagen cargando" />
        </div>
      ) : data != undefined ? (
        <>
          <div className="itemDetail-container">
            <div className="itemDetail-img-div">
              <img
                className="itemDetail-img"
                src={data.img}
                alt={data.titulo}
              />
            </div>
            <div className="itemDetail-info">
              <h1>{data.titulo}</h1>
              <p className="itemDetail-desc">{data.desc}</p>

              <div className="itemDetail-precio-div">
                <p
                  className={
                    data.precio > data.descuento
                      ? "itemDetail-precio-tachado"
                      : "itemDetail-precio"
                  }
                >
                  {data.precio}
                </p>

                <p
                  className={
                    data.precio > data.descuento
                      ? "itemDetail-precio-descuento"
                      : "itemDetail-precio-oculto"
                  }
                >
                  {data.descuento}
                </p>
              </div>

              <p className="card-prod-stock">Stock: {data.stock}</p>
              <ItemCount stock={data.stock} inicial="0" />
              <button className="card-prod-button">Agregar al Carrito</button>
              {data.stock == 0 ? (
                <img
                  className="itemDetail-img-agotado"
                  src={sinStockImg}
                  alt="imagen producto"
                />
              ) : data.precio > data.descuento ? (
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
          <SectionProducts
            titulo="Productos Relacionados"
            productos={getProductsCategoria(data.categoria)}
          />
        </>
      ) : (
        <div className="ItemDetail-Container">
          <h1>Producto No Encontrado</h1>
        </div>
      )}
    </>
  );
};

export default ItemDetailContainer;
