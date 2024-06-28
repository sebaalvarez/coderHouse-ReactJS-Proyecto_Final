import "./itemDetailContainer.css";

import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  getProductId,
  getProductsCategoria,
} from "../../service/products.service";
import SectionProducts from "../sectionPorducts/SectionPorducts";
import ItemDetail from "../itemDetail/ItemDetail";
import Cargando from "../cargando/Cargando";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);

  const [prodRelacionados, setProdRelacionados] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const actualizaInformacion = async () => {
      let a = await getProductId(id);
      setData(a);
      setCargando(false);
      a && setProdRelacionados(await getProductsCategoria(a.categoria));
    };

    actualizaInformacion();
  }, [id]);

  return (
    <>
      {cargando ? (
        <Cargando />
      ) : data == undefined ? (
        <>
          <div className="itemDetailContainer-container ">
            <p className="p-sin-productos">Productos no encontrados</p>
          </div>
        </>
      ) : (
        <>
          <ItemDetail data={data} />

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
