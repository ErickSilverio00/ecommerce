import Axios from "axios";

const baseURL = process.env.REACT_APP_BASE_URL;

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
