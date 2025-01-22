/* eslint-disable array-callback-return */
import { useMediaQuery } from "@mui/material";
import { Heart, ShoppingCart } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Botao from "../../components/Botao";
import CampoTexto from "../../components/CampoTexto";
import ImageMagnifier from "../../components/ImageMagnifier";
import useCarrinho from "../../hooks/Carrinho/useCarrinho";
import useAuthStore from "../../hooks/FluxoDeAutenticacao/useAuthStore";
import useProdutosCurtidos from "../../hooks/ProdutosCurtidos/useProdutosCurtidos";
import { fetchProdutos } from "../../services/Produtos";
import { colors } from "../../styles/colors";
import { fonte } from "../../styles/global";
import LayoutBase from "../../templates/LayoutBase";
import { formatarMoeda, ordenarMedidas } from "../../utils/funcoes";
import {
  ContainerBotaoAddCarrinho,
  ContainerBotoes,
  ContainerCep,
  ContainerCep2,
  ContainerCor,
  ContainerCorEscolhida,
  ContainerCores,
  ContainerDescricao,
  ContainerDireito,
  ContainerEsquerdo,
  ContainerImagem,
  ContainerImagensSecundarias,
  ContainerImgPrincipal,
  ContainerInfosComplementares,
  ContainerInputCep,
  ContainerInputCep2,
  ContainerNomePreco,
  ContainerProduto,
  ContainerTamanho,
  ContainerTamanhoEscolhido,
  ContainerTamanhos,
  ContainerTextosInfosAdicionais,
  ImgSecundaria,
  LinhaContainerTamanhoIndisponivel,
  TextoCepCalculado,
  TextoDescricao,
  TextoNome,
  TextoPreco,
  TextoSecundario,
  TextosInfosAdicionais,
} from "./styles";

const cores = {
  Amarelo: colors.amarelo,
  Azul: colors.azul,
  Branco: colors.branco,
  Cinza: colors.cinzaClaro,
  Marrom: "#964B00",
  Preto: colors.preto,
  Rosa: "#FFC0CB",
  Roxo: "#800080",
  Verde: colors.verde,
  Vermelho: colors.vermelho,
};

