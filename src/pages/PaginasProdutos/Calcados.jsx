import React from "react";
import fundoCalcados from "../../assets/img/Calcados.png";
import LayoutPaginaProdutos from "./LayoutPaginasProdutos";

export default function Calcados() {
  const categorias = ["Chinelos", "Sandálias", "Sapatos", "Tênis"];

  const tamanhos = [
    "33",
    "34",
    "35",
    "36",
    "37",
    "38",
    "39",
    "40",
    "41",
    "42",
    "43",
    "44",
    "45",
  ];

  return (
    <LayoutPaginaProdutos
      categorias={categorias}
      tamanhos={tamanhos}
      imagemSecao={fundoCalcados}
      tituloSecao="Calçados"
    />
  );
}
