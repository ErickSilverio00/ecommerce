import styled from "styled-components";
import { colors } from "../../styles/colors";
import { fonte } from "../../styles/global";

export const ContainerTitleSubtitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const Titulo = styled.h2`
  font-family: ${fonte};
  font-size: 36px;
  font-weight: bold;
  margin: 0;
  color: ${colors.preto2};

  @media (max-width: 430px) {
    font-size: 28px;
  }
`;

export const Subtitulo = styled.h6`
  font-family: ${fonte};
  font-size: 18px;
  font-weight: 600;
  margin: 0;
  color: ${colors.primariaClara};

  @media (max-width: 430px) {
    font-size: 14px;
  }
`;