export default function PaginaProduto() {
  const { name } = useParams();
  const navigate = useNavigate();
  const { user } = useAuthStore();
  const firstMediaQuery = useMediaQuery("(max-width: 860px)");
  const [produtosDisponiveis, setProdutosDisponiveis] = useState([]);
  const [produtoSelecionado, setProdutoSelecionado] = useState(null);
  const [corSelecionada, setCorSelecionada] = useState(null);
  const [tamanhosPorCorSelecionada, setTamanhosPorCorSelecionada] = useState(
    []
  );
  const [isLoading, setIsLoading] = useState(true);
  const [imagemSelecionada, setImagemSelecionada] = useState(null);
  const [tamanhoSelecionado, setTamanhoSelecionado] = useState([]);
  const [produtoCurtido, setProdutoCurtido] = useState(false);
  const [modalErro, setModalErro] = useState(false);
  const [descricaoErro, setDescricaoErro] = useState("");
  const [cep, setCep] = useState("");
  const [cepErro, setCepErro] = useState("");
  const [cepCalculado, setCepCalculado] = useState(false);
  const carrinho = useCarrinho();
  const produtosCurtidos = useProdutosCurtidos();

  async function loadProducts() {
    try {
      const produtos = await fetchProdutos();
      setProdutosDisponiveis(produtos);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  }

  const handleCorSelecionada = (cor) => {
    setCorSelecionada(cor);
    setTamanhoSelecionado(null);
  };

  const handleImagemPrincipal = (imagem) => {
    setImagemSelecionada(imagem);
  };

  const handleTamanhoSelecionado = (tamanho) => {
    setTamanhoSelecionado(tamanho);
  };

  const toggleLikeProduct = async () => {
    try {
      const idProduto = produtoSelecionado.id_produto;

      if (!user) {
        navigate("/login");
        return;
      }

      if (isProductLiked(idProduto)) {
        const idProdutoCurtido = findIdProdutoCurtido(idProduto);
        await produtosCurtidos.removerProdutoCurtido(idProdutoCurtido);
      } else {
        const curtidosData = {
          idCliente: user.idCliente,
          idProduto: idProduto,
        };
        await produtosCurtidos.adicionarProdutoCurtido(curtidosData);
        produtosCurtidos.fetchProdutosCurtidos(user.idCliente);
      }

      setProdutoCurtido(!isProductLiked(idProduto));
    } catch (error) {
      console.error(error);
    }
  };

  const isProductLiked = (idProduto) => {
    return produtosCurtidos.produtosCurtidos.some(
      (produto) => produto.id_produto === idProduto
    );
  };

  const findIdProdutoCurtido = (idProduto) => {
    const produtoCurtido = produtosCurtidos.produtosCurtidos.find(
      (produto) => produto.id_produto === idProduto
    );
    return produtoCurtido ? produtoCurtido.id_produto_curtido : null;
  };

  const handleComprar = async () => {
    try {
      setIsLoading(true);
      const variacaoSelecionada = produtoSelecionado.variacoes.find(
        (variacao) =>
          variacao.cor_variacao_produto === corSelecionada &&
          variacao.medida_variacao_produto === tamanhoSelecionado
      );

      if (!user) {
        navigate("/login");
        return;
      }

      if (!tamanhosPorCorSelecionada.includes(tamanhoSelecionado)) {
        setModalErro(true);
        setDescricaoErro(
          "Você deve selecionar um tamanho do produto antes de prosseguir."
        );
        return;
      }

      if (
        carrinho.itensCarrinho.find(
          (item) =>
            item.id_variacao_produto === variacaoSelecionada.id_variacao_produto
        )
      ) {
        setModalErro(true);
        setDescricaoErro("Esse produto já foi adicionado ao carrinho.");
        return;
      }

      if (produtoSelecionado && corSelecionada && tamanhoSelecionado) {
        const carrinhoData = {
          idCliente: user.idCliente,
          idVariacaoProduto: variacaoSelecionada.id_variacao_produto,
          quantidade: 1,
        };
        await carrinho.adicionarAoCarrinho(carrinhoData);
        setTimeout(() => {
          navigate("/carrinho");
        }, 50);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleAdicionarAoCarrinho = async () => {
    try {
      setIsLoading(true);
      const variacaoSelecionada = produtoSelecionado.variacoes.find(
        (variacao) =>
          variacao.cor_variacao_produto === corSelecionada &&
          variacao.medida_variacao_produto === tamanhoSelecionado
      );

      if (!user) {
        navigate("/login");
        return;
      }

      if (!tamanhosPorCorSelecionada.includes(tamanhoSelecionado)) {
        setModalErro(true);
        setDescricaoErro(
          "Você deve selecionar um tamanho do produto antes de prosseguir."
        );
        return;
      }

      if (
        carrinho.itensCarrinho.find(
          (item) =>
            item.id_variacao_produto === variacaoSelecionada.id_variacao_produto
        )
      ) {
        setModalErro(true);
        setDescricaoErro("Esse produto já foi adicionado ao carrinho.");
        return;
      }

      if (produtoSelecionado && corSelecionada && tamanhoSelecionado) {
        const carrinhoData = {
          idCliente: user.idCliente,
          idVariacaoProduto: variacaoSelecionada.id_variacao_produto,
          quantidade: 1,
        };
        await carrinho.adicionarAoCarrinho(carrinhoData);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const validarCep = () => {
    let temErro = false;

    const cepFormatado = cep.replace(/\D/g, "");

    if (!cep.trim()) {
      setCepErro("O cep é obrigatório.");
      setCepCalculado(false);
      temErro = true;
    } else if (cepFormatado.length !== 8) {
      setCepErro("O CEP deve conter exatamente 8 dígitos");
      temErro = true;
    } else {
      setCepErro("");
    }

    return temErro;
  };

  const calcularCep = () => {
    if (validarCep()) {
      setCepCalculado(false);
      return;
    }
    setCepCalculado(true);
  };

  useEffect(() => {
    if (produtosDisponiveis.length > 0) {
      const produto = produtosDisponiveis.find(
        (produto) => produto.nome_produto === name
      );
      if (produto && produto !== produtoSelecionado) {
        setProdutoSelecionado(produto);
        const corVariacao = produto.variacoes.find(
          (variacao) => variacao.cor_variacao_produto === corSelecionada
        );
        if (corVariacao) {
          setCorSelecionada(corSelecionada);
        } else {
          setCorSelecionada(produto.variacoes[0].cor_variacao_produto);
        }
      }
    }
  }, [produtosDisponiveis, name, produtoSelecionado, corSelecionada]);

  useEffect(() => {
    if (produtoSelecionado && corSelecionada) {
      const varVariacaoPorCorSelecionada = produtoSelecionado.variacoes.filter(
        (variacao) => variacao.cor_variacao_produto === corSelecionada
      );

      const tamanhos = varVariacaoPorCorSelecionada.map(
        (variacao) => variacao.medida_variacao_produto
      );

      setTamanhosPorCorSelecionada(tamanhos);
      setImagemSelecionada(
        produtoSelecionado.variacoes.find(
          (variacao) => variacao.cor_variacao_produto === corSelecionada
        ).imagens_variacao_produto[0]
      );
    }
  }, [corSelecionada, produtoSelecionado]);

  useEffect(() => {
    loadProducts();
  }, []);

  useEffect(() => {
    if (cep === "") {
      setCepCalculado(false);
    }
  }, [cep]);

  return (
    <>
      {!isLoading && produtoSelecionado && (
        <LayoutBase>
          <main>
            <ContainerProduto>
              <ContainerEsquerdo>
                <ContainerImgPrincipal>
                  <ImageMagnifier
                    imgUrl={imagemSelecionada}
                    imgAlt={produtoSelecionado.nome_produto}
                  />
                </ContainerImgPrincipal>
                <ContainerImagensSecundarias>
                  {produtoSelecionado.variacoes
                    .find(
                      (variacao) =>
                        variacao.cor_variacao_produto === corSelecionada
                    )
                    .imagens_variacao_produto.map((imagem, index) => (
                      <ContainerImagem
                        key={index}
                        onClick={() => handleImagemPrincipal(imagem)}
                        style={{
                          border:
                            imagem === imagemSelecionada &&
                            `2px solid ${colors.primaria}`,
                        }}
                      >
                        <ImgSecundaria src={imagem} alt={`Imagem ${index}`} />
                      </ContainerImagem>
                    ))}
                </ContainerImagensSecundarias>
                <ContainerCep>
                  <TextoSecundario>Calcule o frete</TextoSecundario>
                  <ContainerInputCep>
                    <CampoTexto
                      texto="Digite seu cep"
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
                    <Botao
                      corDeFundo={colors.primaria}
                      corDeFundoHover={colors.primariaClara}
                      mostrarBoxShadow={true}
                      corTexto={colors.branco}
                      fontFamily={fonte}
                      fontSize={10}
                      fontWeight={600}
                      flexGrow={1}
                      flexBasis={120}
                      width="100%"
                      height={40}
                      tamanho="small"
                      variante="contained"
                      texto="Calcular"
                      type="button"
                      aoClicar={calcularCep}
                    />
                  </ContainerInputCep>
                  {cepCalculado && (
                    <TextoCepCalculado>FRETE GRÁTIS</TextoCepCalculado>
                  )}
                </ContainerCep>
              </ContainerEsquerdo>
              <ContainerDireito>
                <ContainerNomePreco>
                  <TextoNome>{produtoSelecionado.nome_produto}</TextoNome>
                  <TextoPreco>
                    {formatarMoeda(produtoSelecionado.preco_venda_produto)}
                  </TextoPreco>
                </ContainerNomePreco>
                <ContainerDescricao>
                  <TextoDescricao>
                    {produtoSelecionado.descricao_produto}
                  </TextoDescricao>
                </ContainerDescricao>
                <ContainerCor>
                  <TextoSecundario>Cores</TextoSecundario>
                  <ContainerCores>
                    {produtoSelecionado.variacoes.map((variacao, index) => {
                      const cor = variacao.cor_variacao_produto;
                      if (
                        cores[cor] &&
                        produtoSelecionado.variacoes.findIndex(
                          (v) => v.cor_variacao_produto === cor
                        ) === index
                      ) {
                        return (
                          <ContainerCorEscolhida
                            key={index}
                            style={{
                              backgroundColor: cores[cor],
                              boxShadow:
                                cor === corSelecionada
                                  ? "inset 0 0 0 1px black, inset 0 0 0 4px white"
                                  : "none",
                            }}
                            onClick={() => handleCorSelecionada(cor)}
                          />
                        );
                      }
                      return null;
                    })}
                  </ContainerCores>
                </ContainerCor>
                <ContainerTamanho>
                  <TextoSecundario>Tamanhos</TextoSecundario>
                  <ContainerTamanhos>
                    {ordenarMedidas(
                      produtoSelecionado.variacoes.map(
                        (variacao) => variacao.medida_variacao_produto
                      )
                    ).map((tamanhoOrdenado) => {
                      return (
                        <ContainerTamanhoEscolhido
                          key={tamanhoOrdenado}
                          onClick={() =>
                            tamanhosPorCorSelecionada.includes(
                              tamanhoOrdenado
                            ) && handleTamanhoSelecionado(tamanhoOrdenado)
                          }
                          style={{
                            backgroundColor: tamanhosPorCorSelecionada.includes(
                              tamanhoOrdenado
                            )
                              ? colors.branco
                              : "#f9fafb",
                            color: tamanhosPorCorSelecionada.includes(
                              tamanhoOrdenado
                            )
                              ? colors.preto2
                              : "#E5E7EB",
                            cursor: tamanhosPorCorSelecionada.includes(
                              tamanhoOrdenado
                            )
                              ? "pointer"
                              : "initial",
                            border:
                              tamanhoSelecionado === tamanhoOrdenado
                                ? `2px solid ${colors.preto2}`
                                : `2px solid ${colors.cinzaSuperClaro}`,
                          }}
                        >
                          {tamanhoOrdenado}
                          {!tamanhosPorCorSelecionada.includes(
                            tamanhoOrdenado
                          ) && <LinhaContainerTamanhoIndisponivel />}
                        </ContainerTamanhoEscolhido>
                      );
                    })}
                  </ContainerTamanhos>
                </ContainerTamanho>
                <ContainerBotoes>
                  <Botao
                    corDeFundo={colors.primaria}
                    corDeFundoHover={colors.primariaClara}
                    mostrarBoxShadow={true}
                    corTexto={colors.branco}
                    fontFamily={fonte}
                    fontSize={12}
                    fontWeight={600}
                    flexGrow={firstMediaQuery && 1}
                    flexBasis={firstMediaQuery && 40}
                    width="50%"
                    height={40}
                    tamanho="small"
                    variante="contained"
                    texto="Comprar"
                    aoClicar={handleComprar}
                  />
                  <ContainerBotaoAddCarrinho
                    onClick={handleAdicionarAoCarrinho}
                  >
                    <ShoppingCart size={26} color={colors.branco} />
                  </ContainerBotaoAddCarrinho>
                  <Heart
                    size={26}
                    color={colors.primaria}
                    weight={
                      isProductLiked(produtoSelecionado.id_produto)
                        ? "fill"
                        : "regular"
                    }
                    onClick={toggleLikeProduct}
                    style={{ cursor: "pointer" }}
                  />
                </ContainerBotoes>
                <ContainerInfosComplementares>
                  <TextoSecundario>Tecidos & Cuidados</TextoSecundario>
                  {produtoSelecionado.categoria_produto === "calcados" && (
                    <ContainerTextosInfosAdicionais>
                      <TextosInfosAdicionais>
                        Somente os melhores materiais
                      </TextosInfosAdicionais>
                      <TextosInfosAdicionais>
                        Feito de forma ética
                      </TextosInfosAdicionais>
                      <TextosInfosAdicionais>
                        Pré-lavado e pré-encolhido
                      </TextosInfosAdicionais>
                      <TextosInfosAdicionais>
                        Lavar à máquina com cores semelhantes
                      </TextosInfosAdicionais>
                    </ContainerTextosInfosAdicionais>
                  )}
                  {produtoSelecionado.categoria_produto === "roupas" && (
                    <ContainerTextosInfosAdicionais>
                      <TextosInfosAdicionais>
                        Lavagem à mão preferencialmente
                      </TextosInfosAdicionais>
                      <TextosInfosAdicionais>
                        Secar ao ar livre
                      </TextosInfosAdicionais>
                      <TextosInfosAdicionais>
                        Passar a ferro em temperatura média
                      </TextosInfosAdicionais>
                      <TextosInfosAdicionais>
                        Não usar alvejante
                      </TextosInfosAdicionais>
                    </ContainerTextosInfosAdicionais>
                  )}
                  {produtoSelecionado.categoria_produto === "acessorios" && (
                    <ContainerTextosInfosAdicionais>
                      <TextosInfosAdicionais>
                        Limpar com pano seco
                      </TextosInfosAdicionais>
                      <TextosInfosAdicionais>
                        Evitar contato com água
                      </TextosInfosAdicionais>
                      <TextosInfosAdicionais>
                        Armazenar em local seco
                      </TextosInfosAdicionais>
                    </ContainerTextosInfosAdicionais>
                  )}
                </ContainerInfosComplementares>
              </ContainerDireito>
            </ContainerProduto>
            <ContainerCep2>
              <TextoSecundario>Calcule o frete</TextoSecundario>
              <ContainerInputCep2>
                <CampoTexto
                  texto="Digite seu cep"
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
                <Botao
                  corDeFundo={colors.primaria}
                  corDeFundoHover={colors.primariaClara}
                  mostrarBoxShadow={true}
                  corTexto={colors.branco}
                  fontFamily={fonte}
                  fontSize={10}
                  fontWeight={600}
                  flexGrow={1}
                  flexBasis={120}
                  width="100%"
                  height={40}
                  tamanho="small"
                  variante="contained"
                  texto="Calcular"
                  type="button"
                  aoClicar={calcularCep}
                />
              </ContainerInputCep2>
              {cepCalculado && (
                <TextoCepCalculado>FRETE GRÁTIS</TextoCepCalculado>
              )}
            </ContainerCep2>
          </main>
        </LayoutBase>
      )}
    </>
  );
}
