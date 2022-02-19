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
import EmptyList from '../EmptyList/EmptyList';
import { Col, Grid } from '../../style/components/Grid';

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
    <div>
      {movies.movies.length !== 0 ? (
        <>
          <Header>
            <Flex direction="row">
              <H2>My movies</H2>
              <Link to="/addMovie">
                <Add />
              </Link>
            </Flex>
            <Logout
              onClick={() => {
                dispatch(logOut());
              }}
            >
              <TextRegular>Logout</TextRegular>
              <LogoutIcon />
            </Logout>
          </Header>

          <Grid
            templateColumns={'repeat(4, minmax(120px, 1fr));'}
            maxWidth={'1440px'}
            gap={'24px'}
            padding={'0 120px'}
          >
            {movies.movies.map((movie) => (
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
            ))}
          </Grid>
        </>
      ) : (
        <EmptyList />
      )}
    </div>
  );
}

export default MoviesList;
