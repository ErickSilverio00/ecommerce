import { useMediaQuery } from "@mui/material";
import {
  CaretLeft,
  Gear,
  MapPinLine,
  Notepad,
  ShoppingCart,
  UserCircle,
} from "@phosphor-icons/react";
import { Form } from "@unform/web";
import React from "react";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import Botao from "../../../components/Botao";
import CampoTexto from "../../../components/CampoTexto";
import DateTimePicker from "../../../components/DateTimePicker";
import useMeusDados from "../../../hooks/ContaUsuario/useMeusDados";
import { colors } from "../../../styles/colors";
import { AreaItem, fonte } from "../../../styles/global";
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
  const navigate = useNavigate();
  const firstMediaQuery = useMediaQuery("(max-width: 440px)");
  const {
    user,
    formDadosCadastraisRef,
    formEnderecoRef,
    edicaoEnderecoAtiva,
    naoTemEndereco,
    dataNascimento,
    setDataNascimento,
    atualizarDadosCadastrais,
    aoMudarParaEdicaoEndereco,
    atualizarEndereco,
    aoClicarEmVoltar,
    excluirCliente,
  } = useMeusDados();

  return (
    <ContainerMeusDados>
      <ContainerPrimeiraLinhaMeusDados>
        <ContainerTituloMeusDados>
          {!firstMediaQuery && (
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
          aoClicar={excluirCliente}
        />
      </ContainerPrimeiraLinhaMeusDados>
      <ContainerNav>
        <ContainerBlocoNav onClick={aoApertarInicioNosMeusDados}>
          <UserCircle
            size={firstMediaQuery ? 28 : 48}
            weight="bold"
            color={colors.preto2}
          />
          <TextoMeusDados>Início</TextoMeusDados>
        </ContainerBlocoNav>
        <ContainerBlocoNav onClick={aoApertarMeusPedidosNosMeusDados}>
          <ShoppingCart
            size={firstMediaQuery ? 28 : 48}
            weight="bold"
            color={colors.preto2}
          />
          <TextoMeusDados>Meus pedidos</TextoMeusDados>
        </ContainerBlocoNav>
      </ContainerNav>
      <ContainerConteudoMeusDados>
        <ContainerLadoEsquerdo>
          <ContainerTituloBloco>
            {!firstMediaQuery && (
              <Notepad size={22} weight="bold" color={colors.preto2} />
            )}
            <TituloBloco>Dados cadastrais</TituloBloco>
          </ContainerTituloBloco>
          <Form
            ref={formDadosCadastraisRef}
            onSubmit={atualizarDadosCadastrais}
          >
            <ContainerFormularioDadosCadastrais>
              <ContainerCamposDadosCadastrais>
                <CampoTexto
                  name="nomeCompleto"
                  label="Nome completo"
                  defaultValue={user?.userName}
                />
                <CampoTexto
                  name="telefone"
                  label="Telefone"
                  defaultValue={user?.telefone}
                />
                <CampoTexto
                  label="email"
                  name="E-mail"
                  disabled
                  defaultValue={user.userEmail}
                />
                <AreaItem wd="48">
                  <DateTimePicker
                    name="data_nascimento"
                    label="Data de nascimento*"
                    disableFuture
                    value={dataNascimento}
                    onChange={(date) => setDataNascimento(date)}
                    disabled
                  />
                </AreaItem>
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
          </Form>
        </ContainerLadoEsquerdo>
        <ContainerLadoDireito>
          <ContainerTituloBloco>
            <MapPinLine size={22} weight="bold" color={colors.preto2} />
            <TituloBloco>Meu endereço</TituloBloco>
          </ContainerTituloBloco>
          <ContainerEndereco>
            {!edicaoEnderecoAtiva && !naoTemEndereco && (
              <ContainerEnderecoCadastrado>
                <TextosEnderecos>Rua: {user?.endereco?.rua}</TextosEnderecos>
                <TextosEnderecos>
                  Complemento: {user?.endereco?.complemento}
                </TextosEnderecos>
                <TextosEnderecos>
                  Bairro: {user?.endereco?.bairro}
                </TextosEnderecos>
                <TextosEnderecos>
                  CEP: {user?.endereco?.cep} - {user?.endereco?.cidade}
                </TextosEnderecos>
                <TextoEditarEndereco onClick={aoMudarParaEdicaoEndereco}>
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
                  corDeFundo={colors.verde}
                  corDeFundoHover={colors.verdeClaro}
                  fontFamily={fonte}
                  fontSize={10}
                  fontWeight="600"
                  width="50%"
                  height={36}
                  aoClicar={aoMudarParaEdicaoEndereco}
                />
              </ContainerNaoTemEndereco>
            )}
            <div style={{ display: !edicaoEnderecoAtiva && "none" }}>
              <ContainerSairEdicaoEndereco onClick={aoClicarEmVoltar}>
                <CaretLeft size={20} weight="bold" color={colors.preto2} />
                <TituloBloco>Voltar</TituloBloco>
              </ContainerSairEdicaoEndereco>
              <Form ref={formEnderecoRef} onSubmit={atualizarEndereco}>
                <ContainerFormularioEdicaoEndereco>
                  <ContainerCamposEdicaoEndereco>
                    <AreaItem wd="48">
                      <CampoTexto name="rua" label="Rua" />
                    </AreaItem>
                    <AreaItem wd="48">
                      <CampoTexto name="complemento" label="Complemento" />
                    </AreaItem>
                    <AreaItem wd="48">
                      <CampoTexto name="bairro" label="Bairro" />
                    </AreaItem>
                    <AreaItem wd="48">
                      <CampoTexto name="cep" label="CEP" />
                    </AreaItem>
                    <AreaItem wd="48">
                      <CampoTexto name="cidade" label="Cidade" />
                    </AreaItem>
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
              </Form>
            </div>
          </ContainerEndereco>
        </ContainerLadoDireito>
      </ContainerConteudoMeusDados>
    </ContainerMeusDados>
  );
}
