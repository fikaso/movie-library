import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const getMovies = createAsyncThunk('movies/get', async () => {
  const response = await fetch(
    `${process.env.REACT_APP_MOVIES_URL}?populate=*`,
    {
      method: 'GET',
      headers: {
        authorization: `Bearer ${localStorage.getItem('login_token')}`,
      },
    }
  );
  return response.json();
});

export const deleteMovie = createAsyncThunk('movie/delete', async ({ id }) => {
  const response = await fetch(
    `https://zm-movies-assignment.herokuapp.com/api/movies/${id}`,
    {
      method: 'DELETE',
      headers: {
        authorization: `Bearer ${localStorage.getItem('login_token')}`,
      },
    }
  );
  return response.json();
});

export const addMovie = createAsyncThunk(
  'movie/add',
  async ({ title, year }) => {
    const movieData = {
      name: title,
      publicationYear: parseInt(year),
    };
    const formData = new FormData();
    formData.append('data', JSON.stringify(movieData));
    formData.append('files.poster', null);
    const response = await fetch(`${process.env.REACT_APP_MOVIES_URL}`, {
      body: formData,
      method: 'POST',
      headers: {
        authorization: `Bearer ${localStorage.getItem('login_token')}`,
      },
    });

    return response.json();
  }
);

export const editMovie = createAsyncThunk(
  'movie/edit',
  async ({ title, year, id }) => {
    const movieData = {
      name: title,
      publicationYear: year,
    };
    const formData = new FormData();
    formData.append('data', JSON.stringify(movieData));
    formData.append('files.poster', null);

    const response = await fetch(`${process.env.REACT_APP_MOVIES_URL}/${id}`, {
      body: formData,
      method: 'PUT',
      headers: {
        authorization: `Bearer ${localStorage.getItem('login_token')}`,
      },
    });

    return response.json();
  }
);

export const moviesSlice = createSlice({
  name: 'movies',
  initialState: {
    movies: [],
    status: null,
  },
  extraReducers: {
    [getMovies.pending]: (state) => {
      state.status = 'loading';
    },
    [getMovies.fulfilled]: (state, action) => {
      state.movies = [];
      action.payload.data.map((movie) =>
        state.movies.push({
          name: movie.attributes.name,
          year: movie.attributes.publicationYear,
          id: movie.id,
        })
      );
      state.status = 'success';
    },
    [getMovies.rejected]: (state) => {
      state.status = 'failed';
    },
    [deleteMovie.pending]: (state) => {
      state.status = 'loading';
    },
    [deleteMovie.fulfilled]: (state, action) => {
      state.movies = state.movies.filter(
        (movie) => movie.id !== action.payload.data.id
      );
      state.status = 'success';
    },
    [deleteMovie.rejected]: (state) => {
      state.status = 'failed';
    },
    [addMovie.pending]: (state) => {
      state.status = 'loading';
    },
    [addMovie.fulfiled]: (state, action) => {
      state.movies.push({
        name: action.payload.attributes.name,
        year: action.payload.attributes.publicationYear,
        id: action.payload.id,
      });
      state.status = 'success';
    },
    [addMovie.rejected]: (state) => {
      state.status = 'failed';
    },
    [editMovie.pending]: (state) => {
      state.status = 'loading';
    },
    [editMovie.fulfiled]: (state, action) => {
      state.movies = state.movies.map((movie) => {
        if (movie.id === action.payload.id) {
          return {
            name: action.payload.attributes.name,
            year: action.payload.attributes.publicationYear,
            id: action.payload.id,
          };
        } else {
          return movie;
        }
      });
      state.status = 'success';
    },
    [editMovie.rejected]: (state) => {
      state.status = 'failed';
    },
  },
});

export const selectMovies = (state) => state.movies;

export default moviesSlice.reducer;
