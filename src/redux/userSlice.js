import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const login = createAsyncThunk(
  'user/login',
  async ({ email, password, remember }) => {
    if (remember) {
      localStorage.setItem('email', email);
      localStorage.setItem('password', password);
    } else {
      localStorage.removeItem('email');
      localStorage.removeItem('password');
    }

    const formData = new FormData();
    formData.append('identifier', email);
    formData.append('password', password);
    return fetch(`${process.env.REACT_APP_LOGIN_URL}`, {
      body: formData,
      method: 'POST',
    }).then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        return Promise.reject(res);
      }
    });
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
        name: action.payload.user?.username,
        email: action.payload.user?.email,
      };
      localStorage.setItem('login_token', action.payload.jwt);
      state.status = 'success';
    },
    [login.rejected]: (state, action) => {
      console.log('rejected: ', action);
      state.status = 'failed';
    },
  },
});

export const selectUser = (state) => state.user;

export const { logOut } = userSlice.actions;

export default userSlice.reducer;
