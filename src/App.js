import { jwtDecode } from "jwt-decode";
import React, { useEffect } from "react";
import { BrowserRouter as Router, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Rotas from "./routes";
import useAuthStore from "./stores/useAuthStore";
import GlobalStyle from "./styles/global";
import LayoutBase from "./templates/LayoutBase";

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
}

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
        const {
          email_cliente,
          userName,
          idCliente,
          telefone,
          dataNascimento,
          endereco,
        } = decodedToken;
        login(
          accessToken,
          email_cliente,
          userName,
          idCliente,
          telefone,
          dataNascimento,
          endereco
        );
      }
    };

    if (storedAccessToken) {
      handleLogin(storedAccessToken);
    }
  }, [login, logout]);

  return (
    <Router>
      <ScrollToTop />
      <LayoutBase>
        <Rotas />
        <ToastContainer autoClose={3000} theme="light" position="top-center" />
        <GlobalStyle />
      </LayoutBase>
    </Router>
  );
}

export default App;
