import Axios from "axios";

const baseURL = process.env.REACT_APP_BASE_URL;

export const fetchProdutosCurtidos = async (idCliente) => {
  try {
    const response = await Axios.get(
      `${baseURL}/produtos-curtidos/${idCliente}`
    );
    return response.data || [];
  } catch (error) {
    console.error("Erro ao buscar os produtos curtidos: ", error);
    throw error;
  }
};

export const adicionarProdutoCurtido = async (produtoData) => {
  try {
    const response = await Axios.post(
      `${baseURL}/produtos-curtidos/`,
      produtoData
    );
    return response.data;
  } catch (error) {
    console.error("Erro ao adicionar produto aos curtidos: ", error);
    throw error;
  }
};

export const removerProdutoCurtido = async (idProdutoCurtido) => {
  try {
    const response = await Axios.delete(
      `${baseURL}/produtos-curtidos/${idProdutoCurtido}`
    );
    return response.data;
  } catch (error) {
    console.error("Erro ao remover produto dos curtidos: ", error);
    throw error;
  }
};
