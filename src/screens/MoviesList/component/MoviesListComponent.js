import { Button } from '../../../style/components/Button';
import {
  CardImage,
  CardTitle,
  CardWrapper,
  Label,
} from '../../../style/components/Card';

function Movie({ movie, editMovie, deleteMovie }) {
  return (
    <CardWrapper onClick={() => editMovie()}>
      <CardImage url="./movie_poster.jpg" />
      <CardTitle>{movie.name}</CardTitle>
      <Label>{movie.year}</Label>
      {/* <Button onClick={() => editMovie()}>Remove</Button>
      <Button onClick={() => deleteMovie()}>Edit</Button> */}
    </CardWrapper>
  );
}

export default Movie;
