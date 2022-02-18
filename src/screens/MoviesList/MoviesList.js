import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deleteMovie, getMovies, selectMovies } from '../../redux/moviesSlice';
import { MoviesStyled } from '../../style/screens/MoviesList';
import { Button } from '../../style/components/Button';
import { H2 } from '../../style/components/Heading';
import Movie from './components/Movie';
import Header from '../../components/Header';
import { logOut } from '../../redux/userSlice';
import { TextRegular } from '../../style/components/Text';
import { Logout } from '../../style/components/Logout';
import LogoutIcon from '../../style/icons/Logout';
import Add from '../../style/icons/Add';
import { Flex } from '../../style/components/Flex';
import { Container } from '../../style/components/Container';

function MoviesList() {
  const dispatch = useDispatch();
  const movies = useSelector(selectMovies);
  const navigate = useNavigate();

  useEffect(() => {
    if (movies?.status === null) {
      dispatch(getMovies());
    }
  }, [dispatch, movies]);

  return (
    <Container>
      <Header>
        <Flex direction="row">
          <H2>My movies</H2>
          <Link to="/addMovie">
            <Add />
          </Link>
        </Flex>
        <Logout onClick={() => dispatch(logOut())}>
          <TextRegular>Logout</TextRegular>
          <LogoutIcon />
        </Logout>
      </Header>

      <MoviesStyled>
        {movies.movies.length !== 0 ? (
          movies.movies.map((movie) => (
            <Movie
              key={movie.id}
              movie={movie}
              editMovie={() =>
                navigate(`/editMovie/${movie.id}`, {
                  state: {
                    prevTitle: movie.name,
                    prevYear: movie.year,
                    image: movie.image,
                  },
                })
              }
              deleteMovie={() => dispatch(deleteMovie({ id: movie.id }))}
            />
          ))
        ) : (
          <Flex direction="column">
            <H2>Your movie list is empty</H2>
            <Link to="/addMovie">
              <Button large>Add a new movie</Button>
            </Link>
          </Flex>
        )}
      </MoviesStyled>
    </Container>
  );
}

export default MoviesList;
