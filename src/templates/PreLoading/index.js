import React from "react";
import { PageContainer, LogoContainer, LoadingContainer } from "./styled";
import logo from "../../assets/img/logoMatheusCalcados.png";
import Loading from "../../assets/animations/loading2-MC.json";
import Lottie from "lottie-react";

function Preloading() {
  return (
    <PageContainer>
      <LogoContainer>
        <img src={logo} alt="Matheus Calçados" />
      </LogoContainer>
      <LoadingContainer>
        <Lottie
          animationData={Loading}
          autoPlay={true}
          loop={true}
          width="100%"
          height="100%"
        />
      </LoadingContainer>
    </PageContainer>
  );
}

export default Preloading;
