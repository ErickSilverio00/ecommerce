import styled from "styled-components";
import { colors } from "../../styles/colors";

export const ContainerImageMagnifier = styled.div`
  display: flex;
  position: relative;
`;

export const ContainerImgMagnifier = styled.img`
  width: auto;
  height: 55dvh;

  @media (max-width: 500px) {
    height: 29dvh;
  }
`;

export const ContainerMagnifierImg = styled.div`
  width: 200px;
  height: 200px;
  border: 2px solid ${colors.branco};

  @media (max-width: 500px) {
    display: none;
  }
`;
