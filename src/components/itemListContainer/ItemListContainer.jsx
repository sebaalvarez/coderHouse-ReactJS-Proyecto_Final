import "./itemListContainer.css";

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import SectionPorducts from "../sectionPorducts/SectionPorducts";
import Cargando from "../cargando/Cargando";
import {
  getProductsAll,
  getProductsCategoriaId,
} from "../../service/products.service";
import { getCategoriaId } from "../../service/categorias.service";

const ItemListContainer = ({ greeting }) => {
  const [data, setData] = useState(null);
  const [titulo, setTitulo] = useState("");
  const [cargando, setCargando] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const todosLosProductos = async () => {
      setTitulo("Todos los Productos");
      setData(await getProductsAll());
      setCargando(false);
    };

    const productosPorCategoria = async () => {
      let a = await getCategoriaId(id);
      setCargando(false);
      a && setTitulo(a.titulo);
      a && setData(await getProductsCategoriaId(a.nombre));
    };

    // Obtengo todos los productos o productos de una categoria especifica dependiendo si se pasa parametro o no
    id == undefined ? todosLosProductos() : productosPorCategoria();

    // coloco en el array el param para que se refresque el componente
  }, [id]);

  return (
    <>
      {cargando ? (
        <Cargando />
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
