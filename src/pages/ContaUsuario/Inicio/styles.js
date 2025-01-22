import styled from "styled-components";
import { colors } from "../../../styles/colors";
import { fonte } from "../../../styles/global";

export const ContainerInicio = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  height: 100%;
`;

export const ContainerTituloDaSecao = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const TituloDaSecao = styled.h1`
  display: flex;
  font-family: ${fonte};
  font-size: 32px;
  font-weight: bold;
  color: ${colors.preto2};
  margin: 0;

  @media (max-width: 900px) {
    font-size: 24px;
  }
`;

export const ContainerPrimeirosItens = styled.div`
  display: flex;
  flex: 1;
  gap: 20px;
  margin-top: 10px;
  justify-content: space-between;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

export const ContainerBoasVindas = styled.div`
  display: flex;
  padding: 20px;
  gap: 10px;
  background-color: #f5f5f5;
  border-radius: 4px;
  align-items: center;
  justify-content: center;

  @media (max-width: 900px) {
    padding: 10px;
  }
`;

export const ContainerLadoEsquerdo = styled.div`
  display: flex;
  width: fit-content;
  align-items: center;
  justify-content: center;
`;

export const ContainerImgPerfil = styled.div`
  display: flex;
  align-items: center;
`;

export const ContainerLadoDireito = styled.div`
  display: flex;
  flex-direction: column;
  width: max-content;
  gap: 2px;
`;

export const TextoBoasVindas = styled.h3`
  display: flex;
  font-family: ${fonte};
  font-size: 20px;
  font-weight: bold;
  color: ${colors.preto2};
  margin: 0;

  @media (max-width: 900px) {
    font-size: 16px;
  }
`;

export const TextoEmail = styled.p`
  display: flex;
  font-family: ${fonte};
  font-size: 14px;
  font-weight: 400;
  color: ${colors.preto2};
  margin: 0;

  @media (max-width: 900px) {
    font-size: 12px;
  }
`;

export const ContainerNav = styled.div`
  display: flex;
  width: 100%;
  gap: 20px;

  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

export const ContainerMeusDados = styled.div`
  display: flex;
  padding: 20px;
  gap: 10px;
  background-color: #f5f5f5;
  border-radius: 4px;
  width: 100%;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  @media (max-width: 900px) {
    padding: 10px;
  }

  @media (max-width: 500px) {
    width: auto;
  }
`;

export const TextoMeusDados = styled.h1`
  display: flex;
  font-family: ${fonte};
  font-size: 20px;
  font-weight: bold;
  color: ${colors.preto2};
  margin: 0;

  @media (max-width: 900px) {
    font-size: 16px;
  }
`;

export const ContainerUltimoPedido = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding-bottom: 20px;
`;

export const ContainerTevePedido = styled.div`
  display: flex;
  flex-direction: column;
  height: max-content;
  width: 100%;
  gap: 10px;
  margin-top: 40px;
`;

export const ContainerTituloTevePedido = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const TituloTevePedido = styled.h4`
  display: flex;
  font-family: ${fonte};
  font-size: 22px;
  font-weight: bold;
  color: ${colors.preto2};
  margin: 0;
`;

export const ContainerPedido = styled.div`
  display: flex;
  flex-direction: column;
  height: max-content;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 4px;
  gap: 20px;
`;

export const ContainerBlocoPedido = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  gap: 10px;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 500px) {
    flex-wrap: initial;
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const LinhaDiv = styled.div`
  display: flex;
  width: 100%;
  height: 1px;
  background-color: ${colors.cinzaClaro};
`;

export const ContainerItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const TituloItem = styled.p`
  display: flex;
  font-family: ${fonte};
  font-size: 14px;
  font-weight: bold;
  color: ${colors.preto2};
  margin: 0;
`;

export const DescricaoItem = styled.p`
  display: flex;
  font-family: ${fonte};
  font-size: 14px;
  font-weight: 400;
  gap: 10px;
  align-items: center;
  color: ${colors.preto2};
  margin: 0;
`;

export const ContainerEndereco = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const ContainerNaoTevePedido = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const TituloNaoTevePedido = styled.h4`
  display: flex;
  font-family: ${fonte};
  font-size: 24px;
  font-weight: bold;
  color: ${colors.vermelho};
  margin: 0;

  @media (max-width: 900px) {
    font-size: 18px;
  }
`;

export const DescricaoNaoTevePedido = styled.h6`
  display: flex;
  font-family: ${fonte};
  font-size: 14px;
  font-weight: 400;
  color: ${colors.vermelho};
  margin: 0;
  margin: 10px 0px 20px 0px;

  @media (max-width: 900px) {
    font-size: 12px;
  }
`;
