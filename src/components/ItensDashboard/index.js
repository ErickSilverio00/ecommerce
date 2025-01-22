import React, { useState } from "react";
import IconeDashboard from "@mui/icons-material/HomeOutlined";
import IconeUsuario from "@mui/icons-material/PersonOutlineOutlined";
import IconePedidos from "@mui/icons-material/ShoppingCartOutlined";
import { IconButton, useMediaQuery } from "@mui/material";
import {
  ContainerBotao,
  ContainerListaNavegacoes,
  ContainerPrincipal,
  ItemListaDeItens,
} from "./styles";
import { colors } from "../../styles/colors";

const listaDeItens = [
  {
    Icone: IconeDashboard,
    texto: "Início",
  },
  {
    Icone: IconeUsuario,
    texto: "Meus dados",
  },
  {
    Icone: IconePedidos,
    texto: "Meus pedidos",
  },
];

export default function ItensDashboard({ aoMudarItemAtivo }) {
  const [isMouseOver, setIsMouseOver] = useState(false);
  const isScreenSmall = useMediaQuery("(max-width: 772px)");

  const handleMouseEnter = () => {
    setIsMouseOver(true);
  };

  const handleMouseLeave = () => {
    setIsMouseOver(false);
  };

  return (
    <ContainerPrincipal
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        width: isMouseOver ? 220 : 63,
        display: isScreenSmall && "none",
      }}
    >
      <ContainerListaNavegacoes>
        {listaDeItens.map((item, index) => (
          <ItemListaDeItens key={index}>
            <ContainerBotao onClick={() => aoMudarItemAtivo(index)}>
              <IconButton
                size="large"
                style={{
                  width: 63,
                  color: colors.branco,
                  borderRadius: 0,
                  backgroundColor: "transparent",
                }}
              >
                <item.Icone fontSize="inherit" />
              </IconButton>
              {isMouseOver ? item.texto : null}
            </ContainerBotao>
          </ItemListaDeItens>
        ))}
      </ContainerListaNavegacoes>
    </ContainerPrincipal>
  );
}
