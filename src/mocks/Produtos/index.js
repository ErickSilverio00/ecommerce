export const mockProdutos = [
  // Categoria: Roupas
  {
    id_produto: 1,
    nome_produto: "Camiseta Compressão",
    descricao_produto: "Camiseta de compressão 100% para uso casual.",
    preco_custo_produto: 20.0,
    preco_venda_produto: 49.9,
    categoria_produto: "Roupas",
    subcategoria_produto: "Camisas",
    genero_produto: "Masculino",
    marca_produto: "Marca A",
    data_compra_produto: "2024-01-15",
    fornecedor: { nome_fornecedor: "Fornecedor A" },
    variacoes: [
      {
        id_variacao_produto: 101,
        cor_variacao_produto: "Azul",
        medida_variacao_produto: "M",
        imagens_variacao_produto: [
          "https://firebasestorage.googleapis.com/v0/b/matheus-calcados.appspot.com/o/imagens%2FCamisa-Compressao.jpeg?alt=media",
        ],
        qtd_disponivel_produto: 100,
        codigo_de_barras_produto: "1234567890123",
        media_custo_produto_variacao: 20.5,
      },
    ],
  },
  {
    id_produto: 2,
    nome_produto: "Bermuda Linho",
    descricao_produto: "Bermuda de linho básica, ideal para o dia a dia.",
    preco_custo_produto: 60.0,
    preco_venda_produto: 129.9,
    categoria_produto: "Roupas",
    subcategoria_produto: "Bermudas",
    genero_produto: "Masculino",
    marca_produto: "Marca C",
    data_compra_produto: "2024-01-10",
    fornecedor: { nome_fornecedor: "Fornecedor C" },
    variacoes: [
      {
        id_variacao_produto: 103,
        cor_variacao_produto: "Marrom",
        medida_variacao_produto: "G",
        imagens_variacao_produto: [
          "https://firebasestorage.googleapis.com/v0/b/matheus-calcados.appspot.com/o/imagens%2FBermuda-Marrom.jpeg?alt=media",
        ],
        qtd_disponivel_produto: 75,
        codigo_de_barras_produto: "3216549871234",
        media_custo_produto_variacao: 60.0,
      },
    ],
  },
  // Categoria: Calçados
  {
    id_produto: 3,
    nome_produto: "Tênis Esportivo",
    descricao_produto: "Tênis confortável para práticas esportivas.",
    preco_custo_produto: 100.0,
    preco_venda_produto: 199.9,
    categoria_produto: "Calçados",
    subcategoria_produto: "Tênis",
    genero_produto: "Masculino",
    marca_produto: "Marca D",
    data_compra_produto: "2024-01-18",
    fornecedor: { nome_fornecedor: "Fornecedor D" },
    variacoes: [
      {
        id_variacao_produto: 104,
        cor_variacao_produto: "Vermelho",
        medida_variacao_produto: "42",
        imagens_variacao_produto: [
          "https://firebasestorage.googleapis.com/v0/b/matheus-calcados.appspot.com/o/imagens%2FAdias-Lite-Racer-Vermelho.jpeg?alt=media",
        ],
        qtd_disponivel_produto: 60,
        codigo_de_barras_produto: "7894561230987",
        media_custo_produto_variacao: 100.0,
      },
      {
        id_variacao_produto: 103,
        cor_variacao_produto: "Verde",
        medida_variacao_produto: "40",
        imagens_variacao_produto: [
          "https://firebasestorage.googleapis.com/v0/b/matheus-calcados.appspot.com/o/imagens%2FAdias-Lite-Racer-Verde.jpeg?alt=media",
        ],
        qtd_disponivel_produto: 75,
        codigo_de_barras_produto: "5432167890123",
        media_custo_produto_variacao: 120.0,
      },
    ],
  },
  {
    id_produto: 4,
    nome_produto: "Tênis Casual",
    descricao_produto: "Tênis leve e confortável para dias quentes.",
    preco_custo_produto: 30.0,
    preco_venda_produto: 69.9,
    categoria_produto: "Calçados",
    subcategoria_produto: "Tênis",
    genero_produto: "Feminino",
    marca_produto: "Marca E",
    data_compra_produto: "2024-01-22",
    fornecedor: { nome_fornecedor: "Fornecedor E" },
    variacoes: [
      {
        id_variacao_produto: 105,
        cor_variacao_produto: "Rosa",
        medida_variacao_produto: "38",
        imagens_variacao_produto: [
          "https://firebasestorage.googleapis.com/v0/b/matheus-calcados.appspot.com/o/imagens%2FAll-Star-Rosa.jpeg?alt=media",
        ],
        qtd_disponivel_produto: 40,
        codigo_de_barras_produto: "6549871234560",
        media_custo_produto_variacao: 30.0,
      },
    ],
  },
  // Categoria: Acessórios
  {
    id_produto: 5,
    nome_produto: "Bolsa Casual",
    descricao_produto: "Bolsa prática para o dia a dia.",
    preco_custo_produto: 50.0,
    preco_venda_produto: 109.9,
    categoria_produto: "Acessórios",
    subcategoria_produto: "Bolsas",
    genero_produto: "Feminino",
    marca_produto: "Marca F",
    data_compra_produto: "2024-01-25",
    fornecedor: { nome_fornecedor: "Fornecedor F" },
    variacoes: [
      {
        id_variacao_produto: 106,
        cor_variacao_produto: "Rosa",
        medida_variacao_produto: "Tamanho único",
        imagens_variacao_produto: [
          "https://firebasestorage.googleapis.com/v0/b/matheus-calcados.appspot.com/o/imagens%2Fbolsa-2.jpeg?alt=media",
          "https://firebasestorage.googleapis.com/v0/b/matheus-calcados.appspot.com/o/imagens%2Fbolsa-4.jpg?alt=media",
        ],
        qtd_disponivel_produto: 35,
        codigo_de_barras_produto: "1472583691230",
        media_custo_produto_variacao: 50.0,
      },
    ],
  },
  {
    id_produto: 6,
    nome_produto: "Óculos de sol",
    descricao_produto: "Óculos de sol para o dia a dia",
    preco_custo_produto: 25.0,
    preco_venda_produto: 59.9,
    categoria_produto: "Acessórios",
    subcategoria_produto: "Cintos",
    genero_produto: "Unissex",
    marca_produto: "Marca G",
    data_compra_produto: "2024-01-12",
    fornecedor: { nome_fornecedor: "Fornecedor G" },
    variacoes: [
      {
        id_variacao_produto: 107,
        cor_variacao_produto: "Preto",
        medida_variacao_produto: "Tamanho único",
        imagens_variacao_produto: [
          "https://firebasestorage.googleapis.com/v0/b/matheus-calcados.appspot.com/o/imagens%2Foculos-sol.jpeg?alt=media",
        ],
        qtd_disponivel_produto: 50,
        codigo_de_barras_produto: "9638527410123",
        media_custo_produto_variacao: 25.0,
      },
    ],
  },
  // Roupas
  {
    id_produto: 7,
    nome_produto: "Camiseta Básica",
    descricao_produto: "Camiseta de algodão 100% para uso casual.",
    preco_custo_produto: 20.0,
    preco_venda_produto: 49.9,
    categoria_produto: "Roupas",
    subcategoria_produto: "Camisas",
    genero_produto: "Masculino",
    marca_produto: "Marca A",
    data_compra_produto: "2024-01-15",
    fornecedor: {
      nome_fornecedor: "Fornecedor A",
    },
    variacoes: [
      {
        id_variacao_produto: 101,
        cor_variacao_produto: "Azul",
        medida_variacao_produto: "M",
        imagens_variacao_produto: [
          "https://firebasestorage.googleapis.com/v0/b/matheus-calcados.appspot.com/o/imagens%2FCamisa%20Azul%20-%20Nike.jpeg?alt=media",
        ],
        qtd_disponivel_produto: 100,
        codigo_de_barras_produto: "1234567890123",
        media_custo_produto_variacao: 20.5,
      },
    ],
  },
  {
    id_produto: 8,
    nome_produto: "Vestido Estampado",
    descricao_produto: "Vestido estampado perfeito para o verão.",
    preco_custo_produto: 35.0,
    preco_venda_produto: 79.9,
    categoria_produto: "Roupas",
    subcategoria_produto: "Vestidos",
    genero_produto: "Feminino",
    marca_produto: "Marca B",
    data_compra_produto: "2024-01-20",
    fornecedor: {
      nome_fornecedor: "Fornecedor B",
    },
    variacoes: [
      {
        id_variacao_produto: 102,
        cor_variacao_produto: "Rosa",
        medida_variacao_produto: "P",
        imagens_variacao_produto: [
          "https://firebasestorage.googleapis.com/v0/b/matheus-calcados.appspot.com/o/imagens%2Fvestido-feminino.png?alt=media",
        ],
        qtd_disponivel_produto: 50,
        codigo_de_barras_produto: "9876543210987",
        media_custo_produto_variacao: 35.5,
      },
    ],
  },

  // Calçados
  {
    id_produto: 9,
    nome_produto: "Chinelo Casual",
    descricao_produto: "Chinelo confortável para uso diário.",
    preco_custo_produto: 15.0,
    preco_venda_produto: 29.9,
    categoria_produto: "Calçados",
    subcategoria_produto: "Chinelos",
    genero_produto: "Unissex",
    marca_produto: "Marca D",
    data_compra_produto: "2024-01-25",
    fornecedor: {
      nome_fornecedor: "Fornecedor D",
    },
    variacoes: [
      {
        id_variacao_produto: 104,
        cor_variacao_produto: "Branco",
        medida_variacao_produto: "39",
        imagens_variacao_produto: [
          "https://firebasestorage.googleapis.com/v0/b/matheus-calcados.appspot.com/o/imagens%2Fchinela-3.jpeg?alt=media",
          "https://firebasestorage.googleapis.com/v0/b/matheus-calcados.appspot.com/o/imagens%2Fchinela-2.jpeg?alt=media",
          "https://firebasestorage.googleapis.com/v0/b/matheus-calcados.appspot.com/o/imagens%2Fchinela-4.jpeg?alt=media",
        ],
        qtd_disponivel_produto: 200,
        codigo_de_barras_produto: "8765432109876",
        media_custo_produto_variacao: 15.0,
      },
    ],
  },

  // Acessórios
  {
    id_produto: 10,
    nome_produto: "Bolsa de Couro",
    descricao_produto: "Bolsa elegante feita com couro legítimo.",
    preco_custo_produto: 150.0,
    preco_venda_produto: 329.9,
    categoria_produto: "Acessórios",
    subcategoria_produto: "Bolsas",
    genero_produto: "Feminino",
    marca_produto: "Marca E",
    data_compra_produto: "2024-01-05",
    fornecedor: {
      nome_fornecedor: "Fornecedor E",
    },
    variacoes: [
      {
        id_variacao_produto: 105,
        cor_variacao_produto: "Marrom",
        medida_variacao_produto: "Tamanho único",
        imagens_variacao_produto: [
          "https://firebasestorage.googleapis.com/v0/b/matheus-calcados.appspot.com/o/imagens%2Fbolsa-2.jpg?alt=media&token=4cfeaaeb-1c3d-4aa8-b110-cf65ebd8ceea",
        ],
        qtd_disponivel_produto: 30,
        codigo_de_barras_produto: "1122334455667",
        media_custo_produto_variacao: 150.0,
      },
    ],
  },
  {
    id_produto: 11,
    nome_produto: "Boné Trucker",
    descricao_produto: "Boné estilo trucker ajustável.",
    preco_custo_produto: 25.0,
    preco_venda_produto: 59.9,
    categoria_produto: "Acessórios",
    subcategoria_produto: "Bonés",
    genero_produto: "Masculino",
    marca_produto: "Marca F",
    data_compra_produto: "2024-02-01",
    fornecedor: {
      nome_fornecedor: "Fornecedor F",
    },
    variacoes: [
      {
        id_variacao_produto: 106,
        cor_variacao_produto: "Preto",
        medida_variacao_produto: "Tamanho único",
        imagens_variacao_produto: [
          "https://firebasestorage.googleapis.com/v0/b/matheus-calcados.appspot.com/o/imagens%2FBon%C3%A9-Preto-Nike.jpeg?alt=media",
        ],
        qtd_disponivel_produto: 100,
        codigo_de_barras_produto: "2233445566778",
        media_custo_produto_variacao: 25.0,
      },
    ],
  },
];
