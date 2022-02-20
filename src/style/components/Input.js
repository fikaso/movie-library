import styled, { css } from 'styled-components';
import { calcFontSize, setFontSize } from '../UI/typo';
import { calcSpacing, setSpacing } from '../UI/spacing';
import { media } from '../UI/responsive';

const InputDefault = styled.input`
  ${setFontSize(14, 16, 24)};
  ${setSpacing(3)};
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
  width: 100%;
  background: ${(props) => props.theme.colors.inputColor};
  border: 1px solid ${(props) => props.theme.colors.backgroundColor};
  transition: all 0.2s linear;

  @media screen and ${media.minTablet} {
    max-width: ${calcFontSize(300)};
  }

  :hover,
  :focus {
    border: 1px solid ${(props) => props.theme.colors.inputColor};
  }
  ${(props) =>
    props.extended &&
    css`
      @media screen and ${media.minTablet} {
        max-width: ${calcFontSize(362)};
      }
    `}
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

export const CheckBoxContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  ${setSpacing(3)};
  Input {
    opacity: 0;
    width: 0;
  }

  Input:checked + label::before {
    background-color: ${(props) => props.theme.colors.primary};
    content: '✔';
    display: flex;
    justify-content: center;
    align-items: center;
  }

  label {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  label:hover::before {
    background-color: ${(props) => props.theme.colors.cardColor};
  }
  label::before {
    content: '';
    width: 18px;
    height: 17px;
    border-radius: 5px;
    margin-right: 10px;
    background-color: ${(props) => props.theme.colors.inputColor};
  }
`;
