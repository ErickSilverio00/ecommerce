import { jwtDecode } from "jwt-decode";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../../../stores/useAuthStore";
import { makeValidation } from "../../../utils/funcoes";
import validationSchema from "./schema";

export default function useCamposLogin() {
  const navigate = useNavigate();
  const formLoginRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);

  const validarLogin = async () => {
    try {
      const formData = formLoginRef.current?.getData();

      const isValid = await makeValidation(
        validationSchema,
        formData,
        formLoginRef
      );

      if (!isValid) {
        return;
      }

      setIsLoading(true);
      const header = btoa(JSON.stringify({ alg: "HS256", typ: "JWT" }));
      const payload = btoa(
        JSON.stringify({
          email_cliente: formData.email,
          userName: "Seu nome",
          idCliente: "12345",
          endereco: {
            rua: "Rua Teste",
            complemento: "Apto 101",
            bairro: "Bairro dos Sonhos",
            cep: "12345-678",
            cidade: "Goiânia",
            estado: "Goiás",
          },
          exp: Math.floor(Date.now() / 1000) + 60 * 60,
        })
      );
      const signature = btoa("simulated_signature");

      const accessToken = `${header}.${payload}.${signature}`;

      localStorage.setItem("accessToken", accessToken);

      const decodedToken = jwtDecode(accessToken);
      const { email_cliente, userName, idCliente } = decodedToken;

      useAuthStore
        .getState()
        .login(accessToken, email_cliente, userName, idCliente);

      navigate("/");
      window.location.reload();
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    formLoginRef,
    isLoading,
    setIsLoading,
    validarLogin,
  };
}
