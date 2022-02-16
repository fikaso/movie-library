import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const login = createAsyncThunk(
  'user/login',
  async ({ email, password }) => {
    const formData = new FormData();
    formData.append('identifier', email);
    formData.append('password', password);
    return fetch(`${process.env.REACT_APP_LOGIN_URL}`, {
      body: formData,
      method: 'POST',
    }).then((res) => res.json());
  }
);

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
    status: null,
  },
  reducers: {
    logOut: (state) => {
      state.user = null;
      state.status = null;
      localStorage.removeItem('login_token');
    },
  },
  extraReducers: {
    [login.pending]: (state) => {
      state.status = 'loading';
    },
    [login.fulfilled]: (state, action) => {
      state.user = {
        name: action.payload.user.username,
        email: action.payload.user.email,
        jwt: action.payload.jwt,
      };
      localStorage.setItem('login_token', action.payload.jwt);
      state.status = 'success';
    },
    [login.rejected]: (state, action) => {
      state.status = 'failed';
    },
  },
});

export const selectUser = (state) => state.user;

export const { logOut } = userSlice.actions;

export default userSlice.reducer;
