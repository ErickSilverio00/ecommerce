import { Form } from "@unform/web";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import Botao from "../../../components/Botao";
import CampoTexto from "../../../components/CampoTexto";
import useEsqueciSenha from "../../../hooks/FluxoDeAutenticacao/EsqueciSenha/useEsqueciSenha";
import { colors } from "../../../styles/colors";
import { fonte } from "../../../styles/global";
import {
  ContainerBotao,
  ContainerCamposFormulario,
  ContainerFormulario,
  ContainerIrParaLogin,
  ContainerTituloFormulario,
  LinhaTituloFormulario,
  MainEsqueciSenha,
  TextoAuxilioUsuario,
  TextoDescricao,
  TextoIrParaLogin,
  Titulo,
  TituloFormulario,
} from "./styles";

export default function EsqueciSenha() {
  const {
    formEnvioEmail,
    formEnvioCodigo,
    formRedefinirSenha,
    isLoading,
    telaInicial,
    emailEnviado,
    codigoEnviado,
    senhaRedefinida,
    user,
    enviarEmail,
    enviarCodigo,
    redefinirSenha,
    aoClicarEmRedirecionamento,
  } = useEsqueciSenha();

  return (
    <MainEsqueciSenha>
      {telaInicial && (
        <Form ref={formEnvioEmail} onSubmit={enviarEmail}>
          <ContainerFormulario>
            <ContainerTituloFormulario>
              <TituloFormulario>ESQUECI MINHA SENHA</TituloFormulario>
              <LinhaTituloFormulario />
            </ContainerTituloFormulario>
            <TextoAuxilioUsuario>
              Um código verificador será enviado ao seu e-mail.
            </TextoAuxilioUsuario>
            <ContainerCamposFormulario>
              <CampoTexto name="email" label="E-mail" />
            </ContainerCamposFormulario>
            <ContainerBotao>
              <Botao
                tipo="submit"
                variante="contained"
                tamanho="large"
                texto={isLoading ? "Carregando..." : "ENVIAR"}
                mostrarBoxShadow={true}
                corDeFundo={colors.primaria}
                corDeFundoHover={colors.primariaClara}
                fontFamily={fonte}
                fontWeight="600"
              />
            </ContainerBotao>
            <ContainerIrParaLogin>
              <TextoIrParaLogin>
                <Link to="/login" className="link_login">
                  FAZER LOGIN
                </Link>
              </TextoIrParaLogin>
            </ContainerIrParaLogin>
          </ContainerFormulario>
        </Form>
      )}
      {emailEnviado && (
        <Form ref={formEnvioCodigo} onSubmit={enviarCodigo}>
          <ContainerFormulario>
            <ContainerTituloFormulario>
              <TituloFormulario>VERIFICAR CÓDIGO</TituloFormulario>
              <LinhaTituloFormulario />
            </ContainerTituloFormulario>
            <TextoAuxilioUsuario>
              Digite o código verificador enviado ao seu e-mail.
            </TextoAuxilioUsuario>
            <ContainerCamposFormulario>
              <CampoTexto name="codigo" label="Código" />
            </ContainerCamposFormulario>
            <ContainerBotao>
              <Botao
                tipo="submit"
                variante="contained"
                tamanho="large"
                texto={isLoading ? "Carregando..." : "ENVIAR"}
                mostrarBoxShadow={true}
                corDeFundo={colors.primaria}
                corDeFundoHover={colors.primariaClara}
                fontFamily={fonte}
                fontWeight="600"
              />
            </ContainerBotao>
            <ContainerIrParaLogin>
              <TextoIrParaLogin>
                <Link to="/login" className="link_login">
                  FAZER LOGIN
                </Link>
              </TextoIrParaLogin>
            </ContainerIrParaLogin>
          </ContainerFormulario>
        </Form>
      )}
      {codigoEnviado && (
        <Form ref={formRedefinirSenha} onSubmit={redefinirSenha}>
          <ContainerFormulario>
            <ContainerTituloFormulario>
              <TituloFormulario>REDEFINIR SENHA</TituloFormulario>
              <LinhaTituloFormulario />
            </ContainerTituloFormulario>
            <TextoAuxilioUsuario>Escolha a sua nova senha.</TextoAuxilioUsuario>
            <ContainerCamposFormulario>
              <CampoTexto name="senha" label="Senha" type="password" />
              <CampoTexto
                name="confirmarSenha"
                label="Confirmar senha"
                type="password"
              />
            </ContainerCamposFormulario>
            <ContainerBotao>
              <Botao
                tipo="submit"
                variante="contained"
                tamanho="large"
                texto={isLoading ? "Carregando..." : "REDEFINIR SENHA"}
                mostrarBoxShadow={true}
                corDeFundo={colors.primaria}
                corDeFundoHover={colors.primariaClara}
                fontFamily={fonte}
                fontWeight="600"
              />
            </ContainerBotao>
            <ContainerIrParaLogin>
              <TextoIrParaLogin>
                <Link to="/login" className="link_login">
                  FAZER LOGIN
                </Link>
              </TextoIrParaLogin>
            </ContainerIrParaLogin>
          </ContainerFormulario>
        </Form>
      )}
      {senhaRedefinida && (
        <Form onSubmit={aoClicarEmRedirecionamento}>
          <ContainerFormulario>
            <Titulo>Sua senha foi alterada com sucesso!</Titulo>
            {user && (
              <ContainerBotao>
                <Botao
                  tipo="submit"
                  variante="contained"
                  tamanho="large"
                  texto={isLoading ? "Carregando..." : "MINHA CONTA"}
                  mostrarBoxShadow={true}
                  corDeFundo={colors.primaria}
                  corDeFundoHover={colors.primariaClara}
                  fontFamily={fonte}
                  fontWeight="600"
                />
              </ContainerBotao>
            )}
            {!user && (
              <>
                <TextoDescricao>
                  Faça login com sua nova senha agora mesmo!
                </TextoDescricao>
                <ContainerBotao>
                  <Botao
                    tipo="submit"
                    variante="contained"
                    tamanho="large"
                    texto={isLoading ? "Carregando..." : "FAZER LOGIN"}
                    mostrarBoxShadow={true}
                    corDeFundo={colors.primaria}
                    corDeFundoHover={colors.primariaClara}
                    fontFamily={fonte}
                    fontWeight="600"
                  />
                </ContainerBotao>
              </>
            )}
          </ContainerFormulario>
        </Form>
      )}
    </MainEsqueciSenha>
  );
}
