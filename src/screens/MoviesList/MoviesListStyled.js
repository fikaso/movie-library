import styled from 'styled-components';
import { media } from '../../style/theme/Responsive';
import { calcFontSize } from '../../style/theme/Typo';

export const MoviesStyled = styled.div``;

export const Logout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
`;

export const Flex = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction};
  align-items: center;
  justify-content: space-between;

  h2 {
    font-size: ${calcFontSize(32)};
    @media screen and ${media.minTablet} {
      font-size: ${calcFontSize(46)};
    }
  }
`;
