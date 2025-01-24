import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { fetchProdutos } from "../../services/Produtos";

export default function useProdutos(tituloSecao, temImagemFundo) {
  const { busca } = useParams();
  const formOrdenarRef = useRef(null);
  const [produtosDisponiveis, setProdutosDisponiveis] = useState([]);
  const [categoriasVisiveis, setCategoriasVisiveis] = useState(false);
  const [coresVisiveis, setCoresVisiveis] = useState(false);
  const [tamanhosVisiveis, setTamanhosVisiveis] = useState(false);
  const [coresSelecionadas, setCoresSelecionadas] = useState([]);
  const [categoriasSelecionadas, setCategoriasSelecionadas] = useState([]);
  const [tamanhosSelecionados, setTamanhosSelecionados] = useState([]);
  const [produtosFiltrados, setProdutosFiltrados] = useState([]);
  const [estaFiltrando, setEstaFiltrando] = useState(false);
  const [checkboxesSelecionados, setCheckboxesSelecionados] = useState(false);
  const [ordenacaoProduto, setOrdenacaoProduto] = useState("");
  const [drawerOpen, setDrawerOpen] = useState(false);

  const cores = [
    "Amarelo",
    "Azul",
    "Branco",
    "Cinza",
    "Marrom",
    "Preto",
    "Rosa",
    "Roxo",
    "Verde",
    "Vermelho",
  ];

  const toggleVisibility = (stateSetter) => {
    stateSetter((prev) => !prev);
  };

  const handleToggle = (item, state, stateSetter) => {
    const updatedState = state.includes(item)
      ? state.filter((i) => i !== item)
      : [...state, item];
    stateSetter(updatedState);
    setCheckboxesSelecionados(true);
  };

  const ordenarPor = (filtro) => {
    try {
      setOrdenacaoProduto(filtro.value);

      let produtosOrdenados = [];

      switch (filtro.value) {
        case "maisNovo":
          produtosOrdenados = produtosDisponiveis
            .slice()
            .sort(
              (a, b) =>
                new Date(b.data_compra_produto) -
                new Date(a.data_compra_produto)
            );
          break;
        case "precoDecrescente":
          produtosOrdenados = produtosDisponiveis
            .slice()
            .sort((a, b) => b.preco_venda_produto - a.preco_venda_produto);
          break;
        case "precoCrescente":
          produtosOrdenados = produtosDisponiveis
            .slice()
            .sort((a, b) => a.preco_venda_produto - b.preco_venda_produto);
          break;
        default:
          produtosOrdenados = produtosDisponiveis.slice();
          break;
      }

      setProdutosDisponiveis(produtosOrdenados);
    } catch (error) {
      toast.error(error);
    }
  };

  const toggleDrawer = (open) => (event) => {
    setDrawerOpen(open);
  };

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const produtos = await fetchProdutos();

        if (temImagemFundo) {
          let novosProdutos;

          if (
            produtos.some(
              (produto) => produto.categoria_produto === tituloSecao
            )
          ) {
            novosProdutos = produtos.filter(
              (produto) => produto.categoria_produto === tituloSecao
            );
          } else if (
            produtos.some(
              (produto) =>
                produto.genero_produto === tituloSecao ||
                produto.genero_produto === "Unissex"
            )
          ) {
            novosProdutos = produtos.filter(
              (produto) =>
                produto.genero_produto === tituloSecao ||
                produto.genero_produto === "Unissex"
            );
          }

          setProdutosDisponiveis(novosProdutos);
        } else {
          const produtosEncontrados = produtos.filter((produto) => {
            const removeAccents = (str) => {
              return str
                .replace(/[áàãâä]/g, "a")
                .replace(/[éèêë]/g, "e")
                .replace(/[íìîï]/g, "i")
                .replace(/[óòõôö]/g, "o")
                .replace(/[úùûü]/g, "u")
                .replace(/[ç]/g, "c");
            };

            const nomeLowerCase = removeAccents(
              produto.nome_produto.toLowerCase()
            );
            const categoriaLowerCase = removeAccents(
              produto.categoria_produto.toLowerCase()
            );
            const subcategoriaLowerCase = removeAccents(
              produto.subcategoria_produto.toLowerCase()
            );
            const generoLowerCase = removeAccents(
              produto.genero_produto.toLowerCase()
            );
            const marcaLowerCase = removeAccents(
              produto.marca_produto.toLowerCase()
            );
            const buscaLowerCase = removeAccents(busca.toLowerCase());

            return (
              nomeLowerCase.includes(buscaLowerCase) ||
              categoriaLowerCase.includes(buscaLowerCase) ||
              subcategoriaLowerCase.includes(buscaLowerCase) ||
              generoLowerCase.includes(buscaLowerCase) ||
              marcaLowerCase.includes(buscaLowerCase)
            );
          });

          setProdutosDisponiveis(produtosEncontrados);
        }
      } catch (error) {
        toast.error(error);
      }
    };

    loadProducts();
  }, [temImagemFundo, tituloSecao, busca]);

  useEffect(() => {
    if (checkboxesSelecionados) {
      const handleFilters = async () => {
        setEstaFiltrando(true);
        setDrawerOpen(false);
        const containerBlocoProdutos = document.getElementById(
          "containerBlocoProdutos"
        );

        const desiredScrollTop = containerBlocoProdutos.offsetTop - 80;

        window.scrollTo({
          top: desiredScrollTop,
          behavior: "smooth",
        });

        const filtered = produtosDisponiveis.filter((produto) => {
          const temCorSelecionada =
            coresSelecionadas.length === 0 ||
            produto.variacoes.some((variacao) =>
              coresSelecionadas.includes(variacao.cor_variacao_produto)
            );
          const temCategoriaSelecionada =
            categoriasSelecionadas.length === 0 ||
            categoriasSelecionadas.includes(produto.subcategoria_produto);
          const temTamanhoSelecionado =
            tamanhosSelecionados.length === 0 ||
            produto.variacoes.some((variacao) =>
              tamanhosSelecionados.includes(variacao.medida_variacao_produto)
            );

          return (
            temCorSelecionada &&
            temCategoriaSelecionada &&
            temTamanhoSelecionado
          );
        });

        setProdutosFiltrados(filtered);

        setTimeout(() => {
          setEstaFiltrando(false);
        }, 1000);
      };

      handleFilters();
    }
  }, [
    checkboxesSelecionados,
    coresSelecionadas,
    categoriasSelecionadas,
    tamanhosSelecionados,
    produtosDisponiveis,
  ]);

  return {
    busca,
    formOrdenarRef,
    produtosDisponiveis,
    setProdutosDisponiveis,
    categoriasVisiveis,
    setCategoriasVisiveis,
    coresVisiveis,
    setCoresVisiveis,
    tamanhosVisiveis,
    setTamanhosVisiveis,
    coresSelecionadas,
    setCoresSelecionadas,
    categoriasSelecionadas,
    setCategoriasSelecionadas,
    tamanhosSelecionados,
    setTamanhosSelecionados,
    produtosFiltrados,
    setProdutosFiltrados,
    estaFiltrando,
    setEstaFiltrando,
    checkboxesSelecionados,
    setCheckboxesSelecionados,
    ordenacaoProduto,
    setOrdenacaoProduto,
    drawerOpen,
    setDrawerOpen,
    cores,
    toggleVisibility,
    handleToggle,
    ordenarPor,
    toggleDrawer,
  };
}
