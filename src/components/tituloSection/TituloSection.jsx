import "./tituloSection.css";

const Titulo = ({ nombre }) => {
  return (
    <>
      <h1 className="titulo-home"> {nombre} </h1>
    </>
  );
};

export default Titulo;
