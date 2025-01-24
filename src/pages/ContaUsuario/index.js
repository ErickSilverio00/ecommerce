import React, { useState } from "react";
import Header from "../../components/Header";
import Inicio from "./Inicio";
import MeusDados from "./MeusDados";
import MeusPedidos from "./MeusPedidos";
import { ContainerConteudo, ContainerMain } from "./styles";

export default function ContaUsuario() {
  const [inicioAtivo, setInicioAtivo] = useState(true);
  const [dadosAtivo, setDadosAtivo] = useState(false);
  const [pedidosAtivo, setPedidosAtivo] = useState(false);

  const aoApertarMeusDadosNoInicio = () => {
    setDadosAtivo(true);
    setInicioAtivo(false);
    setPedidosAtivo(false);
  };

  const aoApertarMeusPedidosNoInicio = () => {
    setDadosAtivo(false);
    setInicioAtivo(false);
    setPedidosAtivo(true);
  };

  const aoApertarInicioNosMeusDados = () => {
    setDadosAtivo(false);
    setPedidosAtivo(false);
    setInicioAtivo(true);
  };

  const aoApertarMeusPedidosNosMeusDados = () => {
    setDadosAtivo(false);
    setInicioAtivo(false);
    setPedidosAtivo(true);
  };

  const aoApertarInicioNosMeusPedidos = () => {
    setDadosAtivo(false);
    setPedidosAtivo(false);
    setInicioAtivo(true);
  };

  const aoApertarMeusDadosNosMeusPedidos = () => {
    setPedidosAtivo(false);
    setInicioAtivo(false);
    setDadosAtivo(true);
  };

  return (
    <>
      <Header />
      <ContainerMain>
        <ContainerConteudo>
          {inicioAtivo && (
            <Inicio
              aoApertarMeusDadosNoInicio={aoApertarMeusDadosNoInicio}
              aoApertarMeusPedidosNoInicio={aoApertarMeusPedidosNoInicio}
            />
          )}
          {dadosAtivo && (
            <MeusDados
              aoApertarInicioNosMeusDados={aoApertarInicioNosMeusDados}
              aoApertarMeusPedidosNosMeusDados={
                aoApertarMeusPedidosNosMeusDados
              }
            />
          )}
          {pedidosAtivo && (
            <MeusPedidos
              aoApertarInicioNosMeusPedidos={aoApertarInicioNosMeusPedidos}
              aoApertarMeusDadosNosMeusPedidos={
                aoApertarMeusDadosNosMeusPedidos
              }
            />
          )}
        </ContainerConteudo>
      </ContainerMain>
    </>
  );
}
