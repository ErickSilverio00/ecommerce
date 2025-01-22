import { create } from "zustand";
import {
  adicionarProdutoCurtido,
  fetchProdutosCurtidos,
  removerProdutoCurtido,
} from "../../services/Curtidos";

const useProdutosCurtidos = create((set) => ({
  produtosCurtidos: [],
  numeroItens: 0,
  fetchProdutosCurtidos: async (idCliente) => {
    try {
      const favoritosData = await fetchProdutosCurtidos(idCliente);
      set((state) => ({
        produtosCurtidos: favoritosData.produtosCurtidos,
        numeroItens: favoritosData.produtosCurtidos.length,
      }));
    } catch (error) {
      console.error("Erro ao buscar itens curtidos: ", error);
    }
  },
  adicionarProdutoCurtido: async (favoritosData) => {
    try {
      const novoItemCurtido = await adicionarProdutoCurtido(favoritosData);
      set((state) => ({
        produtosCurtidos: [...state.produtosCurtidos, novoItemCurtido],
        numeroItens: state.numeroItens + 1,
      }));
    } catch (error) {
      console.error("Erro ao adicionar curtido: ", error);
    }
  },
  removerProdutoCurtido: async (idItemCurtido) => {
    try {
      await removerProdutoCurtido(idItemCurtido);
      set((state) => ({
        produtosCurtidos: state.produtosCurtidos.filter(
          (item) => item.id_produto_curtido !== idItemCurtido
        ),
        numeroItens: state.numeroItens - 1,
      }));
    } catch (error) {
      console.error("Erro ao remover item curtido: ", error);
    }
  },
}));

export default useProdutosCurtidos;
