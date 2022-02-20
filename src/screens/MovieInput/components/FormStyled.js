import styled from 'styled-components';
import { media } from '../../../style/theme/Responsive';

export const FormStyled = styled.div`
  @media screen and ${media.tablet} {
    margin: 0 auto;
  }

  p {
    color: red;
  }
`;
