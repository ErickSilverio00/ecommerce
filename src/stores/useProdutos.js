import { create } from "zustand";
import { fetchProdutos } from "../services/Produtos";

const useProduto = create((set) => ({
  produtos: [],
  adicionarProduto: (produtoData) =>
    set((state) => ({ produtos: [...state.produtos, produtoData] })),
  atualizarProduto: (produtoId, produtoData) =>
    set((state) => ({
      produtos: state.produtos.map((produto) =>
        produto.id === produtoId ? { ...produto, ...produtoData } : produto
      ),
    })),
  excluirProduto: (produtoId) =>
    set((state) => ({
      produtos: state.produtos.filter((produto) => produto.id !== produtoId),
    })),
  buscarProdutos: async () => {
    try {
      const response = await fetchProdutos();

      set({ produtos: response });
    } catch (error) {
      console.error("Erro ao buscar os produtos: ", error);
    }
  },
}));

export default useProduto;
