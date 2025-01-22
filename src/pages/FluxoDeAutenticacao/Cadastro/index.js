import { Form } from "@unform/web";
import Lottie from "lottie-react";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import AnimatedSuccess from "../../../assets/animations/successAnimation.json";
import Botao from "../../../components/Botao";
import CampoTexto from "../../../components/CampoTexto";
import DateTimePicker from "../../../components/DateTimePicker";
import useCamposCadastro from "../../../hooks/FluxoDeAutenticacao/Cadastro/useCamposCadastro";
import { colors } from "../../../styles/colors";
import { AreaItem, fonte } from "../../../styles/global";
import LayoutBase from "../../../templates/LayoutBase";
import {
  ContainerBotao,
  ContainerBotaoLogin,
  ContainerCadastrado,
  ContainerCamposFormulario,
  ContainerFormulario,
  ContainerIrParaLogin,
  ContainerMsgTitulo,
  ContainerTituloFormulario,
  DescricaoCadastro,
  LinhaTituloFormulario,
  MainCadastro,
  MsgTitulo,
  TextoIrParaLogin,
  TituloFormulario,
} from "./styles";

export default function Cadastro() {
  const {
    formCadastroRef,
    dataNascimento,
    setDataNascimento,
    isLoading,
    validarCadastro,
    clienteCadastrado,
  } = useCamposCadastro();

  return (
    <LayoutBase>
      <MainCadastro>
        {!clienteCadastrado && (
          <Form ref={formCadastroRef} onSubmit={validarCadastro}>
            <ContainerFormulario>
              <ContainerTituloFormulario>
                <TituloFormulario>CRIAR CONTA</TituloFormulario>
                <LinhaTituloFormulario />
              </ContainerTituloFormulario>
              <ContainerCamposFormulario>
                <AreaItem wd="48">
                  <CampoTexto name="nome" label="Nome completo" />
                </AreaItem>
                <AreaItem wd="48">
                  <CampoTexto name="cpf" label="CPF" />
                </AreaItem>
                <AreaItem wd="48">
                  <DateTimePicker
                    name="data_nascimento"
                    label="Data de nascimento*"
                    disableFuture
                    value={dataNascimento}
                    onChange={(date) => setDataNascimento(date)}
                  />
                </AreaItem>
                <AreaItem wd="48">
                  <CampoTexto name="telefone" label="Telefone" />
                </AreaItem>
                <AreaItem wd="48">
                  <CampoTexto name="email" label="E-mail" />
                </AreaItem>
                <AreaItem wd="48">
                  <CampoTexto name="senha" label="Senha" type="password" />
                </AreaItem>
                <AreaItem wd="48">
                  <CampoTexto
                    name="confirmarSenha"
                    label="Confirmar senha"
                    type="password"
                  />
                </AreaItem>
              </ContainerCamposFormulario>
              <ContainerBotao>
                <Botao
                  tipo="submit"
                  variante="contained"
                  tamanho="large"
                  texto={isLoading ? "Carregando..." : "CADASTRAR"}
                  mostrarBoxShadow={true}
                  corDeFundo={colors.primaria}
                  corDeFundoHover={colors.primariaClara}
                  fontFamily={fonte}
                  fontWeight="600"
                />
              </ContainerBotao>
              <ContainerIrParaLogin>
                <TextoIrParaLogin>
                  Já possui uma conta?{" "}
                  <Link to="/login" className="link_entrar">
                    {" "}
                    ENTRAR
                  </Link>
                </TextoIrParaLogin>
              </ContainerIrParaLogin>
            </ContainerFormulario>
          </Form>
        )}
        {clienteCadastrado && (
          <ContainerCadastrado>
            <ContainerMsgTitulo>
              <Lottie
                animationData={AnimatedSuccess}
                autoPlay={true}
                loop={true}
                style={{ width: 36 }}
              />
              <MsgTitulo>Cadastro concluído com sucesso!</MsgTitulo>
            </ContainerMsgTitulo>
            <DescricaoCadastro>
              Agora você pode curtir todas as nossas promoções e ofertas! Clique
              no botão abaixo para fazer o seu login agora mesmo!
            </DescricaoCadastro>
            <ContainerBotaoLogin>
              <Link to="/login" style={{ textDecoration: "none" }}>
                <Botao
                  tipo="button"
                  variante="contained"
                  tamanho="large"
                  texto={isLoading ? "Carregando..." : "FAZER LOGIN"}
                  mostrarBoxShadow={true}
                  corDeFundo={colors.primaria}
                  corDeFundoHover={colors.primariaClara}
                  fontFamily={fonte}
                  fontWeight="600"
                />
              </Link>
            </ContainerBotaoLogin>
          </ContainerCadastrado>
        )}
      </MainCadastro>
    </LayoutBase>
  );
}
