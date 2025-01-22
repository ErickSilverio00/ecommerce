import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import fundoFeminino from "../../assets/img/Feminino.png";
import TituloSubtituloSecoes from "../../components/TituloSubtituloSecoes";
import Produto from "../../components/Produto";
import { fetchProdutos } from "../../services/Produtos";
import { formatarMedidas, formatarMoeda } from "../../utils/funcoes";
import CampoSelecionar from "../../components/CampoSelecionar";
import { Plus, Minus, Funnel, ArrowLeft } from "@phosphor-icons/react";
import logo from "../../assets/img/logoMatheusCalcados.png";
import Loading from "../../assets/animations/loading2-MC.json";
import Lottie from "lottie-react";
import { useMediaQuery } from "@mui/material";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import {
  CheckboxCategoria,
  CheckboxCor,
  CheckboxTamanho,
  ContainerAnimacaoFiltro,
  ContainerBlocoProdutos,
  ContainerFilrosSubcategorias,
  ContainerFiltroOrdenacao,
  ContainerFiltros,
  ContainerFiltrosCores,
  ContainerFiltrosTamanhos,
  ContainerGeralProdutos,
  ContainerImagem,
  ContainerOpcaoCategoria,
  ContainerOpcaoCor,
  ContainerOpcaoTamanho,
  ContainerOpcoesCategorias,
  ContainerOpcoesCores,
  ContainerOpcoesTamanhos,
  ContainerPrimeiraLinha,
  ContainerPrincipal,
  ContainerProdutos,
  ContainerSlides,
  ContainerTituloFiltroCategorias,
  ContainerTituloFiltroCores,
  ContainerTituloFiltroTamanhos,
  ContainerVoltarDrawer,
  LoadingContainer,
  LogoContainer,
  TextoCheckbox,
  TextoFiltros,
  TextoNaoEncontrou,
} from "./styles";
import { colors } from "../../styles/colors";

const categorias = [
  "Bolsas",
  "Camisas",
  "Calças",
  "Chinelos",
  "Meias",
  "Mochilas",
  "Shorts",
  "Sandálias",
  "Tênis",
];

const cores = [
  "Amarelo",
  "Azul",
  "Branco",
  "Cinza",
  "Marrom",
  "Preto",
  "Rosa",
  "Roxo",
  "Verde",
  "Vermelho",
];

const tamanhos = [
  "Tamanho único",
  "PP",
  "P",
  "M",
  "G",
  "GG",
  "36",
  "37",
  "38",
  "39",
  "40",
  "41",
  "42",
  "43",
  "44",
  "45",
];

