import styled from "styled-components";

export const ContainerMain = styled.div`
  display: flex;
  margin-top: 110px;

  @media (max-width: 500px) {
    margin-top: 63px;
  }
`;

export const ContainerConteudo = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
  width: 100%;
  height: 79.8dvh;
  box-shadow: 1px 4px 12px 3px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  overflow-y: auto;

  @media (max-width: 500px) {
    height: 86dvh;
    width: 90%;
  }
`;
