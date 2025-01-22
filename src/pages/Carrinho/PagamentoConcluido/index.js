import {
  CheckCircle,
  CreditCard,
  ShoppingCart,
  Truck,
} from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Botao from "../../../components/Botao";
import useAuthStore from "../../../hooks/FluxoDeAutenticacao/useAuthStore";
import { buscarComprasCliente } from "../../../services/PagamentoEcommerce";
import { colors } from "../../../styles/colors";
import { fonte } from "../../../styles/global";
import LayoutBase from "../../../templates/LayoutBase";
import RotaErrada from "../../../templates/RotaErrada";
import { formatarMoeda } from "../../../utils/funcoes";
import {
  ContainerNavegacaoPagamento,
  CorETamanho,
  ImagemCarrinho,
  LinhaPagamento,
  NomeIitem,
  PrecoItem,
  TextoInfo,
  TextoItemPagamento,
  ValorInfo,
  ValorTotal,
} from "../styles";
import {
  ContainerBlocoInfos,
  ContainerDataEstimadaEntrega,
  ContainerEnderecoPagamento,
  ContainerEscritaTitulo,
  ContainerImagemPagamento,
  ContainerInfoPagamento,
  ContainerInfosItemPagamento,
  ContainerInfosValoresPagamento,
  ContainerItemPagamento,
  ContainerItemPagamento2,
  ContainerPagamentoConcluido,
  ContainerPagamentoDados,
  ContainerPagamentoDadosDireita,
  ContainerPagamentoDadosEsquerda,
  ContainerTituloPagamento,
  TextoDataEstimada,
  TextoEnderecoPagamento,
  TextoPedido,
  TituloEnderecoPagamento,
  TituloPagamento,
} from "./styles";

