/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
import { useMediaQuery } from "@mui/material";
import { Heart, ShoppingCart } from "@phosphor-icons/react";
import { Form } from "@unform/web";
import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Botao from "../../components/Botao";
import CampoTexto from "../../components/CampoTexto";
import ImageMagnifier from "../../components/ImageMagnifier";
import { fetchProdutos } from "../../services/Produtos";
import useAuthStore from "../../stores/useAuthStore";
import useCarrinho from "../../stores/useCarrinho";
import useProdutosCurtidos from "../../stores/useProdutosCurtidos";
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
  const formCepRef = useRef(null);
  const [produtosDisponiveis, setProdutosDisponiveis] = useState([]);
  const [produtoSelecionado, setProdutoSelecionado] = useState(null);
  const [corSelecionada, setCorSelecionada] = useState(null);
  const [tamanhosPorCorSelecionada, setTamanhosPorCorSelecionada] = useState(
    []
  );
  const [isLoading, setIsLoading] = useState(true);
  const [imagemSelecionada, setImagemSelecionada] = useState(null);
  const [tamanhoSelecionado, setTamanhoSelecionado] = useState([]);
  const [cepCalculado, setCepCalculado] = useState(false);
  const carrinho = useCarrinho();
  const produtosCurtidos = useProdutosCurtidos();

  async function loadProducts() {
    try {
      const produtos = await fetchProdutos();
      setProdutosDisponiveis(produtos);
      setIsLoading(false);
    } catch (error) {
      toast.error(error);
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
        toast.error(
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
        toast.error("Esse produto já foi adicionado ao carrinho.");
        return;
      }

      if (produtoSelecionado && corSelecionada && tamanhoSelecionado) {
        const carrinhoData = {
          id_produto: produtoSelecionado.id_produto,
          nome_produto: produtoSelecionado.nome_produto,
          descricao_produto: produtoSelecionado.descricao_produto,
          categoria_produto: produtoSelecionado.categoria_produto,
          marca_produto: produtoSelecionado.marca_produto,
          preco_venda_produto: produtoSelecionado.preco_venda_produto,
          ...variacaoSelecionada,
          quantidade: 1,
        };
        await carrinho.adicionarAoCarrinho(carrinhoData);
        setTimeout(() => {
          navigate("/carrinho");
        }, 50);
      }
    } catch (error) {
      toast.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleAdicionarAoCarrinho = async () => {
    try {
      setIsLoading(true);

      // Encontra a variação selecionada
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
        toast.error(
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
        toast.error("Esse produto já foi adicionado ao carrinho.");
        return;
      }

      if (produtoSelecionado && corSelecionada && tamanhoSelecionado) {
        const carrinhoData = {
          id_produto: produtoSelecionado.id_produto,
          nome_produto: produtoSelecionado.nome_produto,
          descricao_produto: produtoSelecionado.descricao_produto,
          categoria_produto: produtoSelecionado.categoria_produto,
          marca_produto: produtoSelecionado.marca_produto,
          preco_venda_produto: produtoSelecionado.preco_venda_produto,
          ...variacaoSelecionada,
          quantidade: 1,
        };

        await carrinho.adicionarAoCarrinho(carrinhoData);
      }
    } catch (error) {
      toast.error("Ocorreu um erro ao adicionar o produto ao carrinho.");
      toast.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const toggleLikeProduct = async () => {
    try {
      const produto = produtoSelecionado;

      if (!user) {
        navigate("/login");
        return;
      }
      if (isProductLiked(produto.id_produto)) {
        const idProdutoCurtido = findIdProdutoCurtido(produto.id_produto);
        await produtosCurtidos.removerProdutoCurtido(idProdutoCurtido);
      } else {
        const curtidosData = {
          idCliente: user.idCliente,
          ...produto,
        };
        await produtosCurtidos.adicionarProdutoCurtido(curtidosData);
        produtosCurtidos.fetchProdutosCurtidos(user.idCliente);
      }
    } catch (error) {
      toast.error(error);
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
    return produtoCurtido ? produtoCurtido.id_produto : null;
  };

  const validarCep = () => {
    const cep = formCepRef?.current?.getFieldValue("cep");

    const cepFormatado = cep.replace(/\D/g, "");

    if (!cep) {
      formCepRef.current.setFieldError("cep", "Campo Obrigatório");
      return false;
    } else if (cepFormatado.length !== 8) {
      formCepRef.current.setFieldError(
        "cep",
        "O CEP deve conter exatamente 8 dígitos"
      );
      return false;
    }

    return true;
  };

  const calcularCep = () => {
    if (!validarCep()) {
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
                <Form ref={formCepRef} onSubmit={calcularCep}>
                  <ContainerCep>
                    <TextoSecundario>Calcule o frete</TextoSecundario>
                    <ContainerInputCep>
                      <CampoTexto
                        name="cep"
                        label="Digite seu cep"
                        type="number"
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
                        type="submit"
                      />
                    </ContainerInputCep>
                    {cepCalculado && (
                      <TextoCepCalculado>FRETE GRÁTIS</TextoCepCalculado>
                    )}
                  </ContainerCep>
                </Form>
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
                    <ShoppingCart size={28} color={colors.branco} />
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
                  {produtoSelecionado.categoria_produto === "Calçados" && (
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
                  {produtoSelecionado.categoria_produto === "Roupas" && (
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
                  {produtoSelecionado.categoria_produto === "Acessórios" && (
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
            <Form ref={formCepRef} onSubmit={calcularCep}>
              <ContainerCep2>
                <TextoSecundario>Calcule o frete</TextoSecundario>
                <ContainerInputCep2>
                  <CampoTexto name="cep" label="Digite seu cep" type="number" />
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
                    type="submit"
                  />
                </ContainerInputCep2>
                {cepCalculado && (
                  <TextoCepCalculado>FRETE GRÁTIS</TextoCepCalculado>
                )}
              </ContainerCep2>
            </Form>
          </main>
        </LayoutBase>
      )}
    </>
  );
}
