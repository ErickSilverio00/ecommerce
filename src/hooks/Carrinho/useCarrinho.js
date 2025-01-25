/* eslint-disable react-hooks/exhaustive-deps */
import { initMercadoPago } from "@mercadopago/sdk-react";
import { jwtDecode } from "jwt-decode";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { criarSessaoCheckout } from "../../services/Carrinho";
import useAuthStore from "../../stores/useAuthStore";
import useCarrinhoStore from "../../stores/useCarrinhoStore";
import { makeValidation } from "../../utils/funcoes";
import { validationEnderecoSchema } from "./schema";

const token = process.env.REACT_APP_MERCADO_PAGO_PUBLIC_KEY;

export default function useCarrinho() {
  const { user } = useAuthStore();
  const carrinho = useCarrinhoStore();
  const navigate = useNavigate();
  const formEnderecoRef = useRef(null);
  const [preferenceId, setPreferenceId] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [etapaCarrinho, setEtapaCarrinho] = useState(true);
  const [etapaPagamento, setEtapaPagamento] = useState(false);
  const [edicaoEnderecoAtiva, setEdicaoEnderecoAtiva] = useState(false);

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

  const removerItemCarrinho = (item) => {
    try {
      setIsLoading(true);
      carrinho.removerItemCarrinho(item);
    } catch (error) {
      toast.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const alterarQuantidadeProduto = async (idCarrinho, novaQuantidade) => {
    try {
      await carrinho.atualizarQuantidadeItemCarrinho(
        idCarrinho,
        novaQuantidade
      );
      carrinho.fetchItensCarrinho(user.idCliente);
    } catch (error) {
      toast.error(`Erro ao alterar a quantidade do produto: ${error}`);
    }
  };

  const irParaPagamento = async () => {
    try {
      const objetoEnvio = {
        carrinho: carrinho.itensCarrinho,
        cliente: user.idCliente,
      };
      setIsLoading(true);
      const url = await criarSessaoCheckout(objetoEnvio);
      setPreferenceId(url.data.id);
      setEtapaPagamento(true);
      setEtapaCarrinho(false);
      setIsLoading(false);
    } catch (error) {
      toast.error(`Erro ao criar sessão de checkout: ${error}`);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    initMercadoPago(`${token}`, {
      locale: "pt-BR",
    });
  }, []);

  return {
    user,
    carrinho,
    navigate,
    formEnderecoRef,
    preferenceId,
    setPreferenceId,
    isLoading,
    setIsLoading,
    etapaCarrinho,
    setEtapaCarrinho,
    etapaPagamento,
    setEtapaPagamento,
    edicaoEnderecoAtiva,
    setEdicaoEnderecoAtiva,
    aoMudarParaEdicaoEndereco,
    atualizarEndereco,
    removerItemCarrinho,
    alterarQuantidadeProduto,
    irParaPagamento,
  };
}
