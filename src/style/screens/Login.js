import styled from 'styled-components';
import { setSpacing } from '../UI/spacing';
import { H1 } from '../components/Heading';
import { Input } from '../components/Input';

export const LoginStyled = styled.div`
  display: flex;
  height: 100vh;
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
