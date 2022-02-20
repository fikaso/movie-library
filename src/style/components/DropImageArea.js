import styled from 'styled-components';
import { media } from '../UI/responsive';
import { calcSpacing, setSpacing } from '../UI/spacing';

export const DropImageArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 380px;
  height: 372px;
  margin: 0 auto ${calcSpacing(3)};
  border: 1px dashed;
  border-radius: 10px;
  align-items: center;
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
