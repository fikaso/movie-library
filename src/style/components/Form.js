import styled from 'styled-components';
import { media } from '../UI/responsive';
import { setSpacing } from '../UI/spacing';

export const FormStyled = styled.div`
  @media screen and ${media.tablet} {
    margin: 0 auto;
  }
`;
