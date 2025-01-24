/* eslint-disable react-hooks/exhaustive-deps */
import { Wallet } from "@mercadopago/sdk-react";
import { useMediaQuery } from "@mui/material";
import {
  CheckCircle,
  CreditCard,
  MapPinLine,
  ReadCvLogo,
  ShoppingCart,
  X,
} from "@phosphor-icons/react";
import { Form } from "@unform/web";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import Botao from "../../components/Botao";
import CampoTexto from "../../components/CampoTexto";
import useHookCarrinho from "../../hooks/Carrinho/useHookCarrinho";
import { colors } from "../../styles/colors";
import { AreaItem, fonte } from "../../styles/global";
import { formatarMoeda } from "../../utils/funcoes";
import {
  ContainerBotoesEdicaoEndereco,
  ContainerCamposEdicaoEndereco,
  ContainerCarrinho,
  ContainerCarrinhoVazio,
  ContainerDireito,
  ContainerEndereco,
  ContainerEnderecoCadastrado,
  ContainerEnderecoResumo,
  ContainerEsquerdaDireita,
  ContainerEsquerdo,
  ContainerImagemCarrinho,
  ContainerImagemResumo,
  ContainerInfo,
  ContainerInfoResumo,
  ContainerInfosItem,
  ContainerInfosItemPrimeira,
  ContainerInfosItemResumo,
  ContainerInfosItemSegunda,
  ContainerInfosItemTerceira,
  ContainerInfosResumo,
  ContainerInfosValoresResumo,
  ContainerItem,
  ContainerItemPagamento,
  ContainerItemResumo,
  ContainerItensCarrinho,
  ContainerNavegacaoPagamento,
  ContainerResumo,
  ContainerResumoDados,
  ContainerResumoDadosDireita,
  ContainerResumoDadosEsquerda,
  ContainerResumoPagamento,
  ContainerSelect,
  ContainerTituloCarrinho,
  ContainerTituloEndereco,
  ContainerTotal,
  CorETamanho,
  ImagemCarrinho,
  LinhaPagamento,
  NomeIitem,
  PrecoItem,
  TextoDescricaoCarrinhoVazio,
  TextoEditarEndereco,
  TextoEnderecoResumo,
  TextoInfo,
  TextoItemPagamento,
  TextoQtde,
  TextosEnderecos,
  TextoTituloCarrinhoVazio,
  TextoTotal,
  TituloCarrinho,
  TituloEnderecoResumo,
  TituloResumo,
  ValorInfo,
  ValorTotal,
} from "./styles";

