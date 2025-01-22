import axios from "axios";

const baseURL = process.env.REACT_APP_BASE_URL;

export const buscarComprasCliente = async (idCliente) => {
  try {
    const response = await axios.get(
      `${baseURL}/buscar-compras-cliente/${idCliente}`
    );
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar compras do cliente: ", error);
    throw error;
  }
};
