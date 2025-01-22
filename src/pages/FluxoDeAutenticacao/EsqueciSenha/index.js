import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import CampoTexto from "../../../components/CampoTexto";
import Botao from "../../../components/Botao";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  confirmResetPassword,
  requestResetPassword,
  verifyResetCode,
} from "../../../services/FluxoDeAutenticacao";
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
import useAuthStore from "../../../hooks/FluxoDeAutenticacao/useAuthStore";
import { colors } from "../../../styles/colors";
import { fonte } from "../../../styles/global";

export default function EsqueciSenha() {
  const { user } = useAuthStore();
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [emailErro, setEmailErro] = useState("");
  const [codigo, setCodigo] = useState("");
  const [codigoErro, setCodigoErro] = useState("");
  const [senha, setSenha] = useState("");
  const [senhaErro, setSenhaErro] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [confirmarSenhaErro, setConfirmarSenhaErro] = useState("");
  const [telaInicial, setTelaInicial] = useState(true);
  const [emailEnviado, setEmailEnviado] = useState(false);
  const [codigoEnviado, setCodigoEnviado] = useState(false);
  const [senhaRedefinida, setSenhaRedefinida] = useState(false);
  const navigate = useNavigate();

  const validarEnvioDeEmail = () => {
    if (!email) {
      setEmailErro("Digite o seu e-mail");
      return false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailErro("Email inválido");
      return false;
    }
    setEmailErro("");
    return true;
  };

  const enviarEmail = async (event) => {
    event.preventDefault();
    try {
      setIsLoading(true);

      if (!validarEnvioDeEmail()) {
        return;
      }

      await requestResetPassword(email);
      toast.success(`E-mail enviado para ${email}`);
      setEmailEnviado(true);
      setTelaInicial(false);
    } catch (error) {
      if (
        error.response.data.message &&
        error.response.data.message === "Cliente não encontrado"
      ) {
        setEmailErro("Esse e-mail não está cadastrado na loja");
      } else {
        toast.error(`Erro ao enviar e-mail para ${email}, tente novamente.`);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const validarEnvioDeCodigo = () => {
    if (!codigo) {
      setCodigoErro("Digite o código enviado ao seu e-mail");
      return false;
    }
    setCodigoErro("");
    setEmailErro("");
    return true;
  };

  const enviarCodigo = async (event) => {
    event.preventDefault();
    try {
      setIsLoading(true);

      if (!validarEnvioDeCodigo()) {
        return;
      }

      await verifyResetCode(email, codigo);
      toast.success(`Código correto. Redefina sua senha`);
      setCodigoEnviado(true);
      setEmailEnviado(false);
    } catch (error) {
      console.error(error);
      if (
        error.response.data.message &&
        error.response.data.message ===
          "Código verificador incorreto ou expirado"
      ) {
        setCodigoErro("Código inválido ou expirado");
      } else {
        toast.error(`Erro ao enviar código para ${email}, tente novamente.`);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const validarSenha = () => {
    if (!senha) {
      setSenhaErro("Campo Obrigatório");
      return false;
    } else if (senha.length < 8) {
      setSenhaErro("A senha deve ter pelo menos 8 caracteres");
      return false;
    } else if (!/[A-Z]/.test(senha)) {
      setSenhaErro("A senha deve conter pelo menos uma letra maiúscula");
      return false;
    } else if (!/[a-z]/.test(senha)) {
      setSenhaErro("A senha deve conter pelo menos uma letra minúscula");
      return false;
    } else if (!/[0-9]/.test(senha)) {
      setSenhaErro("A senha deve conter pelo menos um número");
      return false;
    } else if (!/[^a-zA-Z0-9]/.test(senha)) {
      setSenhaErro("A senha deve conter pelo menos um caractere especial");
      return false;
    }
    setSenhaErro("");
    return true;
  };

  const validarConfirmarSenha = () => {
    if (!confirmarSenha) {
      setConfirmarSenhaErro("Campo Obrigatório");
      return false;
    } else if (senha !== confirmarSenha) {
      setConfirmarSenhaErro("As senhas devem ser iguais");
      return false;
    }
    setConfirmarSenhaErro("");
    return true;
  };

  const redefinirSenha = async (event) => {
    event.preventDefault();

    try {
      setIsLoading(true);

      if (!validarSenha() || !validarConfirmarSenha()) {
        return;
      }

      await confirmResetPassword(email, senha);
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
    <>
      <Header />
      <MainEsqueciSenha>
        {telaInicial && (
          <ContainerFormulario onSubmit={enviarEmail}>
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
        )}
        {emailEnviado && (
          <ContainerFormulario onSubmit={enviarCodigo}>
            <ContainerTituloFormulario>
              <TituloFormulario>VERIFICAR CÓDIGO</TituloFormulario>
              <LinhaTituloFormulario />
            </ContainerTituloFormulario>
            <TextoAuxilioUsuario>
              Digite o código verificador enviado ao seu e-mail.
            </TextoAuxilioUsuario>
            <ContainerCamposFormulario>
              <CampoTexto
                variante="outlined"
                texto="Código"
                tamanho="Normal"
                aoMudar={(event) => {
                  const texto = event.target.value;
                  setCodigo(texto);
                  setCodigoErro("");
                }}
                erro={codigoErro !== ""}
                textoDeAjuda={codigoErro}
              />
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
        )}
        {codigoEnviado && (
          <ContainerFormulario onSubmit={redefinirSenha}>
            <ContainerTituloFormulario>
              <TituloFormulario>REDEFINIR SENHA</TituloFormulario>
              <LinhaTituloFormulario />
            </ContainerTituloFormulario>
            <TextoAuxilioUsuario>Escolha a sua nova senha.</TextoAuxilioUsuario>
            <ContainerCamposFormulario>
              <CampoTexto
                variante="outlined"
                texto="Senha"
                tamanho="Normal"
                tipo="password"
                aoMudar={(event) => {
                  const texto = event.target.value;
                  setSenha(texto);
                  setSenhaErro("");
                }}
                erro={senhaErro !== ""}
                textoDeAjuda={senhaErro}
              />
              <CampoTexto
                variante="outlined"
                texto="Confirmar senha"
                tamanho="Normal"
                tipo="password"
                aoMudar={(event) => {
                  const texto = event.target.value;
                  setConfirmarSenha(texto);
                  setConfirmarSenhaErro("");
                }}
                erro={confirmarSenhaErro !== ""}
                textoDeAjuda={confirmarSenhaErro}
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
        )}
        {senhaRedefinida && (
          <ContainerFormulario onSubmit={aoClicarEmRedirecionamento}>
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
        )}
      </MainEsqueciSenha>
      <Footer />
    </>
  );
}
