import styled from "styled-components";
import { colors } from "../../../../styles/colors";
import { fonte } from "../../../../styles/global";

export const ContainerBallImg = styled.div`
  display: flex;
  width: 40%;
  padding: 20px;
  justify-content: center;
  background-color: ${colors.primaria};
  border-radius: 100%;

  @media (max-width: 470px) {
    padding: 10px;
  }
`;

export const ContainerImgProduct = styled.img`
  display: flex;
  width: 100%;
`;

export const ContainerInfosProducts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;

  @media (max-width: 470px) {
    margin-top: 10px;
    gap: 5px;
  }
`;

export const TextName = styled.p`
  font-family: ${fonte};
  font-size: 22px;
  font-weight: 700;
  margin: 0;
  color: ${colors.preto2};

  @media (max-width: 470px) {
    font-size: 12px;
  }
`;

export const TextDescription = styled.p`
  font-family: ${fonte};
  font-size: 16px;
  font-weight: 400;
  margin: 0;
  color: ${colors.preto2};

  @media (max-width: 470px) {
    font-size: 10px;
  }
`;

export const ContainerProduct = styled.a`
  display: flex;
  flex-direction: column;
  flex: 1;
  flex-basis: 100px;
  padding-inline: 20px;
  padding-block: 40px;
  box-shadow: 1px 4px 12px 3px rgba(0, 0, 0, 0.1);
  border-radius: 16px;
  cursor: pointer;
  text-align: center;
  align-items: center;
  transition: all 0.3s;
  text-decoration: none;

  @media (min-width: 772px) {
    &:hover {
      background-color: ${colors.primaria};
    }
    &:hover ${ContainerBallImg} {
      background-color: ${colors.branco};
    }
    &:hover ${TextName} {
      color: ${colors.branco};
    }
    &:hover ${TextDescription} {
      color: ${colors.branco};
    }
  }

  @media (max-width: 470px) {
    width: -webkit-fill-available;
    padding: 15px;
  }
`;
