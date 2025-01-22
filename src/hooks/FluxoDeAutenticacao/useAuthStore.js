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

  const { userEmail, userName, idCliente } = decodedToken;
  return { accessToken: storedAccessToken, userEmail, userName, idCliente };
};

const useAuthStore = create((set) => ({
  user: loadUserFromLocalStorage(),
  login: (accessToken, userEmail, userName, idCliente) => {
    set({ user: { accessToken, userEmail, userName, idCliente } });
    localStorage.setItem("accessToken", accessToken);
  },
  logout: () => {
    set({ user: null });
    localStorage.removeItem("accessToken");
  },
}));

export default useAuthStore;
