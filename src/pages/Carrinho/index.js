/* eslint-disable react-hooks/exhaustive-deps */
import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
import {
  CheckCircle,
  CreditCard,
  MapPinLine,
  ReadCvLogo,
  ShoppingCart,
  X,
} from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Botao from "../../components/Botao";
import CampoTexto from "../../components/CampoTexto";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import useCarrinho from "../../hooks/Carrinho/useCarrinho";
import useAuthStore from "../../hooks/FluxoDeAutenticacao/useAuthStore";
import { criarSessaoCheckout } from "../../services/Carrinho";
import {
  atualizarEnderecoEcommerce,
  fetchClientePorId,
} from "../../services/Clientes";
import { colors } from "../../styles/colors";
import { fonte } from "../../styles/global";
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
  ContainerFormularioEdicaoEndereco,
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
  ContainerNaoTemEndereco,
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
  DescricaoNaoTemEndereco,
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
  TituloNaoTemEndereco,
  TituloResumo,
  ValorInfo,
  ValorTotal,
} from "./styles";

const token = process.env.REACT_APP_MERCADO_PAGO_PUBLIC_KEY;

export default function Carrinho() {
  const { user } = useAuthStore();
  const carrinho = useCarrinho();
  const navigate = useNavigate();
  const [cliente, setCliente] = useState("");
  const [preferenceId, setPreferenceId] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [rua, setRua] = useState("");
  const [ruaErro, setRuaErro] = useState("");
  const [complemento, setComplemento] = useState("");
  const [complementoErro, setComplementoErro] = useState("");
  const [bairro, setBairro] = useState("");
  const [bairroErro, setBairroErro] = useState("");
  const [cep, setCep] = useState("");
  const [cepErro, setCepErro] = useState("");
  const [cidade, setCidade] = useState("");
  const [cidadeErro, setCidadeErro] = useState("");
  const [etapaCarrinho, setEtapaCarrinho] = useState(true);
  const [etapaPagamento, setEtapaPagamento] = useState(false);
  const [edicaoEnderecoAtiva, setEdicaoEnderecoAtiva] = useState(false);
  const [naoTemEndereco, setNaoTemEndereco] = useState(false);

  const buscarDadosCliente = async () => {
    try {
      const response = await fetchClientePorId(user.idCliente);
      setCliente(response);
      setRua(response.rua_cliente);
      setComplemento(response.complemento_cliente);
      setBairro(response.bairro_cliente);
      setCep(response.cep_cliente);
      setCidade(response.cidade_cliente);
    } catch (error) {
      console.error(error);
    }
  };

  const validarEndereco = async () => {
    let temErro = false;

    if (!rua.trim()) {
      setRuaErro("A rua é obrigatória.");
      temErro = true;
    } else {
      setRuaErro("");
    }
    if (!complemento.trim()) {
      setComplementoErro("O complemento é obrigatório.");
      temErro = true;
    } else {
      setComplementoErro("");
    }
    if (!bairro.trim()) {
      setBairroErro("O setor é obrigatório.");
      temErro = true;
    } else {
      setBairroErro("");
    }
    if (!cep.trim()) {
      setCepErro("O CEP é obrigatório.");
      temErro = true;
    } else {
      setCepErro("");
    }
    if (!cidade.trim()) {
      setCidadeErro("A cidade é obrigatória.");
      temErro = true;
    } else {
      setCidadeErro("");
    }

    return temErro;
  };

  const atualizarEndereco = async (event) => {
    event.preventDefault();
    const enderecoValido = await validarEndereco();
    if (enderecoValido) {
      return;
    }
    try {
      const params = {
        id_cliente: user.idCliente,
        rua: rua,
        complemento: complemento,
        bairro: bairro,
        cep: cep,
        cidade: cidade,
      };

      const response = await atualizarEnderecoEcommerce(
        params.id_cliente,
        params
      );
      if (response.mensagem === "Endereço atualizado com sucesso") {
        buscarDadosCliente();
        toast.success("Seu endereço foi atualizado com sucesso.");
        setEdicaoEnderecoAtiva(false);
      }
    } catch (error) {
      toast.error(`Erro ao atualizar seu endereço, tente novamente.`);
    }
  };

  const removerItemCarrinho = (item) => {
    try {
      setIsLoading(true);
      carrinho.removerItemCarrinho(item);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const alterarQuantidadeProduto = async (idCarrinho, novaQuantidade) => {
    try {
      await carrinho.atualizarQuantidadeItemCarrinho(
        idCarrinho,
        novaQuantidade
      );
      carrinho.fetchItensCarrinho(user.idCliente);
    } catch (error) {
      console.error("Erro ao alterar a quantidade do produto: ", error);
    }
  };

  const irParaPagamento = async () => {
    if (naoTemEndereco) {
      toast.error("Você deve ter um endereço cadastrado para prosseguir");
      return;
    }
    try {
      const objetoEnvio = {
        carrinho: carrinho.itensCarrinho,
        cliente: cliente,
      };
      setIsLoading(true);
      const url = await criarSessaoCheckout(objetoEnvio);
      setPreferenceId(url.data.id);
      setEtapaPagamento(true);
      setEtapaCarrinho(false);
      setIsLoading(false);
    } catch (error) {
      console.error("Erro ao criar sessão de checkout: ", error);
      toast.error("Erro ao iniciar o processo de pagamento");
    }
  };

  useEffect(() => {
    buscarDadosCliente();
    initMercadoPago(`${token}`, {
      locale: "pt-BR",
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (
      (rua === "" &&
        complemento === "" &&
        bairro === "" &&
        cep === "" &&
        cidade === "") ||
      (rua === null &&
        complemento === null &&
        bairro === null &&
        cep === null &&
        cidade === null)
    ) {
      setNaoTemEndereco(true);
    } else {
      setNaoTemEndereco(false);
    }
  }, [rua, complemento, bairro, cep, cidade, naoTemEndereco]);

  return (
    <>
      <Header />
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
                  <ShoppingCart
                    size={22}
                    weight="fill"
                    color={colors.primaria}
                  />
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
                      {!edicaoEnderecoAtiva && !naoTemEndereco && (
                        <ContainerEnderecoCadastrado>
                          <TextosEnderecos>Rua: {rua}</TextosEnderecos>
                          <TextosEnderecos>
                            Complemento: {complemento}
                          </TextosEnderecos>
                          <TextosEnderecos>Setor: {bairro}</TextosEnderecos>
                          <TextosEnderecos>
                            CEP: {cep} - {cidade}
                          </TextosEnderecos>
                          <TextoEditarEndereco
                            onClick={() => setEdicaoEnderecoAtiva(true)}
                          >
                            EDITAR
                          </TextoEditarEndereco>
                        </ContainerEnderecoCadastrado>
                      )}
                      {naoTemEndereco && !edicaoEnderecoAtiva && (
                        <ContainerNaoTemEndereco>
                          <TituloNaoTemEndereco>
                            Você não possui nenhum endereço cadastrado
                          </TituloNaoTemEndereco>
                          <DescricaoNaoTemEndereco>
                            Cadastre seu endereço agora mesmo para receber seu
                            pedido!
                          </DescricaoNaoTemEndereco>
                          <Botao
                            tipo="button"
                            variante="contained"
                            tamanho="small"
                            texto="Cadastrar endereço"
                            mostrarBoxShadow={true}
                            corDeFundo={colors.primaria}
                            corDeFundoHover={colors.primariaClara}
                            fontFamily={fonte}
                            fontSize={10}
                            fontWeight="600"
                            width="25%"
                            height={36}
                            aoClicar={() => setEdicaoEnderecoAtiva(true)}
                          />
                        </ContainerNaoTemEndereco>
                      )}
                      {edicaoEnderecoAtiva && (
                        <>
                          <ContainerFormularioEdicaoEndereco
                            onSubmit={atualizarEndereco}
                          >
                            <ContainerCamposEdicaoEndereco>
                              <CampoTexto
                                texto="Rua"
                                variante="outlined"
                                tamanho="small"
                                fullWidth
                                style={{ flexGrow: 1, flexBasis: 200 }}
                                tipo="text"
                                value={rua}
                                aoMudar={(event) => {
                                  const texto = event.target.value;
                                  setRua(texto);
                                  setRuaErro("");
                                }}
                                erro={ruaErro !== ""}
                                textoDeAjuda={ruaErro}
                              />
                              <CampoTexto
                                texto="Complemento"
                                variante="outlined"
                                tamanho="small"
                                fullWidth
                                style={{ flexGrow: 1, flexBasis: 200 }}
                                tipo="text"
                                value={complemento}
                                aoMudar={(event) => {
                                  const texto = event.target.value;
                                  setComplemento(texto);
                                  setComplementoErro("");
                                }}
                                erro={complementoErro !== ""}
                                textoDeAjuda={complementoErro}
                              />
                              <CampoTexto
                                texto="Setor"
                                variante="outlined"
                                tamanho="small"
                                fullWidth
                                style={{ flexGrow: 1, flexBasis: 200 }}
                                tipo="text"
                                value={bairro}
                                aoMudar={(event) => {
                                  const texto = event.target.value;
                                  setBairro(texto);
                                  setBairroErro("");
                                }}
                                erro={bairroErro !== ""}
                                textoDeAjuda={bairroErro}
                              />
                              <CampoTexto
                                texto="CEP"
                                variante="outlined"
                                tamanho="small"
                                fullWidth
                                style={{ flexGrow: 1, flexBasis: 200 }}
                                tipo="text"
                                mascara="99999-999"
                                value={cep}
                                aoMudar={(texto) => {
                                  setCep(texto);
                                  setCepErro("");
                                }}
                                erro={cepErro !== ""}
                                textoDeAjuda={cepErro}
                              />
                              <CampoTexto
                                texto="Cidade"
                                variante="outlined"
                                tamanho="small"
                                fullWidth
                                style={{ flexGrow: 1, flexBasis: 200 }}
                                tipo="text"
                                value={cidade}
                                aoMudar={(event) => {
                                  const texto = event.target.value;
                                  setCidade(texto);
                                  setCidadeErro("");
                                }}
                                erro={cidadeErro !== ""}
                                textoDeAjuda={cidadeErro}
                              />
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
                                width="49.25%"
                                height={36}
                              />
                            </ContainerBotoesEdicaoEndereco>
                          </ContainerFormularioEdicaoEndereco>
                        </>
                      )}
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
                      {carrinho.itensCarrinho.map((item) => (
                        <ContainerItem>
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
                      {carrinho.itensCarrinho.map((item) => (
                        <ContainerItemResumo>
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
                          {rua}, {complemento}, {bairro}, {cidade}
                        </TextoEnderecoResumo>
                        <TextoEnderecoResumo>CEP: {cep}</TextoEnderecoResumo>
                      </ContainerEnderecoResumo>
                      <ContainerInfosValoresResumo>
                        <TituloEnderecoResumo>
                          Data estimada de entrega
                        </TituloEnderecoResumo>
                        <TextoEnderecoResumo>
                          {cidade === "Goiânia" && (
                            <>
                              Receba seu pedido até dia{" "}
                              {new Date(
                                new Date().setDate(new Date().getDate() + 4)
                              ).toLocaleDateString()}
                            </>
                          )}
                          {cidade !== "Goiânia" && (
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
                O seu carrinho está vazio!
              </TextoTituloCarrinhoVazio>
              <TextoDescricaoCarrinhoVazio>
                Deseja olhar outros produtos?
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
                width="55%"
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
      <Footer />
    </>
  );
}
