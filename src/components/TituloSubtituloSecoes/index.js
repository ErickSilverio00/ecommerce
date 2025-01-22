import { ContainerTitleSubtitle, Titulo, Subtitulo } from "./styles";

export default function TituloSubtituloSecoes({ title, subTitle }) {
  return (
    <ContainerTitleSubtitle>
      <Subtitulo>{subTitle}</Subtitulo>
      <Titulo>{title}</Titulo>
    </ContainerTitleSubtitle>
  );
}
