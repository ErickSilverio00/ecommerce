import { CreditCard, ShoppingCart, XCircle } from "@phosphor-icons/react";
import { useNavigate } from "react-router-dom";
import Botao from "../../../components/Botao";
import { colors } from "../../../styles/colors";
import { fonte } from "../../../styles/global";
import {
  ContainerItemPagamento,
  ContainerNavegacaoPagamento,
  LinhaPagamento,
  TextoItemPagamento,
} from "../styles";
import {
  ContainerFalhouPedido,
  ContainerMain,
  ContainerTituloPedidoFalhou,
  DescricaoPedidoFalhou2,
  DescricaoPedidofalhou1,
  TituloPedidoFalhou,
} from "./styles";

export default function PagamentoFalhou() {
  const navigate = useNavigate();

  return (
    <ContainerMain>
      <ContainerFalhouPedido>
        <ContainerNavegacaoPagamento style={{ marginBottom: 40 }}>
          <ContainerItemPagamento>
            <ShoppingCart size={22} weight="fill" color={colors.primaria} />
            <TextoItemPagamento>Carrinho</TextoItemPagamento>
          </ContainerItemPagamento>
          <ContainerItemPagamento>
            <LinhaPagamento
              style={{
                backgroundColor: colors.primaria,
              }}
            />
            <CreditCard size={22} weight="fill" color={colors.primaria} />
            <TextoItemPagamento
              style={{
                color: colors.primaria,
              }}
            >
              Pagamento
            </TextoItemPagamento>
          </ContainerItemPagamento>
          <ContainerItemPagamento>
            <LinhaPagamento style={{ backgroundColor: colors.primaria }} />
            <XCircle size={22} weight="fill" color={colors.primaria} />
            <TextoItemPagamento style={{ color: colors.primaria }}>
              Falhou
            </TextoItemPagamento>
          </ContainerItemPagamento>
        </ContainerNavegacaoPagamento>
        <ContainerTituloPedidoFalhou>
          <XCircle size={32} weight="bold" color={colors.vermelho} />
          <TituloPedidoFalhou>Seu pedido falhou!</TituloPedidoFalhou>
        </ContainerTituloPedidoFalhou>
        <DescricaoPedidofalhou1>
          O pagamento não foi concluído corretamente!
        </DescricaoPedidofalhou1>
        <DescricaoPedidoFalhou2>
          Tente novamente, faça o seu pedido conosco!
        </DescricaoPedidoFalhou2>
        <Botao
          corDeFundo={colors.primaria}
          corDeFundoHover={colors.primariaClara}
          mostrarBoxShadow={true}
          corTexto={colors.branco}
          fontFamily={fonte}
          fontSize={14}
          fontWeight={600}
          width="max-content"
          height={40}
          tamanho="small"
          variante="contained"
          texto="TENTAR NOVAMENTE"
          tipo="button"
          Icone={ShoppingCart}
          aoClicar={() => navigate("/carrinho")}
        />
      </ContainerFalhouPedido>
    </ContainerMain>
  );
}
