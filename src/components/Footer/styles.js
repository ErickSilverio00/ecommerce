import styled from "styled-components";
import { colors } from "../../styles/colors";
import { fonte } from "../../styles/global";

export const ContainerFooter = styled.footer`
  display: flex;
  flex-direction: column;
`;

export const FirstLine = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-around;
  padding-block: 60px;
  gap: 20px;
  background-color: ${colors.cinzaSuperClaro};

  @media (max-width: 800px) {
    flex-direction: column;
    padding-block: 40px;
  }
`;

export const FirstColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
`;

export const LogoMC = styled.img`
  width: 50%;
`;

export const DefaultTitle = styled.h5`
  font-family: ${fonte};
  font-size: 16px;
  font-weight: 600;
  margin: 0;
  color: ${colors.preto2};

  @media (max-width: 1000px) {
    font-size: 12px;
  }

  @media (max-width: 800px) {
    font-size: 16px;
    text-align: center;
  }

  @media (max-width: 500px) {
    font-size: 14px;
  }
`;

export const DefaultText = styled.a`
  font-family: ${fonte};
  font-size: 14px;
  font-weight: 400;
  margin: 0;
  color: ${colors.preto2};
  cursor: pointer;
  text-decoration: none;
  transition: color 0.4s;
  &:hover {
    color: ${colors.cinza};
  }

  @media (max-width: 1000px) {
    font-size: 10px;
  }

  @media (max-width: 800px) {
    font-size: 14px;
    text-align: center;
  }

  @media (max-width: 500px) {
    font-size: 12px;
  }
`;

export const DefaultText2 = styled.p`
  font-family: ${fonte};
  font-size: 14px;
  font-weight: 400;
  margin: 0;
  color: ${colors.preto2};

  @media (max-width: 1000px) {
    font-size: 10px;
  }

  @media (max-width: 800px) {
    font-size: 14px;
    text-align: center;
  }
`;

export const ContainerIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const ContainerIcon = styled.a`
  display: flex;
  cursor: pointer;
`;

export const SecondColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ThirdColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const FourthColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-right: 80px;

  @media (max-width: 800px) {
    padding-right: 0px;
  }
`;

export const ContainerInfos = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ContainerForm = styled.div`
  display: flex;
  gap: 10px;
`;

export const ContainerFormButton = styled.button`
  background-color: ${colors.primaria};
  border-style: none;
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 10px;
  height: 40px;
  border-radius: 4px;
  transition: background-color 0.4s;
  &:hover {
    background-color: ${colors.primariaClara};
  }
`;

export const LastLine = styled.div`
  width: 100%;
  height: 58px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: ${colors.preto2};
`;

export const TextLastLine = styled.p`
  font-family: ${fonte};
  font-size: 14px;
  font-weight: 400;
  margin: 0;
  color: ${colors.branco};
`;
