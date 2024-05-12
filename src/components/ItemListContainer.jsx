import "./itemListContainer.css";
import SectionNovedades from "./SectionNovedades";

const ItemListContainer = ({ greeting }) => {
  return (
    <div className="itemListContainer">
      <h1 className="itemListContainer-h1">{greeting}</h1>
      <SectionNovedades />
    </div>
  );
};

export default ItemListContainer;
