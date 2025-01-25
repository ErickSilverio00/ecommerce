import { jwtDecode } from "jwt-decode";
import { create } from "zustand";

const loadUserFromLocalStorage = () => {
  const storedAccessToken = localStorage.getItem("accessToken");
  if (!storedAccessToken) return null;

  const decodedToken = jwtDecode(storedAccessToken);
  const currentTime = Date.now() / 1000;

  if (decodedToken.exp < currentTime) {
    localStorage.removeItem("accessToken");
    return null;
  }

  const { userEmail, userName, telefone, dataNascimento, idCliente, endereco } =
    decodedToken;
  return {
    accessToken: storedAccessToken,
    userEmail,
    userName,
    idCliente,
    telefone,
    dataNascimento,
    endereco,
  };
};

const useAuthStore = create((set) => ({
  user: loadUserFromLocalStorage(),
  login: (
    accessToken,
    userEmail,
    userName,
    idCliente,
    telefone,
    dataNascimento,
    endereco
  ) => {
    set({
      user: {
        accessToken,
        userEmail,
        userName,
        idCliente,
        telefone,
        dataNascimento,
        endereco,
      },
    });
    localStorage.setItem("accessToken", accessToken);
  },
  logout: () => {
    set({ user: null });
    localStorage.removeItem("accessToken");
  },
}));

export default useAuthStore;
