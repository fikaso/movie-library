import styled from 'styled-components';
import { calcSpacing, setSpacing } from '../spacing';
import { calcFontSize, setFontSize } from '../typo';

export const CardWrapper = styled.div`
  background-color: ${(props) => props.theme.colors.cardColor};
  border-radius: ${calcFontSize(12)};
  max-width: ${calcFontSize(282)};
  padding: ${calcSpacing(1)} ${calcSpacing(1)} ${calcSpacing(2)};
  ${setSpacing(3)}
`;

export const CardTitle = styled.div`
  ${setSpacing(1)};
  padding: 0 ${calcSpacing(1)};
  ${setFontSize(20, 16, 32)}
  font-weight: ${(props) => props.theme.font.weight.regular};
`;

export const Label = styled.div`
  ${setFontSize(14, 16, 24)}
  font-weight: ${(props) => props.theme.font.weight.regular};
  padding: 0 ${calcSpacing(1)};
`;

export const CardImage = styled.div`
  position: relative;
  width: ${calcFontSize(266)};
  height: ${calcFontSize(400)};
  ${setSpacing(2)};
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 12px;
    background: url('${(props) => props.url}');
    background-size: cover;
    background-position: center center;
  }
`;
