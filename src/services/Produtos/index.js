import { mockProdutos } from "../../mocks/Produtos";

export const fetchProdutos = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockProdutos);
    }, 100);
  });
};

export const registerProduto = async (produtoData) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!produtoData.nome || !produtoData.preco || !produtoData.estoque) {
        reject(new Error("Dados do produto inválidos."));
      } else {
        const newProduto = { id: mockProdutos.length + 1, ...produtoData };
        mockProdutos.push(newProduto);
        resolve(newProduto);
      }
    }, 500);
  });
};

export const editProduto = async (id, produtoData) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const index = mockProdutos.findIndex((produto) => produto.id === id);
      if (index === -1) {
        reject(new Error("Produto não encontrado."));
      } else {
        mockProdutos[index] = { ...mockProdutos[index], ...produtoData };
        resolve(mockProdutos[index]);
      }
    }, 500);
  });
};

export const deleteProduto = async (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const index = mockProdutos.findIndex((produto) => produto.id === id);
      if (index === -1) {
        reject(new Error("Produto não encontrado."));
      } else {
        const deletedProduto = mockProdutos.splice(index, 1)[0];
        resolve(deletedProduto);
      }
    }, 500);
  });
};
