import { Button } from "@mui/material";
import React from "react";
import { colors } from "../../styles/colors";

function Botao({
  variante,
  tamanho,
  width,
  height,
  minWidth,
  corDeFundo,
  corDeFundoHover,
  fontFamily,
  fontSize,
  corTexto,
  borderRadius,
  paddingBlock,
  aoClicar,
  tipo,
  mostrarBoxShadow,
  texto,
  flexGrow,
  flexBasis,
  fontWeight,
  Icone,
  disabled = false,
}) {
  return (
    <Button
      variant={variante}
      size={tamanho}
      fullWidth
      startIcon={
        Icone ? <Icone size={20} weight="bold" color={colors.branco} /> : null
      }
      sx={{
        width: width,
        height: height,
        minWidth: minWidth,
        backgroundColor: corDeFundo,
        "&:hover": { backgroundColor: corDeFundoHover },
        fontFamily: fontFamily,
        fontSize: fontSize,
        fontWeight: fontWeight,
        color: corTexto,
        borderRadius: borderRadius,
        paddingBlock: paddingBlock,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition:
          "background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
        boxShadow: mostrarBoxShadow
          ? "0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)"
          : "none",
        flexGrow: flexGrow,
        flexBasis: flexBasis,
      }}
      onClick={aoClicar}
      type={tipo}
      disabled={disabled}
    >
      {texto}
    </Button>
  );
}

export default Botao;
