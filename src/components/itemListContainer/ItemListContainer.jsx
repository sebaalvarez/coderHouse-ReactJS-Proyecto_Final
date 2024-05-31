import "./itemListContainer.css";
import SectionPorducts from "../sectionPorducts/SectionPorducts";
import {
  getProductsAll,
  getProductsCategoriaId,
} from "../../service/products.service";
import { getCategoriaId } from "../../service/categorias.service";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import loadImg from "../../assets/cargando.gif";

const ItemListContainer = ({ greeting }) => {
  const [data, setData] = useState(null);
  const [cargando, setCargando] = useState(true);
  const { id } = useParams();

  // Obtengo todos los productos o productos de una categoria especifica dependiendo si se pasa parametro o no
  const prod =
    id == undefined
      ? getProductsAll
      : getProductsCategoriaId(getCategoriaId(id).nombre);

  // Obtengo el nombre a mostrar si listo todos los productos o los especificos de una categoria
  const titulo =
    id == undefined ? "Todos los productos" : getCategoriaId(id).titulo;

  useEffect(() => {
    // simulo el delay de obtener los datos
    new Promise((resolve) => setInterval(() => resolve(prod), 500)).then(
      (res) => {
        setData(res);
        setCargando(false);
      }
    );
    // coloco en el array el param para que se refresque el componente
  }, [id]);

  return (
    <>
      {cargando ? (
        <div className="div-cargando">
          <img src={loadImg} alt="imagen cargando" />
        </div>
      ) : (
        <div className="itemListContainer">
          <h1 className="itemListContainer-h1">{greeting}</h1>
          <SectionPorducts productos={data} titulo={titulo} />
        </div>
      )}
    </>
  );
};

export default ItemListContainer;