export default function PagamentoConcluido() {
  const { user } = useAuthStore();
  const navigate = useNavigate();
  const [ultimaCompra, setUltimaCompra] = useState(null);

  const buscarCompras = async () => {
    try {
      const response = await buscarComprasCliente(user.idCliente);
      setUltimaCompra(response.informacoesVendas[0]);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    buscarCompras();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {ultimaCompra && (
        <LayoutBase>
          <ContainerPagamentoConcluido>
            <ContainerNavegacaoPagamento>
              <ContainerItemPagamento2>
                <ShoppingCart size={22} weight="fill" color={colors.primaria} />
                <TextoItemPagamento>Carrinho</TextoItemPagamento>
              </ContainerItemPagamento2>
              <ContainerItemPagamento2>
                <LinhaPagamento
                  style={{
                    backgroundColor: colors.primaria,
                  }}
                />
                <CreditCard size={22} weight="fill" color={colors.primaria} />
                <TextoItemPagamento
                  style={{
                    color: colors.primaria,
                  }}
                >
                  Pagamento
                </TextoItemPagamento>
              </ContainerItemPagamento2>
              <ContainerItemPagamento2>
                <LinhaPagamento style={{ backgroundColor: colors.primaria }} />
                <CheckCircle size={22} weight="fill" color={colors.primaria} />
                <TextoItemPagamento style={{ color: colors.primaria }}>
                  Concluído
                </TextoItemPagamento>
              </ContainerItemPagamento2>
            </ContainerNavegacaoPagamento>
            <ContainerBlocoInfos>
              <ContainerTituloPagamento>
                <CheckCircle size={64} color={colors.verde} />
                <ContainerEscritaTitulo>
                  <TituloPagamento>
                    Muito obrigado, {user.userName.split(" ")[0]}!
                  </TituloPagamento>
                  <TextoPedido>
                    Seu pedido #{ultimaCompra && ultimaCompra.venda.id_venda}{" "}
                    foi realizado com sucesso!
                  </TextoPedido>
                </ContainerEscritaTitulo>
              </ContainerTituloPagamento>
              <ContainerDataEstimadaEntrega>
                <Truck size={20} color={colors.branco} weight="bold" />
                <TextoDataEstimada>
                  Seu pedido chegará entre os dias{" "}
                  {new Date().toLocaleDateString()} e{" "}
                  {new Date(
                    new Date().setDate(new Date().getDate() + 4)
                  ).toLocaleDateString()}
                </TextoDataEstimada>
              </ContainerDataEstimadaEntrega>
              <ContainerPagamentoDados>
                <ContainerPagamentoDadosEsquerda>
                  {ultimaCompra &&
                    ultimaCompra.detalhesVenda.map((item, index) => (
                      <ContainerItemPagamento key={index}>
                        <ContainerImagemPagamento>
                          <ImagemCarrinho
                            src={
                              item.variacaoProduto.imagens_variacao_produto[0]
                            }
                          />
                        </ContainerImagemPagamento>
                        <ContainerInfosItemPagamento>
                          <NomeIitem>
                            {item.variacaoProduto.nome_produto}
                          </NomeIitem>
                          <CorETamanho style={{ fontSize: 12 }}>
                            Cor: {item.variacaoProduto.cor_variacao_produto} |
                            Medida:{" "}
                            {item.variacaoProduto.medida_variacao_produto} |
                            Unidades: {item.detalhe.quantidade}
                          </CorETamanho>
                          <PrecoItem style={{ fontSize: 12 }}>
                            Preço unitário:{" "}
                            {formatarMoeda(
                              item.variacaoProduto.preco_venda_produto
                            )}
                          </PrecoItem>
                        </ContainerInfosItemPagamento>
                      </ContainerItemPagamento>
                    ))}
                </ContainerPagamentoDadosEsquerda>
                <ContainerPagamentoDadosDireita>
                  <ContainerEnderecoPagamento>
                    <TituloEnderecoPagamento>
                      Endereço de entrega
                    </TituloEnderecoPagamento>
                    <TextoEnderecoPagamento>
                      {ultimaCompra && ultimaCompra.endereco.rua},{" "}
                      {ultimaCompra && ultimaCompra.endereco.complemento},{" "}
                      {ultimaCompra && ultimaCompra.endereco.bairro},{" "}
                      {ultimaCompra && ultimaCompra.endereco.cidade}
                    </TextoEnderecoPagamento>
                    <TextoEnderecoPagamento>
                      CEP: {ultimaCompra && ultimaCompra.endereco.cep}
                    </TextoEnderecoPagamento>
                  </ContainerEnderecoPagamento>
                  <ContainerInfosValoresPagamento>
                    <TituloEnderecoPagamento>Pagamento</TituloEnderecoPagamento>
                    <ContainerInfoPagamento>
                      <TextoInfo>Frete</TextoInfo>
                      <ValorInfo style={{ color: colors.verde }}>
                        GRÁTIS
                      </ValorInfo>
                    </ContainerInfoPagamento>
                    <ContainerInfoPagamento>
                      <TextoInfo>Valor Total</TextoInfo>
                      <ValorTotal>
                        {ultimaCompra &&
                          formatarMoeda(ultimaCompra.venda.total_venda)}
                      </ValorTotal>
                    </ContainerInfoPagamento>
                  </ContainerInfosValoresPagamento>
                  <Botao
                    corDeFundo={colors.verde}
                    corDeFundoHover={colors.verdeClaro}
                    mostrarBoxShadow={true}
                    corTexto={colors.branco}
                    fontFamily={fonte}
                    fontSize={14}
                    fontWeight={600}
                    flexGrow={1}
                    flexBasis={40}
                    width="100%"
                    height={40}
                    tamanho="small"
                    variante="contained"
                    texto="MEUS PEDIDOS"
                    type="button"
                    aoClicar={() => navigate("/minha-conta")}
                  />
                </ContainerPagamentoDadosDireita>
              </ContainerPagamentoDados>
            </ContainerBlocoInfos>
          </ContainerPagamentoConcluido>
        </LayoutBase>
      )}
      {ultimaCompra && !ultimaCompra && <RotaErrada />}
    </>
  );
}
