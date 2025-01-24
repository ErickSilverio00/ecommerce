/* eslint-disable react-hooks/exhaustive-deps */
import { useMediaQuery } from "@mui/material";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import { ArrowLeft, Funnel, Minus, Plus } from "@phosphor-icons/react";
import { Form } from "@unform/web";
import Lottie from "lottie-react";
import React from "react";
import Loading from "../../../assets/animations/loading2-MC.json";
import logo from "../../../assets/img/logoMatheusCalcados.png";
import FormSelect from "../../../components/FormSelect";
import Produto from "../../../components/Produto";
import useProdutos from "../../../hooks/Produtos/useProdutos";
import { colors } from "../../../styles/colors";
import { ContainerTitleSubtitle, Titulo } from "../../../styles/global";
import {
  Checkbox,
  ContainerAnimacaoFiltro,
  ContainerBlocoProdutos,
  ContainerFiltroOrdenacao,
  ContainerFiltros,
  ContainerFiltrosGerais,
  ContainerGeralProdutos,
  ContainerImagem,
  ContainerOpcao,
  ContainerOpcoes,
  ContainerPrimeiraLinha,
  ContainerPrincipal,
  ContainerProdutos,
  ContainerSlides,
  ContainerTituloFiltro,
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
  const {
    formOrdenarRef,
    produtosDisponiveis,
    categoriasVisiveis,
    setCategoriasVisiveis,
    coresVisiveis,
    setCoresVisiveis,
    tamanhosVisiveis,
    setTamanhosVisiveis,
    coresSelecionadas,
    setCoresSelecionadas,
    categoriasSelecionadas,
    setCategoriasSelecionadas,
    tamanhosSelecionados,
    setTamanhosSelecionados,
    produtosFiltrados,
    estaFiltrando,
    checkboxesSelecionados,
    ordenacaoProduto,
    drawerOpen,
    setDrawerOpen,
    cores,
    toggleVisibility,
    handleToggle,
    ordenarPor,
    toggleDrawer,
  } = useProdutos(tituloSecao, temImagemFundo);
  const firstMediaQuery = useMediaQuery("(max-width: 772px)");

  const renderFiltros = (
    titulo,
    itens,
    visivel,
    setVisivel,
    selecionados,
    setSelecionados
  ) => (
    <ContainerFiltrosGerais>
      <ContainerTituloFiltro onClick={() => toggleVisibility(setVisivel)}>
        <TextoFiltros>{titulo}</TextoFiltros>
        {visivel ? (
          <Minus size={18} color={colors.cinzaClaro} />
        ) : (
          <Plus size={18} color={colors.cinzaClaro} />
        )}
      </ContainerTituloFiltro>
      {visivel && (
        <ContainerOpcoes>
          {itens.map((item) => (
            <ContainerOpcao key={item}>
              <Checkbox
                type="checkbox"
                onChange={() =>
                  handleToggle(item, selecionados, setSelecionados)
                }
                checked={selecionados.includes(item)}
              />
              <TextoCheckbox>{item}</TextoCheckbox>
            </ContainerOpcao>
          ))}
        </ContainerOpcoes>
      )}
    </ContainerFiltrosGerais>
  );

  const renderProdutos = () => {
    const produtos = checkboxesSelecionados
      ? produtosFiltrados
      : produtosDisponiveis;
    return produtos.length === 0 ? (
      <TextoNaoEncontrou>
        Nenhum produto encontrado com esse critério de pesquisa.
      </TextoNaoEncontrou>
    ) : (
      produtos.map(
        (produto) =>
          produto && <Produto key={produto.id_produto} produto={produto} />
      )
    );
  };

  return (
    <>
      <ContainerPrincipal>
        {temImagemFundo && (
          <ContainerSlides>
            <ContainerImagem src={imagemSecao} />
          </ContainerSlides>
        )}
        <ContainerBlocoProdutos id="containerBlocoProdutos">
          <ContainerPrimeiraLinha>
            <ContainerTitleSubtitle>
              <Titulo>{tituloSecao}</Titulo>
            </ContainerTitleSubtitle>
            <Form ref={formOrdenarRef}>
              <ContainerFiltroOrdenacao>
                <FormSelect
                  defaultValue={ordenacaoProduto}
                  name="ordenarPor"
                  label="Ordenar por"
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
                  onChange={ordenarPor}
                  isClearable
                />
                {firstMediaQuery && (
                  <Funnel
                    size={40}
                    color={colors.cinzaClaro}
                    onClick={toggleDrawer(true)}
                  />
                )}
              </ContainerFiltroOrdenacao>
            </Form>
          </ContainerPrimeiraLinha>
          <ContainerGeralProdutos>
            <ContainerFiltros>
              {renderFiltros(
                "Categorias",
                categorias,
                categoriasVisiveis,
                setCategoriasVisiveis,
                categoriasSelecionadas,
                setCategoriasSelecionadas
              )}
              {renderFiltros(
                "Cores",
                cores,
                coresVisiveis,
                setCoresVisiveis,
                coresSelecionadas,
                setCoresSelecionadas
              )}
              {renderFiltros(
                "Tamanhos",
                tamanhos,
                tamanhosVisiveis,
                setTamanhosVisiveis,
                tamanhosSelecionados,
                setTamanhosSelecionados
              )}
            </ContainerFiltros>
            <ContainerProdutos
              style={{ maxWidth: estaFiltrando ? "none" : undefined }}
            >
              {estaFiltrando ? (
                <ContainerAnimacaoFiltro>
                  <LogoContainer>
                    <img src={logo} alt="Matheus Calçados" />
                  </LogoContainer>
                  <LoadingContainer>
                    <Lottie animationData={Loading} autoPlay loop />
                  </LoadingContainer>
                </ContainerAnimacaoFiltro>
              ) : (
                renderProdutos()
              )}
            </ContainerProdutos>
          </ContainerGeralProdutos>
        </ContainerBlocoProdutos>
      </ContainerPrincipal>
      {firstMediaQuery && (
        <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
          <List style={{ width: 280, paddingInline: 10 }}>
            <ContainerVoltarDrawer onClick={() => setDrawerOpen(false)}>
              <ArrowLeft size={24} />
              <TextoFiltros>VOLTAR</TextoFiltros>
            </ContainerVoltarDrawer>
            {renderFiltros(
              "Categorias",
              categorias,
              categoriasVisiveis,
              setCategoriasVisiveis,
              categoriasSelecionadas,
              setCategoriasSelecionadas
            )}
            {renderFiltros(
              "Cores",
              cores,
              coresVisiveis,
              setCoresVisiveis,
              coresSelecionadas,
              setCoresSelecionadas
            )}
            {renderFiltros(
              "Tamanhos",
              tamanhos,
              tamanhosVisiveis,
              setTamanhosVisiveis,
              tamanhosSelecionados,
              setTamanhosSelecionados
            )}
          </List>
        </Drawer>
      )}
    </>
  );
}
