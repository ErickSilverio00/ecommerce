import styled from "styled-components";
import { colors } from "../../styles/colors";
import { fonte } from "../../styles/global";

export const ContainerTela = styled.div`
  width: 100%;
  max-height: 100dvh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ContainerPageNotFound = styled.div`
  display: flex;
  flex-direction: column;
  height: 100dvh;
  gap: 20px;
  justify-content: center;
  text-align: center;
  align-items: center;
  margin-top: 110px;

  @media (max-width: 500px) {
    margin-top: 63px;
  }
`;

export const ImgRotaErrada = styled.img`
  display: flex;
  object-fit: contain;
  width: 320px;

  @media (max-width: 424px) {
    width: 240px;
  }
`;

export const TituloPageNotFound = styled.h1`
  display: flex;
  font-family: ${fonte};
  font-size: 42px;
  font-weight: bold;
  color: ${colors.preto2};
  margin: 0;

  @media (max-width: 544px) {
    font-size: 32px;
  }

  @media (max-width: 424px) {
    font-size: 26px;
  }
`;

export const DescricaoPageNotFound = styled.p`
  display: flex;
  font-family: ${fonte};
  font-size: 18px;
  font-weight: 400;
  max-width: 50%;
  color: ${colors.cinza};
  margin: 0;

  @media (max-width: 800px) {
    max-width: 70%;
  }

  @media (max-width: 544px) {
    font-size: 16px;
  }

  @media (max-width: 424px) {
    max-width: 75%;
  }
`;

export const BotaoPageNotFound = styled.div`
  display: flex;
  width: 25%;
  height: 48px;
  align-items: center;
  justify-content: center;
  border-radius: 56px;
  background-color: ${colors.vermelho};
  box-shadow: 1px 4px 12px 3px rgba(0, 0, 0, 0.1);
  font-family: ${fonte};
  font-size: 16px;
  font-weight: 600;
  color: ${colors.branco};
  cursor: pointer;
  transition: all 0.2s;
  &:hover {
    background-color: ${colors.vermelhoClaro};
  }

  .link {
    display: flex;
    text-decoration: none;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    color: ${colors.branco};
  }

  @media (max-width: 800px) {
    width: 50%;
  }

  @media (max-width: 544px) {
    font-size: 14px;
  }
`;
