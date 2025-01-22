import React from "react";
import { useParams } from "react-router-dom";
import LayoutPaginaProdutos from "../../templates/LayoutPaginaProdutos";

export default function BuscaProdutos() {
  const { busca } = useParams();

  const categorias = [
    "Bermudas",
    "Bolas",
    "Bolsas",
    "Bonés",
    "Camisas",
    "Calças",
    "Chinelos",
    "Cintos",
    "Meias",
    "Mochilas",
    "Sandálias",
    "Sapatos",
    "Shorts",
    "Tênis",
    "Vestidos",
  ];

  const tamanhos = [
    "Tamanho único",
    "PP",
    "P",
    "M",
    "G",
    "GG",
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
      temImagemFundo={false}
      tituloSecao={`Resultado de busca para: "${busca.toUpperCase()}"`}
    />
  );
}
