import { Form } from "@unform/web";
import { Link } from "react-router-dom";
import Botao from "../../../components/Botao";
import CampoTexto from "../../../components/CampoTexto";
import useCamposLogin from "../../../hooks/FluxoDeAutenticacao/Login/useCamposLogin";
import { colors } from "../../../styles/colors";
import { fonte } from "../../../styles/global";
import LayoutBase from "../../../templates/LayoutBase";
import {
  ContainerBotao,
  ContainerCamposFormulario,
  ContainerFormulario,
  ContainerIrParaCadastro,
  ContainerTituloFormulario,
  LinhaTituloFormulario,
  MainLogin,
  TextoEsqueceuSenha,
  TextoIrParaCadastro,
  TituloFormulario,
} from "./styles";

export default function Login() {
  const { isLoading, formLoginRef, validarLogin } = useCamposLogin();

  return (
    <LayoutBase>
      <MainLogin>
        <ContainerFormulario>
          <ContainerTituloFormulario>
            <TituloFormulario>FAZER LOGIN</TituloFormulario>
            <LinhaTituloFormulario />
          </ContainerTituloFormulario>
          <Form ref={formLoginRef} onSubmit={validarLogin}>
            <ContainerCamposFormulario>
              <CampoTexto name="email" label="E-mail" />
              <CampoTexto name="senha" label="Senha" type="password" />
            </ContainerCamposFormulario>
            <ContainerBotao>
              <Botao
                tipo="submit"
                variante="contained"
                tamanho="large"
                texto={isLoading ? "Carregando..." : "ENTRAR"}
                mostrarBoxShadow={true}
                corDeFundo={colors.primaria}
                corDeFundoHover={colors.primariaClara}
                fontFamily={fonte}
                fontWeight="600"
              />
            </ContainerBotao>
          </Form>
          <Link style={{ color: colors.cinza }} to="/esqueci-senha">
            <TextoEsqueceuSenha>Esqueceu a senha?</TextoEsqueceuSenha>
          </Link>
          <ContainerIrParaCadastro>
            <TextoIrParaCadastro>
              Ainda não possui uma conta?{" "}
              <Link to="/cadastro" className="link_cadastre-se">
                {" "}
                CADASTRE-SE
              </Link>
            </TextoIrParaCadastro>
          </ContainerIrParaCadastro>
        </ContainerFormulario>
      </MainLogin>
    </LayoutBase>
  );
}
