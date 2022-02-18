import styled from 'styled-components';

export const DropImageArea = styled.div`
  width: 473px;
  height: 504px;
  border: 1px dashed;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colors.inputColor};
`;
