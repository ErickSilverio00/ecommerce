import { useMediaQuery } from "@mui/material";
import {
  CaretLeft,
  Gear,
  MapPinLine,
  Notepad,
  ShoppingCart,
} from "@phosphor-icons/react";
import Axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Botao from "../../../components/Botao";
import CampoTexto from "../../../components/CampoTexto";
import useAuthStore from "../../../hooks/FluxoDeAutenticacao/useAuthStore";
import {
  atualizarDadosCadastraisEcommerce,
  atualizarEnderecoEcommerce,
  deleteCliente,
  fetchClientePorId,
} from "../../../services/Clientes";
import { colors } from "../../../styles/colors";
import { fonte } from "../../../styles/global";
import { formatarData } from "../../../utils/funcoes";
import {
  ContainerBlocoNav,
  ContainerBotoesDadosCadastrais,
  ContainerBotoesEdicaoEndereco,
  ContainerCamposDadosCadastrais,
  ContainerCamposEdicaoEndereco,
  ContainerConteudoMeusDados,
  ContainerEndereco,
  ContainerEnderecoCadastrado,
  ContainerFormularioDadosCadastrais,
  ContainerFormularioEdicaoEndereco,
  ContainerLadoDireito,
  ContainerLadoEsquerdo,
  ContainerMeusDados,
  ContainerNaoTemEndereco,
  ContainerNav,
  ContainerPrimeiraLinhaMeusDados,
  ContainerSairEdicaoEndereco,
  ContainerTituloBloco,
  ContainerTituloMeusDados,
  DescricaoNaoTemEndereco,
  TextoEditarEndereco,
  TextoMeusDados,
  TextosEnderecos,
  TituloBloco,
  TituloMeusDados,
  TituloNaoTemEndereco,
} from "./styles";

