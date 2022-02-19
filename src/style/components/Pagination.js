import styled from 'styled-components';

export const PaginationStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 220px;
  margin-top: 120px;

  span {
    cursor: pointer;
  }
  ul {
    display: flex;
    padding: 0;
    align-items: center;
    justify-content: center;
    list-style-type: none;
    margin-left: 16px;
    margin-right: 8px;
  }
`;

export const PaginationNumber = styled.div`
  margin-right: 8px;
  background-color: ${(props) =>
    props.active === true
      ? props.theme.colors.primary
      : props.theme.colors.cardColor};
  width: 32px;
  height: 32px;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
