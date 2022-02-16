import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addMovie, editMovie, selectMovies } from '../../redux/moviesSlice';

function MovieInput() {
  const [title, setTitle] = useState('');
  const [year, setYear] = useState('');
  const editMode = useParams();
  const movies = useSelector(selectMovies);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (editMode.id) {
      dispatch(
        editMovie({
          title: title,
          year: year,
          id: editMode.id,
        })
      );
    } else {
      dispatch(
        addMovie({
          title: title,
          year: year,
        })
      );
    }

    setTitle('');
    setYear('');

    navigate('/');
  };

  return (
    <div>
      {editMode.id ? <h2>Edit movie</h2> : <h2>Create a new movie</h2>}
      <div>Drop an image here</div>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            placeholder="Publication year"
            value={year}
            onChange={(e) => setYear(e.target.value)}
          />

          <div>
            <input type="submit" />
            <button onClick={() => navigate('/')}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default MovieInput;
