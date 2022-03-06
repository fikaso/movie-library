import styled from 'styled-components';
import { media } from '../../style/theme/Responsive';
import { calcSpacing, setSpacing } from '../../style/theme/Spacing';
import { calcFontSize } from '../../style/theme/Typo';

export const CreateMovie = styled.div`
  max-width: ${calcFontSize(1440)};
  padding: 0 ${calcSpacing(3)};
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    padding: 0%;
    margin: 0 auto;
    width: 100%;
  }
`;

export const DropImageArea = styled.div`
  width: 100%;
  margin: 0 auto ${calcFontSize(20)};
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: ${calcFontSize(380)};
  height: ${calcFontSize(372)};
  border: ${calcFontSize(1)} dashed;
  border-radius: ${calcFontSize(10)};
  background-color: ${(props) => props.theme.colors.inputColor};

  @media screen and ${media.minTablet} {
    flex: 1;
    max-width: ${calcFontSize(473)};
    height: ${calcFontSize(504)};
    margin: 0;
    margin-right: 5%;
  }

  @media screen and ${media.minDesktop} {
  }

  & img {
    width: 100%;
    height: 100%;
  }
`;
