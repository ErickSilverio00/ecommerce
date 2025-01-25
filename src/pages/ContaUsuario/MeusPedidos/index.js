import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { IconButton, useMediaQuery } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Tooltip from "@mui/material/Tooltip";
import { Gear, ShoppingCart, Truck, UserCircle } from "@phosphor-icons/react";
import React from "react";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import Botao from "../../../components/Botao";
import useMeusPedidos from "../../../hooks/ContaUsuario/useMeusPedidos";
import { colors } from "../../../styles/colors";
import { fonte } from "../../../styles/global";
import { formatarData, formatarMoeda } from "../../../utils/funcoes";
import { ContainerEndereco } from "../Inicio/styles";
import {
  BlocoFinal,
  ContainerBlocoNav,
  ContainerBlocoPedido,
  ContainerEscritasProdutos,
  ContainerImagemProduto,
  ContainerInfosPrecos,
  ContainerInfosProduto,
  ContainerItem,
  ContainerItemComprado,
  ContainerMeusPedidos,
  ContainerNaoTevePedido,
  ContainerNav,
  ContainerPedido,
  ContainerPedidos,
  ContainerTituloMeusPedidos,
  Containerprodutos,
  DescricaoItem,
  DescricaoNaoTevePedido,
  FirstLine,
  ImagemProduto,
  TextoInfosProduto,
  TextoMeusPedidos,
  TextoNomeProduto,
  TextoTotal,
  TituloItem,
  TituloMeusPedidos,
  TituloNaoTevePedido,
} from "./styles";

export default function MeusPedidos({
  aoApertarInicioNosMeusPedidos,
  aoApertarMeusDadosNosMeusPedidos,
}) {
  const { listaCompras, aoClicarEmRastrear } = useMeusPedidos();
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
      {listaCompras.length > 0 && (
        <ContainerPedidos>
          {listaCompras.map((compra) => (
            <Accordion style={{ backgroundColor: "#f5f5f5" }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <ContainerPedido>
                  <ContainerBlocoPedido>
                    <ContainerItem>
                      <TituloItem>Número do pedido</TituloItem>
                      <DescricaoItem>#{compra.venda.id_venda}</DescricaoItem>
                    </ContainerItem>
                    <ContainerItem>
                      <TituloItem>Data da compra</TituloItem>
                      <DescricaoItem>
                        {formatarData(compra.venda.data_venda)}
                      </DescricaoItem>
                    </ContainerItem>
                    <ContainerItem>
                      <TituloItem>Método de pagamento</TituloItem>
                      <DescricaoItem>
                        {compra.pagamento.metodo_pagamento === "credit_card" &&
                          "Cartão de crédito"}
                      </DescricaoItem>
                    </ContainerItem>
                    <ContainerItem>
                      <TituloItem>Status</TituloItem>
                      <DescricaoItem style={{ color: colors.verde }}>
                        {compra.venda.status_venda === "recebido" &&
                          "Seu pedido está sendo preparado"}
                        {compra.venda.status_venda === "enviado" &&
                          "Seu pedido está a caminho"}
                        {compra.venda.status_venda === "concluido" &&
                          "Pedido entregue"}
                      </DescricaoItem>
                    </ContainerItem>
                    {compra.venda.status_venda === "enviado" && (
                      <ContainerItem>
                        <TituloItem>Data estimada de entrega</TituloItem>
                        <DescricaoItem>
                          {formatarData(compra.venda.data_estimada_entrega)}
                        </DescricaoItem>
                      </ContainerItem>
                    )}
                    {compra.venda.status_venda === "concluido" && (
                      <ContainerItem>
                        <TituloItem>Data de entrega</TituloItem>
                        <DescricaoItem>
                          {formatarData(compra.venda.data_entrega)}
                        </DescricaoItem>
                      </ContainerItem>
                    )}
                    {compra.venda.numero_rastreio && (
                      <ContainerItem>
                        <TituloItem>Código de Rastreio</TituloItem>
                        <DescricaoItem>
                          {compra.venda.numero_rastreio}
                          <Tooltip title="Rastreie seu pedido">
                            <IconButton
                              onClick={() => aoClicarEmRastrear(compra)}
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
                    <ContainerItem>
                      <TituloItem>Detalhes do pedido</TituloItem>
                    </ContainerItem>
                  </ContainerBlocoPedido>
                </ContainerPedido>
              </AccordionSummary>
              <AccordionDetails>
                <ContainerBlocoPedido
                  style={{ paddingLeft: 20, maxWidth: "92%" }}
                >
                  <ContainerItem>
                    <TituloItem>Endereço</TituloItem>
                    <ContainerEndereco>
                      <DescricaoItem>Rua: {compra.endereco.rua}</DescricaoItem>
                      <DescricaoItem>
                        Complemento: {compra.endereco.complemento}
                      </DescricaoItem>
                      <DescricaoItem>
                        Bairro: {compra.endereco.bairro}
                      </DescricaoItem>
                      <DescricaoItem>
                        CEP: {compra.endereco.cep} - {compra.endereco.cidade}
                      </DescricaoItem>
                    </ContainerEndereco>
                  </ContainerItem>
                </ContainerBlocoPedido>
                <FirstLine>
                  <TituloItem>Produtos</TituloItem>
                  <TituloItem>Total</TituloItem>
                </FirstLine>
                <Containerprodutos>
                  {compra.detalhesVenda.map((detalhe) => (
                    <ContainerItemComprado>
                      <ContainerInfosProduto>
                        <ContainerImagemProduto>
                          <ImagemProduto
                            src={
                              detalhe.variacaoProduto
                                .imagens_variacao_produto[0]
                            }
                          />
                        </ContainerImagemProduto>
                        <ContainerEscritasProdutos>
                          <TextoNomeProduto>
                            {detalhe.variacaoProduto.nome_produto}
                          </TextoNomeProduto>
                          <TextoInfosProduto>
                            Cor: {detalhe.variacaoProduto.cor_variacao_produto}{" "}
                            | Tamanho:{" "}
                            {detalhe.variacaoProduto.medida_variacao_produto}
                          </TextoInfosProduto>
                          <TextoInfosProduto>
                            Preço unitário:{" "}
                            {formatarMoeda(
                              detalhe.variacaoProduto.preco_venda_produto
                            )}
                          </TextoInfosProduto>
                          <TextoInfosProduto>
                            Quantidade: {detalhe.detalhe.quantidade}
                          </TextoInfosProduto>
                        </ContainerEscritasProdutos>
                      </ContainerInfosProduto>
                      <ContainerInfosPrecos>
                        <TextoTotal>
                          {formatarMoeda(detalhe.detalhe.valor_total)}
                        </TextoTotal>
                      </ContainerInfosPrecos>
                    </ContainerItemComprado>
                  ))}
                </Containerprodutos>
                <BlocoFinal>
                  <TextoTotal>DESCONTO</TextoTotal>
                  <TextoTotal>
                    {compra.venda.desconto === null && formatarMoeda(0)}
                  </TextoTotal>
                </BlocoFinal>
                <BlocoFinal>
                  <TextoTotal>FRETE</TextoTotal>
                  <TextoTotal style={{ color: colors.verde }}>
                    FRETE GRÁTIS
                  </TextoTotal>
                </BlocoFinal>
                <BlocoFinal>
                  <TextoTotal>VALOR FINAL</TextoTotal>
                  <TextoTotal>
                    {formatarMoeda(compra.venda.total_venda)}
                  </TextoTotal>
                </BlocoFinal>
              </AccordionDetails>
            </Accordion>
          ))}
        </ContainerPedidos>
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
    </ContainerMeusPedidos>
  );
}
