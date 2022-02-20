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

  @media screen and (min-width: 1440px) {
  }
`;

export const DropImageArea = styled.div`
  ${setSpacing(3)}
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 380px;
  height: 372px;
  margin: 0 auto ${calcSpacing(3)};
  border: 1px dashed;
  border-radius: 10px;
  background-color: ${(props) => props.theme.colors.inputColor};

  @media screen and ${media.minTablet} {
    flex: 1;
    max-width: 473px;
    height: 504px;
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
