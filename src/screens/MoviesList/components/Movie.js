import { Button } from '../../../style/components/Button';
import {
  CardImage,
  CardTitle,
  CardWrapper,
  Label,
  MovieDesc,
} from './MovieStyled';

function Movie({ movie, editMovie, deleteMovie }) {
  return (
    <CardWrapper>
      <CardImage onClick={() => editMovie()} url={movie.image} />
      <MovieDesc>
        <div>
          <CardTitle>{movie.name}</CardTitle>
          <Label>{movie.year}</Label>
        </div>

        <Button mini onClick={() => deleteMovie()}>
          x
        </Button>
      </MovieDesc>
    </CardWrapper>
  );
}

export default Movie;
