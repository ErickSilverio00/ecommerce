import { useMediaQuery } from "@mui/material";
import { Heart, ShoppingCart } from "@phosphor-icons/react";
import { Form } from "@unform/web";
import Botao from "../../components/Botao";
import CampoTexto from "../../components/CampoTexto";
import ImageMagnifier from "../../components/ImageMagnifier";
import usePaginaProduto from "../../hooks/PaginaProduto/usePaginaProduto";
import { colors } from "../../styles/colors";
import { fonte } from "../../styles/global";
import { formatarMoeda, ordenarMedidas } from "../../utils/funcoes";
import {
  ContainerBotaoAddCarrinho,
  ContainerBotoes,
  ContainerCep,
  ContainerCep2,
  ContainerCor,
  ContainerCorEscolhida,
  ContainerCores,
  ContainerDescricao,
  ContainerDireito,
  ContainerEsquerdo,
  ContainerImagem,
  ContainerImagensSecundarias,
  ContainerImgPrincipal,
  ContainerInfosComplementares,
  ContainerInputCep,
  ContainerInputCep2,
  ContainerNomePreco,
  ContainerProduto,
  ContainerTamanho,
  ContainerTamanhoEscolhido,
  ContainerTamanhos,
  ContainerTextosInfosAdicionais,
  ImgSecundaria,
  LinhaContainerTamanhoIndisponivel,
  TextoCepCalculado,
  TextoDescricao,
  TextoNome,
  TextoPreco,
  TextoSecundario,
  TextosInfosAdicionais,
} from "./styles";

