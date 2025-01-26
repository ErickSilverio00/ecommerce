import styled from "styled-components";
import { colors } from "../../styles/colors";
import { fonte } from "../../styles/global";

export const ContainerCarrinho = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 40px;
  margin-top: 130px;

  @media (max-width: 500px) {
    margin-top: 83px;
  }
`;

export const ContainerNavegacaoPagamento = styled.div`
  display: flex;
  margin: 0 auto;
  gap: 24px;
  align-items: center;
  padding-block: 20px;

  @media (max-width: 960px) {
    display: none;
  }
`;

export const ContainerItemPagamento = styled.div`
  display: flex;
  gap: 24px;
  align-items: center;
`;

export const LinhaPagamento = styled.div`
  display: flex;
  width: 32px;
  height: 1px;
  background-color: ${colors.cinzaSuperClaro};
`;

export const TextoItemPagamento = styled.p`
  font-family: ${fonte};
  font-size: 12px;
  font-weight: bold;
  margin: 0;
  color: ${colors.primaria};
`;

export const ContainerEsquerdaDireita = styled.div`
  display: flex;
  width: 100%;
  gap: 40px;

  @media (max-width: 960px) {
    flex-direction: column;
    gap: 20px;
  }
`;

export const ContainerEsquerdo = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;

  @media (max-width: 960px) {
    width: 100%;
  }
`;

export const ContainerEndereco = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 20px;
  background-color: #f9fafb;
  border-radius: 4px;
  border-left: 4px solid ${colors.primaria};
`;

export const ContainerTituloEndereco = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const ContainerEnderecoCadastrado = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
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
  bottom: 0px;

  @media (max-width: 500px) {
    position: initial;
  }
`;

export const ContainerFormularioEdicaoEndereco = styled.div`
  display: flex;
  flex-direction: column;
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

export const ContainerItensCarrinho = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f9fafb;
  border-radius: 4px;
  border-left: 4px solid ${colors.primaria};
  margin: 40px 0px 20px 0px;
  padding: 20px 20px 0px 20px;

  @media (max-width: 960px) {
    margin: 20px 0px 0px 0px;
  }
`;

export const ContainerTituloCarrinho = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const TituloCarrinho = styled.h2`
  font-family: ${fonte};
  font-size: 22px;
  font-weight: bold;
  margin: 0;
  color: ${colors.preto2};
`;

export const ContainerItem = styled.div`
  display: flex;
  width: 100%;
  padding-block: 24px;
  gap: 16px;
`;

export const ContainerImagemCarrinho = styled.div`
  display: flex;
  height: 90px;
  border-radius: 8px;
  transition: opacity 0.4s;
  &:hover {
    opacity: 0.8;
  }
`;

export const ImagemCarrinho = styled.img`
  width: 100%;
  object-fit: contain;
`;

export const ContainerInfosItem = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  gap: 20px;
`;

export const ContainerInfosItemPrimeira = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 220px;
`;

export const ContainerInfosItemSegunda = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  height: min-content;
`;

export const ContainerSelect = styled.select`
  height: 36px;
  width: 63px;
  padding: 6px;
  border-color: ${colors.cinzaSuperClaro};
  border-radius: 6px;
`;

export const ContainerInfosItemTerceira = styled.div`
  display: flex;
  gap: 10px;
  height: min-content;
`;

export const NomeIitem = styled.p`
  font-family: ${fonte};
  font-size: 16px;
  font-weight: 400;
  margin: 0;
  color: ${colors.preto2};
`;

export const ContainerSegundaLinha = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CorETamanho = styled.p`
  font-family: ${fonte};
  font-size: 14px;
  font-weight: 400;
  margin: 0;
  color: ${colors.cinza};
`;

export const ContainerTerceiraLinha = styled.div`
  display: flex;
`;

export const PrecoItem = styled.p`
  font-family: ${fonte};
  font-size: 14px;
  font-weight: 400;
  margin: 0;
  color: ${colors.verde};
`;

export const TextoQtde = styled.p`
  font-family: ${fonte};
  font-size: 14px;
  font-weight: 600;
  margin: 0;
  color: ${colors.preto2};
`;

export const ContainerDireito = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  height: min-content;
  background-color: #f9fafb;
  border-radius: 8px;

  @media (max-width: 960px) {
    width: 100%;
    text-align: center;
  }
`;

