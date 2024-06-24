// import { ProductData } from "../data/productos.mock";
import { db } from "../firebaseConfig";
import { getDocs, collection } from "firebase/firestore";

const fetchData = async () => {
  try {
    //el segundo argumento de la función collection es el nombre de nuestra colección
    const querySnapshot = await getDocs(collection(db, "products"));

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

export const getProductsAll = async () => {
  return await fetchData();
};

export const getProductId = async (id) => {
  let ProductData = await fetchData();
  let productId = ProductData.find((e) => e.id == id);
  return productId;
};

export const getProductsCategoria = async (categoria) => {
  let ProductData = await fetchData();
  let products = ProductData.filter((e) => e.categoria.includes(categoria[0]));
  return products;
};

export const getProductsCategoriaId = async (categoria) => {
  let ProductData = await fetchData();
  let products = ProductData.filter((e) => e.categoria.includes(categoria));
  return products;
};
