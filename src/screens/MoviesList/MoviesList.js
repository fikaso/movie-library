import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deleteMovie, getMovies, selectMovies } from '../../redux/moviesSlice';
import { logOut } from '../../redux/userSlice';

function MoviesList() {
  const dispatch = useDispatch();
  const movies = useSelector(selectMovies);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getMovies());
  }, []);

  return (
    <div>
      <button
        onClick={() => {
          dispatch(logOut());
        }}
      >
        Logout
      </button>
      {movies.movies ? (
        movies.movies.map((movie) => (
          <div key={movie.id}>
            {movie.name} {movie.id}
            <button onClick={() => dispatch(deleteMovie({ id: movie.id }))}>
              Remove
            </button>
            <button
              onClick={() =>
                navigate(`/editMovie/${movie.id}`, {
                  state: {
                    prevTitle: movie.name,
                    prevYear: movie.year,
                  },
                })
              }
            >
              Edit
            </button>
          </div>
        ))
      ) : (
        <h2>Your movie list is empty</h2>
      )}
      <Link to="/addMovie">Add a new movie</Link>
    </div>
  );
}

export default MoviesList;
