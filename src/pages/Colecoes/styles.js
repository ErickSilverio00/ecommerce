import styled from "styled-components";
import { colors } from "../../styles/colors";

export const ContainerPrincipal = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 110px;
  overflow-x: hidden;

  @media (max-width: 500px) {
    margin-top: 63px;
  }
`;

export const ContainerSlides = styled.div`
  display: flex;
  width: 100%;
  height: 50dvh;

  @media (max-width: 810px) {
    height: 32dvh;
  }

  @media (max-width: 920px) {
    flex-direction: column;
    height: fit-content;
  }
`;

export const ContainerImagem = styled.img`
  display: flex;
  width: 100%;
  height: 50dvh;
  object-fit: cover;
  cursor: pointer;

  @media (max-width: 810px) {
    height: 32dvh;
  }

  @media (max-width: 920px) {
    width: 100%;
    height: 32dvh;
  }
`;

export const ContainerBlocoProdutos = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 100%;
  margin-top: 20px;
  &:last-child {
    margin-bottom: 40px;
  }
`;

export const ContainerPrimeiraLinha = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 100%;
  align-items: end;
  margin-inline: 20px;
`;

export const ContainerSetas = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;

export const SetaEsquerda = styled.div`
  display: flex;
  background-color: ${colors.cinzaSuperClaro};
  padding: 10px;
  border-radius: 100%;
  cursor: pointer;
`;

export const SetaDireita = styled.div`
  display: flex;
  background-color: ${colors.primaria};
  padding: 10px;
  border-radius: 100%;
  cursor: pointer;
`;

export const ContainerProdutos = styled.div`
  display: flex;
  gap: 20px;
  max-width: 100%;
`;
