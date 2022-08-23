import { createSlice } from '@reduxjs/toolkit'

const initialState = { isLoggedIn: false };

const loginization = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    login(state) {
      state.isLoggedIn = !state.isLoggedIn;
    },
    
  },
})

export const { login } = loginization.actions
export default loginization.reducer