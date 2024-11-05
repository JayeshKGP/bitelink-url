import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'

interface AuthState {
  isAuthenticated: boolean
  user: {
    name: string
    email: string
  } | null
}

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
}
export const loadUser = createAsyncThunk('auth/loadUser', async () => {
  const res = await fetch('/api/auth/user', { credentials: 'include' });
  const data = await res.json();
  return data;
});
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<{ name: string; email: string }>) => {
      state.isAuthenticated = true
      state.user = action.payload
    },
    logout: (state) => {
      state.isAuthenticated = false
      state.user = null
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loadUser.fulfilled, (state, action) => {
      state.isAuth = action.payload.isAuth;
      state.user = action.payload.user;
    });
  }
})

export const { login, logout } = authSlice.actions
export default authSlice.reducer