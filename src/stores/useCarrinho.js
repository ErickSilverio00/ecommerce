import { create } from "zustand";

const useCarrinho = create((set) => ({
  itensCarrinho: JSON.parse(localStorage.getItem("itensCarrinho")) || [],
  numeroItens: JSON.parse(localStorage.getItem("itensCarrinho"))?.length || 0,
  valorTotal:
    JSON.parse(localStorage.getItem("itensCarrinho"))?.reduce(
      (total, item) => total + item.preco_venda_produto * item.quantidade,
      0
    ) || 0,

  adicionarAoCarrinho: (produto) => {
    set((state) => {
      const novosItensCarrinho = [...state.itensCarrinho, produto];
      localStorage.setItem("itensCarrinho", JSON.stringify(novosItensCarrinho));
      return {
        itensCarrinho: novosItensCarrinho,
        numeroItens: novosItensCarrinho.length,
        valorTotal: novosItensCarrinho.reduce(
          (total, item) => total + item.preco_venda_produto * item.quantidade,
          0
        ),
      };
    });
  },

  atualizarQuantidadeItemCarrinho: (idItemCarrinho, novaQuantidade) => {
    set((state) => {
      const novosItensCarrinho = state.itensCarrinho.map((item) =>
        item.id_carrinho === idItemCarrinho
          ? { ...item, quantidade: novaQuantidade }
          : item
      );
      localStorage.setItem("itensCarrinho", JSON.stringify(novosItensCarrinho));
      return {
        itensCarrinho: novosItensCarrinho,
        valorTotal: novosItensCarrinho.reduce(
          (total, item) => total + item.preco_venda_produto * item.quantidade,
          0
        ),
      };
    });
  },

  removerItemCarrinho: (idItemCarrinho) => {
    set((state) => {
      const novosItensCarrinho = state.itensCarrinho.filter(
        (item) => item.id_carrinho !== idItemCarrinho
      );
      localStorage.setItem("itensCarrinho", JSON.stringify(novosItensCarrinho));
      return {
        itensCarrinho: novosItensCarrinho,
        numeroItens: novosItensCarrinho.length,
        valorTotal: novosItensCarrinho.reduce(
          (total, item) => total + item.preco_venda_produto * item.quantidade,
          0
        ),
      };
    });
  },

  limparCarrinho: () => {
    localStorage.removeItem("itensCarrinho");
    set({
      itensCarrinho: [],
      numeroItens: 0,
      valorTotal: 0,
    });
  },
}));

export default useCarrinho;
