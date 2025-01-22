import styled, { createGlobalStyle } from "styled-components";
import { device } from "./mediaQuery";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    font: 14px 'Montserrat', sans-serif;
    background-color: #fff;
    -webkit-font-smoothing: antialiased !important;
  }
`;

export const fonte = "Montserrat, sans-serif";

export const BoxItems = styled.div.withConfig({
  shouldForwardProp: (prop) =>
    ![
      "fDirection",
      "flex",
      "wd",
      "flwrap",
      "jContent",
      "algItems",
      "algSelf",
      "jItems",
      "pdtop",
      "pdbottom",
      "pdleft",
      "pdright",
      "pd",
      "maxWd",
      "mg",
      "gap",
      "useBoxShadow",
    ].includes(prop),
})`
  display: flex;
  flex-direction: ${(props) => (props.fDirection ? "column" : "row")};
  width: ${(props) => (props.wd ? props.wd : "100")}%;
  flex: ${(props) => props.flex ?? "unset"};
  flex-wrap: ${(props) => (props.flwrap ? "wrap" : "unset")};
  justify-content: ${(props) =>
    props.jContent ? props.jContent : "space-between"};
  align-items: ${(props) => (props.algItems ? props.algItems : "flex-start")};
  align-self: ${(props) => props.algSelf && props.algSelf};
  justify-items: ${(props) => (props.jItems ? props.jItems : "flex-start")};
  margin: 0px;
  padding-top: ${(props) => props.pdtop}px;
  padding-bottom: ${(props) => props.pdbottom}px;
  padding-left: ${(props) => (props.pdleft ? props.pdleft : 0)}px;
  padding-right: ${(props) => (props.pdright ? props.pdright : 0)}px;
  padding: ${(props) => props.pd};
  max-width: ${(props) => props.maxWd};
  margin: ${(props) => props.mg ?? "0"};
  gap: ${(props) => props.gap ?? "10px"};
  box-shadow: ${(props) =>
    props.useBoxShadow ? "0px 0px 10px 0px rgba(0, 0, 0, 0.1)" : "none"};

  @media ${device.laptop} {
    width: ${(props) => props.wd}%;
  }

  @media ${device.laptopL} {
    width: ${(props) => props.wd}%;
  }
`;

export const AreaItem = styled.div.withConfig({
  shouldForwardProp: (prop) =>
    ![
      "noflxGrow",
      "fDirection",
      "jContent",
      "algSelf",
      "algItems",
      "ptop",
      "pright",
      "pbottom",
      "pleft",
      "mg",
      "pd",
      "wd",
      "minWd",
      "gap",
      "hg",
      "useBoxShadow",
      "wdr",
    ].includes(prop),
})`
  display: flex;
  flex-grow: ${(props) => (props.noflxGrow ? 0 : 1)};
  flex-direction: ${(props) =>
    props.fDirection ? props.fDirection : "column"};
  justify-content: ${(props) => props.jContent ?? "flex-start"};
  justify-items: left;
  align-self: ${(props) => (props.algSelf ? props.algSelf : "flex-start")};
  align-items: ${(props) => (props.algItems ? props.algItems : "unset")};
  padding-top: ${(props) => props.ptop};
  padding-right: ${(props) => props.pright};
  padding-bottom: ${(props) => props.pbottom};
  padding-left: ${(props) => props.pleft};
  margin: ${(props) => (props.mg ? props.mg : 0)};
  padding: ${(props) => props.pd && props.pd};
  width: ${(props) => props.wd}%;
  font-size: 14px;
  font-weight: 400;
  min-height: 35px;
  color: #500569;
  font-size: 12px;
  color: #232c4f;
  min-width: ${(props) => (props.minWd ? props.minWd : "auto")};
  gap: ${(props) => props.gap ?? 0};
  height: ${({ hg }) => hg ?? "unset"};
  box-shadow: ${(props) =>
    props.useBoxShadow ? "0px 0px 10px 0px rgba(0, 0, 0, 0.1)" : "none"};

  @media ${device.mobileS} {
    width: ${(props) => (props.wdr ? `${props.wdr}%` : "100%")};
  }

  @media ${device.tablet} {
    width: ${(props) => (props.wdr ? `${props.wdr}%` : "100%")};
  }

  @media ${device.laptop} {
    width: ${(props) => props.wd}%;
  }

  @media ${device.laptopL} {
    width: ${(props) => props.wd}%;
  }
`;
