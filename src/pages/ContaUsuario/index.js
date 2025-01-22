import React, { useState } from "react";
import Header from "../../components/Header";
import ItensDashboard from "../../components/ItensDashboard";
import { ContainerConteudo, ContainerMain } from "./styles";
import Inicio from "./Inicio";
import MeusDados from "./MeusDados";
import MeusPedidos from "./MeusPedidos";

export default function ContaUsuario() {
  const [inicioAtivo, setInicioAtivo] = useState(true);
  const [dadosAtivo, setDadosAtivo] = useState(false);
  const [pedidosAtivo, setPedidosAtivo] = useState(false);

  const aoMudarItemAtivo = (index) => {
    if (index === 0) {
      setInicioAtivo(true);
      setDadosAtivo(false);
      setPedidosAtivo(false);
    } else if (index === 1) {
      setInicioAtivo(false);
      setDadosAtivo(true);
      setPedidosAtivo(false);
    } else if (index === 2) {
      setInicioAtivo(false);
      setDadosAtivo(false);
      setPedidosAtivo(true);
    }
  };

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
        <ItensDashboard aoMudarItemAtivo={aoMudarItemAtivo} />
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
