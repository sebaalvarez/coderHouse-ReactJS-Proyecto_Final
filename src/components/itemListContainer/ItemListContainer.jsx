import "./itemListContainer.css";
import SectionPorCategoria from "../sectionPorCategoria/SectionPorCategoria";

const ItemListContainer = ({ greeting }) => {
  return (
    <div className="itemListContainer">
      <h1 className="itemListContainer-h1">{greeting}</h1>
      <SectionPorCategoria
        titulo="Bebidas Alcoholicas"
        categoria="bebida alcoholica"
      />
      <SectionPorCategoria
        titulo="Bebidas sin Alcohol"
        categoria="bebida sin alcohol"
      />
      <SectionPorCategoria
        titulo="Bebidas Energizantes"
        categoria="bebida energizante"
      />
    </div>
  );
};

export default ItemListContainer;
