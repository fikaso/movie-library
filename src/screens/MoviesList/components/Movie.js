import { Button } from '../../../style/components/Button';
import {
  CardImage,
  CardTitle,
  CardWrapper,
  Label,
} from '../../../style/components/Card';
import { Flex } from '../../../style/components/Flex';

function Movie({ movie, editMovie, deleteMovie }) {
  return (
    <CardWrapper>
      <CardImage onClick={() => editMovie()} url={movie.image} />
      <Flex>
        <div>
          <CardTitle>{movie.name}</CardTitle>
          <Label>{movie.year}</Label>
        </div>

        <Button mini onClick={() => deleteMovie()}>
          x
        </Button>
      </Flex>
    </CardWrapper>
  );
}

export default Movie;
