import styled from "styled-components";
import { colors } from "../../styles/colors";

export const Container = styled.div`
  width: 100%;
  position: relative;
`;

export const Label = styled.label.withConfig({
  shouldForwardProp: (prop) =>
    !["isActive", "isFocused", "error"].includes(prop),
})`
  position: absolute;
  left: 14px;
  font-size: 16px;
  color: ${colors.cinza};
  top: 50%;
  pointer-events: none;
  transform: translateY(-50%);
  transition: top 0.2s ease, font-size 0.2s ease, color 0.2s ease;
  z-index: 1;
  max-width: 70%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: 400px) {
    max-width: 60%;
  }

  ${({ isActive }) =>
    isActive &&
    ` 
    max-width: 80%;
    top: -1px;
    padding-inline: 6px;
    background-color: ${colors.branco};
    font-size: 12px;
    left: 8px;
  `}

  ${({ isFocused, error }) =>
    isFocused &&
    !error &&
    ` 
    color: ${colors.primaria};
  `}

  ${({ error, isFocused }) =>
    error &&
    !isFocused &&
    ` 
    top: 35%;
    color: ${colors.vermelhoErro};
  `}
`;

export const Error = styled.span`
  display: block;
  margin-top: 4px;
  font-size: 12px;
  margin-left: 14px;
  color: ${colors.vermelhoErro};
`;