export default function PaginaProduto() {
  const {
    formCepRef,
    produtoSelecionado,
    corSelecionada,
    tamanhosPorCorSelecionada,
    isLoading,
    imagemSelecionada,
    tamanhoSelecionado,
    cepCalculado,
    handleCorSelecionada,
    handleImagemPrincipal,
    handleTamanhoSelecionado,
    handleComprar,
    handleAdicionarAoCarrinho,
    toggleLikeProduct,
    isProductLiked,
    calcularCep,
  } = usePaginaProduto();
  const firstMediaQuery = useMediaQuery("(max-width: 860px)");

  const cores = {
    Amarelo: colors.amarelo,
    Azul: colors.azul,
    Branco: colors.branco,
    Cinza: colors.cinzaClaro,
    Marrom: "#964B00",
    Preto: colors.preto,
    Rosa: "#FFC0CB",
    Roxo: "#800080",
    Verde: colors.verde,
    Vermelho: colors.vermelho,
  };

  return (
    <>
      {!isLoading && produtoSelecionado && (
        <main>
          <ContainerProduto>
            <ContainerEsquerdo>
              <ContainerImgPrincipal>
                <ImageMagnifier
                  imgUrl={imagemSelecionada}
                  imgAlt={produtoSelecionado.nome_produto}
                />
              </ContainerImgPrincipal>
              <ContainerImagensSecundarias>
                {produtoSelecionado.variacoes
                  .find(
                    (variacao) =>
                      variacao.cor_variacao_produto === corSelecionada
                  )
                  .imagens_variacao_produto.map((imagem, index) => (
                    <ContainerImagem
                      key={index}
                      onClick={() => handleImagemPrincipal(imagem)}
                      style={{
                        border:
                          imagem === imagemSelecionada &&
                          `2px solid ${colors.primaria}`,
                      }}
                    >
                      <ImgSecundaria src={imagem} alt={`Imagem ${index}`} />
                    </ContainerImagem>
                  ))}
              </ContainerImagensSecundarias>
              <Form ref={formCepRef} onSubmit={calcularCep}>
                <ContainerCep>
                  <TextoSecundario>Calcule o frete</TextoSecundario>
                  <ContainerInputCep>
                    <CampoTexto
                      name="cep"
                      label="Digite seu cep"
                      type="number"
                    />
                    <Botao
                      corDeFundo={colors.primaria}
                      corDeFundoHover={colors.primariaClara}
                      mostrarBoxShadow={true}
                      corTexto={colors.branco}
                      fontFamily={fonte}
                      fontSize={10}
                      fontWeight={600}
                      flexGrow={1}
                      flexBasis={120}
                      width="100%"
                      height={40}
                      tamanho="small"
                      variante="contained"
                      texto="Calcular"
                      type="submit"
                    />
                  </ContainerInputCep>
                  {cepCalculado && (
                    <TextoCepCalculado>FRETE GRÁTIS</TextoCepCalculado>
                  )}
                </ContainerCep>
              </Form>
            </ContainerEsquerdo>
            <ContainerDireito>
              <ContainerNomePreco>
                <TextoNome>{produtoSelecionado.nome_produto}</TextoNome>
                <TextoPreco>
                  {formatarMoeda(produtoSelecionado.preco_venda_produto)}
                </TextoPreco>
              </ContainerNomePreco>
              <ContainerDescricao>
                <TextoDescricao>
                  {produtoSelecionado.descricao_produto}
                </TextoDescricao>
              </ContainerDescricao>
              <ContainerCor>
                <TextoSecundario>Cores</TextoSecundario>
                <ContainerCores>
                  {produtoSelecionado.variacoes.map((variacao, index) => {
                    const cor = variacao.cor_variacao_produto;
                    if (
                      cores[cor] &&
                      produtoSelecionado.variacoes.findIndex(
                        (v) => v.cor_variacao_produto === cor
                      ) === index
                    ) {
                      return (
                        <ContainerCorEscolhida
                          key={index}
                          style={{
                            backgroundColor: cores[cor],
                            boxShadow:
                              cor === corSelecionada
                                ? "inset 0 0 0 1px black, inset 0 0 0 4px white"
                                : "none",
                          }}
                          onClick={() => handleCorSelecionada(cor)}
                        />
                      );
                    }
                    return null;
                  })}
                </ContainerCores>
              </ContainerCor>
              <ContainerTamanho>
                <TextoSecundario>Tamanhos</TextoSecundario>
                <ContainerTamanhos>
                  {ordenarMedidas(
                    produtoSelecionado.variacoes.map(
                      (variacao) => variacao.medida_variacao_produto
                    )
                  ).map((tamanhoOrdenado) => {
                    return (
                      <ContainerTamanhoEscolhido
                        key={tamanhoOrdenado}
                        onClick={() =>
                          tamanhosPorCorSelecionada.includes(tamanhoOrdenado) &&
                          handleTamanhoSelecionado(tamanhoOrdenado)
                        }
                        style={{
                          backgroundColor: tamanhosPorCorSelecionada.includes(
                            tamanhoOrdenado
                          )
                            ? colors.branco
                            : "#f9fafb",
                          color: tamanhosPorCorSelecionada.includes(
                            tamanhoOrdenado
                          )
                            ? colors.preto2
                            : "#E5E7EB",
                          cursor: tamanhosPorCorSelecionada.includes(
                            tamanhoOrdenado
                          )
                            ? "pointer"
                            : "initial",
                          border:
                            tamanhoSelecionado === tamanhoOrdenado
                              ? `2px solid ${colors.preto2}`
                              : `2px solid ${colors.cinzaSuperClaro}`,
                        }}
                      >
                        {tamanhoOrdenado}
                        {!tamanhosPorCorSelecionada.includes(
                          tamanhoOrdenado
                        ) && <LinhaContainerTamanhoIndisponivel />}
                      </ContainerTamanhoEscolhido>
                    );
                  })}
                </ContainerTamanhos>
              </ContainerTamanho>
              <ContainerBotoes>
                <Botao
                  corDeFundo={colors.primaria}
                  corDeFundoHover={colors.primariaClara}
                  mostrarBoxShadow={true}
                  corTexto={colors.branco}
                  fontFamily={fonte}
                  fontSize={12}
                  fontWeight={600}
                  flexGrow={firstMediaQuery && 1}
                  flexBasis={firstMediaQuery && 40}
                  width="50%"
                  height={40}
                  tamanho="small"
                  variante="contained"
                  texto="Comprar"
                  aoClicar={handleComprar}
                />
                <ContainerBotaoAddCarrinho onClick={handleAdicionarAoCarrinho}>
                  <ShoppingCart size={28} color={colors.branco} />
                </ContainerBotaoAddCarrinho>
                <Heart
                  size={26}
                  color={colors.primaria}
                  weight={
                    isProductLiked(produtoSelecionado.id_produto)
                      ? "fill"
                      : "regular"
                  }
                  onClick={toggleLikeProduct}
                  style={{ cursor: "pointer" }}
                />
              </ContainerBotoes>
              <ContainerInfosComplementares>
                <TextoSecundario>Tecidos & Cuidados</TextoSecundario>
                {produtoSelecionado.categoria_produto === "Calçados" && (
                  <ContainerTextosInfosAdicionais>
                    <TextosInfosAdicionais>
                      Somente os melhores materiais
                    </TextosInfosAdicionais>
                    <TextosInfosAdicionais>
                      Feito de forma ética
                    </TextosInfosAdicionais>
                    <TextosInfosAdicionais>
                      Pré-lavado e pré-encolhido
                    </TextosInfosAdicionais>
                    <TextosInfosAdicionais>
                      Lavar à máquina com cores semelhantes
                    </TextosInfosAdicionais>
                  </ContainerTextosInfosAdicionais>
                )}
                {produtoSelecionado.categoria_produto === "Roupas" && (
                  <ContainerTextosInfosAdicionais>
                    <TextosInfosAdicionais>
                      Lavagem à mão preferencialmente
                    </TextosInfosAdicionais>
                    <TextosInfosAdicionais>
                      Secar ao ar livre
                    </TextosInfosAdicionais>
                    <TextosInfosAdicionais>
                      Passar a ferro em temperatura média
                    </TextosInfosAdicionais>
                    <TextosInfosAdicionais>
                      Não usar alvejante
                    </TextosInfosAdicionais>
                  </ContainerTextosInfosAdicionais>
                )}
                {produtoSelecionado.categoria_produto === "Acessórios" && (
                  <ContainerTextosInfosAdicionais>
                    <TextosInfosAdicionais>
                      Limpar com pano seco
                    </TextosInfosAdicionais>
                    <TextosInfosAdicionais>
                      Evitar contato com água
                    </TextosInfosAdicionais>
                    <TextosInfosAdicionais>
                      Armazenar em local seco
                    </TextosInfosAdicionais>
                  </ContainerTextosInfosAdicionais>
                )}
              </ContainerInfosComplementares>
            </ContainerDireito>
          </ContainerProduto>
          <Form ref={formCepRef} onSubmit={calcularCep}>
            <ContainerCep2>
              <TextoSecundario>Calcule o frete</TextoSecundario>
              <ContainerInputCep2>
                <CampoTexto name="cep" label="Digite seu cep" type="number" />
                <Botao
                  corDeFundo={colors.primaria}
                  corDeFundoHover={colors.primariaClara}
                  mostrarBoxShadow={true}
                  corTexto={colors.branco}
                  fontFamily={fonte}
                  fontSize={10}
                  fontWeight={600}
                  flexGrow={1}
                  flexBasis={120}
                  width="100%"
                  height={40}
                  tamanho="small"
                  variante="contained"
                  texto="Calcular"
                  type="submit"
                />
              </ContainerInputCep2>
              {cepCalculado && (
                <TextoCepCalculado>FRETE GRÁTIS</TextoCepCalculado>
              )}
            </ContainerCep2>
          </Form>
        </main>
      )}
    </>
  );
}
