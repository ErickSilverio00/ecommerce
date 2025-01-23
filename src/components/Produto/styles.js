import styled from "styled-components";
import { colors } from "../../styles/colors";
import { fonte } from "../../styles/global";

export const ContainerProduct = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 250px;
  height: min-content;
  flex: 1;
  padding: 20px;
  box-shadow: 1px 4px 12px 3px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  position: relative;

  @media (max-width: 500px) {
    min-width: 180px;
  }
`;

export const ContainerLikeProduct = styled.div`
  display: flex;
  position: absolute;
  z-index: 1;
  top: 0;
  right: 0;
  padding: 18px;
  border-top-right-radius: 8px;
  border-bottom-left-radius: 28px;
  background-color: ${colors.primaria};
  transition: background-color 0.4s;
  cursor: pointer;
  &:hover {
    background-color: ${colors.primariaClara};
  }
`;

export const ContainerImgProduct = styled.img`
  display: flex;
  width: 100%;
  height: 220px;
  object-fit: contain;
  border-radius: 8px;
  transition: opacity 0.4s;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }

  @media (max-width: 500px) {
    height: 120px;
  }
`;

export const ContainerInfosProducts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 10px;
`;

export const ContainerNameSize = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-top: 10px;
`;

export const TextName = styled.p`
  font-family: ${fonte};
  font-size: 16px;
  font-weight: 700;
  margin: 0;
  color: ${colors.preto2};
`;

export const TextSize = styled.p`
  font-family: ${fonte};
  font-size: 16px;
  font-weight: 400;
  margin: 0;
  color: ${colors.preto2};
`;

export const ContainerPrice = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TextPrice = styled.p`
  font-family: ${fonte};
  font-size: 16px;
  font-weight: 600;
  margin: 0;
  color: ${colors.preto2};
`;

export const ContainerBotaoComprar = styled.div`
  display: flex;
  width: 100%;
  margin-top: 20px;
`;