export default function Carrinho() {
  const firstMediaQuery = useMediaQuery("(max-width: 672px)");
  const {
    user,
    carrinho,
    navigate,
    formEnderecoRef,
    preferenceId,
    isLoading,
    etapaCarrinho,
    setEtapaCarrinho,
    etapaPagamento,
    setEtapaPagamento,
    edicaoEnderecoAtiva,
    aoMudarParaEdicaoEndereco,
    atualizarEndereco,
    removerItemCarrinho,
    alterarQuantidadeProduto,
    irParaPagamento,
  } = useHookCarrinho();

  return (
    <main>
      <ContainerCarrinho>
        {carrinho.itensCarrinho.length > 0 && (
          <>
            <ContainerNavegacaoPagamento>
              <ContainerItemPagamento
                style={{ cursor: etapaPagamento && "pointer" }}
                onClick={() => [
                  setEtapaCarrinho(true),
                  setEtapaPagamento(false),
                ]}
              >
                <ShoppingCart size={22} weight="fill" color={colors.primaria} />
                <TextoItemPagamento>Carrinho</TextoItemPagamento>
              </ContainerItemPagamento>
              <ContainerItemPagamento>
                <LinhaPagamento
                  style={{
                    backgroundColor: etapaCarrinho
                      ? colors.cinzaSuperClaro
                      : colors.primaria,
                  }}
                />
                <CreditCard
                  size={22}
                  weight="fill"
                  color={
                    etapaCarrinho ? colors.cinzaSuperClaro : colors.primaria
                  }
                />
                <TextoItemPagamento
                  style={{
                    color: etapaCarrinho
                      ? colors.cinzaSuperClaro
                      : colors.primaria,
                  }}
                >
                  Pagamento
                </TextoItemPagamento>
              </ContainerItemPagamento>
              <ContainerItemPagamento>
                <LinhaPagamento />
                <CheckCircle
                  size={22}
                  weight="fill"
                  color={colors.cinzaSuperClaro}
                />
                <TextoItemPagamento style={{ color: colors.cinzaSuperClaro }}>
                  Concluir
                </TextoItemPagamento>
              </ContainerItemPagamento>
            </ContainerNavegacaoPagamento>
            {etapaCarrinho && (
              <ContainerEsquerdaDireita>
                <ContainerEsquerdo>
                  <ContainerEndereco>
                    <ContainerTituloEndereco>
                      <TituloCarrinho>Endereço</TituloCarrinho>
                      <MapPinLine
                        size={20}
                        weight="bold"
                        color={colors.preto2}
                      />
                    </ContainerTituloEndereco>
                    {!edicaoEnderecoAtiva && (
                      <ContainerEnderecoCadastrado>
                        <TextosEnderecos>
                          Rua: {user?.endereco?.rua}
                        </TextosEnderecos>
                        <TextosEnderecos>
                          Complemento: {user?.endereco?.complemento}
                        </TextosEnderecos>
                        <TextosEnderecos>
                          Bairro: {user?.endereco?.bairro}
                        </TextosEnderecos>
                        <TextosEnderecos>
                          CEP: {user?.endereco?.cep} - {user?.endereco?.cidade}
                        </TextosEnderecos>
                        <TextoEditarEndereco
                          onClick={aoMudarParaEdicaoEndereco}
                        >
                          EDITAR
                        </TextoEditarEndereco>
                      </ContainerEnderecoCadastrado>
                    )}
                    <Form
                      ref={formEnderecoRef}
                      onSubmit={atualizarEndereco}
                      style={{
                        display: !edicaoEnderecoAtiva && "none",
                      }}
                    >
                      <ContainerCamposEdicaoEndereco>
                        <AreaItem wd="20">
                          <CampoTexto name="rua" label="Rua" />
                        </AreaItem>
                        <AreaItem wd="40">
                          <CampoTexto name="complemento" label="Complemento" />
                        </AreaItem>
                        <AreaItem wd="30">
                          <CampoTexto name="bairro" label="Bairro" />
                        </AreaItem>
                        <AreaItem wd="20">
                          <CampoTexto name="cep" label="CEP" />
                        </AreaItem>
                        <AreaItem wd="30">
                          <CampoTexto name="cidade" label="Cidade" />
                        </AreaItem>
                      </ContainerCamposEdicaoEndereco>
                      <ContainerBotoesEdicaoEndereco>
                        <Botao
                          tipo="submit"
                          variante="contained"
                          tamanho="small"
                          texto="Salvar alterações"
                          mostrarBoxShadow={true}
                          corDeFundo={colors.verde}
                          corDeFundoHover={colors.verdeClaro}
                          fontFamily={fonte}
                          fontSize={10}
                          fontWeight="600"
                          width={firstMediaQuery ? "100%" : "49.25%"}
                          height={36}
                        />
                      </ContainerBotoesEdicaoEndereco>
                    </Form>
                  </ContainerEndereco>

                  <ContainerItensCarrinho>
                    <ContainerTituloCarrinho>
                      <TituloCarrinho>Carrinho</TituloCarrinho>
                      <ShoppingCart
                        size={20}
                        weight="bold"
                        color={colors.preto2}
                      />
                    </ContainerTituloCarrinho>
                    {carrinho.itensCarrinho.map((item, index) => (
                      <ContainerItem key={index}>
                        <Link
                          style={{ textDecoration: "none" }}
                          to={`/produto/${item.nome_produto}`}
                        >
                          <ContainerImagemCarrinho>
                            <ImagemCarrinho
                              src={item.imagens_variacao_produto[0]}
                            />
                          </ContainerImagemCarrinho>
                        </Link>
                        <ContainerInfosItem>
                          <ContainerInfosItemPrimeira>
                            <NomeIitem>{item.nome_produto}</NomeIitem>
                            <CorETamanho>
                              {item.cor_variacao_produto} |{" "}
                              {item.medida_variacao_produto}
                            </CorETamanho>
                            <PrecoItem>
                              {formatarMoeda(item.preco_venda_produto)}
                            </PrecoItem>
                          </ContainerInfosItemPrimeira>
                          <ContainerInfosItemSegunda>
                            <TextoQtde>Quantidade</TextoQtde>
                            <ContainerSelect
                              onChange={(e) =>
                                alterarQuantidadeProduto(
                                  item.id_carrinho,
                                  parseInt(e.target.value)
                                )
                              }
                              value={item.quantidade}
                            >
                              {Array.from(
                                { length: item.qtd_disponivel_produto },
                                (_, index) => (
                                  <option key={index + 1} value={index + 1}>
                                    {index + 1}
                                  </option>
                                )
                              )}
                            </ContainerSelect>
                          </ContainerInfosItemSegunda>
                          <ContainerInfosItemTerceira
                            onClick={() =>
                              removerItemCarrinho(item.id_carrinho)
                            }
                          >
                            <X
                              size={22}
                              color={colors.cinzaClaro}
                              style={{
                                cursor: "pointer",
                              }}
                            />
                          </ContainerInfosItemTerceira>
                        </ContainerInfosItem>
                      </ContainerItem>
                    ))}
                  </ContainerItensCarrinho>
                </ContainerEsquerdo>
                <ContainerDireito>
                  <ContainerResumo>
                    <ContainerTituloEndereco>
                      <TituloResumo>Resumo do pedido</TituloResumo>
                      <ReadCvLogo
                        size={20}
                        weight="bold"
                        color={colors.preto2}
                      />
                    </ContainerTituloEndereco>
                    <ContainerInfosResumo>
                      <ContainerInfo>
                        <TextoInfo>Subtotal</TextoInfo>
                        <ValorInfo>
                          {formatarMoeda(carrinho.valorTotal)}
                        </ValorInfo>
                      </ContainerInfo>
                      <ContainerInfo>
                        <TextoInfo>Frete</TextoInfo>
                        <ValorInfo style={{ color: colors.verde }}>
                          GRÁTIS
                        </ValorInfo>
                      </ContainerInfo>
                    </ContainerInfosResumo>
                    <ContainerTotal>
                      <TextoTotal>Valor Total</TextoTotal>
                      <ValorTotal>
                        {formatarMoeda(carrinho.valorTotal)}
                      </ValorTotal>
                    </ContainerTotal>
                    <Botao
                      corDeFundo={colors.primaria}
                      corDeFundoHover={colors.primariaClara}
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
                      texto={isLoading ? "Aguarde..." : "Ir para o pagamento"}
                      type="button"
                      disabled={isLoading && true}
                      aoClicar={irParaPagamento}
                    />
                  </ContainerResumo>
                </ContainerDireito>
              </ContainerEsquerdaDireita>
            )}
            {etapaPagamento && (
              <ContainerResumoPagamento>
                <ContainerTituloEndereco>
                  <TituloResumo>Confirmar dados do pedido</TituloResumo>
                  <ReadCvLogo size={20} weight="bold" color={colors.preto2} />
                </ContainerTituloEndereco>
                <ContainerResumoDados>
                  <ContainerResumoDadosEsquerda>
                    {carrinho.itensCarrinho.map((item, index) => (
                      <ContainerItemResumo key={index}>
                        <ContainerImagemResumo>
                          <ImagemCarrinho
                            src={item.imagens_variacao_produto[0]}
                          />
                        </ContainerImagemResumo>
                        <ContainerInfosItemResumo>
                          <NomeIitem>{item.nome_produto}</NomeIitem>
                          <CorETamanho style={{ fontSize: 12 }}>
                            Cor: {item.cor_variacao_produto} | Medida:{" "}
                            {item.medida_variacao_produto} | Unidades:{" "}
                            {item.quantidade}
                          </CorETamanho>
                          <PrecoItem style={{ fontSize: 12 }}>
                            Preço unitário:{" "}
                            {formatarMoeda(item.preco_venda_produto)}
                          </PrecoItem>
                        </ContainerInfosItemResumo>
                      </ContainerItemResumo>
                    ))}
                  </ContainerResumoDadosEsquerda>
                  <ContainerResumoDadosDireita>
                    <ContainerEnderecoResumo>
                      <TituloEnderecoResumo>
                        Endereço de entrega
                      </TituloEnderecoResumo>
                      <TextoEnderecoResumo>
                        {user?.endereco?.rua}, {user?.endereco?.complemento},{" "}
                        {user?.endereco?.bairro}, {user?.endereco?.cidade}
                      </TextoEnderecoResumo>
                      <TextoEnderecoResumo>
                        CEP: {user?.endereco?.cep}
                      </TextoEnderecoResumo>
                    </ContainerEnderecoResumo>
                    <ContainerInfosValoresResumo>
                      <TituloEnderecoResumo>
                        Data estimada de entrega
                      </TituloEnderecoResumo>
                      <TextoEnderecoResumo>
                        {user?.endereco?.cidade === "Goiânia" && (
                          <>
                            Receba seu pedido até dia{" "}
                            {new Date(
                              new Date().setDate(new Date().getDate() + 4)
                            ).toLocaleDateString()}
                          </>
                        )}
                        {user?.endereco?.cidade !== "Goiânia" && (
                          <>
                            Receba seu pedido até dia{" "}
                            {new Date(
                              new Date().setDate(new Date().getDate() + 15)
                            ).toLocaleDateString()}
                          </>
                        )}
                      </TextoEnderecoResumo>
                    </ContainerInfosValoresResumo>
                    <ContainerInfosValoresResumo>
                      <TituloEnderecoResumo>Pagamento</TituloEnderecoResumo>
                      <ContainerInfoResumo>
                        <TextoInfo>Frete</TextoInfo>
                        <ValorInfo style={{ color: colors.verde }}>
                          GRÁTIS
                        </ValorInfo>
                      </ContainerInfoResumo>
                      <ContainerInfoResumo>
                        <TextoInfo>Valor Total</TextoInfo>
                        <ValorTotal>
                          {formatarMoeda(carrinho.valorTotal)}
                        </ValorTotal>
                      </ContainerInfoResumo>
                    </ContainerInfosValoresResumo>
                    <Wallet
                      initialization={{ preferenceId: preferenceId }}
                      customization={{ texts: { valueProp: "smart_option" } }}
                    />
                  </ContainerResumoDadosDireita>
                </ContainerResumoDados>
              </ContainerResumoPagamento>
            )}
          </>
        )}
        {carrinho.itensCarrinho.length === 0 && (
          <ContainerCarrinhoVazio>
            <TextoTituloCarrinhoVazio>
              O seu carrinho está vazio
            </TextoTituloCarrinhoVazio>
            <TextoDescricaoCarrinhoVazio>
              Adquira nossos melhores produtos!
            </TextoDescricaoCarrinhoVazio>
            <Botao
              corDeFundo={colors.primaria}
              corDeFundoHover={colors.primariaClara}
              mostrarBoxShadow={true}
              corTexto={colors.branco}
              fontFamily={fonte}
              fontSize={14}
              fontWeight={600}
              flexGrow={1}
              flexBasis={40}
              width={firstMediaQuery ? "75%" : "55%"}
              height={40}
              tamanho="small"
              variante="contained"
              texto="CONTINUAR COMPRANDO"
              type="button"
              aoClicar={() => navigate("/")}
            />
          </ContainerCarrinhoVazio>
        )}
      </ContainerCarrinho>
    </main>
  );
}
