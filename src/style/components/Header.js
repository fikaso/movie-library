import styled from 'styled-components';
import { setSpacing } from '../UI/spacing';

export const HeaderStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  width: 100%;
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;
  /* padding: 120px 120px 0 120px; */
  ${setSpacing(15)};
`;
