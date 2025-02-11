import styled from "styled-components";
import { colors } from "../../../styles/colors";
import { fonte } from "../../../styles/global";

export const MainCadastro = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 110px;
  padding: 40px;

  @media (max-width: 500px) {
    margin-top: 63px;
    padding: 0px;
  }
`;

export const ContainerFormulario = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 600px;

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
  width: 15%;
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
  flex-wrap: wrap;
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

  .link_entrar {
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

export const ContainerCadastrado = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  padding: 30px;
`;

export const ContainerMsgTitulo = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;

  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

export const MsgTitulo = styled.h2`
  display: flex;
  font-family: ${fonte};
  font-size: 24px;
  font-weight: bold;
  color: ${colors.preto2};
  margin: 0;
`;

export const DescricaoCadastro = styled.p`
  display: flex;
  font-family: ${fonte};
  font-size: 14px;
  font-weight: 400;
  color: ${colors.preto2};
  margin: 0 auto;
  justify-content: center;
  text-align: center;
  margin-top: 40px;
  width: 70%;

  @media (max-width: 500px) {
    width: 100%;
  }
`;

export const ContainerBotaoLogin = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding-top: 40px;
`;
