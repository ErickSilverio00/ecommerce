import React from "react";
import fundoRoupas from "../../assets/img/Roupas.png";
import LayoutPaginaProdutos from "../../templates/LayoutPaginaProdutos";

export default function Roupas() {
  const categorias = ["Bermudas", "Camisas", "Calças", "Shorts", "Vestidos"];

  const tamanhos = ["PP", "P", "M", "G", "GG"];

  return (
    <LayoutPaginaProdutos
      categorias={categorias}
      tamanhos={tamanhos}
      imagemSecao={fundoRoupas}
      tituloSecao="Roupas"
    />
  );
}
