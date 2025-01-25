import { useRef, useState } from "react";
import { toast } from "react-toastify";
import { makeValidation } from "../../../utils/funcoes";
import validationSchema from "./schema";

export default function useCadastro() {
  const formCadastroRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  const [clienteCadastrado, setClienteCadastrado] = useState(false);
  const [dataNascimento, setDataNascimento] = useState("");

  const validarCadastro = async () => {
    const formData = formCadastroRef?.current?.getData();

    const clienteData = {
      nome: formData.nome,
      data_nascimento: dataNascimento,
      telefone: formData.telefone,
      email: formData.email,
      data_cadastro_cliente: new Date(),
      origem_cliente: "ecommerce",
      senha: formData.senha,
      confirmarSenha: formData.confirmarSenha,
    };

    try {
      const isValid = await makeValidation(
        validationSchema,
        clienteData,
        formCadastroRef
      );
      if (!isValid) {
        return;
      }
      setIsLoading(true);
      setClienteCadastrado(true);
    } catch (error) {
      toast.error("Não foi possível salvar o seu cadastro");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    formCadastroRef,
    dataNascimento,
    setDataNascimento,
    validarCadastro,
    isLoading,
    clienteCadastrado,
  };
}
