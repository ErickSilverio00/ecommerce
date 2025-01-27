/* eslint-disable react-hooks/exhaustive-deps */
import { useMediaQuery } from "@mui/material";
import { Gear, House, ShoppingCart, UserCircle } from "@phosphor-icons/react";
import React from "react";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import Botao from "../../../components/Botao";
import useAuthStore from "../../../stores/useAuthStore";
import { colors } from "../../../styles/colors";
import { fonte } from "../../../styles/global";
import {
  ContainerBoasVindas,
  ContainerImgPerfil,
  ContainerInicio,
  ContainerLadoDireito,
  ContainerLadoEsquerdo,
  ContainerMeusDados,
  ContainerNaoTevePedido,
  ContainerNav,
  ContainerPrimeirosItens,
  ContainerTituloDaSecao,
  ContainerUltimoPedido,
  DescricaoNaoTevePedido,
  TextoBoasVindas,
  TextoEmail,
  TextoMeusDados,
  TituloDaSecao,
  TituloNaoTevePedido,
} from "./styles";

export default function Inicio({
  aoApertarMeusDadosNoInicio,
  aoApertarMeusPedidosNoInicio,
}) {
  const { user } = useAuthStore();
  const firstMediaQuery = useMediaQuery("(max-width: 500px)");

  return (
    <ContainerInicio>
      <ContainerTituloDaSecao>
        <House
          size={firstMediaQuery ? 28 : 32}
          weight="bold"
          color={colors.preto2}
        />
        <TituloDaSecao>Início</TituloDaSecao>
      </ContainerTituloDaSecao>
      <ContainerPrimeirosItens>
        <ContainerBoasVindas>
          <ContainerLadoEsquerdo>
            <ContainerImgPerfil>
              <UserCircle
                size={firstMediaQuery ? 28 : 48}
                weight="bold"
                color={colors.preto2}
              />
            </ContainerImgPerfil>
          </ContainerLadoEsquerdo>
          <ContainerLadoDireito>
            <TextoBoasVindas>Bem-vindo, {user.userName}</TextoBoasVindas>
            <TextoEmail>{user.userEmail}</TextoEmail>
          </ContainerLadoDireito>
        </ContainerBoasVindas>
        <ContainerNav>
          <ContainerMeusDados onClick={aoApertarMeusDadosNoInicio}>
            <Gear
              size={firstMediaQuery ? 28 : 48}
              weight="bold"
              color={colors.preto2}
            />
            <TextoMeusDados>Meus dados</TextoMeusDados>
          </ContainerMeusDados>
          <ContainerMeusDados onClick={aoApertarMeusPedidosNoInicio}>
            <ShoppingCart
              size={firstMediaQuery ? 28 : 48}
              weight="bold"
              color={colors.preto2}
            />
            <TextoMeusDados>Meus pedidos</TextoMeusDados>
          </ContainerMeusDados>
        </ContainerNav>
      </ContainerPrimeirosItens>
      <ContainerUltimoPedido>
        <ContainerNaoTevePedido>
          <TituloNaoTevePedido>
            Você ainda não fez nenhum pedido conosco!
          </TituloNaoTevePedido>
          <DescricaoNaoTevePedido>
            Aproveite nossas promoções para fazer o seu primeiro pedido!
          </DescricaoNaoTevePedido>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Botao
              corDeFundo={colors.primaria}
              corDeFundoHover={colors.primariaClara}
              mostrarBoxShadow={true}
              corTexto={colors.branco}
              fontFamily={fonte}
              fontSize={14}
              fontWeight={600}
              width="100%"
              height={40}
              tamanho="small"
              variante="contained"
              texto="VER PRODUTOS"
              tipo="button"
              Icone={ShoppingCart}
            />
          </Link>
        </ContainerNaoTevePedido>
      </ContainerUltimoPedido>
    </ContainerInicio>
  );
}
