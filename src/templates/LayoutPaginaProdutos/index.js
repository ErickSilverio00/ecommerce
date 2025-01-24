/* eslint-disable react-hooks/exhaustive-deps */
import { useMediaQuery } from "@mui/material";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import { ArrowLeft, Funnel, Minus, Plus } from "@phosphor-icons/react";
import Lottie from "lottie-react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../../assets/animations/loading2-MC.json";
import logo from "../../assets/img/logoMatheusCalcados.png";
import CampoSelecionar from "../../components/CampoSelecionar";
import Produto from "../../components/Produto";
import TituloSubtituloSecoes from "../../components/TituloSubtituloSecoes";
import { fetchProdutos } from "../../services/Produtos";
import { colors } from "../../styles/colors";
import LayoutBase from "../../templates/LayoutBase";
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

export default function LayoutPaginaProdutos({
  tituloSecao,
  imagemSecao,
  categorias,
  tamanhos,
  temImagemFundo = true,
}) {
  const { busca } = useParams();
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

        if (temImagemFundo) {
          let novosProdutos;

          if (
            produtos.some(
              (produto) => produto.categoria_produto === tituloSecao
            )
          ) {
            novosProdutos = produtos.filter(
              (produto) => produto.categoria_produto === tituloSecao
            );
          } else if (
            produtos.some(
              (produto) =>
                produto.genero_produto === tituloSecao ||
                produto.genero_produto === "Unissex"
            )
          ) {
            novosProdutos = produtos.filter(
              (produto) =>
                produto.genero_produto === tituloSecao ||
                produto.genero_produto === "Unissex"
            );
          }

          setProdutosDisponiveis(novosProdutos);
        } else {
          const produtosEncontrados = produtos.filter((produto) => {
            const removeAccents = (str) => {
              return str
                .replace(/[áàãâä]/g, "a")
                .replace(/[éèêë]/g, "e")
                .replace(/[íìîï]/g, "i")
                .replace(/[óòõôö]/g, "o")
                .replace(/[úùûü]/g, "u")
                .replace(/[ç]/g, "c");
            };

            const nomeLowerCase = removeAccents(
              produto.nome_produto.toLowerCase()
            );
            const categoriaLowerCase = removeAccents(
              produto.categoria_produto.toLowerCase()
            );
            const subcategoriaLowerCase = removeAccents(
              produto.subcategoria_produto.toLowerCase()
            );
            const generoLowerCase = removeAccents(
              produto.genero_produto.toLowerCase()
            );
            const marcaLowerCase = removeAccents(
              produto.marca_produto.toLowerCase()
            );
            const buscaLowerCase = removeAccents(busca.toLowerCase());

            return (
              nomeLowerCase.includes(buscaLowerCase) ||
              categoriaLowerCase.includes(buscaLowerCase) ||
              subcategoriaLowerCase.includes(buscaLowerCase) ||
              generoLowerCase.includes(buscaLowerCase) ||
              marcaLowerCase.includes(buscaLowerCase)
            );
          });

          setProdutosDisponiveis(produtosEncontrados);
        }
      } catch (error) {
        console.error(error);
      }
    };

    loadProducts();
  }, [temImagemFundo, tituloSecao, busca]);

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
    <LayoutBase>
      <ContainerPrincipal>
        {temImagemFundo && (
          <ContainerSlides>
            <ContainerImagem src={imagemSecao} />
          </ContainerSlides>
        )}
        <ContainerBlocoProdutos id="containerBlocoProdutos">
          <ContainerPrimeiraLinha>
            <TituloSubtituloSecoes title={tituloSecao} />
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
                                produto && <Produto produto={produto} />
                            )
                          : produtosDisponiveis.map(
                              (produto) =>
                                produto && <Produto produto={produto} />
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
    </LayoutBase>
  );
}
