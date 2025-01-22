import { EnvelopeSimple } from "@phosphor-icons/react";
import { Form } from "@unform/web";
import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UseAnimations from "react-useanimations";
import facebook from "react-useanimations/lib/facebook";
import instagram from "react-useanimations/lib/instagram";
import logoMC from "../../assets/img/logoMatheusCalcados.png";
import { colors } from "../../styles/colors";
import CampoTexto from "../CampoTexto";
import {
  ContainerFooter,
  ContainerForm,
  ContainerFormButton,
  ContainerIcon,
  ContainerIcons,
  ContainerInfos,
  DefaultText,
  DefaultText2,
  DefaultTitle,
  FirstColumn,
  FirstLine,
  FourthColumn,
  LastLine,
  LogoMC,
  SecondColumn,
  TextLastLine,
  ThirdColumn,
} from "./styles";

export default function Footer() {
  const formEmailRef = useRef(null);
  const navigate = useNavigate();

  const enviarEmail = async (event) => {
    event.preventDefault();
    const email = formEmailRef?.current?.getFieldValue("email");

    try {
      if (!email) {
        formEmailRef.current.setFieldError("email", "Campo obrigatório");
        return;
      }
      toast.success("E-mail cadastrado com sucesso");
      formEmailRef.current.reset();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ContainerFooter>
      <FirstLine>
        <FirstColumn>
          <LogoMC src={logoMC} alt="Logo Matheus Calçados" />
          <DefaultText2>Entre em contato conosco</DefaultText2>
          <ContainerIcons>
            <ContainerIcon href="#">
              <UseAnimations
                animation={facebook}
                size={32}
                strokeColor={colors.preto2}
              />
            </ContainerIcon>
            <ContainerIcon href="#">
              <UseAnimations
                animation={instagram}
                size={32}
                strokeColor={colors.preto2}
              />
            </ContainerIcon>
          </ContainerIcons>
        </FirstColumn>
        <SecondColumn>
          <DefaultTitle>Precisa de ajuda?</DefaultTitle>
          <ContainerInfos>
            <DefaultText href="#">Entre em contato conosco</DefaultText>
            <DefaultText onClick={() => navigate("/minha-conta")}>
              Meus pedidos
            </DefaultText>
            <DefaultText onClick={() => navigate("/minha-conta")}>
              Minha conta
            </DefaultText>
          </ContainerInfos>
        </SecondColumn>
        <ThirdColumn>
          <DefaultTitle>Atendimento</DefaultTitle>
          <ContainerInfos>
            <DefaultText href="#">(62) 98023-0245</DefaultText>
            <DefaultText href="#">emailfake@gmail.com</DefaultText>
            <DefaultText href="#">
              De seg. à sábado de 09h às 18:40h
            </DefaultText>
          </ContainerInfos>
        </ThirdColumn>
        <FourthColumn>
          <DefaultTitle>Cadastre-se</DefaultTitle>
          <ContainerInfos>
            <DefaultText2>Receba novidades e descontos exclusivos</DefaultText2>
            <Form ref={formEmailRef}>
              <ContainerForm>
                <CampoTexto name="email" label="Digite seu e-mail" />
                <ContainerFormButton onClick={enviarEmail}>
                  <EnvelopeSimple
                    size={24}
                    weight="bold"
                    color={colors.branco}
                  />
                </ContainerFormButton>
              </ContainerForm>
            </Form>
          </ContainerInfos>
        </FourthColumn>
      </FirstLine>
      <LastLine>
        <TextLastLine>© Desenvolvido por Erick Silvério</TextLastLine>
      </LastLine>
    </ContainerFooter>
  );
}
