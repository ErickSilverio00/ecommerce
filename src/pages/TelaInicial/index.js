import { useMediaQuery } from "@mui/material";
import { CaretLeft, CaretRight } from "@phosphor-icons/react";
import React, { useEffect, useRef, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import categoriaAcessorios from "../../assets/img/3dAcessorios.png";
import categoriaFeminino from "../../assets/img/3dFeminino.png";
import categoriaMasculino from "../../assets/img/3dMasculino.png";
import categoriaTenis from "../../assets/img/3dTenis.png";
import fundo3 from "../../assets/img/black70.png";
import fundo from "../../assets/img/FundoPrincipal.png";
import fundo4 from "../../assets/img/menswear.png";
import fundo2 from "../../assets/img/natal70.png";
import fundo5 from "../../assets/img/sapato-feminino.png";
import ApresentacaoCategoria from "../../components/ApresentacaoCategoria";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Produto from "../../components/Produto";
import TituloSubtituloSecoes from "../../components/TituloSubtituloSecoes";
import { fetchProdutos } from "../../services/Produtos";
import { colors } from "../../styles/colors";
import { formatarMedidas, formatarMoeda } from "../../utils/funcoes";
import {
  ContainerApresentacoesCategorias,
  ContainerBlocoProdutos,
  ContainerImagem,
  ContainerPrimeiraLinha,
  ContainerPrincipal,
  ContainerSetas,
  ContainerSlides,
  SetaDireita,
  SetaEsquerda,
} from "./styles";

export default function TelaInicial() {
  const firstMediaQuery = useMediaQuery("(max-width: 672px)");
  const [produtosDisponiveis, setProdutosDisponiveis] = useState([]);
  const [isLeftArrowRed, setIsLeftArrowRed] = useState(false);
  const [isRightArrowRed, setIsRightArrowRed] = useState(true);
  const swiperRef = useRef(null);
  const swiperRefImg = useRef(null);

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
    if (swiperRef.current) {
      swiperRef.current.on("reachEnd", () => {
        setIsRightArrowRed(false);
        setIsLeftArrowRed(true);
      });
      swiperRef.current.on("reachBeginning", () => {
        setIsLeftArrowRed(false);
        setIsRightArrowRed(true);
      });
    }
  }, []);

  return (
    <>
      <Header />
      <ContainerPrincipal>
        <ContainerSlides>
          <Swiper
            modules={[Navigation, Autoplay]}
            onSwiper={(swiper) => {
              swiperRefImg.current = swiper;
            }}
            navigation
            autoplay={{
              delay: 6000,
              disableOnInteraction: false,
            }}
          >
            <SwiperSlide>
              <ContainerImagem src={fundo} />
            </SwiperSlide>
            <SwiperSlide>
              <ContainerImagem src={fundo2} />
            </SwiperSlide>
            <SwiperSlide>
              <ContainerImagem src={fundo3} />
            </SwiperSlide>
            <SwiperSlide>
              <ContainerImagem src={fundo4} />
            </SwiperSlide>
            <SwiperSlide>
              <ContainerImagem src={fundo5} />
            </SwiperSlide>
          </Swiper>
        </ContainerSlides>
        <ContainerApresentacoesCategorias>
          <ApresentacaoCategoria
            name="Calçados"
            description="+ de 10 produtos"
            image={categoriaTenis}
            link="/calcados"
          />
          <ApresentacaoCategoria
            name="Feminino"
            description="+ de 15 produtos"
            image={categoriaFeminino}
            link="/feminino"
          />
          <ApresentacaoCategoria
            name="Masculino"
            description="+ de 14 produtos"
            image={categoriaMasculino}
            link="masculino"
          />
          <ApresentacaoCategoria
            name="Acessórios"
            description="+ de 8 produtos"
            image={categoriaAcessorios}
            link="/acessorios"
          />
        </ContainerApresentacoesCategorias>
        <ContainerBlocoProdutos>
          <ContainerPrimeiraLinha>
            <TituloSubtituloSecoes title="Lançamentos" subTitle="PROMOÇÕES" />
            <ContainerSetas>
              <SetaEsquerda
                onClick={() => {
                  swiperRef.current.slidePrev();
                  setIsRightArrowRed(true);
                }}
                style={{
                  backgroundColor: isLeftArrowRed
                    ? colors.primaria
                    : colors.cinzaSuperClaro,
                  color: isLeftArrowRed ? colors.branco : colors.cinza,
                }}
              >
                <CaretLeft size={24} weight="bold" />
              </SetaEsquerda>
              <SetaDireita
                onClick={() => {
                  swiperRef.current.slideNext();
                  setIsLeftArrowRed(true);
                }}
                style={{
                  backgroundColor: isRightArrowRed
                    ? colors.primaria
                    : colors.cinzaSuperClaro,
                  color: isRightArrowRed ? colors.branco : colors.cinza,
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
              swiperRef.current = swiper;
            }}
            modules={[Autoplay]}
            autoplay={{
              delay: 6000,
              disableOnInteraction: false,
            }}
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
      </ContainerPrincipal>
      <Footer />
    </>
  );
}
