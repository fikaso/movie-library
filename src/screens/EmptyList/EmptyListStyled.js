import styled from 'styled-components';
import { setSpacing } from '../../style/theme/Spacing';

export const EmptyListStyled = styled.div`
  display: flex;
  height: 100vh;
  text-align: center;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  H2 {
    ${setSpacing(5)}
  }
`;
