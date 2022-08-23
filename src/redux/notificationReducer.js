import { createSlice } from '@reduxjs/toolkit'

const initialState = { 
    notifyStatus: null,
    messege: null
 }

const notification = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    getNotification(state, {payload}) {
        debugger
      state.notifyStatus = payload.notifyStatus;
      state.messege = payload.messege;
    },
  },
})

export const { getNotification } = notification.actions
export default notification.reducer