export default function Feminino() {
  const firstMediaQuery = useMediaQuery("(max-width: 772px)");
  const [produtosDisponiveis, setProdutosDisponiveis] = useState([]);
  const [categoriasVisiveis, setCategoriasVisiveis] = useState(false);
  const [coresVisiveis, setCoresVisiveis] = useState(false);
  const [tamanhosVisiveis, setTamanhosVisiveis] = useState(false);
  const [coresSelecionadas, setCoresSelecionadas] = useState([]);
  const [categoriasSelecionadas, setCategoriasSelecionadas] = useState([]);
  const [tamanhosSelecionados, setTamanhosSelecionados] = useState([]);
  const [produtosFiltrados, setProdutosFiltrados] = useState([]);
  const [estaFiltrando, setEstaFiltrando] = useState(false);
  const [checkboxesSelecionados, setCheckboxesSelecionados] = useState(false);
  const [ordenacaoProduto, setOrdenacaoProduto] = useState("");
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleVisibility = (stateSetter) => {
    stateSetter((prev) => !prev);
  };

  const handleToggle = (item, state, stateSetter) => {
    const updatedState = state.includes(item)
      ? state.filter((i) => i !== item)
      : [...state, item];
    stateSetter(updatedState);
    setCheckboxesSelecionados(true);
  };

  const ordenarPor = (filtro) => {
    try {
      setOrdenacaoProduto(filtro);

      let produtosOrdenados = [];

      switch (filtro) {
        case "maisNovo":
          produtosOrdenados = produtosDisponiveis
            .slice()
            .sort(
              (a, b) =>
                new Date(b.data_compra_produto) -
                new Date(a.data_compra_produto)
            );
          break;
        case "precoDecrescente":
          produtosOrdenados = produtosDisponiveis
            .slice()
            .sort((a, b) => b.preco_venda_produto - a.preco_venda_produto);
          break;
        case "precoCrescente":
          produtosOrdenados = produtosDisponiveis
            .slice()
            .sort((a, b) => a.preco_venda_produto - b.preco_venda_produto);
          break;
        default:
          produtosOrdenados = produtosDisponiveis.slice();
          break;
      }

      setProdutosDisponiveis(produtosOrdenados);
    } catch (error) {
      console.error(error);
    }
  };

  const toggleDrawer = (open) => (event) => {
    setDrawerOpen(open);
  };

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const produtos = await fetchProdutos();
        const produtosFemininos = produtos.filter(
          (produto) =>
            produto.genero_produto === "feminino" ||
            produto.genero_produto === "unissex"
        );
        setProdutosDisponiveis(produtosFemininos);
      } catch (error) {
        console.error(error);
      }
    };

    loadProducts();
  }, []);

  useEffect(() => {
    if (checkboxesSelecionados) {
      const handleFilters = async () => {
        setEstaFiltrando(true);
        setDrawerOpen(false);
        const containerBlocoProdutos = document.getElementById(
          "containerBlocoProdutos"
        );

        const desiredScrollTop = containerBlocoProdutos.offsetTop - 80;

        window.scrollTo({
          top: desiredScrollTop,
          behavior: "smooth",
        });

        const filtered = produtosDisponiveis.filter((produto) => {
          const temCorSelecionada =
            coresSelecionadas.length === 0 ||
            produto.variacoes.some((variacao) =>
              coresSelecionadas.includes(variacao.cor_variacao_produto)
            );
          const temCategoriaSelecionada =
            categoriasSelecionadas.length === 0 ||
            categoriasSelecionadas.includes(produto.subcategoria_produto);
          const temTamanhoSelecionado =
            tamanhosSelecionados.length === 0 ||
            produto.variacoes.some((variacao) =>
              tamanhosSelecionados.includes(variacao.medida_variacao_produto)
            );

          return (
            temCorSelecionada &&
            temCategoriaSelecionada &&
            temTamanhoSelecionado
          );
        });

        setProdutosFiltrados(filtered);

        setTimeout(() => {
          setEstaFiltrando(false);
        }, 1000);
      };

      handleFilters();
    }
  }, [
    checkboxesSelecionados,
    coresSelecionadas,
    categoriasSelecionadas,
    tamanhosSelecionados,
    produtosDisponiveis,
  ]);

  return (
    <div>
      <Header />
      <ContainerPrincipal>
        <ContainerSlides>
          <ContainerImagem src={fundoFeminino} />
        </ContainerSlides>
        <ContainerBlocoProdutos id="containerBlocoProdutos">
          <ContainerPrimeiraLinha>
            <TituloSubtituloSecoes title="Feminino" />
            <ContainerFiltroOrdenacao>
              <CampoSelecionar
                label="Ordenar por"
                variante="outlined"
                tamanho="small"
                width="100%"
                flexBasis={320}
                value={ordenacaoProduto}
                onChange={ordenarPor}
                options={[
                  { value: "maisNovo", label: "Mais recentes" },
                  {
                    value: "precoDecrescente",
                    label: "Preço: maior para menor",
                  },
                  {
                    value: "precoCrescente",
                    label: "Preço: menor para maior",
                  },
                ]}
              />
              {firstMediaQuery && (
                <Funnel
                  size={40}
                  color={colors.cinzaClaro}
                  style={{ cursor: "pointer" }}
                  onClick={toggleDrawer(true)}
                />
              )}
            </ContainerFiltroOrdenacao>
          </ContainerPrimeiraLinha>
          <ContainerGeralProdutos>
            <ContainerFiltros>
              <ContainerFilrosSubcategorias>
                <ContainerTituloFiltroCategorias
                  onClick={() => toggleVisibility(setCategoriasVisiveis)}
                >
                  <TextoFiltros>Categorias</TextoFiltros>
                  {!categoriasVisiveis ? (
                    <Plus
                      size={18}
                      color={colors.cinzaClaro}
                      className="plus-color"
                    />
                  ) : (
                    <Minus
                      size={18}
                      color={colors.cinzaClaro}
                      className="plus-color"
                    />
                  )}
                </ContainerTituloFiltroCategorias>
                {categoriasVisiveis && (
                  <ContainerOpcoesCategorias>
                    {categorias.map((categoria) => (
                      <ContainerOpcaoCategoria key={categoria}>
                        <CheckboxCategoria
                          type="checkbox"
                          onChange={() =>
                            handleToggle(
                              categoria
                                .toLowerCase()
                                .normalize("NFD")
                                .replace(/[\u0300-\u036f]/g, ""),
                              categoriasSelecionadas,
                              setCategoriasSelecionadas
                            )
                          }
                          checked={categoriasSelecionadas.includes(
                            categoria
                              .toLowerCase()
                              .normalize("NFD")
                              .replace(/[\u0300-\u036f]/g, "")
                          )}
                        />
                        <TextoCheckbox>{categoria}</TextoCheckbox>
                      </ContainerOpcaoCategoria>
                    ))}
                  </ContainerOpcoesCategorias>
                )}
              </ContainerFilrosSubcategorias>
              <ContainerFiltrosCores>
                <ContainerTituloFiltroCores
                  onClick={() => toggleVisibility(setCoresVisiveis)}
                >
                  <TextoFiltros>Cores</TextoFiltros>
                  {!coresVisiveis ? (
                    <Plus
                      size={18}
                      color={colors.cinzaClaro}
                      className="plus-color"
                    />
                  ) : (
                    <Minus
                      size={18}
                      color={colors.cinzaClaro}
                      className="plus-color"
                    />
                  )}
                </ContainerTituloFiltroCores>
                {coresVisiveis && (
                  <ContainerOpcoesCores>
                    {cores.map((cor) => (
                      <ContainerOpcaoCor key={cor}>
                        <CheckboxCor
                          type="checkbox"
                          onChange={() =>
                            handleToggle(
                              cor,
                              coresSelecionadas,
                              setCoresSelecionadas
                            )
                          }
                          checked={coresSelecionadas.includes(cor)}
                        />
                        <TextoCheckbox>{cor}</TextoCheckbox>
                      </ContainerOpcaoCor>
                    ))}
                  </ContainerOpcoesCores>
                )}
              </ContainerFiltrosCores>
              <ContainerFiltrosTamanhos>
                <ContainerTituloFiltroTamanhos
                  onClick={() => toggleVisibility(setTamanhosVisiveis)}
                >
                  <TextoFiltros>Tamanhos</TextoFiltros>
                  {!tamanhosVisiveis ? (
                    <Plus
                      size={18}
                      color={colors.cinzaClaro}
                      className="plus-color"
                    />
                  ) : (
                    <Minus
                      size={18}
                      color={colors.cinzaClaro}
                      className="plus-color"
                    />
                  )}
                </ContainerTituloFiltroTamanhos>
                {tamanhosVisiveis && (
                  <ContainerOpcoesTamanhos>
                    {tamanhos.map((tamanho) => (
                      <ContainerOpcaoTamanho key={tamanho}>
                        <CheckboxTamanho
                          type="checkbox"
                          onChange={() =>
                            handleToggle(
                              tamanho,
                              tamanhosSelecionados,
                              setTamanhosSelecionados
                            )
                          }
                          checked={tamanhosSelecionados.includes(tamanho)}
                        />
                        <TextoCheckbox>{tamanho}</TextoCheckbox>
                      </ContainerOpcaoTamanho>
                    ))}
                  </ContainerOpcoesTamanhos>
                )}
              </ContainerFiltrosTamanhos>
            </ContainerFiltros>
            <ContainerProdutos
              style={{
                maxWidth: estaFiltrando && "none",
                width: estaFiltrando && "100%",
              }}
            >
              <>
                {estaFiltrando && (
                  <ContainerAnimacaoFiltro>
                    <LogoContainer>
                      <img src={logo} alt="Matheus Calçados" />
                    </LogoContainer>
                    <LoadingContainer>
                      <Lottie
                        animationData={Loading}
                        autoPlay={true}
                        loop={true}
                        width="100%"
                        height="100%"
                      />
                    </LoadingContainer>
                  </ContainerAnimacaoFiltro>
                )}
                {!estaFiltrando && (
                  <>
                    {(checkboxesSelecionados &&
                      produtosFiltrados.length === 0) ||
                    (!checkboxesSelecionados &&
                      produtosDisponiveis.length === 0) ? (
                      <TextoNaoEncontrou>
                        Nenhum produto encontrado com esse critério de pesquisa.
                        Tente outro filtro!
                      </TextoNaoEncontrou>
                    ) : (
                      <>
                        {checkboxesSelecionados
                          ? produtosFiltrados.map(
                              (produto) =>
                                produto && (
                                  <Produto
                                    key={produto.id}
                                    idProduto={produto.id_produto}
                                    image={
                                      produto.variacoes[0]
                                        .imagens_variacao_produto[0]
                                    }
                                    name={produto.nome_produto}
                                    size={formatarMedidas(
                                      produto.variacoes.map(
                                        (variacao) =>
                                          variacao.medida_variacao_produto
                                      )
                                    )}
                                    price={formatarMoeda(
                                      produto.preco_venda_produto
                                    )}
                                  />
                                )
                            )
                          : produtosDisponiveis.map(
                              (produto) =>
                                produto && (
                                  <Produto
                                    key={produto.id}
                                    idProduto={produto.id_produto}
                                    image={
                                      produto.variacoes[0]
                                        .imagens_variacao_produto[0]
                                    }
                                    name={produto.nome_produto}
                                    size={formatarMedidas(
                                      produto.variacoes.map(
                                        (variacao) =>
                                          variacao.medida_variacao_produto
                                      )
                                    )}
                                    price={formatarMoeda(
                                      produto.preco_venda_produto
                                    )}
                                  />
                                )
                            )}
                      </>
                    )}
                  </>
                )}
              </>
            </ContainerProdutos>
          </ContainerGeralProdutos>
        </ContainerBlocoProdutos>
      </ContainerPrincipal>
      <Footer />

      {/* Drawer Filtros Mobile */}
      {firstMediaQuery && (
        <Drawer
          anchor="right"
          open={drawerOpen}
          onClose={toggleDrawer(false)}
          style={{ zIndex: 9999999 }}
        >
          <List style={{ width: 280, paddingInline: 10 }}>
            <ContainerVoltarDrawer onClick={() => setDrawerOpen(false)}>
              <ArrowLeft size={24} />
              <TextoFiltros>VOLTAR</TextoFiltros>
            </ContainerVoltarDrawer>
            <ContainerFilrosSubcategorias>
              <ContainerTituloFiltroCategorias
                onClick={() => toggleVisibility(setCategoriasVisiveis)}
              >
                <TextoFiltros>Categorias</TextoFiltros>
                {!categoriasVisiveis ? (
                  <Plus
                    size={18}
                    color={colors.cinzaClaro}
                    className="plus-color"
                  />
                ) : (
                  <Minus
                    size={18}
                    color={colors.cinzaClaro}
                    className="plus-color"
                  />
                )}
              </ContainerTituloFiltroCategorias>
              {categoriasVisiveis && (
                <ContainerOpcoesCategorias>
                  {categorias.map((categoria) => (
                    <ContainerOpcaoCategoria key={categoria}>
                      <CheckboxCategoria
                        type="checkbox"
                        onChange={() =>
                          handleToggle(
                            categoria
                              .toLowerCase()
                              .normalize("NFD")
                              .replace(/[\u0300-\u036f]/g, ""),
                            categoriasSelecionadas,
                            setCategoriasSelecionadas
                          )
                        }
                        checked={categoriasSelecionadas.includes(
                          categoria
                            .toLowerCase()
                            .normalize("NFD")
                            .replace(/[\u0300-\u036f]/g, "")
                        )}
                      />
                      <TextoCheckbox>{categoria}</TextoCheckbox>
                    </ContainerOpcaoCategoria>
                  ))}
                </ContainerOpcoesCategorias>
              )}
            </ContainerFilrosSubcategorias>
            <ContainerFiltrosCores>
              <ContainerTituloFiltroCores
                onClick={() => toggleVisibility(setCoresVisiveis)}
              >
                <TextoFiltros>Cores</TextoFiltros>
                {!coresVisiveis ? (
                  <Plus
                    size={18}
                    color={colors.cinzaClaro}
                    className="plus-color"
                  />
                ) : (
                  <Minus
                    size={18}
                    color={colors.cinzaClaro}
                    className="plus-color"
                  />
                )}
              </ContainerTituloFiltroCores>
              {coresVisiveis && (
                <ContainerOpcoesCores>
                  {cores.map((cor) => (
                    <ContainerOpcaoCor key={cor}>
                      <CheckboxCor
                        type="checkbox"
                        onChange={() =>
                          handleToggle(
                            cor,
                            coresSelecionadas,
                            setCoresSelecionadas
                          )
                        }
                        checked={coresSelecionadas.includes(cor)}
                      />
                      <TextoCheckbox>{cor}</TextoCheckbox>
                    </ContainerOpcaoCor>
                  ))}
                </ContainerOpcoesCores>
              )}
            </ContainerFiltrosCores>
            <ContainerFiltrosTamanhos>
              <ContainerTituloFiltroTamanhos
                onClick={() => toggleVisibility(setTamanhosVisiveis)}
              >
                <TextoFiltros>Tamanhos</TextoFiltros>
                {!tamanhosVisiveis ? (
                  <Plus
                    size={18}
                    color={colors.cinzaClaro}
                    className="plus-color"
                  />
                ) : (
                  <Minus
                    size={18}
                    color={colors.cinzaClaro}
                    className="plus-color"
                  />
                )}
              </ContainerTituloFiltroTamanhos>
              {tamanhosVisiveis && (
                <ContainerOpcoesTamanhos>
                  {tamanhos.map((tamanho) => (
                    <ContainerOpcaoTamanho key={tamanho}>
                      <CheckboxTamanho
                        type="checkbox"
                        onChange={() =>
                          handleToggle(
                            tamanho,
                            tamanhosSelecionados,
                            setTamanhosSelecionados
                          )
                        }
                        checked={tamanhosSelecionados.includes(tamanho)}
                      />
                      <TextoCheckbox>{tamanho}</TextoCheckbox>
                    </ContainerOpcaoTamanho>
                  ))}
                </ContainerOpcoesTamanhos>
              )}
            </ContainerFiltrosTamanhos>
          </List>
        </Drawer>
      )}
    </div>
  );
}
