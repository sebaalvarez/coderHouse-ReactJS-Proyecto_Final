import "./sectionPorducts.css";
import TituloSection from "../tituloSection/TituloSection";
import ListCards from "../listCards/ListCards";

// renderiza la seccion de acuerdo a los productos enviados
const SectionPorducts = ({ productos, titulo }) => {
  return (
    <>
      {productos.length > 0 ? ( // renderiza para el caso que SI se encuentren productos
        <div className="container-categoria">
          <TituloSection nombre={titulo} />
          <ListCards products={productos} />
        </div>
      ) : (
        // renderiza para el caso que NO se encuentren productos
        <div className="container-categoria">
          <TituloSection nombre={titulo} />
          <p className="p-sin-productos">Productos no encontrados</p>
        </div>
      )}
    </>
  );
};
export default SectionPorducts;
