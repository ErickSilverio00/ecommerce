import styled from "styled-components";
import { colors } from "../../../styles/colors";
import { fonte } from "../../../styles/global";

export const ContainerMain = styled.div`
  display: flex;
  margin-top: 110px;
  height: 50vh;

  @media (max-width: 500px) {
    margin-top: 63px;
  }
`;

export const ContainerFalhouPedido = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const ContainerTituloPedidoFalhou = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  margin-bottom: 10px;
`;

export const TituloPedidoFalhou = styled.h1`
  display: flex;
  font-family: ${fonte};
  font-size: 32px;
  font-weight: bold;
  color: ${colors.vermelho};
  margin: 0;
`;

export const DescricaoPedidofalhou1 = styled.h4`
  display: flex;
  font-family: ${fonte};
  font-size: 18px;
  font-weight: bold;
  color: ${colors.preto2};
  margin: 0;
`;

export const DescricaoPedidoFalhou2 = styled.h6`
  display: flex;
  font-family: ${fonte};
  font-size: 14px;
  font-weight: 400;
  color: ${colors.preto2};
  margin: 0;
  margin: 5px 0px 20px 0px;
`;
