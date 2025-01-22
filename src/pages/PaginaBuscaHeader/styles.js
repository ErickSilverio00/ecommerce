import styled from "styled-components";
import { colors } from "../../styles/colors";
import { fonte } from "../../styles/global";

export const ContainerPrincipal = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 110px;

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

  @media (max-width: 810px) {
    height: 32dvh;
  }

  @media (max-width: 920px) {
    width: 100%;
    height: fit-content;
  }
`;

export const ContainerBlocoProdutos = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 100%;
  margin: 20px;
  &:last-child {
    margin-bottom: 40px;
  }
`;

export const ContainerPrimeiraLinha = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 100%;
  border-bottom: 1px solid ${colors.cinzaSuperClaro};
  padding-bottom: 20px;
  gap: 10px;

  @media (max-width: 772px) {
    flex-direction: column;
  }
`;

export const Titulo = styled.h2`
  font-family: ${fonte};
  font-size: 32px;
  font-weight: bold;
  margin: 0;
  color: ${colors.preto2};

  @media (max-width: 772px) {
    font-size: 28px;
  }
`;

export const ContainerFiltroOrdenacao = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  width: 320px;

  @media (max-width: 772px) {
    width: 100%;
  }
`;

export const ContainerGeralProdutos = styled.div`
  display: flex;
  width: 100%;
  gap: 20px;
`;

export const ContainerFiltros = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 280px;
  min-width: 280px;

  @media (max-width: 772px) {
    display: none;
  }
`;

export const ContainerProdutos = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  max-width: 100%;
  height: min-content;
`;

export const TextoFiltros = styled.p`
  display: flex;
  font-family: ${fonte};
  font-size: 14px;
  font-weight: 600;
  color: ${colors.preto2};
  cursor: pointer;
  margin: 0;
  width: min-content;
`;

export const ContainerFilrosSubcategorias = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid ${colors.cinzaSuperClaro};

  @media (max-width: 772px) {
    width: 100%;
    padding-top: 20px;
  }
`;

export const ContainerTituloFiltroCategorias = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;

  .plus-color {
    transition: all 0.3s;
  }

  &:hover {
    .plus-color {
      fill: ${colors.preto2};
    }
  }
`;

export const ContainerOpcoesCategorias = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ContainerOpcaoCategoria = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
`;

export const CheckboxCategoria = styled.input`
  display: flex;
  width: 20px;
  height: 20px;
  cursor: pointer;
`;

export const ContainerFiltrosCores = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-block: 20px;
  border-bottom: 1px solid ${colors.cinzaSuperClaro};

  @media (max-width: 772px) {
    width: 100%;
  }
`;

export const ContainerTituloFiltroCores = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;

  .plus-color {
    transition: all 0.3s;
  }

  &:hover {
    .plus-color {
      fill: ${colors.preto2};
    }
  }
`;

export const ContainerOpcoesCores = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ContainerOpcaoCor = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
`;

export const CheckboxCor = styled.input`
  display: flex;
  width: 20px;
  height: 20px;
  cursor: pointer;
`;

export const ContainerFiltrosTamanhos = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-block: 20px;
  border-bottom: 1px solid ${colors.cinzaSuperClaro};

  @media (max-width: 772px) {
    width: 100%;
  }
`;

export const ContainerTituloFiltroTamanhos = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;

  .plus-color {
    transition: all 0.3s;
  }

  &:hover {
    .plus-color {
      fill: ${colors.preto2};
    }
  }
`;

export const ContainerOpcoesTamanhos = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ContainerOpcaoTamanho = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
`;

export const CheckboxTamanho = styled.input`
  display: flex;
  width: 20px;
  height: 20px;
  cursor: pointer;
`;

export const TextoCheckbox = styled.p`
  display: flex;
  font-family: ${fonte};
  font-size: 12px;
  font-weight: 400;
  color: ${colors.preto2};
  margin: 0;
`;

export const TextoNaoEncontrou = styled.h1`
  display: flex;
  font-family: ${fonte};
  font-size: 22px;
  font-weight: 600;
  color: ${colors.preto2};
  margin: 0;
  line-height: 0.9;
`;

export const ContainerAnimacaoFiltro = styled.div`
  width: -webkit-fill-available;
  height: 100dvh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 0 auto;
`;

export const LogoContainer = styled.div`
  width: 300px;

  img {
    max-width: 300px;
  }
`;

export const LoadingContainer = styled.div`
  width: 300px;
  display: flex;
  justify-content: center;

  img {
    max-width: 300px;
  }
`;

export const ContainerVoltarDrawer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  cursor: pointer;
  padding-bottom: 10px;
  border-bottom: 1px solid ${colors.cinzaSuperClaro};
`;
