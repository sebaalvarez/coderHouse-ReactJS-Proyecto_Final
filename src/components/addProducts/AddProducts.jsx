import "./addProducts.css";
import { db } from "../../firebaseConfig";
import { addDoc, collection } from "firebase/firestore";
// import { ProductData } from "../../data/productos.mock";
import { CategoriaData } from "../../data/categorias.mock";

const AddProducts = () => {
  const handleClickDatos = async () => {
    try {
      console.log("try");

      // ProductData.forEach((element) => {
      //   addDoc(collection(db, "products"), element);
      CategoriaData.forEach((element) => {
        addDoc(collection(db, "category"), element);
        // console.log(element);
      });
      alert("se han subido los datos");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <button onClick={handleClickDatos} className="addProducts-container">
        Cargar todos los datos
      </button>
    </>
  );
};

export default AddProducts;
