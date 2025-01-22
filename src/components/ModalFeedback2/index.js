import React from "react";
import Backdrop from "@mui/material/Backdrop";
import {
  ContainerModal,
  ModalTitulo,
  ModalDescricao,
  ContainerBotoes,
} from "./styles";
import Botao from "../Botao";
import { colors } from "../../styles/colors";
import { fonte } from "../../styles/global";

export default function ModalFeedback2({
  open,
  titulo,
  descricao,
  textoBotao1,
  aoClicarNoPrimeiroBotao,
  textoBotao2,
  aoClicarNoBotao2,
  corTextoBotao1,
  corTextoBotao2,
  corDeFundoBotao1,
  corDeFundoBotao2,
  corDeFundoHoverBotao1,
  corDeFundoHoverBotao2,
}) {
  return (
    <Backdrop
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={open}
    >
      <ContainerModal>
        <ModalTitulo>{titulo}</ModalTitulo>
        <ModalDescricao>{descricao}</ModalDescricao>
        <ContainerBotoes>
          <Botao
            aoClicar={aoClicarNoPrimeiroBotao}
            texto={textoBotao1}
            borderRadius={2}
            fontFamily={fonte}
            fontSize={18}
            height={48}
            width="48%"
            mostrarBoxShadow={true}
            tamanho="large"
            variante="contained"
            corDeFundo={corDeFundoBotao1}
            corDeFundoHover={corDeFundoHoverBotao1}
            corTexto={corTextoBotao1}
          />
          <Botao
            aoClicar={aoClicarNoBotao2}
            texto={textoBotao2}
            borderRadius={2}
            fontFamily={fonte}
            fontSize={18}
            height={48}
            width="48%"
            mostrarBoxShadow={true}
            tamanho="large"
            variante="contained"
            corDeFundo={corDeFundoBotao2}
            corDeFundoHover={corDeFundoHoverBotao2}
            corTexto={corTextoBotao2}
          />
        </ContainerBotoes>
      </ContainerModal>
    </Backdrop>
  );
}
