import { CaretLeft, CaretRight } from "@phosphor-icons/react";
import React from "react";
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
import Produto from "../../components/Produto";
import usePaginaInicial from "../../hooks/PaginaInicial/usePaginaInicial";
import { colors } from "../../styles/colors";
import { ContainerTitleSubtitle, Subtitulo, Titulo } from "../../styles/global";
import ApresentacaoCategoria from "./components/ApresentacaoCategoria";
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

export default function PaginaInicial() {
  const {
    produtosDisponiveis,
    isLeftArrowRed,
    setIsLeftArrowRed,
    isRightArrowRed,
    setIsRightArrowRed,
    swiperRef,
    swiperRefImg,
    ultimosProdutos,
  } = usePaginaInicial();

  return (
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
          description={`+ de ${
            produtosDisponiveis.filter(
              (produto) => produto.categoria_produto === "Calçados"
            ).length - 1
          } produtos`}
          image={categoriaTenis}
          link="/calcados"
        />
        <ApresentacaoCategoria
          name="Feminino"
          description={`+ de ${
            produtosDisponiveis.filter(
              (produto) =>
                produto.genero_produto === "Feminino" ||
                produto.genero_produto === "Unissex"
            ).length - 1
          } produtos`}
          image={categoriaFeminino}
          link="/feminino"
        />
        <ApresentacaoCategoria
          name="Masculino"
          description={`+ de ${
            produtosDisponiveis.filter(
              (produto) =>
                produto.genero_produto === "Masculino" ||
                produto.genero_produto === "Unissex"
            ).length - 1
          } produtos`}
          image={categoriaMasculino}
          link="masculino"
        />
        <ApresentacaoCategoria
          name="Acessórios"
          description={`+ de ${
            produtosDisponiveis.filter(
              (produto) => produto.categoria_produto === "Acessórios"
            ).length - 1
          } produtos`}
          image={categoriaAcessorios}
          link="/acessorios"
        />
      </ContainerApresentacoesCategorias>
      <ContainerBlocoProdutos>
        <ContainerPrimeiraLinha>
          <ContainerTitleSubtitle>
            <Subtitulo>Lançamentos</Subtitulo>
            <Titulo>PROMOÇÕES</Titulo>
          </ContainerTitleSubtitle>
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
              <CaretLeft size={20} weight="bold" />
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
              <CaretRight size={20} weight="bold" />
            </SetaDireita>
          </ContainerSetas>
        </ContainerPrimeiraLinha>
        <Swiper
          spaceBetween={20}
          style={{
            width: "100%",
            paddingTop: 10,
            paddingBottom: 15,
            paddingLeft: 1,
          }}
          breakpoints={{
            320: { slidesPerView: 1 },
            500: { slidesPerView: 2 },
            800: { slidesPerView: 3 },
            1080: { slidesPerView: 4 },
            1350: { slidesPerView: 5 },
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
              <Produto produto={produto} />
            </SwiperSlide>
          ))}
        </Swiper>
      </ContainerBlocoProdutos>
    </ContainerPrincipal>
  );
}
