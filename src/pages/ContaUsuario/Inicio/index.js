/* eslint-disable react-hooks/exhaustive-deps */
import { IconButton, useMediaQuery } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";
import {
  Gear,
  House,
  ShoppingCart,
  Truck,
  UserCircle,
} from "@phosphor-icons/react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Botao from "../../../components/Botao";
import { buscarComprasCliente } from "../../../services/PagamentoEcommerce";
import useAuthStore from "../../../stores/useAuthStore";
import { colors } from "../../../styles/colors";
import { fonte } from "../../../styles/global";
import { formatarData, formatarMoeda } from "../../../utils/funcoes";
import {
  ContainerBlocoPedido,
  ContainerBoasVindas,
  ContainerEndereco,
  ContainerImgPerfil,
  ContainerInicio,
  ContainerItem,
  ContainerLadoDireito,
  ContainerLadoEsquerdo,
  ContainerMeusDados,
  ContainerNaoTevePedido,
  ContainerNav,
  ContainerPedido,
  ContainerPrimeirosItens,
  ContainerTevePedido,
  ContainerTituloDaSecao,
  ContainerTituloTevePedido,
  ContainerUltimoPedido,
  DescricaoItem,
  DescricaoNaoTevePedido,
  LinhaDiv,
  TextoBoasVindas,
  TextoEmail,
  TextoMeusDados,
  TituloDaSecao,
  TituloItem,
  TituloNaoTevePedido,
  TituloTevePedido,
} from "./styles";

export default function Inicio({
  aoApertarMeusDadosNoInicio,
  aoApertarMeusPedidosNoInicio,
}) {
  const { user } = useAuthStore();
  const firstMediaQuery = useMediaQuery("(max-width: 500px)");
  const [listaCompras, setListaCompras] = useState([]);

  const buscarCompras = async () => {
    try {
      const response = await buscarComprasCliente(user.idCliente);
      setListaCompras(response.informacoesVendas);
    } catch (error) {
      toast.error(error);
    }
  };

  const aoClicarEmRastrear = () => {
    const urlCorreios = "https://www.correios.com.br/";

    const numeroRastreio = listaCompras[0].venda.numero_rastreio;

    navigator.clipboard.writeText(numeroRastreio);

    toast.success(
      `Número de rastreamento copiado com sucesso: ${numeroRastreio}`
    );

    setTimeout(() => {
      window.open(urlCorreios, "_blank", "noopener");
    }, 1000);
  };

  useEffect(() => {
    buscarCompras();
  }, []);

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
        {listaCompras.length > 0 && (
          <ContainerTevePedido>
            <ContainerTituloTevePedido>
              <ShoppingCart size={22} weight="bold" color={colors.preto2} />
              <TituloTevePedido>Resumo do seu último pedido</TituloTevePedido>
            </ContainerTituloTevePedido>
            <ContainerPedido>
              <ContainerBlocoPedido>
                <ContainerItem>
                  <TituloItem>Número do pedido</TituloItem>
                  <DescricaoItem>
                    #{listaCompras[0].venda.id_venda}
                  </DescricaoItem>
                </ContainerItem>
                <ContainerItem>
                  <TituloItem>Data da compra</TituloItem>
                  <DescricaoItem>
                    {formatarData(listaCompras[0].venda.data_venda)}
                  </DescricaoItem>
                </ContainerItem>
                <ContainerItem>
                  <TituloItem>Método de pagamento</TituloItem>
                  <DescricaoItem>
                    {listaCompras[0].pagamento.metodo_pagamento ===
                      "credit_card" && "Cartão de crédito"}
                  </DescricaoItem>
                </ContainerItem>
                <ContainerItem>
                  <TituloItem>Status</TituloItem>
                  <DescricaoItem style={{ color: colors.verde }}>
                    {listaCompras[0].venda.status_venda === "recebido" &&
                      "Seu pedido está sendo preparado"}
                    {listaCompras[0].venda.status_venda === "enviado" &&
                      "Seu pedido está a caminho"}
                    {listaCompras[0].venda.status_venda === "concluido" &&
                      "Pedido entregue"}
                  </DescricaoItem>
                </ContainerItem>
                {listaCompras[0].venda.numero_rastreio && (
                  <ContainerItem>
                    <TituloItem>Código de Rastreio</TituloItem>
                    <DescricaoItem>
                      {listaCompras[0].venda.numero_rastreio}
                      <Tooltip title="Rastreie seu pedido">
                        <IconButton
                          onClick={aoClicarEmRastrear}
                          style={{
                            color: colors.branco,
                            borderRadius: 6,
                            backgroundColor: colors.verde,
                          }}
                          size="small"
                        >
                          <Truck size={18} weight="fill" />
                        </IconButton>
                      </Tooltip>
                    </DescricaoItem>
                  </ContainerItem>
                )}
              </ContainerBlocoPedido>
              <LinhaDiv />
              <ContainerBlocoPedido>
                <ContainerItem>
                  <TituloItem>Endereço</TituloItem>
                  <ContainerEndereco>
                    <DescricaoItem>
                      Rua: {listaCompras[0].endereco.rua}
                    </DescricaoItem>
                    <DescricaoItem>
                      Complemento: {listaCompras[0].endereco.complemento}
                    </DescricaoItem>
                    <DescricaoItem>
                      Bairro: {listaCompras[0].endereco.bairro}
                    </DescricaoItem>
                    <DescricaoItem>
                      CEP: {listaCompras[0].endereco.cep} -{" "}
                      {listaCompras[0].endereco.cidade}
                    </DescricaoItem>
                  </ContainerEndereco>
                </ContainerItem>
                <ContainerItem>
                  <TituloItem>Valor da compra</TituloItem>
                  <DescricaoItem>
                    {formatarMoeda(listaCompras[0].venda.total_venda)}
                  </DescricaoItem>
                </ContainerItem>
              </ContainerBlocoPedido>
            </ContainerPedido>
          </ContainerTevePedido>
        )}
        {listaCompras.length === 0 && (
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
        )}
      </ContainerUltimoPedido>
    </ContainerInicio>
  );
}
