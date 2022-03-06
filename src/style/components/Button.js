import styled, { css } from 'styled-components';
import { calcFontSize, setFontSize } from '../theme/Typo';

const ButtonDefault = styled.button`
  ${setFontSize(16, 16, 24)}
  color: ${(props) => props.theme.colors.text};
  font-weight: ${(props) => props.theme.font.weight.bold};
  max-width: 100%fit-content;
  padding: ${calcFontSize(16)};
  border-radius: ${calcFontSize(10)};
  outline: none;
  border: none;
  cursor: pointer;
  transition: opacity 0.25s linear;
  :hover {
    opacity: 0.8;
  }
`;

export const Button = styled(ButtonDefault)`
  max-width: ${calcFontSize(179)};
  background: ${(props) => props.theme.colors.primary};
  ${(props) =>
    props.secondary &&
    css`
      background: transparent;
      border: 1px solid ${(props) => props.theme.colors.text};
    `}
  ${(props) =>
    props.large &&
    css`
      max-width: ${calcFontSize(300)};
    `}
    ${(props) =>
    props.medium &&
    css`
      max-width: ${calcFontSize(202)};
    `}
    ${(props) =>
    props.mini &&
    css`
      max-width: ${calcFontSize(50)};
      background-color: ${(props) => props.theme.colors.error};
    `}
`;
