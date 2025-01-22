import Axios from "axios";

const baseURL = process.env.REACT_APP_BASE_URL;

export const fetchItensCarrinho = async (idCliente) => {
  try {
    const response = await Axios.get(`${baseURL}/carrinho/${idCliente}`);
    return response.data || [];
  } catch (error) {
    console.error("Erro ao buscar os itens do carrinho: ", error);
    throw error;
  }
};

export const adicionarAoCarrinho = async (carrinhoData) => {
  try {
    const response = await Axios.post(`${baseURL}/carrinho`, carrinhoData);
    return response.data;
  } catch (error) {
    console.error("Erro ao adicionar ao carrinho: ", error);
    throw error;
  }
};

export const atualizarQuantidadeItemCarrinho = async (
  idItemCarrinho,
  novaQuantidade
) => {
  try {
    const response = await Axios.put(`${baseURL}/carrinho/${idItemCarrinho}`, {
      novaQuantidade,
    });
    return response.data;
  } catch (error) {
    console.error(
      "Erro ao atualizar a quantidade do item no carrinho: ",
      error
    );
    throw error;
  }
};

export const removerItemCarrinho = async (idItemCarrinho) => {
  try {
    const response = await Axios.delete(
      `${baseURL}/carrinho/${idItemCarrinho}`
    );
    return response.data;
  } catch (error) {
    console.error("Erro ao remover item do carrinho: ", error);
    throw error;
  }
};

export const criarSessaoCheckout = async (dadosPreferencia) => {
  try {
    const response = await Axios.post(
      `${baseURL}/create-preference`,
      dadosPreferencia
    );
    return response;
  } catch (error) {
    console.error("Erro ao criar sessão de checkout: ", error);
    throw error;
  }
};
