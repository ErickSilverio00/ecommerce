import { jwtDecode } from "jwt-decode";
import React, { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useAuthStore from "./stores/useAuthStore";
import Rotas from "./routes";
import GlobalStyle from "./styles/global";

function App() {
  const { login, logout } = useAuthStore();

  useEffect(() => {
    const storedAccessToken = localStorage.getItem("accessToken");

    const handleLogin = (accessToken) => {
      const decodedToken = jwtDecode(accessToken);
      const currentTime = Date.now() / 1000;

      if (decodedToken.exp < currentTime) {
        localStorage.removeItem("accessToken");
        logout();
      } else {
        const { email_cliente, userName, idCliente, endereco } = decodedToken;
        login(accessToken, email_cliente, userName, idCliente, endereco);
      }
    };

    if (storedAccessToken) {
      handleLogin(storedAccessToken);
    }
  }, [login, logout]);

  return (
    <Router>
      <Rotas />
      <ToastContainer autoClose={3000} theme="light" position="top-center" />
      <GlobalStyle />
    </Router>
  );
}

export default App;
