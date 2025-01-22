import axios from "axios";

const baseURL = process.env.REACT_APP_BASE_URL;

export const registerLogin = async (loginData) => {
  try {
    const response = await axios.post(`${baseURL}/clientes/login`, loginData);
    return response.data;
  } catch (error) {
    console.error("Erro ao fazer login: ", error);
    throw error;
  }
};

export const requestResetPassword = async (email) => {
  try {
    const response = await axios.post(`${baseURL}/clientes/redefinir-senha`, {
      email_cliente: email,
    });
    return response.data;
  } catch (error) {
    console.error("Erro ao solicitar redefinição de senha: ", error);
    throw error;
  }
};

export const verifyResetCode = async (email, codigoVerificador) => {
  try {
    const response = await axios.post(`${baseURL}/clientes/verificar-codigo`, {
      email_cliente: email,
      codigo_verificador: codigoVerificador,
    });
    return response.data;
  } catch (error) {
    console.error("Erro ao verificar código de redefinição de senha: ", error);
    throw error;
  }
};

export const confirmResetPassword = async (email, novaSenha) => {
  try {
    const response = await axios.post(
      `${baseURL}/clientes/redefinir-senha/confirmar`,
      {
        email_cliente: email,
        senha_cliente: novaSenha,
      }
    );
    return response.data;
  } catch (error) {
    console.error("Erro ao confirmar redefinição de senha: ", error);
    throw error;
  }
};

export const searchClientByEmail = async (email) => {
  try {
    const response = await axios.get(`${baseURL}/clientes/email/${email}`);
    return response.data;
  } catch (error) {
    console.error("Não encontramos nenhum usuário com esse e-mail: ", error);
    throw new Error("Não encontramos nenhum usuário com esse e-mail.");
  }
};

export const inserirVisita = async () => {
  try {
    const response = await axios.post(`${baseURL}/inserir-visita`);
    return response.data;
  } catch (error) {
    console.error("Erro ao inserir visita: ", error);
    throw error;
  }
};
