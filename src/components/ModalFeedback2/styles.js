import styled from "styled-components";
import { colors } from "../../styles/colors";
import { fonte } from "../../styles/global";

export const ContainerModal = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  justify-content: center;
  padding: 20px;
  background-color: ${colors.branco};
  border-radius: 6px;
`;

export const ModalTitulo = styled.h3`
  font-family: ${fonte};
  font-size: 22px;
  font-weight: bold;
  color: ${colors.preto};
  margin: 0;
  text-align: center;

  @media (max-width: 730px) {
    font-size: 20px;
  }

  @media (max-width: 440px) {
    font-size: 18px;
  }

  @media (max-width: 374px) {
    font-size: 14px;
  }
`;

export const ModalDescricao = styled.p`
  font-family: ${fonte};
  font-size: 16px;
  color: ${colors.preto};
  margin: 0;
  margin-top: 20px;
  text-align: center;

  @media (max-width: 440px) {
    font-size: 14px;
  }

  @media (max-width: 374px) {
    font-size: 12px;
  }
`;

export const ContainerBotoes = styled.div`
  display: flex;
  width: 100%;
  gap: 20px;
  margin-top: 40px;
`;
