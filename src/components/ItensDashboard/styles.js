import styled from "styled-components";
import { colors } from "../../styles/colors";
import { fonte } from "../../styles/global";

export const ContainerPrincipal = styled.div`
  background-color: ${colors.primariaClara};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 85.2dvh;
  width: 63px;
  max-height: 100%;
  transition: width 0.4s;
`;

export const ContainerListaNavegacoes = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  padding: 0;
  margin-block: 0px;
  align-items: center;
`;

export const ItemListaDeItens = styled.li`
  width: 100%;
  cursor: pointer;
`;

export const ContainerSair = styled.div`
  display: flex;
  flex-direction: column;
  border-top: 1px solid ${colors.branco};
  cursor: pointer;
`;

export const ContainerBotao = styled.div`
  display: flex;
  align-items: center;
  color: ${colors.branco};
  font-weight: 600;
  width: max-content;
  transition: opacity 0.3s;
  &:hover {
    opacity: 0.4;
  }
`;

export const TextoDesligar = styled.div`
  font-size: 16px;
  font-family: ${fonte};
`;
