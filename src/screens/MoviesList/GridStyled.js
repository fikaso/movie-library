import styled from 'styled-components';
import { media } from '../../style/theme/Responsive';
import { calcFontSize } from '../../style/theme/Typo';

export const Grid = styled.div`
  max-width: ${(props) => (props.maxWidth ? props.maxWidth : `1440px`)};
  margin: 0 auto;

  @media screen and ${media.mobile} {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: ${calcFontSize(40)} ${calcFontSize(20)};
    padding: 0 ${calcFontSize(24)};
  }

  @media screen and ${media.minTablet} {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media screen and ${media.minDesktop} {
    grid-auto-flow: dense;
    grid-template-columns: ${(props) =>
      props.templateColumns
        ? props.templateColumns
        : `repeat(12, minmax(120px, 1fr));`};
    grid-gap: ${(props) => (props.gap ? props.gap : `24px`)};
    padding: ${(props) => (props.padding ? props.padding : `0`)};
  }
`;

export const Col = styled.div`
  @media screen and ${media.tablet} {
    display: flex;
    justify-content: center;
  }

  @media screen and ${media.minTablet} {
    grid-column: ${(props) => (props.column ? props.column : `unset`)};
  }
`;
