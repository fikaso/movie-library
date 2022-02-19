import styled from 'styled-components';

export const DropImageArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  max-width: 473px;
  max-height: 504px;
  border: 1px dashed;
  border-radius: 10px;
  align-items: center;
  overflow: hidden;
  background-color: ${(props) => props.theme.colors.inputColor};
`;
