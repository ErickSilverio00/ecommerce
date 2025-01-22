import styled from "styled-components";
import { colors } from "../../../styles/colors";
import { fonte } from "../../../styles/global";

export const MainEsqueciSenha = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 110px;
  padding: 41.5px;
  height: calc(100vh - 450px);

  @media (max-width: 500px) {
    margin-top: 63px;
    padding: 30px;
  }
`;

export const ContainerFormulario = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 450px;

  @media (max-width: 500px) {
    width: 100%;
  }
`;

export const ContainerTituloFormulario = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  margin-bottom: 20px;
`;

export const LinhaTituloFormulario = styled.div`
  width: 22.5%;
  height: 3px;
  background-color: ${colors.primaria};
`;

export const TituloFormulario = styled.h2`
  display: flex;
  font-family: ${fonte};
  font-size: 24px;
  font-weight: bold;
  color: ${colors.primaria};
  margin: 0;
`;

export const ContainerCamposFormulario = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ContainerBotao = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

export const ContainerIrParaLogin = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  margin-top: 20px;
`;

export const TextoIrParaLogin = styled.p`
  display: flex;
  font-family: ${fonte};
  font-size: 14px;
  font-weight: 400;
  color: ${colors.cinza};
  margin: 10px 0px 0px 0px;

  @media (max-width: 500px) {
    font-size: 12px;
  }

  .link_login {
    font-family: ${fonte};
    font-weight: bold;
    color: ${colors.primaria};
    transition: all 0.3s;
    margin-left: 5px;
    &:hover {
      color: ${colors.primariaClara};
    }
  }
`;

export const Titulo = styled.h2`
  font-family: ${fonte};
  font-size: 36px;
  font-weight: bold;
  margin: 0;
  color: ${colors.preto2};
  text-align: center;
`;

export const TextoDescricao = styled.h3`
  font-family: ${fonte};
  font-size: 16px;
  font-weight: 400;
  margin: 0;
  color: ${colors.preto2};
  text-align: center;
  margin-top: 20px;
`;

export const TextoAuxilioUsuario = styled.p`
  font-family: ${fonte};
  font-size: 16px;
  font-weight: 400;
  margin: 0;
  color: ${colors.preto2};
  margin-bottom: 20px;
`;