export const ContainerCep = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 20px 0px 20px;
  gap: 20px;
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
`;

export const TextoCepCalculado = styled.p`
  display: flex;
  font-family: ${fonte};
  font-size: 14px;
  font-weight: 400;
  color: ${colors.preto2};
  margin: 0;
`;

export const TextoFreteGratis = styled.p`
  display: flex;
  font-family: ${fonte};
  font-size: 16px;
  font-weight: 600;
  color: ${colors.verde};
  margin: 0;
`;

export const ContainerResumo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

export const TituloResumo = styled.h4`
  font-family: ${fonte};
  font-size: 22px;
  font-weight: bold;
  margin: 0;
  color: ${colors.preto2};
`;

export const ContainerInfosResumo = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 8px;
  margin-bottom: 16px;
`;

export const ContainerInfo = styled.div`
  display: flex;
  justify-content: space-between;
  padding-block: 16px;
  border-bottom: 1px solid ${colors.cinzaSuperClaro};
`;

export const TextoInfo = styled.p`
  font-family: ${fonte};
  font-size: 14px;
  font-weight: 400;
  margin: 0;
  color: ${colors.cinza};
`;

export const ValorInfo = styled.p`
  font-family: ${fonte};
  font-size: 14px;
  font-weight: bold;
  margin: 0;
  color: ${colors.preto2};
`;

export const ContainerTotal = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 32px;
`;

export const TextoTotal = styled.p`
  font-family: ${fonte};
  font-size: 16px;
  font-weight: 400;
  margin: 0;
  color: ${colors.preto2};
`;

export const ValorTotal = styled.p`
  font-family: ${fonte};
  font-size: 16px;
  font-weight: bold;
  margin: 0;
  color: ${colors.preto2};
`;

export const ContainerCarrinhoVazio = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 50%;
  align-items: center;
  margin: 0 auto;
  padding-block: 58.5px;

  @media (max-width: 672px) {
    width: 100%;
  }
`;

export const TextoTituloCarrinhoVazio = styled.h1`
  font-family: ${fonte};
  font-size: 24px;
  font-weight: bold;
  margin: 0;
  color: ${colors.preto2};
  text-align: center;
`;

export const TextoDescricaoCarrinhoVazio = styled.h3`
  font-family: ${fonte};
  font-size: 16px;
  font-weight: 400;
  margin: 0;
  color: ${colors.preto2};
  text-align: center;
`;

export const ContainerResumoPagamento = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  min-height: min-content;
  padding: 20px 60px;
  background-color: #f9fafb;
  border-radius: 4px;

  @media (max-width: 980px) {
    padding: 20px;
  }
`;

export const ContainerResumoDados = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 20px;

  @media (max-width: 980px) {
    flex-direction: column;
  }
`;

export const ContainerResumoDadosEsquerda = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  gap: 20px;

  @media (max-width: 980px) {
    width: 100%;
  }
`;

export const ContainerResumoDadosDireita = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;

  @media (max-width: 980px) {
    width: 100%;
  }
`;

export const ContainerItemResumo = styled.div`
  display: flex;
`;

export const ContainerImagemResumo = styled.div`
  display: flex;
  height: 60px;
  border-radius: 8px;
  transition: opacity 0.4s;
  &:hover {
    opacity: 0.8;
  }

  @media (max-width: 600px) {
    width: 18%;
  }
`;

export const ContainerInfosItemResumo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-left: 20px;

  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const ContainerInfosItemQtdeResumo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-left: 20px;
`;

export const ContainerEnderecoResumo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media (max-width: 980px) {
    margin-top: 20px;
  }
`;

export const TituloEnderecoResumo = styled.h3`
  font-family: ${fonte};
  font-size: 16px;
  font-weight: bold;
  margin: 0;
  color: ${colors.preto2};
  margin-bottom: 5px;
`;

export const TextoEnderecoResumo = styled.p`
  font-family: ${fonte};
  font-size: 14px;
  font-weight: 400;
  margin: 0;
  color: ${colors.preto2};
`;

export const ContainerInfosValoresResumo = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 15px;
  gap: 10px;
`;

export const ContainerInfoResumo = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;
