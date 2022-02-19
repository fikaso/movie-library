import styled from 'styled-components';
import { setFontSize } from '../../style/UI/typo';

export const TextLarge = styled.span`
  ${setFontSize(20, 16, 32)}
  font-weight: ${(props) => props.theme.font.weight.bold};
`;

export const TextRegular = styled.span`
  ${setFontSize(16, 16, 24)}
  font-weight: ${(props) => props.theme.font.weight.bold};
`;

export const TextSmall = styled.span`
  ${setFontSize(14, 16, 24)}
  font-weight: ${(props) => props.theme.font.weight.regular};
`;

export const TextExtraSmall = styled.span`
  ${setFontSize(12, 16, 24)}
  font-weight: ${(props) => props.theme.font.weight.regular};
`;

export const Caption = styled.caption`
  ${setFontSize(14, 16, 16)}
  font-weight: ${(props) => props.theme.font.weight.regular};
`;
