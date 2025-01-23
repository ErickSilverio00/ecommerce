import { Form } from "@unform/web";
import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Botao from "../../../components/Botao";
import CampoTexto from "../../../components/CampoTexto";
import useAuthStore from "../../../stores/useAuthStore";
import { colors } from "../../../styles/colors";
import { fonte } from "../../../styles/global";
import LayoutBase from "../../../templates/LayoutBase";
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
  const { user } = useAuthStore();
  const formEnvioEmail = useRef(null);
  const formEnvioCodigo = useRef(null);
  const formRedefinirSenha = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  const [telaInicial, setTelaInicial] = useState(true);
  const [emailEnviado, setEmailEnviado] = useState(false);
  const [codigoEnviado, setCodigoEnviado] = useState(false);
  const [senhaRedefinida, setSenhaRedefinida] = useState(false);
  const navigate = useNavigate();

  const validarEnvioDeEmail = () => {
    const email = formEnvioEmail?.current?.getFieldValue("email");
    if (!email) {
      formEnvioEmail.current.setFieldError("email", "Digite o seu e-mail");
      return false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      formEnvioEmail.current.setFieldError("email", "Email inválido");
      return false;
    }
    formEnvioEmail.current.setFieldError("email", "");
    return true;
  };

  const enviarEmail = async () => {
    const email = formEnvioEmail?.current?.getFieldValue("email");
    try {
      if (!validarEnvioDeEmail()) {
        return;
      }

      setIsLoading(true);
      toast.success(`E-mail enviado para ${email}`);
      setEmailEnviado(true);
      setTelaInicial(false);
    } catch (error) {
      toast.error(`Erro ao enviar e-mail para ${email}, tente novamente.`);
    } finally {
      setIsLoading(false);
    }
  };

  const validarEnvioDeCodigo = () => {
    const codigo = formEnvioCodigo?.current?.getFieldValue("codigo");
    if (!codigo) {
      formEnvioCodigo.current.setFieldError(
        "email",
        "Digite o código enviado ao seu e-mail"
      );
      return false;
    }
    return true;
  };

  const enviarCodigo = async () => {
    try {
      if (!validarEnvioDeCodigo()) {
        return;
      }

      setIsLoading(true);
      toast.success(`Código correto. Redefina sua senha`);
      setCodigoEnviado(true);
      setEmailEnviado(false);
    } catch (error) {
      toast.error(`Erro ao enviar código, tente novamente.`);
    } finally {
      setIsLoading(false);
    }
  };

  const validarSenha = () => {
    const senha = formRedefinirSenha?.current?.getFieldValue("senha");
    if (!senha) {
      formRedefinirSenha.current.setFieldError("senha", "Campo Obrigatório");
      return false;
    } else if (senha.length < 8) {
      formRedefinirSenha.current.setFieldError(
        "senha",
        "A senha deve ter pelo menos 8 caracteres"
      );
      return false;
    } else if (!/[A-Z]/.test(senha)) {
      formRedefinirSenha.current.setFieldError(
        "senha",
        "A senha deve conter pelo menos uma letra maiúscula"
      );
      return false;
    } else if (!/[a-z]/.test(senha)) {
      formRedefinirSenha.current.setFieldError(
        "senha",
        "A senha deve conter pelo menos uma letra minúscula"
      );
      return false;
    } else if (!/[0-9]/.test(senha)) {
      formRedefinirSenha.current.setFieldError(
        "senha",
        "A senha deve conter pelo menos um número"
      );
      return false;
    } else if (!/[^a-zA-Z0-9]/.test(senha)) {
      formRedefinirSenha.current.setFieldError(
        "senha",
        "A senha deve conter pelo menos um caractere especial"
      );
      return false;
    }
    return true;
  };

  const validarConfirmarSenha = () => {
    const senha = formRedefinirSenha?.current?.getFieldValue("senha");
    const confirmarSenha =
      formRedefinirSenha?.current?.getFieldValue("confirmarSenha");
    if (!confirmarSenha) {
      formRedefinirSenha.current.setFieldError(
        "confirmarSenha",
        "Campo Obrigaório"
      );
      return false;
    } else if (senha !== confirmarSenha) {
      formRedefinirSenha.current.setFieldError(
        "confirmarSenha",
        "As senhas devem ser iguais"
      );
      return false;
    }
    return true;
  };

  const redefinirSenha = async () => {
    try {
      setIsLoading(true);

      if (!validarSenha() || !validarConfirmarSenha()) {
        return;
      }

      toast.success(`Senha redefinida com sucesso`);
      setCodigoEnviado(false);
      setSenhaRedefinida(true);
    } catch (error) {
      console.error(error);
      toast.error(`Erro ao redefinir senha, tente novamente.`);
    } finally {
      setIsLoading(false);
    }
  };

  const aoClicarEmRedirecionamento = () => {
    if (user) {
      navigate("/minha-conta");
    } else {
      navigate("/login");
    }
  };

  return (
    <LayoutBase>
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
              <TextoAuxilioUsuario>
                Escolha a sua nova senha.
              </TextoAuxilioUsuario>
              <ContainerCamposFormulario>
                <CampoTexto name="senha" label="Senha" tipe="password" />
                <CampoTexto
                  name="confirmarSenha"
                  label="Confirmar senha"
                  tipo="password"
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
    </LayoutBase>
  );
}
