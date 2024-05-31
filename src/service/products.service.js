import { ProductData } from "../data/productos.mock";

export const getProductsAll = () => {
  return ProductData;
};

export const getProductId = (id) => {
  let productId = ProductData.find((e) => e.id == id);
  return productId;
};

export const getProductsCategoria = (categoria) => {
  let products = ProductData.filter((e) => e.categoria.includes(categoria[0]));
  return products;
};

export const getProductsCategoriaId = (categoria) => {
  let products = ProductData.filter((e) => e.categoria.includes(categoria));
  return products;
};
