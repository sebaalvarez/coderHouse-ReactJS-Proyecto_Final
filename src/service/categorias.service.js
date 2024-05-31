import { CategoriaData } from "../data/categorias.mock";

export const getCategoriasAll = () => {
  return CategoriaData;
};

export const getCategoriaId = (id) => {
  let categoryId = CategoriaData.find((e) => e.id == id);
  return categoryId;
};
