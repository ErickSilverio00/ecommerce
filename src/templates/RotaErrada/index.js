import { Link } from "react-router-dom";
import imgRotaErrada from "../../assets/img/erro404.svg";
import Header from "../../components/Header";
import {
  BotaoPageNotFound,
  ContainerPageNotFound,
  ContainerTela,
  DescricaoPageNotFound,
  ImgRotaErrada,
  TituloPageNotFound,
} from "./styles";

export default function RotaErrada() {
  return (
    <ContainerTela>
      <Header />
      <ContainerPageNotFound>
        <ImgRotaErrada src={imgRotaErrada} />
        <TituloPageNotFound>Página não encontrada!</TituloPageNotFound>
        <DescricaoPageNotFound>
          Lamentamos... A página que você solicitou não pôde ser encontrada. Por
          favor, volte para a página inicial.
        </DescricaoPageNotFound>

        <BotaoPageNotFound>
          <Link to="/" className="link">
            Voltar à Pagina Inicial
          </Link>
        </BotaoPageNotFound>
      </ContainerPageNotFound>
    </ContainerTela>
  );
}
