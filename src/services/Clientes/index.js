import Axios from "axios";

const baseURL = process.env.REACT_APP_BASE_URL;

export const fetchClientePorId = async (id) => {
  try {
    const response = await Axios.get(`${baseURL}/clientes/${id}`);
    return response.data.cliente;
  } catch (error) {
    console.error("Erro ao buscar o cliente por ID: ", error);
    throw error;
  }
};

export const registerCliente = async (clienteData) => {
  try {
    const response = await Axios.post(`${baseURL}/clientes`, clienteData);
    return response.data;
  } catch (error) {
    console.error("Erro ao cadastrar o cliente: ", error);
    throw error;
  }
};

export const editCliente = async (id, clienteData) => {
  try {
    const response = await Axios.put(`${baseURL}/clientes/${id}`, clienteData);
    return response.data;
  } catch (error) {
    console.error("Erro ao atualizar o cliente: ", error);
    throw error;
  }
};

export const deleteCliente = async (id) => {
  try {
    const response = await Axios.delete(`${baseURL}/clientes/${id}`);
    return response.data;
  } catch (error) {
    console.error("Erro ao excluir o cliente: ", error);
    throw error;
  }
};

export const registerEmailNovidades = async (email) => {
  try {
    const response = await Axios.post(`${baseURL}/cadastro-novidades`, {
      email,
    });
    return response.data;
  } catch (error) {
    console.error("Erro ao cadastrar e-mail para novidades: ", error);
    throw error;
  }
};

export const atualizarDadosCadastraisEcommerce = async (id, novosDados) => {
  try {
    const response = await Axios.post(
      `${baseURL}/dados-clientes/${id}`,
      novosDados
    );
    return response.data;
  } catch (error) {
    console.error("Erro ao atualizar dados cadastrais do cliente: ", error);
    throw error;
  }
};

export const atualizarEnderecoEcommerce = async (id, novosDados) => {
  try {
    const response = await Axios.post(
      `${baseURL}/dados-endereco/${id}`,
      novosDados
    );
    return response.data;
  } catch (error) {
    console.error("Erro ao atualizar endereço do cliente: ", error);
    throw error;
  }
};
