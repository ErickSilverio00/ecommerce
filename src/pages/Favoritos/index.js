import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { Heart } from "@phosphor-icons/react";
import Produto from "../../components/Produto";
import { useMediaQuery } from "@mui/material";
import useProdutosCurtidos from "../../hooks/ProdutosCurtidos/useProdutosCurtidos";
import Botao from "../../components/Botao";
import { useNavigate } from "react-router-dom";
import { formatarMedidas, formatarMoeda } from "../../utils/funcoes";
import {
  ContainerFavoritos,
  ContainerProdutosFavoritos,
  ContainerTitulo,
  Titulo,
} from "./styles";
import {
  ContainerCarrinhoVazio,
  TextoDescricaoCarrinhoVazio,
  TextoTituloCarrinhoVazio,
} from "../Carrinho/styles";
import { colors } from "../../styles/colors";
import { fonte } from "../../styles/global";

export default function Favoritos() {
  const firstMediaQuery = useMediaQuery("(max-width: 672px)");
  const produtosCurtidos = useProdutosCurtidos();
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <main>
        <ContainerFavoritos>
          {produtosCurtidos.produtosCurtidos.length > 0 && (
            <>
              <ContainerTitulo>
                <Heart size={32} weight="fill" color={colors.primaria} />
                <Titulo>Favoritos</Titulo>
              </ContainerTitulo>
              <ContainerProdutosFavoritos>
                {produtosCurtidos.produtosCurtidos.map((item) => (
                  <Produto
                    key={item.id_produto}
                    idProduto={item.id_produto}
                    image={item.variacoes[0].imagens_variacao_produto[0]}
                    name={item.nome_produto}
                    price={formatarMoeda(item.preco_venda_produto)}
                    size={formatarMedidas(
                      item.variacoes.map(
                        (variacao) => variacao.medida_variacao_produto
                      )
                    )}
                    flex={firstMediaQuery ? 1 : 0.2}
                  />
                ))}
              </ContainerProdutosFavoritos>
            </>
          )}
          {produtosCurtidos.produtosCurtidos.length === 0 && (
            <ContainerCarrinhoVazio>
              <TextoTituloCarrinhoVazio>
                Você ainda não curtiu nenhum produto!
              </TextoTituloCarrinhoVazio>
              <TextoDescricaoCarrinhoVazio>
                Deseja olhar outros produtos?
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
                width="55%"
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
      <Footer />
    </>
  );
}
