import styled from 'styled-components';
import { media } from '../../../style/theme/Responsive';
import { calcSpacing, setSpacing } from '../../../style/theme/Spacing';
import { calcFontSize, setFontSize } from '../../../style/theme/Typo';

export const CardWrapper = styled.div`
  background-color: ${(props) => props.theme.colors.cardColor};
  border-radius: ${calcFontSize(12)};
  max-width: ${calcFontSize(180)};

  @media screen and ${media.smallMobile} {
    ${setSpacing(5)};
  }

  @media screen and ${media.minTablet} {
    max-width: ${calcFontSize(282)};
    padding: ${calcSpacing(1)} ${calcSpacing(1)} ${calcSpacing(2)};
  }
`;

export const CardTitle = styled.div`
  ${setSpacing(2)};
  padding: 0 ${calcSpacing(1.5)};
  ${setFontSize(16, 16, 24)}
  font-weight: ${(props) => props.theme.font.weight.regular};

  @media screen and ${media.minTablet} {
    ${setSpacing(1)};
    padding: 0 ${calcSpacing(1)};
  }
`;

export const Label = styled.div`
  ${setFontSize(14, 16, 24)}
  font-weight: ${(props) => props.theme.font.weight.regular};
  padding: 0 ${calcSpacing(1.5)} ${calcSpacing(1.5)};

  @media screen and ${media.minTablet} {
    padding: 0 ${calcSpacing(1)};
  }
`;

export const CardImage = styled.div`
  position: relative;
  width: ${calcFontSize(180)};
  height: ${calcFontSize(246)};
  cursor: pointer;
  ${setSpacing(1.5)};

  @media screen and ${media.minTablet} {
    width: ${calcFontSize(266)};
    height: ${calcFontSize(400)};
    ${setSpacing(2)};
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 12px 12px 0 0;
    background: url('${(props) => props.url}');
    background-size: cover;
    background-position: center center;

    @media screen and ${media.minTablet} {
      border-radius: 12px;
    }
  }
`;

export const MovieDesc = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction};
  align-items: center;
  justify-content: space-between;
`;