export default function MeusDados({
  aoApertarInicioNosMeusDados,
  aoApertarMeusPedidosNosMeusDados,
}) {
  const { user, logout } = useAuthStore();
  const navigate = useNavigate();
  const firstMediaQuery = useMediaQuery("(max-width: 772px)");
  const secondMediaQuery = useMediaQuery("(max-width: 440px)");
  const [nomeCompleto, setNomeCompleto] = useState("");
  const [nomeCompletoErro, setNomeCompletoErro] = useState("");
  const [telefone, setTelefone] = useState("");
  const [telefoneErro, setTelefoneErro] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [rua, setRua] = useState("");
  const [ruaErro, setRuaErro] = useState("");
  const [complemento, setComplemento] = useState("");
  const [complementoErro, setComplementoErro] = useState("");
  const [bairro, setBairro] = useState("");
  const [bairroErro, setBairroErro] = useState("");
  const [cep, setCep] = useState("");
  const [cepErro, setCepErro] = useState("");
  const [cidade, setCidade] = useState("");
  const [cidadeErro, setCidadeErro] = useState("");
  const [edicaoEnderecoAtiva, setEdicaoEnderecoAtiva] = useState(false);
  const [naoTemEndereco, setNaoTemEndereco] = useState(false);
  const [botaoExcluirClicado, setBotaoExcluirClicado] = useState(false);

  const buscarDadosCliente = async () => {
    try {
      const response = await fetchClientePorId(user.idCliente);
      setNomeCompleto(response.nome_cliente);
      setTelefone(response.telefone_cliente);
      setEmail(response.email_cliente);
      setCpf(response.cpf_cliente);
      setDataNascimento(formatarData(response.data_nascimento_cliente));
      setRua(response.rua_cliente);
      setComplemento(response.complemento_cliente);
      setBairro(response.bairro_cliente);
      setCep(response.cep_cliente);
      setCidade(response.cidade_cliente);
    } catch (error) {
      console.error(error);
    }
  };

  const validarDadosCadastrais = () => {
    let temErro = false;

    if (!nomeCompleto.trim()) {
      setNomeCompletoErro("O nome completo é obrigatório.");
      temErro = true;
    } else {
      setNomeCompletoErro("");
    }

    if (!telefone.trim()) {
      setTelefoneErro("O telefone é obrigatório.");
      temErro = true;
    } else {
      setTelefoneErro("");
    }

    return temErro;
  };

  const atualizarDadosCadastrais = async (event) => {
    event.preventDefault();

    if (validarDadosCadastrais()) {
      return;
    }

    try {
      const params = {
        id_cliente: user.idCliente,
        nome: nomeCompleto,
        telefone: telefone,
        cpf: cpf,
      };

      const response = await atualizarDadosCadastraisEcommerce(
        params.id_cliente,
        params
      );
      if (response.mensagem === "Cliente atualizado com sucesso") {
        buscarDadosCliente();
        toast.success("Seus dados foram atualizados com sucesso.");
      }
    } catch (error) {
      toast.error(`Erro ao atualizar seus dados cadastrais, tente novamente.`);
    }
  };

  const validarCep = async () => {
    try {
      const response = await Axios.get(`https://viacep.com.br/ws/${cep}/json/`);
      if (response.data.erro) {
        setCepErro("CEP não encontrado");
        setCidade("");
        return false;
      } else {
        setCidade(response.data.localidade);
        setCepErro("");
        return true;
      }
    } catch (error) {
      setCepErro("Erro ao buscar CEP");
      setCidade("");
      return false;
    }
  };

  const validarEndereco = async () => {
    let temErro = false;

    if (!rua.trim()) {
      setRuaErro("A rua é obrigatória.");
      temErro = true;
    } else {
      setRuaErro("");
    }
    if (!complemento.trim()) {
      setComplementoErro("O complemento é obrigatório.");
      temErro = true;
    } else {
      setComplementoErro("");
    }
    if (!bairro.trim()) {
      setBairroErro("O setor é obrigatório.");
      temErro = true;
    } else {
      setBairroErro("");
    }
    if (!cep.trim()) {
      setCepErro("O CEP é obrigatório.");
      temErro = true;
    } else {
      setCepErro("");
    }
    if (!cidade.trim()) {
      setCidadeErro("A cidade é obrigatória.");
      temErro = true;
    } else {
      setCidadeErro("");
    }
    const cepValido = await validarCep();
    if (!cepValido) {
      setCepErro("CEP inválido.");
      temErro = true;
    } else {
      setCepErro("");
    }

    return temErro;
  };

  const atualizarEndereco = async (event) => {
    event.preventDefault();
    const enderecoValido = await validarEndereco();
    if (enderecoValido) {
      return;
    }
    try {
      const params = {
        id_cliente: user.idCliente,
        rua: rua,
        complemento: complemento,
        bairro: bairro,
        cep: cep,
        cidade: cidade,
      };

      const response = await atualizarEnderecoEcommerce(
        params.id_cliente,
        params
      );
      if (response.mensagem === "Endereço atualizado com sucesso") {
        buscarDadosCliente();
        toast.success("Seu endereço foi atualizado com sucesso.");
        setEdicaoEnderecoAtiva(false);
      }
    } catch (error) {
      toast.error(`Erro ao atualizar seu endereço, tente novamente.`);
    }
  };

  const aoClicarEmVoltar = () => {
    setEdicaoEnderecoAtiva(false);
    buscarDadosCliente();
  };

  const aoClicarEmExcluirCliente = () => {
    setBotaoExcluirClicado(true);
  };

  const excluirCliente = async () => {
    try {
      const response = await deleteCliente(user.idCliente);
      if (response.mensagem === "Cliente deletado com sucesso") {
        logout();
        window.location.reload();
      }
    } catch (error) {
      toast.error("Não foi possível excluir sua conta, tente novamente");
    }
  };

  useEffect(() => {
    buscarDadosCliente();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (
      (rua === "" &&
        complemento === "" &&
        bairro === "" &&
        cep === "" &&
        cidade === "") ||
      (rua === null &&
        complemento === null &&
        bairro === null &&
        cep === null &&
        cidade === null)
    ) {
      setNaoTemEndereco(true);
    } else {
      setNaoTemEndereco(false);
    }
  }, [rua, complemento, bairro, cep, cidade, naoTemEndereco]);

  useEffect(() => {
    const fetchCep = async () => {
      if (cep) {
        try {
          await Axios.get(`https://viacep.com.br/ws/${cep}/json/`);
        } catch (error) {
          console.error("Erro ao buscar CEP");
        }
      }
    };

    fetchCep();
  }, [cep]);

  return (
    <ContainerMeusDados>
      <ContainerPrimeiraLinhaMeusDados>
        <ContainerTituloMeusDados>
          {!secondMediaQuery && (
            <Gear size={32} weight="bold" color={colors.preto2} />
          )}
          <TituloMeusDados>Meus Dados</TituloMeusDados>
        </ContainerTituloMeusDados>
        <Botao
          tipo="button"
          variante="contained"
          tamanho="small"
          texto="Excluir conta"
          mostrarBoxShadow={true}
          corDeFundo={colors.vermelho}
          corDeFundoHover={colors.vermelhoClaro}
          fontFamily={fonte}
          fontSize={10}
          fontWeight="600"
          width="max-content"
          height={36}
          aoClicar={aoClicarEmExcluirCliente}
        />
      </ContainerPrimeiraLinhaMeusDados>
      {firstMediaQuery && (
        <ContainerNav>
          <ContainerBlocoNav onClick={aoApertarInicioNosMeusDados}>
            <Gear
              size={secondMediaQuery ? 28 : 48}
              weight="bold"
              color={colors.preto2}
            />
            <TextoMeusDados>Início</TextoMeusDados>
          </ContainerBlocoNav>
          <ContainerBlocoNav onClick={aoApertarMeusPedidosNosMeusDados}>
            <ShoppingCart
              size={secondMediaQuery ? 28 : 48}
              weight="bold"
              color={colors.preto2}
            />
            <TextoMeusDados>Meus pedidos</TextoMeusDados>
          </ContainerBlocoNav>
        </ContainerNav>
      )}

      <ContainerConteudoMeusDados>
        <ContainerLadoEsquerdo>
          <ContainerTituloBloco>
            {!secondMediaQuery && (
              <Notepad size={22} weight="bold" color={colors.preto2} />
            )}
            <TituloBloco>Dados cadastrais</TituloBloco>
          </ContainerTituloBloco>
          <ContainerFormularioDadosCadastrais
            onSubmit={atualizarDadosCadastrais}
          >
            <ContainerCamposDadosCadastrais>
              <CampoTexto
                variante="outlined"
                texto="Nome completo"
                tamanho="small"
                style={{ flex: 1, flexBasis: 200 }}
                aoMudar={(event) => {
                  const texto = event.target.value;
                  setNomeCompleto(texto);
                  setNomeCompletoErro("");
                }}
                value={nomeCompleto}
                erro={nomeCompletoErro !== ""}
                textoDeAjuda={nomeCompletoErro}
              />
              <CampoTexto
                texto="Telefone"
                variante="outlined"
                tamanho="small"
                fullWidth
                style={{ flexGrow: 1, flexBasis: 200 }}
                tipo="text"
                mascara="(99) 99999-9999"
                value={telefone}
                aoMudar={(texto) => {
                  setTelefone(texto);
                  setTelefoneErro("");
                }}
                erro={telefoneErro !== ""}
                textoDeAjuda={telefoneErro}
              />
              <CampoTexto
                variante="outlined"
                texto="E-mail"
                tamanho="small"
                style={{ flexGrow: 1, flexBasis: 200 }}
                value={email}
                disabled
              />
              <CampoTexto
                texto="CPF"
                variante="outlined"
                tamanho="small"
                fullWidth
                style={{ flexGrow: 1, flexBasis: 200 }}
                tipo="text"
                value={cpf}
                disabled
              />
              <CampoTexto
                texto="Data de nascimento"
                variante="outlined"
                tamanho="small"
                fullWidth
                style={{ flexGrow: 1, flexBasis: 200 }}
                tipo="text"
                value={dataNascimento}
                disabled
              />
            </ContainerCamposDadosCadastrais>
            <ContainerBotoesDadosCadastrais>
              <Botao
                tipo="button"
                variante="contained"
                tamanho="small"
                texto="Alterar minha senha"
                mostrarBoxShadow={true}
                corDeFundo={colors.vermelho}
                corDeFundoHover={colors.vermelhoClaro}
                fontFamily={fonte}
                fontSize={10}
                fontWeight="600"
                width="100%"
                height={36}
                aoClicar={() => navigate("/esqueci-senha")}
              />
              <Botao
                tipo="submit"
                variante="contained"
                tamanho="small"
                texto="Salvar alterações"
                mostrarBoxShadow={true}
                corDeFundo={colors.verde}
                corDeFundoHover={colors.verdeClaro}
                fontFamily={fonte}
                fontSize={10}
                fontWeight="600"
                width="100%"
                height={36}
              />
            </ContainerBotoesDadosCadastrais>
          </ContainerFormularioDadosCadastrais>
        </ContainerLadoEsquerdo>
        <ContainerLadoDireito>
          <ContainerTituloBloco>
            <MapPinLine size={22} weight="bold" color={colors.preto2} />
            <TituloBloco>Meu endereço</TituloBloco>
          </ContainerTituloBloco>
          <ContainerEndereco>
            {!edicaoEnderecoAtiva && !naoTemEndereco && (
              <ContainerEnderecoCadastrado>
                <TextosEnderecos>Rua: {rua}</TextosEnderecos>
                <TextosEnderecos>Complemento: {complemento}</TextosEnderecos>
                <TextosEnderecos>Setor: {bairro}</TextosEnderecos>
                <TextosEnderecos>
                  CEP: {cep} - {cidade}
                </TextosEnderecos>
                <TextoEditarEndereco
                  onClick={() => setEdicaoEnderecoAtiva(true)}
                >
                  EDITAR
                </TextoEditarEndereco>
              </ContainerEnderecoCadastrado>
            )}
            {naoTemEndereco && !edicaoEnderecoAtiva && (
              <ContainerNaoTemEndereco>
                <TituloNaoTemEndereco>
                  Você não possui nenhum endereço cadastrado
                </TituloNaoTemEndereco>
                <DescricaoNaoTemEndereco>
                  Cadastre seu endereço agora mesmo para receber seus pedidos!
                </DescricaoNaoTemEndereco>
                <Botao
                  tipo="button"
                  variante="contained"
                  tamanho="small"
                  texto="Cadastrar endereço"
                  mostrarBoxShadow={true}
                  corDeFundo={colors.primaria}
                  corDeFundoHover={colors.primariaClara}
                  fontFamily={fonte}
                  fontSize={10}
                  fontWeight="600"
                  width="25%"
                  height={36}
                  aoClicar={() => setEdicaoEnderecoAtiva(true)}
                />
              </ContainerNaoTemEndereco>
            )}
            {edicaoEnderecoAtiva && (
              <>
                <ContainerSairEdicaoEndereco onClick={aoClicarEmVoltar}>
                  <CaretLeft size={20} weight="bold" color={colors.preto2} />
                  <TituloBloco>Voltar</TituloBloco>
                </ContainerSairEdicaoEndereco>
                <ContainerFormularioEdicaoEndereco onSubmit={atualizarEndereco}>
                  <ContainerCamposEdicaoEndereco>
                    <CampoTexto
                      texto="Rua"
                      variante="outlined"
                      tamanho="small"
                      fullWidth
                      style={{ flexGrow: 1, flexBasis: 200 }}
                      tipo="text"
                      value={rua}
                      aoMudar={(event) => {
                        const texto = event.target.value;
                        setRua(texto);
                        setRuaErro("");
                      }}
                      erro={ruaErro !== ""}
                      textoDeAjuda={ruaErro}
                    />
                    <CampoTexto
                      texto="Complemento"
                      variante="outlined"
                      tamanho="small"
                      fullWidth
                      style={{ flexGrow: 1, flexBasis: 200 }}
                      tipo="text"
                      value={complemento}
                      aoMudar={(event) => {
                        const texto = event.target.value;
                        setComplemento(texto);
                        setComplementoErro("");
                      }}
                      erro={complementoErro !== ""}
                      textoDeAjuda={complementoErro}
                    />
                    <CampoTexto
                      texto="Setor"
                      variante="outlined"
                      tamanho="small"
                      fullWidth
                      style={{ flexGrow: 1, flexBasis: 200 }}
                      tipo="text"
                      value={bairro}
                      aoMudar={(event) => {
                        const texto = event.target.value;
                        setBairro(texto);
                        setBairroErro("");
                      }}
                      erro={bairroErro !== ""}
                      textoDeAjuda={bairroErro}
                    />
                    <CampoTexto
                      texto="CEP"
                      variante="outlined"
                      tamanho="small"
                      fullWidth
                      style={{ flexGrow: 1, flexBasis: 200 }}
                      tipo="text"
                      mascara="99999-999"
                      value={cep}
                      aoMudar={(texto) => {
                        setCep(texto);
                        setCepErro("");
                      }}
                      erro={cepErro !== ""}
                      textoDeAjuda={cepErro}
                    />
                    <CampoTexto
                      texto="Cidade"
                      variante="outlined"
                      tamanho="small"
                      fullWidth
                      style={{ flexGrow: 1, flexBasis: 200 }}
                      tipo="text"
                      value={cidade}
                      aoMudar={(event) => {
                        const texto = event.target.value;
                        setCidade(texto);
                        setCidadeErro("");
                      }}
                      erro={cidadeErro !== ""}
                      textoDeAjuda={cidadeErro}
                    />
                  </ContainerCamposEdicaoEndereco>
                  <ContainerBotoesEdicaoEndereco>
                    <Botao
                      tipo="submit"
                      variante="contained"
                      tamanho="small"
                      texto="Salvar alterações"
                      mostrarBoxShadow={true}
                      corDeFundo={colors.verde}
                      corDeFundoHover={colors.verdeClaro}
                      fontFamily={fonte}
                      fontSize={10}
                      fontWeight="600"
                      width="49.25%"
                      height={36}
                    />
                  </ContainerBotoesEdicaoEndereco>
                </ContainerFormularioEdicaoEndereco>
              </>
            )}
          </ContainerEndereco>
        </ContainerLadoDireito>
      </ContainerConteudoMeusDados>
    </ContainerMeusDados>
  );
}
