import styled from "styled-components";
import { colors } from "../../../styles/colors";
import { fonte } from "../../../styles/global";

export const ContainerMeusPedidos = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  height: 100%;
`;

export const ContainerTituloMeusPedidos = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const TituloMeusPedidos = styled.h1`
  display: flex;
  font-family: ${fonte};
  font-size: 32px;
  font-weight: bold;
  color: ${colors.preto2};
  margin: 0;

  @media (max-width: 440px) {
    font-size: 22px;
  }
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
`;

export const DescricaoNaoTevePedido = styled.h6`
  display: flex;
  font-family: ${fonte};
  font-size: 14px;
  font-weight: 400;
  color: ${colors.vermelho};
  margin: 0;
  margin: 10px 0px 20px 0px;
`;

export const ContainerPedidos = styled.div`
  display: flex;
  flex-direction: column;
  height: max-content;
  width: 100%;
  gap: 20px;
  margin-top: 20px;
  padding-bottom: 20px;
`;

export const ContainerPedido = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: max-content;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 4px;
  gap: 20px;
`;

export const ContainerBlocoPedido = styled.div`
  display: flex;
  width: 100%;
  gap: 10px;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 600px) {
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
  gap: 10px;
  align-items: center;
  font-weight: 400;
  color: ${colors.preto2};
  margin: 0;
`;

export const FirstLine = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 40px 0px 0px 20px;
  padding: 10px 0px 10px 0px;
  border-bottom: 1px solid ${colors.cinzaSuperClaro};
`;

export const Containerprodutos = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 0px 20px 20px;
  gap: 20px;
`;

export const ContainerItemComprado = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 20px;
`;

export const ContainerInfosProduto = styled.div`
  display: flex;
  gap: 20px;
`;

export const ContainerImagemProduto = styled.div`
  display: flex;
  height: 100px;
  border-radius: 8px;
  transition: opacity 0.4s;
  &:hover {
    opacity: 0.8;
  }
`;

export const ImagemProduto = styled.img`
  width: 100%;
  object-fit: contain;
`;

export const ContainerEscritasProdutos = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const TextoNomeProduto = styled.p`
  font-family: ${fonte};
  font-size: 14px;
  font-weight: bold;
  margin: 0;
  color: ${colors.preto2};
`;

export const TextoInfosProduto = styled.p`
  font-family: ${fonte};
  font-size: 14px;
  font-weight: 400;
  margin: 0;
  color: ${colors.preto2};
`;

export const ContainerInfosPrecos = styled.div`
  display: flex;
`;

export const TextoTotal = styled.p`
  font-family: ${fonte};
  font-size: 16px;
  font-weight: bold;
  margin: 0;
  color: ${colors.preto2};
`;

export const BlocoFinal = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 0px 20px 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid ${colors.cinzaSuperClaro};
`;

export const ContainerNav = styled.div`
  display: flex;
  width: 100%;
  gap: 20px;
  margin-top: 20px;

  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

export const ContainerBlocoNav = styled.div`
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

export const TextoMeusPedidos = styled.h1`
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
