import { Link } from 'react-router-dom';
import { Button } from '../../style/components/Button';
import { EmptyListStyled } from './EmptyListStyled';
import { H2 } from '../../style/components/Heading';

function EmptyList() {
  return (
    <EmptyListStyled>
      <H2>Your movie list is empty</H2>
      <Link to="/addMovie">
        <Button large>Add a new movie</Button>
      </Link>
    </EmptyListStyled>
  );
}

export default EmptyList;
