import TituloSection from "./TituloSection";
import ListCards from "./ListCards";
import "./sectionNovedades.css";

const SectionNovedades = () => {
  return (
    <div className="container-Novedades">
      <TituloSection nombre="Novedades" />
      <ListCards />
    </div>
  );
};
export default SectionNovedades;
