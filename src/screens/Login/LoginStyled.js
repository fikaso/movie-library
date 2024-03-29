import styled from 'styled-components';
import { H1 } from '../../style/components/Heading';
import { Input } from '../../style/components/Input';
import { calcSpacing, setSpacing } from '../../style/theme/Spacing';
import { calcFontSize } from '../../style/theme/Typo';

export const LoginStyled = styled.div`
  display: flex;
  height: 100vh;
  padding: 0 ${calcSpacing(3)};
  max-width: ${calcFontSize(348, 16)};
  margin: 0 auto;
  text-align: center;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ${H1} {
    ${setSpacing(5)};
  }

  ${Input} {
    ${setSpacing(3)};
  }

  p {
    color: red;
  }
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
    width: ${calcFontSize(18)};
    height: ${calcFontSize(17)};
    border-radius: ${calcFontSize(5)};
    margin-right: ${calcFontSize(10)};
    background-color: ${(props) => props.theme.colors.inputColor};
  }
`;
