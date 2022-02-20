import styled from 'styled-components';
import { H1 } from '../../style/components/Heading';
import { Input } from '../../style/components/Input';
import { media } from '../../style/UI/responsive';
import { calcSpacing, setSpacing } from '../../style/UI/spacing';
import { calcFontSize } from '../../style/UI/typo';

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
`;
