import styled, { css } from 'styled-components';
import { calcFontSize, setFontSize } from '../UI/typo';

const InputDefault = styled.input`
  ${setFontSize(14, 16, 24)}
  color: ${(props) => props.theme.colors.text};
  font-weight: ${(props) => props.theme.font.weight.regular};
  width: 100%;
  padding: ${calcFontSize(11)} 0 ${calcFontSize(11)} ${calcFontSize(16)};
  border-radius: ${calcFontSize(10)};
  outline: none;
  border: none;
  cursor: pointer;
  ::placeholder {
    ${setFontSize(14, 16, 24)}
    color: ${(props) => props.theme.colors.text};
    font-weight: ${(props) => props.theme.font.weight.regular};
  }
`;

export const Input = styled(InputDefault)`
  max-width: ${calcFontSize(300)};
  background: ${(props) => props.theme.colors.inputColor};
  border: 1px solid ${(props) => props.theme.colors.backgroundColor};
  transition: all 0.2s linear;
  :hover,
  :focus {
    border: 1px solid ${(props) => props.theme.colors.inputColor};
  }
  ${(props) =>
    props.error &&
    css`
      border: 1px solid ${(props) => props.theme.colors.error};
      color: ${(props) => props.theme.colors.error};

      ::placeholder {
        color: ${(props) => props.theme.colors.error};
      }
      :hover,
      :focus {
        border: 1px solid ${(props) => props.theme.colors.inputColor};
        color: ${(props) => props.theme.colors.text};
        ::placeholder {
          color: ${(props) => props.theme.colors.text};
        }
      }
    `}
`;
