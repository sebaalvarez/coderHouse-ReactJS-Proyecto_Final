import TituloSection from "./TituloSection";
import ListCards from "./ListCards";
import "./SectionPorCategoria.css";

const SectionPorCategoria = ({ titulo, categoria }) => {
  return (
    <div className="container-Novedades">
      <TituloSection nombre={titulo} />
      <ListCards categoria={categoria} />
    </div>
  );
};
export default SectionPorCategoria;
