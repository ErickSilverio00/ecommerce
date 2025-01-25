import styled from "styled-components";
import { colors } from "../../styles/colors";
import { fonte } from "../../styles/global";

export const ContainerHeader = styled.header`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: #fff;
  z-index: 10;
`;

export const FirstLine = styled.div`
  display: flex;
  width: 100%;
  height: 63px;
  gap: 80px;
  justify-content: center;
  background-color: ${colors.primariaClara};

  @media (max-width: 672px) {
    gap: 40px;
  }

  @media (max-width: 500px) {
    background-color: ${colors.primaria};
  }

  @media (max-width: 430px) {
    gap: 15px;
  }
`;

export const FirstLineLeft = styled.div`
  display: flex;
  width: 100%;
  max-width: 1200px;
  gap: 20px;
  align-items: center;
  padding-left: 20px;

  .link_logo {
    width: 80px;
  }

  @media (max-width: 820px) {
    padding-left: 20px;
  }

  @media (max-width: 500px) {
    padding-left: 10px;
    gap: 10px;
  }
`;

export const TextFirstLine2 = styled.p`
  font-family: ${fonte};
  font-size: 12px;
  font-weight: 600;
  margin: 0;
  color: ${colors.primariaClara};

  @media (max-width: 672px) {
    font-size: 10px;
  }

  @media (max-width: 500px) {
    display: none;
  }
`;

export const LogoMC = styled.img`
  width: 100%;
  cursor: pointer;
`;

export const ContainerSearch = styled.div`
  display: flex;
  width: 70%;
  height: 32px;
  position: relative;

  @media (max-width: 1020px) {
    width: 100%;
  }
`;

export const InputSearch = styled.input`
  width: 100%;
  border-radius: 4px;
  border: none;
  padding-inline: 16px;
  font-family: ${fonte};
  font-weight: 500;

  @media (max-width: 430px) {
    font-size: 12px;
    padding-inline: 10px;
  }
`;

export const ContainerBotaoBuscar = styled.button`
  display: flex;
  width: 32px;
  height: 32px;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: ${colors.primariaClara};
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  position: absolute;
  right: 0px;
  cursor: pointer;
  transition: background-color 0.2s;
  &:hover {
    background-color: ${colors.primariaClara};
  }

  @media (max-width: 772px) {
    display: none;
  }
`;

export const ContainerListaDeBuscas = styled.ul`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 100%;
  width: 100%;
  padding: 0;
  margin: 4px 0px 0px 0px;
  box-shadow: 1px 4px 12px 3px rgba(0, 0, 0, 0.1);
  list-style: none;

  @media (max-width: 772px) {
    width: 100vw;
    margin: 4px 0px 0px -104px;
  }

  @media (max-width: 600px) {
    margin: 4px 0px 0px -96px;
  }

  @media (max-width: 500px) {
    margin: 4px 0px 0px -80px;
  }
`;

export const ItemListaDeBuscas = styled.li`
  display: flex;
  padding: 10px;
  border-bottom: 1px solid ${colors.cinzaSuperClaro};
  gap: 10px;
  align-items: center;
  background-color: ${colors.branco};
  transition: all 0.2s;
  cursor: pointer;

  &:hover {
    background-color: ${colors.cinzaSuperClaro};
  }

  &.selected {
    background-color: ${colors.cinzaSuperClaro};
  }
`;

export const ImgItem = styled.img`
  display: flex;
  object-fit: contain;
  width: 32px;
  height: 32px;
`;

export const TextoProduto = styled.p`
  display: flex;
  font-family: ${fonte};
  font-size: 14px;
  font-weight: 600;
  color: ${colors.preto2};
  margin: 0;
`;

export const TextoProdutoNaoEncontrado = styled.p`
  display: flex;
  font-family: ${fonte};
  font-size: 14px;
  font-weight: 400;
  color: ${colors.cinza};
  margin: 0;
`;

export const FirstLineRight = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  max-width: 1200px;
  padding-right: 20px;

  @media (max-width: 528px) {
    gap: 10px;
  }

  @media (max-width: 500px) {
    padding-right: 10px;
  }

  .heart-icon {
    cursor: pointer;
    transition: fill 0.4s;
  }

  .shopping_cart-icon {
    cursor: pointer;
    transition: fill 0.4s;
  }

  .contato_link {
    text-decoration: none;
  }
`;

export const ContainerContadorItens = styled.div`
  display: flex;
  width: 18px;
  height: 18px;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  background-color: ${colors.primariaClara};
  position: absolute;
  right: -5px;
  top: -5px;
`;

export const TextoContadorItens = styled.p`
  display: flex;
  font-family: ${fonte};
  font-size: 10px;
  font-weight: 600;
  color: ${colors.branco};
  cursor: pointer;
  margin: 0;
`;

export const ContainerLoginCadastro = styled.div`
  display: flex;
  width: max-content;
  align-items: center;
  gap: 5px;
`;

export const TextLoginCadastro = styled.p`
  color: #fff;
  margin: 0;
  font-size: 12px;
`;

export const LinkTextLoginCadastro = styled.a`
  color: ${colors};
  font-weight: bold;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const SecondLine = styled.div`
  display: flex;
  width: 100%;
  height: 48px;
  background-color: ${colors.primariaClara};

  @media (max-width: 500px) {
    display: none;
  }
`;

export const SecondLineNav = styled.nav`
  display: flex;
  gap: 40px;
  align-items: center;
  justify-content: center;
  width: 100%;

  .text_nav {
    font-family: ${fonte};
    font-size: 14px;
    font-weight: 600;
    margin: 0;
    color: ${colors.branco};
    cursor: pointer;
    text-decoration: none;
    transition: opacity 0.4s;
    &:hover {
      opacity: 0.8;
    }

    @media (max-width: 920px) {
      font-size: 12px;
    }
  }
`;

export const ContainerVoltarDrawer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  cursor: pointer;
  padding: 0px 10px 10px 10px;
  border-bottom: 1px solid ${colors.cinzaSuperClaro};
`;

export const ContainerItem = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  gap: 10px;
  padding: 20px 10px;
  cursor: pointer;
`;

export const TextoItens = styled.p`
  display: flex;
  font-family: ${fonte};
  font-size: 14px;
  font-weight: 600;
  color: ${colors.preto2};
  margin: 0;
`;

export const ContainerFooterMenu = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: 0px;
  border-top: 1px solid ${colors.cinzaSuperClaro};
  width: 280px;
`;
