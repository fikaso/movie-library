import styled from 'styled-components';
import { setSpacing } from '../UI/spacing';

export const Form = styled.div`
  margin-left: 127px;

  Input {
    ${setSpacing(4)}
  }

  div {
    display: flex;
    justify-content: space-between;
  }
`;
