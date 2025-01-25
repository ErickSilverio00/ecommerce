import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { fetchProdutos } from "../../services/Produtos";
import useAuthStore from "../../stores/useAuthStore";
import useCarrinhoStore from "../../stores/useCarrinhoStore";
import useProdutosCurtidos from "../../stores/useProdutosCurtidosStore";

export default function usePaginaProduto() {
  const { name } = useParams();
  const navigate = useNavigate();
  const { user } = useAuthStore();
  const formCepRef = useRef(null);
  const [produtosDisponiveis, setProdutosDisponiveis] = useState([]);
  const [produtoSelecionado, setProdutoSelecionado] = useState(null);
  const [corSelecionada, setCorSelecionada] = useState(null);
  const [tamanhosPorCorSelecionada, setTamanhosPorCorSelecionada] = useState(
    []
  );
  const [isLoading, setIsLoading] = useState(true);
  const [imagemSelecionada, setImagemSelecionada] = useState(null);
  const [tamanhoSelecionado, setTamanhoSelecionado] = useState([]);
  const [cepCalculado, setCepCalculado] = useState(false);
  const carrinho = useCarrinhoStore();
  const produtosCurtidos = useProdutosCurtidos();

  async function loadProducts() {
    try {
      const produtos = await fetchProdutos();
      setProdutosDisponiveis(produtos);
      setIsLoading(false);
    } catch (error) {
      toast.error(error);
      setIsLoading(false);
    }
  }

  const handleCorSelecionada = (cor) => {
    setCorSelecionada(cor);
    setTamanhoSelecionado(null);
  };

  const handleImagemPrincipal = (imagem) => {
    setImagemSelecionada(imagem);
  };

  const handleTamanhoSelecionado = (tamanho) => {
    setTamanhoSelecionado(tamanho);
  };

  const handleComprar = async () => {
    try {
      setIsLoading(true);
      const variacaoSelecionada = produtoSelecionado.variacoes.find(
        (variacao) =>
          variacao.cor_variacao_produto === corSelecionada &&
          variacao.medida_variacao_produto === tamanhoSelecionado
      );

      if (!user) {
        navigate("/login");
        return;
      }

      if (!tamanhosPorCorSelecionada.includes(tamanhoSelecionado)) {
        toast.error(
          "Você deve selecionar um tamanho do produto antes de prosseguir."
        );
        return;
      }

      if (
        carrinho.itensCarrinho.find(
          (item) =>
            item.id_variacao_produto === variacaoSelecionada.id_variacao_produto
        )
      ) {
        toast.error("Esse produto já foi adicionado ao carrinho.");
        return;
      }

      if (produtoSelecionado && corSelecionada && tamanhoSelecionado) {
        const carrinhoData = {
          id_produto: produtoSelecionado.id_produto,
          nome_produto: produtoSelecionado.nome_produto,
          descricao_produto: produtoSelecionado.descricao_produto,
          categoria_produto: produtoSelecionado.categoria_produto,
          marca_produto: produtoSelecionado.marca_produto,
          preco_venda_produto: produtoSelecionado.preco_venda_produto,
          ...variacaoSelecionada,
          quantidade: 1,
        };
        await carrinho.adicionarAoCarrinho(carrinhoData);
        setTimeout(() => {
          navigate("/carrinho");
        }, 50);
      }
    } catch (error) {
      toast.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleAdicionarAoCarrinho = async () => {
    try {
      setIsLoading(true);

      // Encontra a variação selecionada
      const variacaoSelecionada = produtoSelecionado.variacoes.find(
        (variacao) =>
          variacao.cor_variacao_produto === corSelecionada &&
          variacao.medida_variacao_produto === tamanhoSelecionado
      );

      if (!user) {
        navigate("/login");
        return;
      }

      if (!tamanhosPorCorSelecionada.includes(tamanhoSelecionado)) {
        toast.error(
          "Você deve selecionar um tamanho do produto antes de prosseguir."
        );
        return;
      }

      if (
        carrinho.itensCarrinho.find(
          (item) =>
            item.id_variacao_produto === variacaoSelecionada.id_variacao_produto
        )
      ) {
        toast.error("Esse produto já foi adicionado ao carrinho.");
        return;
      }

      if (produtoSelecionado && corSelecionada && tamanhoSelecionado) {
        const carrinhoData = {
          id_produto: produtoSelecionado.id_produto,
          nome_produto: produtoSelecionado.nome_produto,
          descricao_produto: produtoSelecionado.descricao_produto,
          categoria_produto: produtoSelecionado.categoria_produto,
          marca_produto: produtoSelecionado.marca_produto,
          preco_venda_produto: produtoSelecionado.preco_venda_produto,
          ...variacaoSelecionada,
          quantidade: 1,
        };

        await carrinho.adicionarAoCarrinho(carrinhoData);
      }
    } catch (error) {
      toast.error("Ocorreu um erro ao adicionar o produto ao carrinho.");
      toast.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const toggleLikeProduct = async () => {
    try {
      const produto = produtoSelecionado;

      if (!user) {
        navigate("/login");
        return;
      }
      if (isProductLiked(produto.id_produto)) {
        const idProdutoCurtido = findIdProdutoCurtido(produto.id_produto);
        await produtosCurtidos.removerProdutoCurtido(idProdutoCurtido);
      } else {
        const curtidosData = {
          idCliente: user.idCliente,
          ...produto,
        };
        await produtosCurtidos.adicionarProdutoCurtido(curtidosData);
        produtosCurtidos.fetchProdutosCurtidos(user.idCliente);
      }
    } catch (error) {
      toast.error(error);
    }
  };

  const isProductLiked = (idProduto) => {
    return produtosCurtidos.produtosCurtidos.some(
      (produto) => produto.id_produto === idProduto
    );
  };

  const findIdProdutoCurtido = (idProduto) => {
    const produtoCurtido = produtosCurtidos.produtosCurtidos.find(
      (produto) => produto.id_produto === idProduto
    );
    return produtoCurtido ? produtoCurtido.id_produto : null;
  };

  const validarCep = () => {
    const cep = formCepRef?.current?.getFieldValue("cep");

    const cepFormatado = cep.replace(/\D/g, "");

    if (!cep) {
      formCepRef.current.setFieldError("cep", "Campo Obrigatório");
      return false;
    } else if (cepFormatado.length !== 8) {
      formCepRef.current.setFieldError(
        "cep",
        "O CEP deve conter exatamente 8 dígitos"
      );
      return false;
    }

    return true;
  };

  const calcularCep = () => {
    if (!validarCep()) {
      setCepCalculado(false);
      return;
    }
    setCepCalculado(true);
  };

  useEffect(() => {
    if (produtosDisponiveis.length > 0) {
      const produto = produtosDisponiveis.find(
        (produto) => produto.nome_produto === name
      );
      if (produto && produto !== produtoSelecionado) {
        setProdutoSelecionado(produto);
        const corVariacao = produto.variacoes.find(
          (variacao) => variacao.cor_variacao_produto === corSelecionada
        );
        if (corVariacao) {
          setCorSelecionada(corSelecionada);
        } else {
          setCorSelecionada(produto.variacoes[0].cor_variacao_produto);
        }
      }
    }
  }, [produtosDisponiveis, name, produtoSelecionado, corSelecionada]);

  useEffect(() => {
    if (produtoSelecionado && corSelecionada) {
      const varVariacaoPorCorSelecionada = produtoSelecionado.variacoes.filter(
        (variacao) => variacao.cor_variacao_produto === corSelecionada
      );

      const tamanhos = varVariacaoPorCorSelecionada.map(
        (variacao) => variacao.medida_variacao_produto
      );

      setTamanhosPorCorSelecionada(tamanhos);
      setImagemSelecionada(
        produtoSelecionado.variacoes.find(
          (variacao) => variacao.cor_variacao_produto === corSelecionada
        ).imagens_variacao_produto[0]
      );
    }
  }, [corSelecionada, produtoSelecionado]);

  useEffect(() => {
    loadProducts();
  }, []);

  return {
    name,
    navigate,
    user,
    formCepRef,
    produtosDisponiveis,
    setProdutosDisponiveis,
    produtoSelecionado,
    setProdutoSelecionado,
    corSelecionada,
    setCorSelecionada,
    tamanhosPorCorSelecionada,
    setTamanhosPorCorSelecionada,
    isLoading,
    setIsLoading,
    imagemSelecionada,
    setImagemSelecionada,
    tamanhoSelecionado,
    setTamanhoSelecionado,
    cepCalculado,
    setCepCalculado,
    carrinho,
    produtosCurtidos,
    loadProducts,
    handleCorSelecionada,
    handleImagemPrincipal,
    handleTamanhoSelecionado,
    handleComprar,
    handleAdicionarAoCarrinho,
    toggleLikeProduct,
    isProductLiked,
    calcularCep,
  };
}
