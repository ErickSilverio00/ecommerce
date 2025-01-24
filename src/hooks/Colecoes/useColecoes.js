/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import { fetchProdutos } from "../../services/Produtos";

const sections = [
  { key: "lancamentos", title: "Lançamentos", subTitle: "PROMOÇÕES" },
  { key: "feminino", title: "Feminino", subTitle: "PROMOÇÕES" },
  { key: "masculino", title: "Masculino", subTitle: "PROMOÇÕES" },
  { key: "roupas", title: "Roupas", subTitle: "PROMOÇÕES" },
  { key: "calcados", title: "Calçados", subTitle: "PROMOÇÕES" },
  { key: "acessorios", title: "Acessórios", subTitle: "PROMOÇÕES" },
];
export default function useColecoes() {
  const swiperRefs = useRef({});
  const [produtosPorSecao, setProdutosPorSecao] = useState({});
  const [arrowStates, setArrowStates] = useState(
    sections.reduce((acc, section) => {
      acc[section.key] = { left: false, right: true };
      return acc;
    }, {})
  );

  async function loadProducts() {
    try {
      const produtos = await fetchProdutos();
      const produtosFiltradosPorSecao = {};

      const currentYear = new Date().getFullYear();

      sections.forEach((section) => {
        let novosProdutos = [];

        if (section.title === "Lançamentos") {
          novosProdutos = produtos.filter((produto) => {
            const productYear = new Date(
              produto.data_compra_produto
            ).getFullYear();
            return productYear === currentYear - 1;
          });
        } else if (
          produtos.some(
            (produto) => produto.categoria_produto === section.title
          )
        ) {
          novosProdutos = produtos.filter(
            (produto) => produto.categoria_produto === section.title
          );
        } else if (
          produtos.some(
            (produto) =>
              produto.genero_produto === section.title ||
              produto.genero_produto === "Unissex"
          )
        ) {
          novosProdutos = produtos.filter(
            (produto) =>
              produto.genero_produto === section.title ||
              produto.genero_produto === "Unissex"
          );
        }

        produtosFiltradosPorSecao[section.key] = novosProdutos;
      });

      setProdutosPorSecao(produtosFiltradosPorSecao);
    } catch (error) {
      toast.error(`Erro ao carregar produtos: ${error}`);
    }
  }

  const handleArrowState = (section, isEnd, isBeginning) => {
    setArrowStates((prevState) => ({
      ...prevState,
      [section]: {
        left: !isBeginning,
        right: !isEnd,
      },
    }));
  };

  useEffect(() => {
    loadProducts();
  }, []);

  useEffect(() => {
    Object.keys(swiperRefs.current).forEach((section) => {
      const swiper = swiperRefs.current[section];
      if (swiper) {
        swiper.on("reachEnd", () => handleArrowState(section, true, false));
        swiper.on("reachBeginning", () =>
          handleArrowState(section, false, true)
        );
      }
    });
  }, []);

  return {
    produtosPorSecao,
    setProdutosPorSecao,
    arrowStates,
    swiperRefs,
    loadProducts,
    handleArrowState,
    sections,
  };
}
