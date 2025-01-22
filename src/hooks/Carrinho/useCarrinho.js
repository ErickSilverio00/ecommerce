import { create } from "zustand";
import {
  adicionarAoCarrinho,
  atualizarQuantidadeItemCarrinho,
  fetchItensCarrinho,
  removerItemCarrinho,
} from "../../services/Carrinho";

const useCarrinho = create((set) => ({
  itensCarrinho: [],
  numeroItens: 0,
  valorTotal: 0.0,
  fetchItensCarrinho: async (idCliente) => {
    try {
      const carrinhoData = await fetchItensCarrinho(idCliente);
      const novoValorTotal = carrinhoData.itensCarrinho.reduce(
        (total, item) => total + item.preco_venda_produto * item.quantidade,
        0
      );

      set((state) => ({
        itensCarrinho: carrinhoData.itensCarrinho,
        numeroItens: carrinhoData.itensCarrinho.length,
        valorTotal: novoValorTotal,
      }));
    } catch (error) {
      console.error("Erro ao buscar itens do carrinho: ", error);
    }
  },

  adicionarAoCarrinho: async (carrinhoData) => {
    try {
      const novoItemCarrinho = await adicionarAoCarrinho(carrinhoData);
      set((state) => ({
        itensCarrinho: [...state.itensCarrinho, novoItemCarrinho],
        numeroItens: state.numeroItens + 1,
        valorTotal: state.valorTotal + novoItemCarrinho.preco_venda_produto,
      }));
    } catch (error) {
      console.error("Erro ao adicionar ao carrinho: ", error);
    }
  },
  atualizarQuantidadeItemCarrinho: async (idItemCarrinho, novaQuantidade) => {
    try {
      const itemAtualizado = await atualizarQuantidadeItemCarrinho(
        idItemCarrinho,
        novaQuantidade
      );
      set((state) => ({
        itensCarrinho: state.itensCarrinho.map((item) =>
          item.id_carrinho === idItemCarrinho
            ? { ...item, ...itemAtualizado }
            : item
        ),
        valorTotal: state.itensCarrinho.reduce(
          (total, item) => total + itemAtualizado.preco_venda_produto,
          0
        ),
      }));
    } catch (error) {
      console.error(
        "Erro ao atualizar quantidade do item do carrinho: ",
        error
      );
    }
  },
  removerItemCarrinho: async (idItemCarrinho) => {
    try {
      await removerItemCarrinho(idItemCarrinho);
      set((state) => ({
        itensCarrinho: state.itensCarrinho.filter(
          (item) => item.id_carrinho !== idItemCarrinho
        ),
        numeroItens: state.numeroItens - 1,
        valorTotal: state.itensCarrinho
          .filter((item) => item.id_carrinho !== idItemCarrinho)
          .reduce((total, item) => total + item.preco_venda_produto, 0),
      }));
    } catch (error) {
      console.error("Erro ao remover item do carrinho: ", error);
    }
  },
}));

export default useCarrinho;
