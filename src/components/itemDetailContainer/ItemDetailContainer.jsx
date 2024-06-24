import "./itemDetailContainer.css";
import sinStockImg from "../../assets/sinStock.png";
import ofertaImg from "../../assets/oferta.png";
import loadImg from "../../assets/cargando.gif";
import { useParams } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import {
  getProductId,
  getProductsCategoria,
} from "../../service/products.service";
import ItemCount from "../itemCount/ItemCount";
import SectionProducts from "../sectionPorducts/SectionPorducts";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [cantidad, setCantidad] = useState(0);
  const [prodRelacionados, setProdRelacionados] = useState([]);
  const [cargando, setCargando] = useState(true);
  const { addItem } = useContext(CartContext);

  useEffect(() => {
    const actualizaInformacion = async () => {
      let a = await getProductId(id);
      setData(a);
      setProdRelacionados(await getProductsCategoria(a.categoria));
      setCargando(false);
    };

    actualizaInformacion();
  }, [id]);

  return (
    <>
      {cargando ? (
        <div className="div-cargando">
          <img src={loadImg} alt="imagen cargando" />
        </div>
      ) : data == undefined ? (
        <div className="ItemDetail-Container">
          <h1>Producto No Encontrado</h1>
        </div>
      ) : (
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
          <SectionProducts
            titulo="Productos Relacionados"
            productos={prodRelacionados}
          />
        </>
      )}
    </>
  );
};

export default ItemDetailContainer;
