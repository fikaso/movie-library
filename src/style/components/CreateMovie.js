import styled from 'styled-components';
import { media } from '../UI/responsive';
import { calcSpacing, setSpacing } from '../UI/spacing';
import { calcFontSize } from '../UI/typo';
import { DropImageArea } from './DropImageArea';
import { FormStyled } from './Form';

export const CreateMovie = styled.div`
  max-width: ${calcFontSize(1440)};
  padding: 0 ${calcSpacing(3)};
  display: flex;
  flex-direction: column;

  ${DropImageArea} {
    ${setSpacing(3)}
  }

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
