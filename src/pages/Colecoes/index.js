import { CaretLeft, CaretRight } from "@phosphor-icons/react";
import React from "react";
import { Link } from "react-router-dom";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import fundoFeminino from "../../assets/img/fundo-Feminino.png";
import fundoMasculino from "../../assets/img/fundo-Masculino.png";
import Produto from "../../components/Produto";
import useColecoes from "../../hooks/Colecoes/useColecoes";
import { colors } from "../../styles/colors";
import { ContainerTitleSubtitle, Subtitulo, Titulo } from "../../styles/global";
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

export default function Colecoes() {
  const { arrowStates, swiperRefs, sections, produtosPorSecao } = useColecoes();
  return (
    <ContainerPrincipal>
      <ContainerSlides>
        <Link to="/masculino" style={{ width: "100%" }}>
          <ContainerImagem src={fundoMasculino} />
        </Link>
        <Link to="/feminino" style={{ width: "100%" }}>
          <ContainerImagem src={fundoFeminino} />
        </Link>
      </ContainerSlides>
      {sections.map(({ key, title, subTitle }) => (
        <ContainerBlocoProdutos key={key}>
          <ContainerPrimeiraLinha>
            <ContainerTitleSubtitle>
              <Subtitulo>{subTitle}</Subtitulo>
              <Titulo>{title}</Titulo>
            </ContainerTitleSubtitle>
            <ContainerSetas>
              <SetaEsquerda
                onClick={() => swiperRefs.current[key]?.slidePrev()}
                style={{
                  backgroundColor: arrowStates[key]?.left
                    ? colors.primaria
                    : colors.cinzaSuperClaro,
                  color: arrowStates[key]?.left ? colors.branco : colors.cinza,
                }}
              >
                <CaretLeft size={24} weight="bold" />
              </SetaEsquerda>
              <SetaDireita
                onClick={() => swiperRefs.current[key]?.slideNext()}
                style={{
                  backgroundColor: arrowStates[key]?.right
                    ? colors.primaria
                    : colors.cinzaSuperClaro,
                  color: arrowStates[key]?.right ? colors.branco : colors.cinza,
                }}
              >
                <CaretRight size={24} weight="bold" />
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
            onSwiper={(swiper) => (swiperRefs.current[key] = swiper)}
            modules={[Autoplay]}
            autoplay={{ delay: 6000, disableOnInteraction: false }}
          >
            {produtosPorSecao[key]?.map((produto, index) => (
              <SwiperSlide key={index}>
                <Produto produto={produto} />
              </SwiperSlide>
            ))}
          </Swiper>
        </ContainerBlocoProdutos>
      ))}
    </ContainerPrincipal>
  );
}
