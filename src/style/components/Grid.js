import styled from 'styled-components';

export const Grid = styled.div`
  display: grid;
  grid-template-columns: ${(props) =>
    props.templateColumns
      ? props.templateColumns
      : `repeat(12, minmax(120px, 1fr));`};
  grid-gap: ${(props) => (props.gap ? props.gap : `24px`)};
  max-width: ${(props) => (props.maxWidth ? props.maxWidth : `1440px`)};
  margin: 0 auto;
  padding: ${(props) => (props.padding ? props.padding : `0`)};
  grid-auto-flow: dense;
`;

export const Col = styled.div`
  grid-column: ${(props) => (props.column ? props.column : `unset`)};
`;
