export const mockProdutos = [
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
        id_variacao_produto: 100,
        cor_variacao_produto: "Preto",
        medida_variacao_produto: "M",
        imagens_variacao_produto: [
          "https://firebasestorage.googleapis.com/v0/b/matheus-calcados.appspot.com/o/imagens%2FCamisa-Compressao.jpeg?alt=media",
          "https://firebasestorage.googleapis.com/v0/b/matheus-calcados.appspot.com/o/imagens%2Fcamisa-preta-compressao-2.jpeg?alt=media",
          "https://firebasestorage.googleapis.com/v0/b/matheus-calcados.appspot.com/o/imagens%2Fcamisa-preta-compressao-3.jpeg?alt=media",
          "https://firebasestorage.googleapis.com/v0/b/matheus-calcados.appspot.com/o/imagens%2Fcamisa-preta-compressao-4.jpeg?alt=media",
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
        id_variacao_produto: 101,
        cor_variacao_produto: "Marrom",
        medida_variacao_produto: "G",
        imagens_variacao_produto: [
          "https://firebasestorage.googleapis.com/v0/b/matheus-calcados.appspot.com/o/imagens%2FBermuda-Marrom.jpeg?alt=media",
          "https://firebasestorage.googleapis.com/v0/b/matheus-calcados.appspot.com/o/imagens%2Fbermuda-marrom-2.jpeg?alt=media",
          "https://firebasestorage.googleapis.com/v0/b/matheus-calcados.appspot.com/o/imagens%2Fbermuda-marrom-3.jpeg?alt=media",
          "https://firebasestorage.googleapis.com/v0/b/matheus-calcados.appspot.com/o/imagens%2Fbermuda-marrom-4.jpeg?alt=media",
        ],
        qtd_disponivel_produto: 75,
        codigo_de_barras_produto: "3216549871234",
        media_custo_produto_variacao: 60.0,
      },
    ],
  },
  {
    id_produto: 3,
    nome_produto: "Adidas Lite Racer",
    descricao_produto: "Tênis confortável para práticas esportivas.",
    preco_custo_produto: 100.0,
    preco_venda_produto: 199.9,
    categoria_produto: "Calçados",
    subcategoria_produto: "Tênis",
    genero_produto: "Unissex",
    marca_produto: "Adidas",
    data_compra_produto: "2024-01-18",
    fornecedor: { nome_fornecedor: "Fornecedor D" },
    variacoes: [
      {
        id_variacao_produto: 102,
        cor_variacao_produto: "Vermelho",
        medida_variacao_produto: "42",
        imagens_variacao_produto: [
          "https://firebasestorage.googleapis.com/v0/b/matheus-calcados.appspot.com/o/imagens%2FAdias-Lite-Racer-Vermelho.jpeg?alt=media",
          "https://firebasestorage.googleapis.com/v0/b/matheus-calcados.appspot.com/o/imagens%2FALR2.jpeg?alt=media",
          "https://firebasestorage.googleapis.com/v0/b/matheus-calcados.appspot.com/o/imagens%2FALR3.png?alt=media",
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
          "https://firebasestorage.googleapis.com/v0/b/matheus-calcados.appspot.com/o/imagens%2Flite-racer-verde-2.jpeg?alt=media",
          "https://firebasestorage.googleapis.com/v0/b/matheus-calcados.appspot.com/o/imagens%2Flite-racer-3.jpeg?alt=media",
          "https://firebasestorage.googleapis.com/v0/b/matheus-calcados.appspot.com/o/imagens%2Flite-racer-4.jpeg?alt=media",
        ],
        qtd_disponivel_produto: 75,
        codigo_de_barras_produto: "5432167890123",
        media_custo_produto_variacao: 120.0,
      },
      {
        id_variacao_produto: 104,
        cor_variacao_produto: "Rosa",
        medida_variacao_produto: "36",
        imagens_variacao_produto: [
          "https://firebasestorage.googleapis.com/v0/b/matheus-calcados.appspot.com/o/imagens%2FAdidas-Lite-Racer-Rosa.jpeg?alt=media",
        ],
        qtd_disponivel_produto: 75,
        codigo_de_barras_produto: "5432167890123",
        media_custo_produto_variacao: 120.0,
      },
      {
        id_variacao_produto: 105,
        cor_variacao_produto: "Roxo",
        medida_variacao_produto: "37",
        imagens_variacao_produto: [
          "https://firebasestorage.googleapis.com/v0/b/matheus-calcados.appspot.com/o/imagens%2FAdidas-Lite-Racer-Roxo.jpeg?alt=media",
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
        id_variacao_produto: 106,
        cor_variacao_produto: "Rosa",
        medida_variacao_produto: "38",
        imagens_variacao_produto: [
          "https://firebasestorage.googleapis.com/v0/b/matheus-calcados.appspot.com/o/imagens%2FAll-Star-Rosa.jpeg?alt=media",
          "https://firebasestorage.googleapis.com/v0/b/matheus-calcados.appspot.com/o/imagens%2Fall-star-2.jpeg?alt=media",
          "https://firebasestorage.googleapis.com/v0/b/matheus-calcados.appspot.com/o/imagens%2Fall-star-3.jpeg?alt=media",
          "https://firebasestorage.googleapis.com/v0/b/matheus-calcados.appspot.com/o/imagens%2Fall-star-4.jpeg?alt=media",
        ],
        qtd_disponivel_produto: 40,
        codigo_de_barras_produto: "6549871234560",
        media_custo_produto_variacao: 30.0,
      },
    ],
  },
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
        id_variacao_produto: 107,
        cor_variacao_produto: "Rosa",
        medida_variacao_produto: "Tamanho único",
        imagens_variacao_produto: [
          "https://firebasestorage.googleapis.com/v0/b/matheus-calcados.appspot.com/o/imagens%2Fbolsa-2.jpeg?alt=media",
          "https://firebasestorage.googleapis.com/v0/b/matheus-calcados.appspot.com/o/imagens%2Fbolsa-4.jpg?alt=media",
          "https://firebasestorage.googleapis.com/v0/b/matheus-calcados.appspot.com/o/imagens%2Fbolsa-3.jpeg?alt=media",
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
        id_variacao_produto: 108,
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
        id_variacao_produto: 109,
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
        id_variacao_produto: 110,
        cor_variacao_produto: "Amarelo",
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
        id_variacao_produto: 111,
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
        id_variacao_produto: 112,
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
        id_variacao_produto: 113,
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
  {
    id_produto: 12,
    nome_produto: "Air Force",
    descricao_produto: "Tênis leve e confortável para dias quentes.",
    preco_custo_produto: 30.0,
    preco_venda_produto: 69.9,
    categoria_produto: "Calçados",
    subcategoria_produto: "Tênis",
    genero_produto: "Unissex",
    marca_produto: "Nike",
    data_compra_produto: "2024-01-22",
    fornecedor: { nome_fornecedor: "Fornecedor E" },
    variacoes: [
      {
        id_variacao_produto: 114,
        cor_variacao_produto: "Branco",
        medida_variacao_produto: "39",
        imagens_variacao_produto: [
          "https://firebasestorage.googleapis.com/v0/b/matheus-calcados.appspot.com/o/imagens%2FAir-Force-Branco.jpeg?alt=media",
        ],
        qtd_disponivel_produto: 40,
        codigo_de_barras_produto: "6549871234560",
        media_custo_produto_variacao: 30.0,
      },
      {
        id_variacao_produto: 115,
        cor_variacao_produto: "Cinza",
        medida_variacao_produto: "38",
        imagens_variacao_produto: [
          "https://firebasestorage.googleapis.com/v0/b/matheus-calcados.appspot.com/o/imagens%2FAir-Force-Cinza.jpeg?alt=media",
          "https://firebasestorage.googleapis.com/v0/b/matheus-calcados.appspot.com/o/imagens%2Fair-force-cinza-2.jpeg?alt=media",
          "https://firebasestorage.googleapis.com/v0/b/matheus-calcados.appspot.com/o/imagens%2Fair-force-cinza-3.jpeg?alt=media",
          "https://firebasestorage.googleapis.com/v0/b/matheus-calcados.appspot.com/o/imagens%2Fair-force-cinza-4.jpeg?alt=media",
        ],
        qtd_disponivel_produto: 40,
        codigo_de_barras_produto: "6549871234560",
        media_custo_produto_variacao: 30.0,
      },
      {
        id_variacao_produto: 116,
        cor_variacao_produto: "Marrom",
        medida_variacao_produto: "40",
        imagens_variacao_produto: [
          "https://firebasestorage.googleapis.com/v0/b/matheus-calcados.appspot.com/o/imagens%2FAir-Force-Marrom.jpeg?alt=media",
        ],
        qtd_disponivel_produto: 40,
        codigo_de_barras_produto: "6549871234560",
        media_custo_produto_variacao: 30.0,
      },
    ],
  },
  {
    id_produto: 13,
    nome_produto: "Air Max 90",
    descricao_produto: "Tênis mais usado dos anos 90",
    preco_custo_produto: 30.0,
    preco_venda_produto: 69.9,
    categoria_produto: "Calçados",
    subcategoria_produto: "Tênis",
    genero_produto: "Unissex",
    marca_produto: "Nike",
    data_compra_produto: "2024-01-22",
    fornecedor: { nome_fornecedor: "Fornecedor E" },
    variacoes: [
      {
        id_variacao_produto: 117,
        cor_variacao_produto: "Preto",
        medida_variacao_produto: "40",
        imagens_variacao_produto: [
          "https://firebasestorage.googleapis.com/v0/b/matheus-calcados.appspot.com/o/imagens%2FAir-Max-90-Preto.jpeg?alt=media",
          "https://firebasestorage.googleapis.com/v0/b/matheus-calcados.appspot.com/o/imagens%2Fair-max-preto-2.jpeg?alt=media",
          "https://firebasestorage.googleapis.com/v0/b/matheus-calcados.appspot.com/o/imagens%2Fair-max-preto-4.jpeg?alt=media",
          "https://firebasestorage.googleapis.com/v0/b/matheus-calcados.appspot.com/o/imagens%2Fair-max-preto.jpeg?alt=media",
          "https://firebasestorage.googleapis.com/v0/b/matheus-calcados.appspot.com/o/imagens%2Fair-max-preto3.jpeg?alt=media",
        ],
        qtd_disponivel_produto: 40,
        codigo_de_barras_produto: "6549871234560",
        media_custo_produto_variacao: 30.0,
      },
      {
        id_variacao_produto: 118,
        cor_variacao_produto: "Branco",
        medida_variacao_produto: "38",
        imagens_variacao_produto: [
          "https://firebasestorage.googleapis.com/v0/b/matheus-calcados.appspot.com/o/imagens%2Fair-max-branco.jpeg?alt=media",
          "https://firebasestorage.googleapis.com/v0/b/matheus-calcados.appspot.com/o/imagens%2Fair-max-branco-2.jpeg?alt=media",
          "https://firebasestorage.googleapis.com/v0/b/matheus-calcados.appspot.com/o/imagens%2Fair-max-branco-3.jpeg?alt=media",
          "https://firebasestorage.googleapis.com/v0/b/matheus-calcados.appspot.com/o/imagens%2Fair-max-branco-4.jpeg?alt=media",
        ],
        qtd_disponivel_produto: 40,
        codigo_de_barras_produto: "6549871234560",
        media_custo_produto_variacao: 30.0,
      },
    ],
  },
  {
    id_produto: 14,
    nome_produto: "Air Jordan",
    descricao_produto: "Sim, ele voltou!",
    preco_custo_produto: 80.0,
    preco_venda_produto: 249.9,
    categoria_produto: "Calçados",
    subcategoria_produto: "Tênis",
    genero_produto: "Unissex",
    marca_produto: "Nike",
    data_compra_produto: "2024-01-22",
    fornecedor: { nome_fornecedor: "Fornecedor E" },
    variacoes: [
      {
        id_variacao_produto: 119,
        cor_variacao_produto: "Vermelho",
        medida_variacao_produto: "40",
        imagens_variacao_produto: [
          "https://firebasestorage.googleapis.com/v0/b/matheus-calcados.appspot.com/o/imagens%2FAirJ-Jordan.jpeg?alt=media",
          "https://firebasestorage.googleapis.com/v0/b/matheus-calcados.appspot.com/o/imagens%2Fair-jordan-vermelho-2.jpeg?alt=media",
          "https://firebasestorage.googleapis.com/v0/b/matheus-calcados.appspot.com/o/imagens%2Fair-jordan-vermelho-3.jpeg?alt=media",
          "https://firebasestorage.googleapis.com/v0/b/matheus-calcados.appspot.com/o/imagens%2Fair-jordan-vermelho-4.jpeg?alt=media",
        ],
        qtd_disponivel_produto: 40,
        codigo_de_barras_produto: "6549871234560",
        media_custo_produto_variacao: 80.0,
      },
    ],
  },
  {
    id_produto: 15,
    nome_produto: "Bag Nike",
    descricao_produto: "Mochila muito útil para seu dia a dia!",
    preco_custo_produto: 29.0,
    preco_venda_produto: 49.9,
    categoria_produto: "Acessórios",
    subcategoria_produto: "Mochilas",
    genero_produto: "Unissex",
    marca_produto: "Nike",
    data_compra_produto: "2024-01-22",
    fornecedor: { nome_fornecedor: "Fornecedor E" },
    variacoes: [
      {
        id_variacao_produto: 120,
        cor_variacao_produto: "Preto",
        medida_variacao_produto: "Tamanho único",
        imagens_variacao_produto: [
          "https://firebasestorage.googleapis.com/v0/b/matheus-calcados.appspot.com/o/imagens%2FBag-Nike.jpeg?alt=media",
        ],
        qtd_disponivel_produto: 40,
        codigo_de_barras_produto: "6549871234560",
        media_custo_produto_variacao: 29.0,
      },
    ],
  },
  {
    id_produto: 16,
    nome_produto: "Bola Nike Pro",
    descricao_produto: "Bola profissional de campo",
    preco_custo_produto: 45.0,
    preco_venda_produto: 79.9,
    categoria_produto: "Acessórios",
    subcategoria_produto: "Bolas",
    genero_produto: "Unissex",
    marca_produto: "Nike",
    data_compra_produto: "2024-01-22",
    fornecedor: { nome_fornecedor: "Fornecedor E" },
    variacoes: [
      {
        id_variacao_produto: 121,
        cor_variacao_produto: "Branco",
        medida_variacao_produto: "Tamanho único",
        imagens_variacao_produto: [
          "https://firebasestorage.googleapis.com/v0/b/matheus-calcados.appspot.com/o/imagens%2FBola-Nike-Branca.jpeg?alt=media",
          "https://firebasestorage.googleapis.com/v0/b/matheus-calcados.appspot.com/o/imagens%2Fbola-branca-nike-4.jpeg?alt=media",
        ],
        qtd_disponivel_produto: 40,
        codigo_de_barras_produto: "6549871234560",
        media_custo_produto_variacao: 45.0,
      },
    ],
  },
  {
    id_produto: 17,
    nome_produto: "Bola Nike Amateur",
    descricao_produto: "Bola amadora de campo",
    preco_custo_produto: 40.0,
    preco_venda_produto: 59.9,
    categoria_produto: "Acessórios",
    subcategoria_produto: "Bolas",
    genero_produto: "Unissex",
    marca_produto: "Nike",
    data_compra_produto: "2024-01-22",
    fornecedor: { nome_fornecedor: "Fornecedor E" },
    variacoes: [
      {
        id_variacao_produto: 122,
        cor_variacao_produto: "Preto",
        medida_variacao_produto: "Tamanho único",
        imagens_variacao_produto: [
          "https://firebasestorage.googleapis.com/v0/b/matheus-calcados.appspot.com/o/imagens%2FBola-Nike-Preta.jpeg?alt=media",
          "https://firebasestorage.googleapis.com/v0/b/matheus-calcados.appspot.com/o/imagens%2Fbola-preta-nike-2.jpeg?alt=media",
          "https://firebasestorage.googleapis.com/v0/b/matheus-calcados.appspot.com/o/imagens%2Fbola-preta-nike-3.jpeg?alt=media",
          "https://firebasestorage.googleapis.com/v0/b/matheus-calcados.appspot.com/o/imagens%2Fbola-preta-nike-4.jpeg?alt=media",
        ],
        qtd_disponivel_produto: 40,
        codigo_de_barras_produto: "6549871234560",
        media_custo_produto_variacao: 40.0,
      },
    ],
  },
  {
    id_produto: 18,
    nome_produto: "Camisa Básica",
    descricao_produto: "Camisa para treinos intensos",
    preco_custo_produto: 15.0,
    preco_venda_produto: 29.9,
    categoria_produto: "Roupas",
    subcategoria_produto: "Camisa",
    genero_produto: "Masculino",
    marca_produto: "Nike",
    data_compra_produto: "2024-01-22",
    fornecedor: { nome_fornecedor: "Fornecedor E" },
    variacoes: [
      {
        id_variacao_produto: 123,
        cor_variacao_produto: "Preto",
        medida_variacao_produto: "M",
        imagens_variacao_produto: [
          "https://firebasestorage.googleapis.com/v0/b/matheus-calcados.appspot.com/o/imagens%2FCamisa-Preta-Adidas.jpeg?alt=media",
          "https://firebasestorage.googleapis.com/v0/b/matheus-calcados.appspot.com/o/imagens%2Fcamisa-preta-2.jpeg?alt=media",
          "https://firebasestorage.googleapis.com/v0/b/matheus-calcados.appspot.com/o/imagens%2Fcamisa-preta-3.jpeg?alt=media",
          "https://firebasestorage.googleapis.com/v0/b/matheus-calcados.appspot.com/o/imagens%2Fcamisa-preta-4.jpeg?alt=media",
        ],
        qtd_disponivel_produto: 40,
        codigo_de_barras_produto: "6549871234560",
        media_custo_produto_variacao: 15.0,
      },
    ],
  },
  {
    id_produto: 19,
    nome_produto: "Caneleira",
    descricao_produto: "Par de caneleiras para te deixar protegido",
    preco_custo_produto: 20.0,
    preco_venda_produto: 39.9,
    categoria_produto: "Acessórios",
    subcategoria_produto: "Outros",
    genero_produto: "Masculino",
    marca_produto: "Nike",
    data_compra_produto: "2024-01-22",
    fornecedor: { nome_fornecedor: "Fornecedor E" },
    variacoes: [
      {
        id_variacao_produto: 124,
        cor_variacao_produto: "Roxo",
        medida_variacao_produto: "Tamanho único",
        imagens_variacao_produto: [
          "https://firebasestorage.googleapis.com/v0/b/matheus-calcados.appspot.com/o/imagens%2FCaneleira-Nike.jpeg?alt=media",
        ],
        qtd_disponivel_produto: 40,
        codigo_de_barras_produto: "6549871234560",
        media_custo_produto_variacao: 20.0,
      },
    ],
  },
  {
    id_produto: 20,
    nome_produto: "Camisa Gola Polo",
    descricao_produto: "Para te deixar elegante em qualquer ocasião",
    preco_custo_produto: 60.0,
    preco_venda_produto: 120,
    categoria_produto: "Roupas",
    subcategoria_produto: "Camisa",
    genero_produto: "Masculino",
    marca_produto: "Nike",
    data_compra_produto: "2024-01-22",
    fornecedor: { nome_fornecedor: "Fornecedor E" },
    variacoes: [
      {
        id_variacao_produto: 125,
        cor_variacao_produto: "Azul",
        medida_variacao_produto: "G",
        imagens_variacao_produto: [
          "https://firebasestorage.googleapis.com/v0/b/matheus-calcados.appspot.com/o/imagens%2FGola-Polo-Nike.jpeg?alt=media",
          "https://firebasestorage.googleapis.com/v0/b/matheus-calcados.appspot.com/o/imagens%2Fcamisa-gola-polo-nike-2.jpeg?alt=media",
          "https://firebasestorage.googleapis.com/v0/b/matheus-calcados.appspot.com/o/imagens%2Fcamisa-gola-polo-nike-3.jpeg?alt=media",
          "https://firebasestorage.googleapis.com/v0/b/matheus-calcados.appspot.com/o/imagens%2Fcamisa-gola-polo-nike-4.jpeg?alt=media",
        ],
        qtd_disponivel_produto: 40,
        codigo_de_barras_produto: "6549871234560",
        media_custo_produto_variacao: 60.0,
      },
    ],
  },
  {
    id_produto: 21,
    nome_produto: "Mochila Nike",
    descricao_produto: "Não vai te deixar na mão",
    preco_custo_produto: 30.0,
    preco_venda_produto: 45.0,
    categoria_produto: "Acessórios",
    subcategoria_produto: "Mochilas",
    genero_produto: "Unissex",
    marca_produto: "Nike",
    data_compra_produto: "2024-01-22",
    fornecedor: { nome_fornecedor: "Fornecedor E" },
    variacoes: [
      {
        id_variacao_produto: 126,
        cor_variacao_produto: "Preto",
        medida_variacao_produto: "Tamanho único",
        imagens_variacao_produto: [
          "https://firebasestorage.googleapis.com/v0/b/matheus-calcados.appspot.com/o/imagens%2FMochila-Nike.jpeg?alt=media",
        ],
        qtd_disponivel_produto: 40,
        codigo_de_barras_produto: "6549871234560",
        media_custo_produto_variacao: 30.0,
      },
    ],
  },
  {
    id_produto: 22,
    nome_produto: "Pochete",
    descricao_produto: "Pro dia a dia",
    preco_custo_produto: 10.0,
    preco_venda_produto: 25.0,
    categoria_produto: "Acessórios",
    subcategoria_produto: "Bolsas",
    genero_produto: "Unissex",
    marca_produto: "Nike",
    data_compra_produto: "2024-01-22",
    fornecedor: { nome_fornecedor: "Fornecedor E" },
    variacoes: [
      {
        id_variacao_produto: 126,
        cor_variacao_produto: "Preto",
        medida_variacao_produto: "Tamanho único",
        imagens_variacao_produto: [
          "https://firebasestorage.googleapis.com/v0/b/matheus-calcados.appspot.com/o/imagens%2FPochete-Preta.jpeg?alt=media",
          "https://firebasestorage.googleapis.com/v0/b/matheus-calcados.appspot.com/o/imagens%2Fpochete-preta-2.jpeg?alt=media",
          "https://firebasestorage.googleapis.com/v0/b/matheus-calcados.appspot.com/o/imagens%2Fpochete-preta-3.jpeg?alt=media",
          "https://firebasestorage.googleapis.com/v0/b/matheus-calcados.appspot.com/o/imagens%2Fpochete-preta-4.jpeg?alt=media",
        ],
        qtd_disponivel_produto: 40,
        codigo_de_barras_produto: "6549871234560",
        media_custo_produto_variacao: 10.0,
      },
    ],
  },
  {
    id_produto: 23,
    nome_produto: "Sapatilha",
    descricao_produto: "Pra você!",
    preco_custo_produto: 70.0,
    preco_venda_produto: 89.9,
    categoria_produto: "Calçados",
    subcategoria_produto: "Sapatos",
    genero_produto: "Feminino",
    marca_produto: "Outras",
    data_compra_produto: "2024-01-22",
    fornecedor: { nome_fornecedor: "Fornecedor E" },
    variacoes: [
      {
        id_variacao_produto: 127,
        cor_variacao_produto: "Preto",
        medida_variacao_produto: "36",
        imagens_variacao_produto: [
          "https://firebasestorage.googleapis.com/v0/b/matheus-calcados.appspot.com/o/imagens%2Fsapatilha-feminina.jpeg?alt=media",
        ],
        qtd_disponivel_produto: 40,
        codigo_de_barras_produto: "6549871234560",
        media_custo_produto_variacao: 70.0,
      },
    ],
  },
  {
    id_produto: 24,
    nome_produto: "Tênis Olympikus",
    descricao_produto: "Para seus treinos",
    preco_custo_produto: 70.0,
    preco_venda_produto: 99.9,
    categoria_produto: "Calçados",
    subcategoria_produto: "Tênis",
    genero_produto: "Masculino",
    marca_produto: "Olympikus",
    data_compra_produto: "2024-01-22",
    fornecedor: { nome_fornecedor: "Fornecedor E" },
    variacoes: [
      {
        id_variacao_produto: 128,
        cor_variacao_produto: "Preto",
        medida_variacao_produto: "39",
        imagens_variacao_produto: [
          "https://firebasestorage.googleapis.com/v0/b/matheus-calcados.appspot.com/o/imagens%2Ftenis-olympikus.jpeg?alt=media",
        ],
        qtd_disponivel_produto: 40,
        codigo_de_barras_produto: "6549871234560",
        media_custo_produto_variacao: 70.0,
      },
    ],
  },
  {
    id_produto: 25,
    nome_produto: "Tênis Vans",
    descricao_produto: "O queridinho da galera",
    preco_custo_produto: 99.0,
    preco_venda_produto: 199.9,
    categoria_produto: "Calçados",
    subcategoria_produto: "Tênis",
    genero_produto: "Unissex",
    marca_produto: "Vans",
    data_compra_produto: "2024-01-22",
    fornecedor: { nome_fornecedor: "Fornecedor E" },
    variacoes: [
      {
        id_variacao_produto: 129,
        cor_variacao_produto: "Preto",
        medida_variacao_produto: "38",
        imagens_variacao_produto: [
          "https://firebasestorage.googleapis.com/v0/b/matheus-calcados.appspot.com/o/imagens%2Ftenis-vans-preto.jpeg?alt=media",
        ],
        qtd_disponivel_produto: 40,
        codigo_de_barras_produto: "6549871234560",
        media_custo_produto_variacao: 99.0,
      },
      {
        id_variacao_produto: 130,
        cor_variacao_produto: "Vermelho",
        medida_variacao_produto: "36",
        imagens_variacao_produto: [
          "https://firebasestorage.googleapis.com/v0/b/matheus-calcados.appspot.com/o/imagens%2Ftenis-vans-vermelho.jpeg?alt=media",
        ],
        qtd_disponivel_produto: 40,
        codigo_de_barras_produto: "6549871234560",
        media_custo_produto_variacao: 99.0,
      },
    ],
  },
];
