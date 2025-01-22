import { Heart, ShoppingCart } from "@phosphor-icons/react";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuthStore from "../../hooks/FluxoDeAutenticacao/useAuthStore";
import useProdutosCurtidos from "../../hooks/ProdutosCurtidos/useProdutosCurtidos";
import { colors } from "../../styles/colors";
import { fonte } from "../../styles/global";
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

export default function Produto({ idProduto, image, name, size, price, flex }) {
  const { user } = useAuthStore();
  const navigate = useNavigate();
  const produtosCurtidos = useProdutosCurtidos();

  const [liked, setLiked] = useState(false);

  useEffect(() => {
    setLiked(isProductLiked(idProduto));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [idProduto]);

  const toggleLikeProduct = async () => {
    try {
      if (!user) {
        navigate("/login");
        return;
      }
      if (liked) {
        const idProdutoCurtido = findIdProdutoCurtido(idProduto);
        await produtosCurtidos.removerProdutoCurtido(idProdutoCurtido);
      } else {
        const curtidosData = {
          idCliente: user.idCliente,
          idProduto: idProduto,
        };
        await produtosCurtidos.adicionarProdutoCurtido(curtidosData);
        await produtosCurtidos.fetchProdutosCurtidos(user.idCliente);
      }

      setLiked(!liked);
    } catch (error) {
      console.error(error);
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
    return produtoCurtido ? produtoCurtido.id_produto_curtido : null;
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
      <Link style={{ textDecoration: "none" }} to={`/produto/${name}`}>
        <ContainerImgProduct src={image} alt={name} />
      </Link>
      <ContainerInfosProducts>
        <ContainerNameSize>
          <TextName>{name}</TextName>
          <TextSize>{size}</TextSize>
        </ContainerNameSize>
        <ContainerPrice>
          <TextPrice>{price}</TextPrice>
        </ContainerPrice>
      </ContainerInfosProducts>
      <Link
        style={{ textDecoration: "none", width: "100%" }}
        to={`/produto/${name}`}
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
