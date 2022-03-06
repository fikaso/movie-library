import styled from 'styled-components';
import { media } from '../../../style/theme/Responsive';
import { calcFontSize } from '../../../style/theme/Typo';

export const FormStyled = styled.div`
  @media screen and ${media.tablet} {
    margin: 0 auto;
  }

  p {
    color: red;
  }
`;

export const FormButtons = styled.div`
  display: flex;
  justify-content: center;

  Button:nth-child(2) {
    margin-left: ${calcFontSize(25)};
  }
`;
