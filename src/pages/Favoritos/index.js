import { useMediaQuery } from "@mui/material";
import { Heart } from "@phosphor-icons/react";
import { useNavigate } from "react-router-dom";
import Botao from "../../components/Botao";
import Produto from "../../components/Produto";
import useProdutosCurtidosStore from "../../stores/useProdutosCurtidosStore";
import { colors } from "../../styles/colors";
import { fonte } from "../../styles/global";
import {
  ContainerCarrinhoVazio,
  TextoDescricaoCarrinhoVazio,
  TextoTituloCarrinhoVazio,
} from "../Carrinho/styles";
import {
  ContainerFavoritos,
  ContainerProdutosFavoritos,
  ContainerTitulo,
  Titulo,
} from "./styles";

export default function Favoritos() {
  const firstMediaQuery = useMediaQuery("(max-width: 672px)");
  const produtosCurtidos = useProdutosCurtidosStore();
  const navigate = useNavigate();

  return (
    <main>
      <ContainerFavoritos>
        {produtosCurtidos.produtosCurtidos.length > 0 && (
          <>
            <ContainerTitulo>
              <Heart size={32} weight="fill" color={colors.primaria} />
              <Titulo>Favoritos</Titulo>
            </ContainerTitulo>
            <ContainerProdutosFavoritos>
              {produtosCurtidos.produtosCurtidos.map((produto, index) => (
                <Produto
                  key={index}
                  produto={produto}
                  flex={firstMediaQuery ? 1 : 0.2}
                />
              ))}
            </ContainerProdutosFavoritos>
          </>
        )}
        {produtosCurtidos.produtosCurtidos.length === 0 && (
          <ContainerCarrinhoVazio>
            <TextoTituloCarrinhoVazio>
              Você ainda não curtiu nenhum produto
            </TextoTituloCarrinhoVazio>
            <TextoDescricaoCarrinhoVazio>
              Adquira nossos melhores produtos!
            </TextoDescricaoCarrinhoVazio>
            <Botao
              corDeFundo={colors.primaria}
              corDeFundoHover={colors.primariaClara}
              mostrarBoxShadow={true}
              corTexto={colors.branco}
              fontFamily={fonte}
              fontSize={14}
              fontWeight={600}
              flexGrow={1}
              flexBasis={40}
              width={firstMediaQuery ? "75%" : "55%"}
              height={40}
              tamanho="small"
              variante="contained"
              texto="CONTINUAR COMPRANDO"
              type="button"
              aoClicar={() => navigate("/")}
            />
          </ContainerCarrinhoVazio>
        )}
      </ContainerFavoritos>
    </main>
  );
}
