import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useAuthStore from "../../../stores/useAuthStore";

export default function useEsqueciSenha() {
  const navigate = useNavigate();
  const formEnvioEmail = useRef(null);
  const formEnvioCodigo = useRef(null);
  const formRedefinirSenha = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  const [telaInicial, setTelaInicial] = useState(true);
  const [emailEnviado, setEmailEnviado] = useState(false);
  const [codigoEnviado, setCodigoEnviado] = useState(false);
  const [senhaRedefinida, setSenhaRedefinida] = useState(false);
  const { user } = useAuthStore();

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

  return {
    navigate,
    formEnvioEmail,
    formEnvioCodigo,
    formRedefinirSenha,
    isLoading,
    setIsLoading,
    telaInicial,
    setTelaInicial,
    emailEnviado,
    setEmailEnviado,
    codigoEnviado,
    setCodigoEnviado,
    senhaRedefinida,
    setSenhaRedefinida,
    user,
    validarEnvioDeEmail,
    enviarEmail,
    validarEnvioDeCodigo,
    enviarCodigo,
    validarSenha,
    validarConfirmarSenha,
    redefinirSenha,
    aoClicarEmRedirecionamento,
  };
}
