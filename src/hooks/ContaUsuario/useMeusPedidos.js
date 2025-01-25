/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { buscarComprasCliente } from "../../services/PagamentoEcommerce";
import useAuthStore from "../../stores/useAuthStore";

export default function useMeusPedidos() {
  const { user } = useAuthStore();
  const [listaCompras, setListaCompras] = useState([]);

  const buscarCompras = async () => {
    try {
      const response = await buscarComprasCliente(user.idCliente);
      setListaCompras(response.informacoesVendas);
    } catch (error) {
      toast.error(error);
    }
  };

  const aoClicarEmRastrear = () => {
    const urlCorreios = "https://www.correios.com.br/";

    const numeroRastreio = listaCompras[0].venda.numero_rastreio;

    navigator.clipboard.writeText(numeroRastreio);

    toast.success(
      `Número de rastreamento copiado com sucesso: ${numeroRastreio}`
    );

    setTimeout(() => {
      window.open(urlCorreios, "_blank", "noopener");
    }, 1000);
  };

  useEffect(() => {
    buscarCompras();
  }, []);

  return {
    user,
    listaCompras,
    setListaCompras,
    buscarCompras,
    aoClicarEmRastrear,
  };
}
