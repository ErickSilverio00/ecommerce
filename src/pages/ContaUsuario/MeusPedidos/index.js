import { useMediaQuery } from "@mui/material";
import { Gear, ShoppingCart, UserCircle } from "@phosphor-icons/react";
import React from "react";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import Botao from "../../../components/Botao";
import { colors } from "../../../styles/colors";
import { fonte } from "../../../styles/global";
import {
  ContainerBlocoNav,
  ContainerMeusPedidos,
  ContainerNaoTevePedido,
  ContainerNav,
  ContainerTituloMeusPedidos,
  DescricaoNaoTevePedido,
  TextoMeusPedidos,
  TituloMeusPedidos,
  TituloNaoTevePedido,
} from "./styles";

export default function MeusPedidos({
  aoApertarInicioNosMeusPedidos,
  aoApertarMeusDadosNosMeusPedidos,
}) {
  const firstMediaQuery = useMediaQuery("(max-width: 440px)");

  return (
    <ContainerMeusPedidos>
      <ContainerTituloMeusPedidos>
        <ShoppingCart size={32} weight="bold" color={colors.preto2} />
        <TituloMeusPedidos>Meus pedidos</TituloMeusPedidos>
      </ContainerTituloMeusPedidos>
      <ContainerNav>
        <ContainerBlocoNav onClick={aoApertarInicioNosMeusPedidos}>
          <UserCircle
            size={firstMediaQuery ? 28 : 48}
            weight="bold"
            color={colors.preto2}
          />
          <TextoMeusPedidos>Início</TextoMeusPedidos>
        </ContainerBlocoNav>
        <ContainerBlocoNav onClick={aoApertarMeusDadosNosMeusPedidos}>
          <Gear
            size={firstMediaQuery ? 28 : 48}
            weight="bold"
            color={colors.preto2}
          />
          <TextoMeusPedidos>Meus dados</TextoMeusPedidos>
        </ContainerBlocoNav>
      </ContainerNav>
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
    </ContainerMeusPedidos>
  );
}
