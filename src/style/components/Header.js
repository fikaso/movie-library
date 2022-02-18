import styled from 'styled-components';
import { setSpacing } from '../spacing';

export const HeaderStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  width: 100%;
  padding: 120px 120px 0 120px;
  ${setSpacing(15)};
`;
