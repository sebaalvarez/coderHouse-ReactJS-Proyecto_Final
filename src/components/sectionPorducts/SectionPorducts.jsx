import "./sectionPorducts.css";
import TituloSection from "../tituloSection/TituloSection";
import ListCards from "../listCards/ListCards";

// renderiza la seccion de acuerdo a los productos enviados
const SectionPorducts = ({ productos, titulo }) => {
  return (
    <div className="container-categoria">
      <TituloSection nombre={titulo} />
      {
        // renderiza para el caso que SI se encuentren productos
        productos.length > 0 ? (
          <ListCards products={productos} />
        ) : (
          <p className="p-sin-productos">Productos no encontrados</p>
        )
      }
    </div>
  );
};
export default SectionPorducts;
