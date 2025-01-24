import { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import { fetchProdutos } from "../../services/Produtos";

export default function usePaginaInicial() {
  const [produtosDisponiveis, setProdutosDisponiveis] = useState([]);
  const [isLeftArrowRed, setIsLeftArrowRed] = useState(false);
  const [isRightArrowRed, setIsRightArrowRed] = useState(true);
  const swiperRef = useRef(null);
  const swiperRefImg = useRef(null);

  async function loadProducts() {
    try {
      const produtos = await fetchProdutos();
      setProdutosDisponiveis(produtos);
    } catch (error) {
      toast.error(error);
    }
  }

  const ultimosProdutos = produtosDisponiveis
    .slice()
    .sort(
      (a, b) =>
        new Date(b.data_compra_produto) - new Date(a.data_compra_produto)
    )
    .slice(0, 10);

  useEffect(() => {
    loadProducts();
  }, []);

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.on("reachEnd", () => {
        setIsRightArrowRed(false);
        setIsLeftArrowRed(true);
      });
      swiperRef.current.on("reachBeginning", () => {
        setIsLeftArrowRed(false);
        setIsRightArrowRed(true);
      });
    }
  }, []);

  return {
    produtosDisponiveis,
    setProdutosDisponiveis,
    isLeftArrowRed,
    setIsLeftArrowRed,
    isRightArrowRed,
    setIsRightArrowRed,
    swiperRef,
    swiperRefImg,
    loadProducts,
    ultimosProdutos,
  };
}
