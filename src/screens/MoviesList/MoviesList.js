import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deleteMovie, getMovies, selectMovies } from '../../redux/moviesSlice';
import { MoviesStyled } from './MoviesListStyled';
import { H2 } from '../../style/components/Heading';
import Movie from './components/Movie';
import Header from '../../components/Header/Header';
import { logOut } from '../../redux/userSlice';
import { TextRegular } from '../../style/components/Text';
import { Logout } from './MoviesListStyled';
import LogoutIcon from '../../style/icons/Logout';
import Add from '../../style/icons/Add';
import { Flex } from './MoviesListStyled';
import EmptyList from '../EmptyList/EmptyList';
import { Col, Grid } from './GridStyled';
import Pagination from '../../components/Pagination/Pagination';

function MoviesList() {
  const dispatch = useDispatch();
  const movies = useSelector(selectMovies);
  const navigate = useNavigate();

  const [currentPage, setCurrentPage] = useState(1);
  const [moviesPerPage, setMoviesPerPage] = useState(8);

  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = movies.movies.slice(
    indexOfFirstMovie,
    indexOfLastMovie
  );

  const changePage = (pageNum, numOfPages) => {
    if (pageNum >= 1 && pageNum <= numOfPages) {
      setCurrentPage(pageNum);
    }
  };

  useEffect(() => {
    if (
      movies?.status === null ||
      movies?.status === 'addSuccess' ||
      movies?.status === 'editSuccess' ||
      movies?.status === 'deleteSuccess'
    ) {
      dispatch(getMovies());
    }
  }, [dispatch, movies]);

  return (
    <MoviesStyled>
      {movies.movies.length !== 0 ? <EmptyList /> : <EmptyList />}
    </MoviesStyled>
  );
}

export default MoviesList;
