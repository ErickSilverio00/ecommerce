import styled from "styled-components";
import { colors } from "../../../styles/colors";
import { fonte } from "../../../styles/global";

export const ContainerPagamentoConcluido = styled.main`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 40px;
  margin-inline: 20px;
  margin-top: 150px;

  @media (max-width: 500px) {
    margin-top: 103px;
  }
`;

export const ContainerBlocoInfos = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 55%;
  min-height: min-content;
  padding: 20px;
  background-color: #f9fafb;
  border-radius: 4px;

  @media (max-width: 1170px) {
    width: 70%;
  }

  @media (max-width: 1040px) {
    width: 80%;
  }

  @media (max-width: 400px) {
    width: 90%;
  }
`;

export const ContainerTituloPagamento = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const ContainerEscritaTitulo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const TituloPagamento = styled.h4`
  font-family: ${fonte};
  font-size: 22px;
  font-weight: bold;
  margin: 0;
  color: ${colors.preto2};
`;

export const TextoPedido = styled.p`
  font-family: ${fonte};
  font-size: 18px;
  font-weight: 400;
  margin: 0;
  color: ${colors.preto2};
`;

export const ContainerDataEstimadaEntrega = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 20px;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  height: 48px;
  background-color: ${colors.verdeClaro};
  border-radius: 4px;
`;

export const TextoDataEstimada = styled.p`
  font-family: ${fonte};
  font-size: 14px;
  font-weight: 600;
  margin: 0;
  color: ${colors.branco};
`;

export const ContainerPagamentoDados = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 40px;

  @media (max-width: 980px) {
    flex-direction: column;
  }
`;

export const ContainerPagamentoDadosEsquerda = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  gap: 20px;

  @media (max-width: 980px) {
    width: 100%;
  }
`;

export const ContainerPagamentoDadosDireita = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;

  @media (max-width: 980px) {
    width: 100%;
  }
`;

export const ContainerItemPagamento = styled.div`
  display: flex;
`;

export const ContainerImagemPagamento = styled.div`
  display: flex;
  height: 60px;
  border-radius: 8px;
  transition: opacity 0.4s;
  &:hover {
    opacity: 0.8;
  }
`;

export const ContainerInfosItemPagamento = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-left: 20px;
`;

export const ContainerInfosItemQtdePagamento = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-left: 20px;
`;

export const ContainerEnderecoPagamento = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media (max-width: 980px) {
    margin-top: 20px;
  }
`;

export const TituloEnderecoPagamento = styled.h3`
  font-family: ${fonte};
  font-size: 16px;
  font-weight: bold;
  margin: 0;
  color: ${colors.preto2};
  margin-bottom: 5px;
`;

export const TextoEnderecoPagamento = styled.p`
  font-family: ${fonte};
  font-size: 14px;
  font-weight: 400;
  margin: 0;
  color: ${colors.preto2};
`;

export const ContainerInfosValoresPagamento = styled.div`
  display: flex;
  flex-direction: column;
  margin-block: 15px;
  gap: 10px;
`;

export const ContainerInfoPagamento = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const ContainerItemPagamento2 = styled.div`
  display: flex;
  gap: 24px;
  align-items: center;
`;
