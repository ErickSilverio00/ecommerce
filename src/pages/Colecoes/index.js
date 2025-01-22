import React, { useEffect, useRef, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import fundoMasculino from "../../assets/img/fundo-Masculino.png";
import fundoFeminino from "../../assets/img/fundo-Feminino.png";
import {
  ContainerBlocoProdutos,
  ContainerImagem,
  ContainerPrimeiraLinha,
  ContainerPrincipal,
  ContainerSetas,
  ContainerSlides,
  SetaDireita,
  SetaEsquerda,
} from "./styles";
import { CaretLeft, CaretRight } from "@phosphor-icons/react";
import TituloSubtituloSecoes from "../../components/TituloSubtituloSecoes";
import Produto from "../../components/Produto";
import { fetchProdutos } from "../../services/Produtos";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { useMediaQuery } from "@mui/material";
import { formatarMedidas, formatarMoeda } from "../../utils/funcoes";
import { Link } from "react-router-dom";
import { colors } from "../../styles/colors";

export default function Colecoes() {
  const firstMediaQuery = useMediaQuery("(max-width: 672px)");
  const [produtosDisponiveis, setProdutosDisponiveis] = useState([]);
  const [isLeftArrowRedLancamentos, setIsLeftArrowRedLancamentos] =
    useState(false);
  const [isRightArrowRedLancamentos, setIsRightArrowRedLancamentos] =
    useState(true);
  const [isLeftArrowRedFeminino, setIsLeftArrowRedFeminino] = useState(false);
  const [isRightArrowRedFeminino, setIsRightArrowRedFeminino] = useState(true);
  const [isLeftArrowRedMasculino, setIsLeftArrowRedMasculino] = useState(false);
  const [isRightArrowRedMasculino, setIsRightArrowRedMasculino] =
    useState(true);
  const [isLeftArrowRedRoupas, setIsLeftArrowRedRoupas] = useState(false);
  const [isRightArrowRedRoupas, setIsRightArrowRedRoupas] = useState(true);
  const [isLeftArrowRedCalcados, setIsLeftArrowRedCalcados] = useState(false);
  const [isRightArrowRedCalcados, setIsRightArrowRedCalcados] = useState(true);
  const [isLeftArrowRedAcessorios, setIsLeftArrowRedAcessorios] =
    useState(false);
  const [isRightArrowRedAcessorios, setIsRightArrowRedAcessorios] =
    useState(true);
  const swiperRefLancamentos = useRef(null);
  const swiperRefFeminino = useRef(null);
  const swiperRefMasculino = useRef(null);
  const swiperRefRoupas = useRef(null);
  const swiperRefCalcados = useRef(null);
  const swiperRefAcessorios = useRef(null);

  async function loadProducts() {
    try {
      const produtos = await fetchProdutos();
      setProdutosDisponiveis(produtos);
    } catch (error) {
      console.error(error);
    }
  }

  const ultimosProdutos = produtosDisponiveis
    .slice()
    .sort(
      (a, b) =>
        new Date(b.data_compra_produto) - new Date(a.data_compra_produto)
    )
    .slice(0, 10);

  useEffect(() => {
    loadProducts();
  }, []);

  useEffect(() => {
    if (swiperRefLancamentos.current) {
      swiperRefLancamentos.current.on("reachEnd", () => {
        setIsRightArrowRedLancamentos(false);
        setIsLeftArrowRedLancamentos(true);
      });
      swiperRefLancamentos.current.on("reachBeginning", () => {
        setIsLeftArrowRedLancamentos(false);
        setIsRightArrowRedLancamentos(true);
      });
    }
    if (swiperRefFeminino.current) {
      swiperRefFeminino.current.on("reachEnd", () => {
        setIsRightArrowRedFeminino(false);
        setIsLeftArrowRedFeminino(true);
      });
      swiperRefFeminino.current.on("reachBeginning", () => {
        setIsLeftArrowRedFeminino(false);
        setIsRightArrowRedFeminino(true);
      });
    }
    if (swiperRefMasculino.current) {
      swiperRefMasculino.current.on("reachEnd", () => {
        setIsRightArrowRedMasculino(false);
        setIsLeftArrowRedMasculino(true);
      });
      swiperRefMasculino.current.on("reachBeginning", () => {
        setIsLeftArrowRedMasculino(false);
        setIsRightArrowRedMasculino(true);
      });
    }
    if (swiperRefRoupas.current) {
      swiperRefRoupas.current.on("reachEnd", () => {
        setIsRightArrowRedRoupas(false);
        setIsLeftArrowRedRoupas(true);
      });
      swiperRefRoupas.current.on("reachBeginning", () => {
        setIsLeftArrowRedRoupas(false);
        setIsRightArrowRedRoupas(true);
      });
    }
    if (swiperRefCalcados.current) {
      swiperRefCalcados.current.on("reachEnd", () => {
        setIsRightArrowRedCalcados(false);
        setIsLeftArrowRedCalcados(true);
      });
      swiperRefCalcados.current.on("reachBeginning", () => {
        setIsLeftArrowRedCalcados(false);
        setIsRightArrowRedCalcados(true);
      });
    }
    if (swiperRefAcessorios.current) {
      swiperRefAcessorios.current.on("reachEnd", () => {
        setIsRightArrowRedAcessorios(false);
        setIsLeftArrowRedAcessorios(true);
      });
      swiperRefAcessorios.current.on("reachBeginning", () => {
        setIsLeftArrowRedAcessorios(false);
        setIsRightArrowRedAcessorios(true);
      });
    }
  }, []);

  return (
    <>
      <Header />
      <ContainerPrincipal>
        <ContainerSlides>
          <Link to="/masculino" style={{ width: "100%" }}>
            <ContainerImagem src={fundoMasculino} />
          </Link>
          <Link to="/feminino" style={{ width: "100%" }}>
            <ContainerImagem src={fundoFeminino} />
          </Link>
        </ContainerSlides>
        <ContainerBlocoProdutos>
          <ContainerPrimeiraLinha>
            <TituloSubtituloSecoes title="Lançamentos" subTitle="PROMOÇÕES" />
            <ContainerSetas>
              <SetaEsquerda
                onClick={() => {
                  swiperRefLancamentos.current.slidePrev();
                  setIsRightArrowRedLancamentos(true);
                }}
                style={{
                  backgroundColor: isLeftArrowRedLancamentos
                    ? colors.primaria
                    : colors.cinzaSuperClaro,
                  color: isLeftArrowRedLancamentos
                    ? colors.branco
                    : colors.cinza,
                }}
              >
                <CaretLeft size={24} weight="bold" />
              </SetaEsquerda>
              <SetaDireita
                onClick={() => {
                  swiperRefLancamentos.current.slideNext();
                  setIsLeftArrowRedLancamentos(true);
                }}
                style={{
                  backgroundColor: isRightArrowRedLancamentos
                    ? colors.primaria
                    : colors.cinzaSuperClaro,
                  color: isRightArrowRedLancamentos
                    ? colors.branco
                    : colors.cinza,
                }}
              >
                <CaretRight size={24} weight="bold" />
              </SetaDireita>
            </ContainerSetas>
          </ContainerPrimeiraLinha>
          <Swiper
            spaceBetween={20}
            style={{
              width: firstMediaQuery ? "89%" : "97%",
              paddingTop: 10,
              paddingBottom: 15,
              paddingInline: 20,
            }}
            breakpoints={{
              320: { slidesPerView: 1 },
              500: { slidesPerView: 2 },
              800: { slidesPerView: 3 },
              1080: { slidesPerView: 4 },
              1350: { slidesPerView: 5 },
              1760: { slidesPerView: 6 },
              2400: { slidesPerView: 7 },
            }}
            onSwiper={(swiper) => {
              swiperRefLancamentos.current = swiper;
            }}
            modules={[Autoplay]}
            autoplay={{ delay: 6000, disableOnInteraction: false }}
          >
            {ultimosProdutos.map((produto, index) => (
              <SwiperSlide key={index}>
                <Produto
                  idProduto={produto.id_produto}
                  image={produto.variacoes[0].imagens_variacao_produto[0]}
                  name={produto.nome_produto}
                  size={formatarMedidas(
                    produto.variacoes.map(
                      (variacao) => variacao.medida_variacao_produto
                    )
                  )}
                  price={formatarMoeda(produto.preco_venda_produto)}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </ContainerBlocoProdutos>
        <ContainerBlocoProdutos>
          <ContainerPrimeiraLinha>
            <TituloSubtituloSecoes title="Feminino" subTitle="PROMOÇÕES" />
            <ContainerSetas>
              <SetaEsquerda
                onClick={() => {
                  swiperRefFeminino.current.slidePrev();
                  setIsRightArrowRedFeminino(true);
                }}
                style={{
                  backgroundColor: isLeftArrowRedFeminino
                    ? colors.primaria
                    : colors.cinzaSuperClaro,
                  color: isLeftArrowRedFeminino ? colors.branco : colors.cinza,
                }}
              >
                <CaretLeft size={24} weight="bold" />
              </SetaEsquerda>
              <SetaDireita
                onClick={() => {
                  swiperRefFeminino.current.slideNext();
                  setIsLeftArrowRedFeminino(true);
                }}
                style={{
                  backgroundColor: isRightArrowRedFeminino
                    ? colors.primaria
                    : colors.cinzaSuperClaro,
                  color: isRightArrowRedFeminino ? colors.branco : colors.cinza,
                }}
              >
                <CaretRight size={24} weight="bold" />
              </SetaDireita>
            </ContainerSetas>
          </ContainerPrimeiraLinha>
          <Swiper
            spaceBetween={20}
            style={{
              width: firstMediaQuery ? "89%" : "97%",
              paddingTop: 10,
              paddingBottom: 15,
              paddingInline: 20,
            }}
            breakpoints={{
              320: { slidesPerView: 1 },
              500: { slidesPerView: 2 },
              800: { slidesPerView: 3 },
              1080: { slidesPerView: 4 },
              1350: { slidesPerView: 5 },
              1760: { slidesPerView: 6 },
              2400: { slidesPerView: 7 },
            }}
            onSwiper={(swiper) => {
              swiperRefFeminino.current = swiper;
            }}
            modules={[Autoplay]}
            autoplay={{ delay: 6000, disableOnInteraction: false }}
          >
            {produtosDisponiveis.map(
              (produto, index) =>
                produto.genero_produto === "Feminino" && (
                  <SwiperSlide key={index}>
                    <Produto
                      idProduto={produto.id_produto}
                      image={produto.variacoes[0].imagens_variacao_produto[0]}
                      name={produto.nome_produto}
                      size={formatarMedidas(
                        produto.variacoes.map(
                          (variacao) => variacao.medida_variacao_produto
                        )
                      )}
                      price={formatarMoeda(produto.preco_venda_produto)}
                    />
                  </SwiperSlide>
                )
            )}
          </Swiper>
        </ContainerBlocoProdutos>
        <ContainerBlocoProdutos>
          <ContainerPrimeiraLinha>
            <TituloSubtituloSecoes title="Masculino" subTitle="PROMOÇÕES" />
            <ContainerSetas>
              <SetaEsquerda
                onClick={() => {
                  swiperRefMasculino.current.slidePrev();
                  setIsRightArrowRedMasculino(true);
                }}
                style={{
                  backgroundColor: isLeftArrowRedMasculino
                    ? colors.primaria
                    : colors.cinzaSuperClaro,
                  color: isLeftArrowRedMasculino ? colors.branco : colors.cinza,
                }}
              >
                <CaretLeft size={24} weight="bold" />
              </SetaEsquerda>
              <SetaDireita
                onClick={() => {
                  swiperRefMasculino.current.slideNext();
                  setIsLeftArrowRedMasculino(true);
                }}
                style={{
                  backgroundColor: isRightArrowRedMasculino
                    ? colors.primaria
                    : colors.cinzaSuperClaro,
                  color: isRightArrowRedMasculino
                    ? colors.branco
                    : colors.cinza,
                }}
              >
                <CaretRight size={24} weight="bold" />
              </SetaDireita>
            </ContainerSetas>
          </ContainerPrimeiraLinha>
          <Swiper
            spaceBetween={20}
            style={{
              width: firstMediaQuery ? "89%" : "97%",
              paddingTop: 10,
              paddingBottom: 15,
              paddingInline: 20,
            }}
            breakpoints={{
              320: { slidesPerView: 1 },
              500: { slidesPerView: 2 },
              800: { slidesPerView: 3 },
              1080: { slidesPerView: 4 },
              1350: { slidesPerView: 5 },
              1760: { slidesPerView: 6 },
              2400: { slidesPerView: 7 },
            }}
            onSwiper={(swiper) => {
              swiperRefMasculino.current = swiper;
            }}
            modules={[Autoplay]}
            autoplay={{ delay: 6000, disableOnInteraction: false }}
          >
            {produtosDisponiveis.map(
              (produto, index) =>
                produto.genero_produto === "Masculino" && (
                  <SwiperSlide key={index}>
                    <Produto
                      idProduto={produto.id_produto}
                      image={produto.variacoes[0].imagens_variacao_produto[0]}
                      name={produto.nome_produto}
                      size={formatarMedidas(
                        produto.variacoes.map(
                          (variacao) => variacao.medida_variacao_produto
                        )
                      )}
                      price={formatarMoeda(produto.preco_venda_produto)}
                    />
                  </SwiperSlide>
                )
            )}
          </Swiper>
        </ContainerBlocoProdutos>
        <ContainerBlocoProdutos>
          <ContainerPrimeiraLinha>
            <TituloSubtituloSecoes title="Roupas" subTitle="PROMOÇÕES" />
            <ContainerSetas>
              <SetaEsquerda
                onClick={() => {
                  swiperRefRoupas.current.slidePrev();
                  setIsRightArrowRedRoupas(true);
                }}
                style={{
                  backgroundColor: isLeftArrowRedRoupas
                    ? colors.primaria
                    : colors.cinzaSuperClaro,
                  color: isLeftArrowRedRoupas ? colors.branco : colors.cinza,
                }}
              >
                <CaretLeft size={24} weight="bold" />
              </SetaEsquerda>
              <SetaDireita
                onClick={() => {
                  swiperRefRoupas.current.slideNext();
                  setIsLeftArrowRedRoupas(true);
                }}
                style={{
                  backgroundColor: isRightArrowRedRoupas
                    ? colors.primaria
                    : colors.cinzaSuperClaro,
                  color: isRightArrowRedRoupas ? colors.branco : colors.cinza,
                }}
              >
                <CaretRight size={24} weight="bold" />
              </SetaDireita>
            </ContainerSetas>
          </ContainerPrimeiraLinha>
          <Swiper
            spaceBetween={20}
            style={{
              width: firstMediaQuery ? "89%" : "97%",
              paddingTop: 10,
              paddingBottom: 15,
              paddingInline: 20,
            }}
            breakpoints={{
              320: { slidesPerView: 1 },
              500: { slidesPerView: 2 },
              800: { slidesPerView: 3 },
              1080: { slidesPerView: 4 },
              1350: { slidesPerView: 5 },
              1760: { slidesPerView: 6 },
              2400: { slidesPerView: 7 },
            }}
            onSwiper={(swiper) => {
              swiperRefRoupas.current = swiper;
            }}
            modules={[Autoplay]}
            autoplay={{ delay: 6000, disableOnInteraction: false }}
          >
            {produtosDisponiveis.map(
              (produto, index) =>
                produto.categoria_produto === "Roupas" && (
                  <SwiperSlide key={index}>
                    <Produto
                      idProduto={produto.id_produto}
                      image={produto.variacoes[0].imagens_variacao_produto[0]}
                      name={produto.nome_produto}
                      size={formatarMedidas(
                        produto.variacoes.map(
                          (variacao) => variacao.medida_variacao_produto
                        )
                      )}
                      price={formatarMoeda(produto.preco_venda_produto)}
                    />
                  </SwiperSlide>
                )
            )}
          </Swiper>
        </ContainerBlocoProdutos>
        <ContainerBlocoProdutos>
          <ContainerPrimeiraLinha>
            <TituloSubtituloSecoes title="Calçados" subTitle="PROMOÇÕES" />
            <ContainerSetas>
              <SetaEsquerda
                onClick={() => {
                  swiperRefCalcados.current.slidePrev();
                  setIsRightArrowRedCalcados(true);
                }}
                style={{
                  backgroundColor: isLeftArrowRedCalcados
                    ? colors.primaria
                    : colors.cinzaSuperClaro,
                  color: isLeftArrowRedCalcados ? colors.branco : colors.cinza,
                }}
              >
                <CaretLeft size={24} weight="bold" />
              </SetaEsquerda>
              <SetaDireita
                onClick={() => {
                  swiperRefCalcados.current.slideNext();
                  setIsLeftArrowRedCalcados(true);
                }}
                style={{
                  backgroundColor: isRightArrowRedCalcados
                    ? colors.primaria
                    : colors.cinzaSuperClaro,
                  color: isRightArrowRedCalcados ? colors.branco : colors.cinza,
                }}
              >
                <CaretRight size={24} weight="bold" />
              </SetaDireita>
            </ContainerSetas>
          </ContainerPrimeiraLinha>
          <Swiper
            spaceBetween={20}
            style={{
              width: firstMediaQuery ? "89%" : "97%",
              paddingTop: 10,
              paddingBottom: 15,
              paddingInline: 20,
            }}
            breakpoints={{
              320: { slidesPerView: 1 },
              500: { slidesPerView: 2 },
              800: { slidesPerView: 3 },
              1080: { slidesPerView: 4 },
              1350: { slidesPerView: 5 },
              1760: { slidesPerView: 6 },
              2400: { slidesPerView: 7 },
            }}
            onSwiper={(swiper) => {
              swiperRefCalcados.current = swiper;
            }}
            modules={[Autoplay]}
            autoplay={{ delay: 6000, disableOnInteraction: false }}
          >
            {produtosDisponiveis.map(
              (produto, index) =>
                produto.categoria_produto === "Calçados" && (
                  <SwiperSlide key={index}>
                    <Produto
                      idProduto={produto.id_produto}
                      image={produto.variacoes[0].imagens_variacao_produto[0]}
                      name={produto.nome_produto}
                      size={formatarMedidas(
                        produto.variacoes.map(
                          (variacao) => variacao.medida_variacao_produto
                        )
                      )}
                      price={formatarMoeda(produto.preco_venda_produto)}
                    />
                  </SwiperSlide>
                )
            )}
          </Swiper>
        </ContainerBlocoProdutos>
        <ContainerBlocoProdutos>
          <ContainerPrimeiraLinha>
            <TituloSubtituloSecoes title="Acessórios" subTitle="PROMOÇÕES" />
            <ContainerSetas>
              <SetaEsquerda
                onClick={() => {
                  swiperRefAcessorios.current.slidePrev();
                  setIsRightArrowRedAcessorios(true);
                }}
                style={{
                  backgroundColor: isLeftArrowRedAcessorios
                    ? colors.primaria
                    : colors.cinzaSuperClaro,
                  color: isLeftArrowRedAcessorios
                    ? colors.branco
                    : colors.cinza,
                }}
              >
                <CaretLeft size={24} weight="bold" />
              </SetaEsquerda>
              <SetaDireita
                onClick={() => {
                  swiperRefAcessorios.current.slideNext();
                  setIsLeftArrowRedAcessorios(true);
                }}
                style={{
                  backgroundColor: isRightArrowRedAcessorios
                    ? colors.primaria
                    : colors.cinzaSuperClaro,
                  color: isRightArrowRedAcessorios
                    ? colors.branco
                    : colors.cinza,
                }}
              >
                <CaretRight size={24} weight="bold" />
              </SetaDireita>
            </ContainerSetas>
          </ContainerPrimeiraLinha>
          <Swiper
            spaceBetween={20}
            style={{
              width: firstMediaQuery ? "89%" : "97%",
              paddingTop: 10,
              paddingBottom: 15,
              paddingInline: 20,
            }}
            breakpoints={{
              320: { slidesPerView: 1 },
              500: { slidesPerView: 2 },
              800: { slidesPerView: 3 },
              1080: { slidesPerView: 4 },
              1350: { slidesPerView: 5 },
              1760: { slidesPerView: 6 },
              2400: { slidesPerView: 7 },
            }}
            onSwiper={(swiper) => {
              swiperRefAcessorios.current = swiper;
            }}
            modules={[Autoplay]}
            autoplay={{ delay: 6000, disableOnInteraction: false }}
          >
            {produtosDisponiveis.map(
              (produto, index) =>
                produto.categoria_produto === "Acessórios" && (
                  <SwiperSlide key={index}>
                    <Produto
                      idProduto={produto.id_produto}
                      image={produto.variacoes[0].imagens_variacao_produto[0]}
                      name={produto.nome_produto}
                      size={formatarMedidas(
                        produto.variacoes.map(
                          (variacao) => variacao.medida_variacao_produto
                        )
                      )}
                      price={formatarMoeda(produto.preco_venda_produto)}
                    />
                  </SwiperSlide>
                )
            )}
          </Swiper>
        </ContainerBlocoProdutos>
      </ContainerPrincipal>
      <Footer />
    </>
  );
}
