import React from "react";
import fundoMasculino from "../../assets/img/Masculino.png";
import LayoutPaginaProdutos from "./LayoutPaginasProdutos";

export default function Masculino() {
  const categorias = [
    "Bolsas",
    "Camisas",
    "Calças",
    "Chinelos",
    "Meias",
    "Mochilas",
    "Shorts",
    "Sandálias",
    "Tênis",
  ];

  const tamanhos = [
    "Tamanho único",
    "PP",
    "P",
    "M",
    "G",
    "GG",
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
      imagemSecao={fundoMasculino}
      tituloSecao="Masculino"
    />
  );
}
