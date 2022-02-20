import styled from 'styled-components';
import { calcFontSize } from '../../style/theme/Typo';

export const PaginationStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: ${calcFontSize(220)};
  margin-top: ${calcFontSize(120)};

  span {
    cursor: pointer;
  }
  ul {
    display: flex;
    padding: 0;
    align-items: center;
    justify-content: center;
    list-style-type: none;
    margin-left: ${calcFontSize(16)};
    margin-right: ${calcFontSize(8)};
  }
`;

export const PaginationNumber = styled.div`
  margin-right: ${calcFontSize(8)};
  background-color: ${(props) =>
    props.active === true
      ? props.theme.colors.primary
      : props.theme.colors.cardColor};
  width: ${calcFontSize(32)};
  height: ${calcFontSize(32)};
  border-radius: ${calcFontSize(4)};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
