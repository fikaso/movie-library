import styled from 'styled-components';
import { setFontSize } from '../theme/typo';

export const H1 = styled.h1`
  ${setFontSize(64, 16, 80)}
  font-weight: ${(props) => props.theme.font.weight.semiBold};
`;

export const H2 = styled.h2`
  ${setFontSize(48, 16, 56)}
  font-weight: ${(props) => props.theme.font.weight.semiBold};
`;

export const H3 = styled.h3`
  ${setFontSize(32, 16, 40)}
  font-weight: ${(props) => props.theme.font.weight.semiBold};
`;

export const H4 = styled.h4`
  ${setFontSize(24, 16, 32)}
  font-weight: ${(props) => props.theme.font.weight.bold};
`;

export const H5 = styled.h5`
  ${setFontSize(20, 16, 24)}
  font-weight: ${(props) => props.theme.font.weight.bold};
`;

export const H6 = styled.h6`
  ${setFontSize(16, 16, 24)}
  font-weight: ${(props) => props.theme.font.weight.bold};
`;
