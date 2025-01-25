import { jwtDecode } from "jwt-decode";
import { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import useAuthStore from "../../stores/useAuthStore";
import { makeValidation } from "../../utils/funcoes";
import {
  validationDadosCadastraisSchema,
  validationEnderecoSchema,
} from "./schema";

export default function useMeusDados() {
  const { user, logout } = useAuthStore();
  const formDadosCadastraisRef = useRef(null);
  const formEnderecoRef = useRef(null);
  const [edicaoEnderecoAtiva, setEdicaoEnderecoAtiva] = useState(false);
  const [naoTemEndereco, setNaoTemEndereco] = useState(false);
  const [dataNascimento, setDataNascimento] = useState("");

  const atualizarDadosCadastrais = async () => {
    const formData = formDadosCadastraisRef?.current?.getData();

    const isValid = await makeValidation(
      validationDadosCadastraisSchema,
      formData,
      formDadosCadastraisRef
    );
    if (!isValid) {
      return;
    }

    try {
      useAuthStore
        .getState()
        .login(
          useAuthStore.getState().user.accessToken,
          useAuthStore.getState().user.userEmail,
          formData.nomeCompleto,
          useAuthStore.getState().user.idCliente,
          formData.telefone,
          useAuthStore.getState().user.dataNascimento,
          useAuthStore.getState().user.endereco
        );

      const decodedToken = jwtDecode(useAuthStore.getState().user.accessToken);

      decodedToken.userName = formData.nomeCompleto;
      decodedToken.telefone = formData.telefone;

      const header = btoa(JSON.stringify({ alg: "HS256", typ: "JWT" }));
      const payload = btoa(
        JSON.stringify({
          ...decodedToken,
        })
      );

      const signature = btoa("simulated_signature");

      const accessToken = `${header}.${payload}.${signature}`;

      localStorage.setItem("accessToken", accessToken);

      toast.success("Dados cadastrais atualizados com sucesso!");
    } catch (error) {
      toast.error("Erro ao atualizar seus dados cadastrais, tente novamente.");
    }
  };

  const aoMudarParaEdicaoEndereco = () => {
    formEnderecoRef?.current?.setFieldValue("rua", user.endereco.rua);
    formEnderecoRef?.current?.setFieldValue(
      "complemento",
      user.endereco.complemento
    );
    formEnderecoRef?.current?.setFieldValue("bairro", user.endereco.bairro);
    formEnderecoRef?.current?.setFieldValue("cep", user.endereco.cep);
    formEnderecoRef?.current?.setFieldValue("cidade", user.endereco.cidade);
    setEdicaoEnderecoAtiva(true);
  };

  const atualizarEndereco = async () => {
    const formData = formEnderecoRef?.current?.getData();

    const isValid = await makeValidation(
      validationEnderecoSchema,
      formData,
      formEnderecoRef
    );
    if (!isValid) {
      return;
    }

    try {
      useAuthStore
        .getState()
        .login(
          useAuthStore.getState().user.accessToken,
          useAuthStore.getState().user.userEmail,
          useAuthStore.getState().user.userName,
          useAuthStore.getState().user.idCliente,
          useAuthStore.getState().user.telefone,
          useAuthStore.getState().user.dataNascimento,
          {
            ...useAuthStore.getState().user.endereco,
            rua: formData.rua,
            complemento: formData.complemento,
            bairro: formData.bairro,
            cep: formData.cep,
            cidade: formData.cidade,
          }
        );

      const decodedToken = jwtDecode(useAuthStore.getState().user.accessToken);

      decodedToken.endereco = {
        rua: formData.rua,
        complemento: formData.complemento,
        bairro: formData.bairro,
        cep: formData.cep,
        cidade: formData.cidade,
      };

      const header = btoa(JSON.stringify({ alg: "HS256", typ: "JWT" }));
      const payload = btoa(
        JSON.stringify({
          ...decodedToken,
        })
      );

      const signature = btoa("simulated_signature");

      const updatedAccessToken = `${header}.${payload}.${signature}`;

      localStorage.setItem("accessToken", updatedAccessToken);

      toast.success("Endereço atualizado com sucesso!");
      setEdicaoEnderecoAtiva(false);
    } catch (error) {
      toast.error("Erro ao atualizar seu endereço, tente novamente.");
    }
  };

  const aoClicarEmVoltar = () => {
    setEdicaoEnderecoAtiva(false);
  };

  const excluirCliente = async () => {
    try {
      logout();
      toast.success("Conta excluída com sucesso!");
    } catch (error) {
      toast.error("Não foi possível excluir sua conta, tente novamente");
    }
  };

  useEffect(() => {
    if (user && formDadosCadastraisRef.current) {
      formDadosCadastraisRef.current.setFieldValue(
        "nomeCompleto",
        user?.userName
      );
      formDadosCadastraisRef.current.setFieldValue("telefone", user?.telefone);
      formDadosCadastraisRef.current.setFieldValue("E-mail", user?.userEmail);
      setDataNascimento(user?.dataNascimento || "");
    }
  }, [user]);

  return {
    user,
    logout,
    formDadosCadastraisRef,
    formEnderecoRef,
    edicaoEnderecoAtiva,
    setEdicaoEnderecoAtiva,
    naoTemEndereco,
    setNaoTemEndereco,
    dataNascimento,
    setDataNascimento,
    atualizarDadosCadastrais,
    aoMudarParaEdicaoEndereco,
    atualizarEndereco,
    aoClicarEmVoltar,
    excluirCliente,
  };
}
