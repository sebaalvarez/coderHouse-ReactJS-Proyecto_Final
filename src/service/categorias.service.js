// import { CategoriaData } from "../data/categorias.mock";
import { db } from "../firebaseConfig";
import { getDocs, collection } from "firebase/firestore";

const fetchData = async () => {
  try {
    //el segundo argumento de la función collection es el nombre de nuestra colección
    const querySnapshot = await getDocs(collection(db, "category"));

    // para obtener los documentos (que son los datos que contiene la colección) debo mapearlos de la siguiente manera
    const obtenerDocumentos = querySnapshot.docs.map((element) => ({
      id: element.id,
      ...element.data(),
    }));
    return obtenerDocumentos;
  } catch (error) {
    console.log(error);
  }
};

export const getCategoriasAll = async () => {
  return await fetchData();
};

export const getCategoriaId = async (id) => {
  const CategoriaData = await fetchData();
  let categoryId = CategoriaData.find((e) => e.id == id);
  return categoryId;
};
