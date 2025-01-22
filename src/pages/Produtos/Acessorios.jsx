import React from "react";
import fundoAcessorios from "../../assets/img/Acessorios.png";
import LayoutPaginaProdutos from "../../templates/LayoutPaginaProdutos";

export default function Acessorios() {
  const categorias = ["Bolas", "Bolsas", "Bonés", "Cintos", "Mochilas"];

  const tamanhos = ["PP", "P", "M", "G", "GG"];

  return (
    <LayoutPaginaProdutos
      categorias={categorias}
      tamanhos={tamanhos}
      imagemSecao={fundoAcessorios}
      tituloSecao="Acessórios"
    />
  );
}
