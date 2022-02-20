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
  async ({ title, year, image }) => {
    const movieData = {
      name: title,
      publicationYear: parseInt(year),
    };
    const formData = new FormData();
    formData.append('data', JSON.stringify(movieData));
    formData.append('files.poster', image);
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
  async ({ title, year, image, id }) => {
    const movieData = {
      name: title,
      publicationYear: year,
    };
    const formData = new FormData();
    formData.append('data', JSON.stringify(movieData));
    formData.append('files.poster', image);

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
      state.status = 'getLoading';
    },
    [getMovies.fulfilled]: (state, action) => {
      state.movies = [];
      action.payload.data.map((movie) =>
        state.movies.push({
          name: movie.attributes.name,
          year: movie.attributes.publicationYear,
          image: movie.attributes.poster.data?.attributes.url,
          id: movie.id,
        })
      );
      state.status = 'getSuccess';
    },
    [getMovies.rejected]: (state) => {
      state.status = 'getFailed';
    },
    [deleteMovie.pending]: (state) => {
      state.status = 'deleteLoading';
    },
    [deleteMovie.fulfilled]: (state, action) => {
      state.status = 'deleteSuccess';
    },
    [deleteMovie.rejected]: (state) => {
      state.status = 'deleteFailed';
    },
    [addMovie.pending]: (state) => {
      state.status = 'addLoading';
    },
    [addMovie.fulfilled]: (state, action) => {
      state.status = 'addSuccess';
    },
    [addMovie.rejected]: (state) => {
      state.status = 'addFailed';
    },
    [editMovie.pending]: (state) => {
      state.status = 'editLoading';
    },
    [editMovie.fulfilled]: (state, action) => {
      state.status = 'editSuccess';
    },
    [editMovie.rejected]: (state) => {
      state.status = 'editFailed';
    },
  },
});

export const selectMovies = (state) => state.movies;

export default moviesSlice.reducer;
