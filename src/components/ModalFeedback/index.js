import Backdrop from "@mui/material/Backdrop";
import React from "react";
import { fonte } from "../../styles/global";
import Botao from "../Botao";
import {
  ContainerBotoes,
  ContainerModal,
  ModalDescricao,
  ModalTitulo,
} from "./styles";

export default function ModalFeedback({
  open,
  titulo,
  descricao,
  textoBotao1,
  aoClicarNoPrimeiroBotao,
  corTextoBotao1,
  corDeFundoBotao1,
  corDeFundoHoverBotao1,
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
            width="25%"
            mostrarBoxShadow={true}
            tamanho="large"
            variante="contained"
            corDeFundo={corDeFundoBotao1}
            corDeFundoHover={corDeFundoHoverBotao1}
            corTexto={corTextoBotao1}
          />
        </ContainerBotoes>
      </ContainerModal>
    </Backdrop>
  );
}
