import styled from 'styled-components';

export const MoviesStyled = styled.div``;

export const Logout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
`;

export const Flex = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction};
  align-items: center;
  justify-content: space-between;
`;
