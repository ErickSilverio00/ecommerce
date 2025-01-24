import styled from "styled-components";
import { colors } from "../../styles/colors";
import { fonte } from "../../styles/global";

export const ContainerFavoritos = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 40px;
  margin-top: 130px;

  @media (max-width: 500px) {
    margin-top: 83px;
  }
`;

export const ContainerTitulo = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const Titulo = styled.h2`
  font-family: ${fonte};
  font-size: 36px;
  font-weight: bold;
  margin: 0;
  color: ${colors.primaria};
`;

export const ContainerProdutosFavoritos = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;
