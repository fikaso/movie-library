import styled from 'styled-components';
import { media } from '../../style/theme/Responsive';
import { setSpacing } from '../../style/theme/Spacing';
import { calcFontSize } from '../../style/theme/Typo';

export const HeaderStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  width: 100%;
  max-width: ${calcFontSize(1440)};
  padding: ${calcFontSize(120)} ${calcFontSize(120)} 0 ${calcFontSize(120)};
  margin: 0 auto;
  ${setSpacing(15)};

  @media screen and ${media.tablet} {
    padding: ${calcFontSize(24)} ${calcFontSize(24)} 0 ${calcFontSize(24)};
    ${setSpacing(5)};
  }

  h2 {
    font-size: ${calcFontSize(32)};
    @media screen and ${media.minTablet} {
      font-size: ${calcFontSize(46)};
    }
  }
`;
