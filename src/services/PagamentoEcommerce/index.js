import Axios from "axios";

const accessTokenMP = process.env.REACT_APP_ACCESS_TOKEN_MERCADO_PAGO;
const baseURL = process.env.REACT_APP_BASE_URL;

export const pagarComMercadoPago = async (preference) => {
  try {
    const response = await Axios.post(
      `https://api.mercadopago.com/checkout/preferences`,
      preference,
      {
        headers: {
          Authorization: `Bearer ${accessTokenMP}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Erro ao pagar com mercado pago: ", error);
    throw error;
  }
};

export const buscarComprasCliente = async (idCliente) => {
  try {
    const response = await Axios.get(
      `${baseURL}/buscar-compras-cliente/${idCliente}`
    );
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar compras do cliente: ", error);
    throw error;
  }
};
