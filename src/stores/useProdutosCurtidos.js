import { create } from "zustand";

const useProdutosCurtidos = create((set) => ({
  produtosCurtidos: JSON.parse(localStorage.getItem("produtosCurtidos")) || [],
  numeroItens:
    JSON.parse(localStorage.getItem("produtosCurtidos"))?.length || 0,

  fetchProdutosCurtidos: () => {
    const favoritos =
      JSON.parse(localStorage.getItem("produtosCurtidos")) || [];
    set({
      produtosCurtidos: favoritos,
      numeroItens: favoritos.length,
    });
  },

  adicionarProdutoCurtido: (produto) => {
    set((state) => {
      const novosCurtidos = [...state.produtosCurtidos, produto];
      localStorage.setItem("produtosCurtidos", JSON.stringify(novosCurtidos));
      return {
        produtosCurtidos: novosCurtidos,
        numeroItens: novosCurtidos.length,
      };
    });
  },

  removerProdutoCurtido: (idProduto) => {
    set((state) => {
      const novosCurtidos = state.produtosCurtidos.filter(
        (produto) => produto.id_produto !== idProduto
      );
      localStorage.setItem("produtosCurtidos", JSON.stringify(novosCurtidos));
      return {
        produtosCurtidos: novosCurtidos,
        numeroItens: novosCurtidos.length,
      };
    });
  },
}));

export default useProdutosCurtidos;
