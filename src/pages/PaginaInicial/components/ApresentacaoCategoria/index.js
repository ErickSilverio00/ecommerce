import {
  ContainerBallImg,
  ContainerImgProduct,
  ContainerInfosProducts,
  ContainerProduct,
  TextDescription,
  TextName,
} from "./styles";

export default function ApresentacaoCategoria({
  image,
  name,
  description,
  link,
}) {
  return (
    <ContainerProduct href={link}>
      <ContainerBallImg>
        <ContainerImgProduct src={image} alt={name} />
      </ContainerBallImg>
      <ContainerInfosProducts>
        <TextName>{name}</TextName>
        <TextDescription>{description}</TextDescription>
      </ContainerInfosProducts>
    </ContainerProduct>
  );
}
