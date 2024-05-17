import "./SectionPorCategoria.css";
import TituloSection from "../tituloSection/TituloSection";
import ListCards from "../listCards/ListCards";
import { ProductData } from "../../data/productos";

// renderiza la seccion de la categoria enviada
const SectionPorCategoria = ({ titulo, categoria }) => {
  // filtro los productos de acuerdo a la categoria enviada
  const prod = ProductData.filter((e) => e.categoria.includes(categoria));

  /*
AQUI VA LA LOGICA PARA MOSTRAR CARGANDO HASTA QUE SE OBTIENE LA INFORMACION




*/

  return (
    <>
      {prod.length > 0 ? (
        // renderiza para el caso que SI se encuentren productos en la categoria
        <div className="container-categoria">
          <TituloSection nombre={titulo} />
          <ListCards products={prod} />
        </div>
      ) : (
        // renderiza para el caso que NO se encuentren productos en la categoria
        <div className="container-categoria">
          <TituloSection nombre={titulo} />
          <p className="p-sin-productos">Productos no encontrados</p>
        </div>
      )}
    </>
  );
};
export default SectionPorCategoria;
