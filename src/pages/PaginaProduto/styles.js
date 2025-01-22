import styled from "styled-components";
import { colors } from "../../styles/colors";
import { fonte } from "../../styles/global";

export const ContainerProduto = styled.div`
  display: flex;
  width: 100%;
  margin-top: 110px;
  padding-block: 32px;
  gap: 60px;

  @media (max-width: 860px) {
    flex-direction: column;
    padding-block: 0px;
  }

  @media (max-width: 500px) {
    margin-top: 63px;
    gap: 20px;
  }
`;

export const ContainerEsquerdo = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin: 0px 0px 0px 20px;

  @media (max-width: 860px) {
    width: 95%;
    margin: 0 auto;
    padding-top: 20px;
  }
`;

export const ContainerImgPrincipal = styled.div`
  display: flex;
  width: 100%;
  max-height: 55dvh;
  justify-content: center;

  @media (max-width: 500px) {
    height: 30dvh;
  }
`;

export const ImgPrincipal = styled.img`
  display: flex;
  margin: 0 auto;
  width: 80%;
  object-fit: contain;
`;

export const ContainerImagensSecundarias = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  height: 20dvh;
  margin-top: 20px;

  @media (max-width: 500px) {
    height: 10dvh;
  }
`;

export const ContainerImagem = styled.div`
  display: flex;
  flex: 0.25;
  padding: 4px;
  border: 2px solid transparent;
  border-radius: 8px;
  cursor: pointer;
`;

export const ImgSecundaria = styled.img`
  display: flex;
  object-fit: contain;
  object-position: center;
  width: 100%;
`;

export const ContainerCep = styled.div`
  display: flex;
  flex-direction: column;
  margin-block: 32px;
  padding-top: 24px;
  gap: 16px;
  border-top: 1px solid ${colors.cinzaSuperClaro};
  width: 100%;

  @media (max-width: 860px) {
    display: none;
  }
`;

export const ContainerInputCep = styled.div`
  display: flex;
  gap: 16px;
`;

export const InputCep = styled.input`
  display: flex;
  width: 100%;
  height: 40px;
  border: none;
  padding-left: 10px;
  font-family: ${fonte};
  color: ${colors.preto2};
  border: 1px solid ${colors.cinzaSuperClaro};
  border-radius: 4px;
`;

export const ContainerDireito = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin-right: 20px;
  gap: 12px;

  @media (max-width: 860px) {
    width: 95%;
    margin: 0 auto;
  }

  @media (max-width: 500px) {
    gap: 12px;
  }
`;

export const ContainerNomePreco = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
`;

export const TextoNome = styled.h3`
  display: flex;
  font-family: ${fonte};
  font-size: 30px;
  font-weight: bold;
  color: ${colors.preto2};
  margin: 0;

  @media (max-width: 500px) {
    font-size: 22px;
  }
`;

export const TextoPreco = styled.h3`
  display: flex;
  font-family: ${fonte};
  font-size: 30px;
  font-weight: 600;
  color: ${colors.preto2};
  margin: 0;

  @media (max-width: 500px) {
    font-size: 22px;
  }
`;

export const ContainerDescricao = styled.div`
  display: flex;
  flex-direction: column;
  padding-block: 12px;
`;

export const TextoDescricao = styled.p`
  display: flex;
  font-family: ${fonte};
  font-size: 16px;
  font-weight: 500;
  color: ${colors.preto2};
  margin: 0;
  line-height: 1.5;

  @media (max-width: 500px) {
    font-size: 14px;
  }
`;

export const ContainerCor = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const TextoSecundario = styled.p`
  display: flex;
  font-family: ${fonte};
  font-size: 16px;
  font-weight: 400;
  color: ${colors.preto2};
  margin: 0;

  @media (max-width: 500px) {
    font-size: 16px;
  }
`;

export const ContainerCores = styled.div`
  display: flex;
  gap: 10px;
`;

export const ContainerCorEscolhida = styled.div`
  display: flex;
  width: 36px;
  height: 36px;
  border-radius: 100%;
  background-color: ${colors.verde};
  transition: all 0.2;
  cursor: pointer;
  border: 1px solid ${colors.cinza};
  &:hover {
    box-shadow: inset 0 0 0 1px black, inset 0 0 0 3px white;
  }

  @media (max-width: 500px) {
    width: 48px;
    height: 48px;
  }
`;

export const ContainerTamanho = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 10px;
  margin-top: 12px;
`;

export const ContainerTamanhos = styled.div`
  display: flex;
  gap: 10px;
`;

export const ContainerTamanhoEscolhido = styled.div`
  display: flex;
  padding-block: 8px;
  padding-inline: 24px;
  justify-content: center;
  align-items: center;
  gap: 20px;
  border-radius: 8px;
  height: 40px;
  box-shadow: 1px 4px 12px 3px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  border: 2px solid #e5e7eb;
  transition: all 0.3s ease;
  position: relative;

  @media (max-width: 500px) {
    padding-block: 4px;
    padding-inline: 16px;
  }
`;

export const LinhaContainerTamanhoIndisponivel = styled.span`
  background-color: #e5e7eb;
  position: absolute;
  height: 2px;
  width: 125%;
  transform: rotate(-40deg);
`;

export const ContainerBotoes = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 24px;
  align-items: center;
`;

export const ContainerBotaoAddCarrinho = styled.div`
  display: flex;
  max-width: 28px;
  max-height: 28px;
  padding: 6px;
  border-radius: 4px;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  background-color: ${colors.primaria};
  transition: background-color 0.2s;
  cursor: pointer;
  &:hover {
    background-color: ${colors.primariaClara};
  }
`;

export const TextosInfosAdicionais = styled.p`
  display: flex;
  font-family: ${fonte};
  font-size: 14px;
  font-weight: 300;
  line-height: 1.5;
  color: ${colors.preto2};
  margin: 0;
`;

export const ContainerInfosComplementares = styled.div`
  display: flex;
  flex-direction: column;
  margin-block: 24px;
  padding-block: 24px;
  gap: 10px;
  border-top: 1px solid ${colors.cinzaSuperClaro};
  border-bottom: 1px solid ${colors.cinzaSuperClaro};

  @media (max-width: 500px) {
    padding-bottom: 20px;
  }
`;

export const ContainerTextosInfosAdicionais = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ContainerCep2 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 95%;
  margin: 0 auto;
  padding-bottom: 32px;
  border-top: none;
  border-bottom: 1px solid ${colors.cinzaSuperClaro};
  margin-bottom: 40px;

  @media (min-width: 860px) {
    display: none;
  }
`;

export const ContainerInputCep2 = styled.div`
  display: flex;
  gap: 16px;
`;

export const InputCep2 = styled.input`
  display: flex;
  width: 100%;
  height: 40px;
  border: none;
  padding-left: 10px;
  font-family: ${fonte};
  color: ${colors.preto2};
  border: 1px solid ${colors.cinzaSuperClaro};
  border-radius: 4px;
`;

export const TextoCepCalculado = styled.p`
  display: flex;
  font-family: ${fonte};
  font-size: 16px;
  font-weight: 600;
  color: ${colors.verde};
  margin: 0;
`;
