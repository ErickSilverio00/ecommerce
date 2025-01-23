/* eslint-disable react-hooks/exhaustive-deps */
import { Heart, ShoppingCart } from "@phosphor-icons/react";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useAuthStore from "../../stores/useAuthStore";
import useProdutosCurtidos from "../../stores/useProdutosCurtidos";
import { colors } from "../../styles/colors";
import { fonte } from "../../styles/global";
import { formatarMedidas, formatarMoeda } from "../../utils/funcoes";
import Botao from "../Botao";
import {
  ContainerBotaoComprar,
  ContainerImgProduct,
  ContainerInfosProducts,
  ContainerLikeProduct,
  ContainerNameSize,
  ContainerPrice,
  ContainerProduct,
  TextName,
  TextPrice,
  TextSize,
} from "./styles";

export default function Produto({ produto, flex }) {
  const { user } = useAuthStore();
  const navigate = useNavigate();
  const produtosCurtidos = useProdutosCurtidos();
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    setLiked(isProductLiked(produto.id_produto));
  }, [produto.id_produto]);

  const toggleLikeProduct = async () => {
    try {
      if (!user) {
        navigate("/login");
        return;
      }
      if (liked) {
        const idProdutoCurtido = findIdProdutoCurtido(produto.id_produto);
        await produtosCurtidos.removerProdutoCurtido(idProdutoCurtido);
      } else {
        const curtidosData = {
          idCliente: user.idCliente,
          ...produto,
        };
        await produtosCurtidos.adicionarProdutoCurtido(curtidosData);
        await produtosCurtidos.fetchProdutosCurtidos(user.idCliente);
      }

      setLiked(!liked);
    } catch (error) {
      toast.error(error);
    }
  };

  const isProductLiked = (idProduto) => {
    return produtosCurtidos.produtosCurtidos.some(
      (produtoCurtido) => produtoCurtido.id_produto === idProduto
    );
  };

  const findIdProdutoCurtido = (idProduto) => {
    const produtoCurtido = produtosCurtidos.produtosCurtidos.find(
      (produtoCurtido) => produtoCurtido.id_produto === idProduto
    );
    return produtoCurtido ? produtoCurtido.id_produto : null;
  };

  return (
    <ContainerProduct style={{ flex: flex }}>
      <ContainerLikeProduct onClick={toggleLikeProduct}>
        <Heart
          size={24}
          weight={liked ? "fill" : "bold"}
          color={colors.branco}
          className="heart-icon"
        />
      </ContainerLikeProduct>
      <Link
        style={{ textDecoration: "none" }}
        to={`/produto/${produto.nome_produto}`}
      >
        <ContainerImgProduct
          src={produto.variacoes[0].imagens_variacao_produto[0]}
          alt={produto.nome_produto}
        />
      </Link>
      <ContainerInfosProducts>
        <ContainerNameSize>
          <TextName>{produto.nome_produto}</TextName>
          <TextSize>
            {formatarMedidas(
              produto.variacoes.map(
                (variacao) => variacao.medida_variacao_produto
              )
            )}
          </TextSize>
        </ContainerNameSize>
        <ContainerPrice>
          <TextPrice>{formatarMoeda(produto.preco_venda_produto)}</TextPrice>
        </ContainerPrice>
      </ContainerInfosProducts>
      <Link
        style={{ textDecoration: "none", width: "100%" }}
        to={`/produto/${produto.nome_produto}`}
      >
        <ContainerBotaoComprar>
          <Botao
            corDeFundo={colors.primaria}
            corDeFundoHover={colors.primariaClara}
            mostrarBoxShadow={true}
            corTexto={colors.branco}
            fontFamily={fonte}
            fontSize={12}
            fontWeight={600}
            flexGrow={1}
            flexBasis={40}
            width="100%"
            height={40}
            tamanho="small"
            variante="contained"
            texto="Comprar"
            Icone={ShoppingCart}
          />
        </ContainerBotaoComprar>
      </Link>
    </ContainerProduct>
  );
}
