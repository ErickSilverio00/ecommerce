/* eslint-disable react-hooks/exhaustive-deps */
import { initMercadoPago } from "@mercadopago/sdk-react";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { criarSessaoCheckout } from "../../services/Carrinho";
import useAuthStore from "../../stores/useAuthStore";
import useCarrinho from "../../stores/useCarrinho";

const token = process.env.REACT_APP_MERCADO_PAGO_PUBLIC_KEY;

export default function useHookCarrinho() {
  const { user } = useAuthStore();
  const carrinho = useCarrinho();
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

  const validarEndereco = async (formData) => {
    if (formData.rua === "") {
      formEnderecoRef.current.setFieldError("rua", "Campo Obrigatório");
      return false;
    }
    if (formData.complemento === "") {
      formEnderecoRef.current.setFieldError("complemento", "Campo Obrigatório");
      return false;
    }
    if (formData.bairro === "") {
      formEnderecoRef.current.setFieldError("bairro", "Campo Obrigatório");
      return false;
    }
    if (formData.cep === "") {
      formEnderecoRef.current.setFieldError("cep", "Campo Obrigatório");
      return false;
    }
    if (formData.cidade === "") {
      formEnderecoRef.current.setFieldError("cidade", "Campo Obrigatório");
      return false;
    }

    return true;
  };

  const atualizarEndereco = async () => {
    const formData = formEnderecoRef?.current?.getData();
    const enderecoValido = await validarEndereco(formData);
    if (enderecoValido) {
      return;
    }

    try {
      const params = {
        id_cliente: user.idCliente,
        rua: formData.rua,
        complemento: formData.complemento,
        bairro: formData.bairro,
        cep: formData.cep,
        cidade: formData.cidade,
      };

      // const response = await atualizarEnderecoEcommerce(
      //   params.id_cliente,
      //   params
      // );
      // if (response.mensagem === "Endereço atualizado com sucesso") {
      //   buscarDadosCliente();
      //   toast.success("Seu endereço foi atualizado com sucesso.");
      //   setEdicaoEnderecoAtiva(false);
      // }
    } catch (error) {
      toast.error(`Erro ao atualizar seu endereço, tente novamente.`);
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
    validarEndereco,
    atualizarEndereco,
    removerItemCarrinho,
    alterarQuantidadeProduto,
    irParaPagamento,
  };
}
