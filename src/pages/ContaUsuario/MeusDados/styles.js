import styled from "styled-components";
import { colors } from "../../../styles/colors";
import { fonte } from "../../../styles/global";

export const ContainerMeusDados = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  height: 100%;
  overflow-y: auto;
`;

export const ContainerPrimeiraLinhaMeusDados = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

export const ContainerTituloMeusDados = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const TituloMeusDados = styled.h1`
  display: flex;
  font-family: ${fonte};
  font-size: 32px;
  font-weight: bold;
  color: ${colors.preto2};
  margin: 0;

  @media (max-width: 540px) {
    font-size: 20px;
  }
`;

export const ContainerConteudoMeusDados = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: space-between;
  gap: 20px;
  margin-top: 20px;

  @media (max-width: 772px) {
    flex-direction: column;
    margin-bottom: 40px;
  }
`;

export const ContainerLadoEsquerdo = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 4px;
`;

export const ContainerLadoDireito = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 4px;
`;

export const ContainerTituloBloco = styled.div`
  display: flex;
  height: min-content;
  align-items: center;
  gap: 10px;
`;

export const TituloBloco = styled.p`
  display: flex;
  font-family: ${fonte};
  font-size: 16px;
  font-weight: 600;
  color: ${colors.preto2};
  margin: 0;
`;

export const ContainerFormularioDadosCadastrais = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

export const ContainerCamposDadosCadastrais = styled.form`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

export const ContainerBotoesDadosCadastrais = styled.div`
  display: flex;
  width: 100%;
  gap: 10px;
  margin-top: 20px;

  @media (max-width: 540px) {
    flex-direction: column;
  }
`;

export const ContainerEndereco = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

export const ContainerEnderecoCadastrado = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 20px;
  border: 1px solid ${colors.preto2};
  border-radius: 4px;
  position: relative;
`;

export const TextosEnderecos = styled.p`
  display: flex;
  font-family: ${fonte};
  font-size: 14px;
  font-weight: 300;
  color: ${colors.preto2};
  margin: 0;
`;

export const TextoEditarEndereco = styled.p`
  display: flex;
  font-family: ${fonte};
  font-size: 14px;
  font-weight: 600;
  color: ${colors.preto2};
  margin: 0;
  border-bottom: 1px solid ${colors.preto2};
  width: min-content;
  cursor: pointer;
  position: absolute;
  right: 20px;
  bottom: 20px;

  @media (max-width: 500px) {
    position: initial;
  }
`;

export const ContainerSairEdicaoEndereco = styled.div`
  display: flex;
  width: min-content;
  align-items: center;
  gap: 10px;
  cursor: pointer;
`;

export const ContainerFormularioEdicaoEndereco = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

export const ContainerCamposEdicaoEndereco = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

export const ContainerBotoesEdicaoEndereco = styled.div`
  display: flex;
  margin-top: 20px;
  justify-content: end;
`;

export const ContainerNaoTemEndereco = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const TituloNaoTemEndereco = styled.h3`
  display: flex;
  font-family: ${fonte};
  font-size: 18px;
  font-weight: 600;
  color: ${colors.preto2};
  margin: 0;
`;

export const DescricaoNaoTemEndereco = styled.p`
  display: flex;
  font-family: ${fonte};
  font-size: 12px;
  font-weight: 400;
  color: ${colors.preto2};
  margin: 0;
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

export const TextoMeusDados = styled.h1`
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
