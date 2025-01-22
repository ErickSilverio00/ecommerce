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
  height: 86dvh;
  z-index: 0;

  @media (max-width: 810px) {
    height: 32dvh;
  }

  .swiper-button-next,
  .swiper-button-prev {
    background-color: #fff;
    color: ${colors.primaria};
    border-radius: 100%;
    padding: 16px;
    align-items: center;
    width: 16px;
    height: 16px;
  }
  .swiper-button-next:after,
  .swiper-button-prev:after {
    font-size: 14px;
    font-weight: bold;
  }
`;

export const ContainerImagem = styled.img`
  display: flex;
  width: 100%;
  height: 86dvh;
  object-fit: cover;

  @media (max-width: 810px) {
    height: 32dvh;
  }
`;

export const ContainerApresentacoesCategorias = styled.div`
  display: flex;
  width: 90%;
  justify-content: center;
  align-items: center;
  gap: 40px;
  margin: 0 auto;
  margin-block: 80px;

  @media (max-width: 772px) {
    flex-wrap: wrap;
    gap: 20px;
  }

  @media (max-width: 470px) {
    margin-block: 40px;
  }
`;

export const ContainerBlocoProdutos = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 100%;
  margin-bottom: 80px;

  @media (max-width: 470px) {
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
  gap: 40px;
  max-width: 100%;
`;
