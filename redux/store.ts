// redux/store.ts
import { configureStore } from '@reduxjs/toolkit'
import chatSlice from './chatSlice' // Import your chatSlice

export const store = configureStore({
  reducer: {
    chatroom: chatSlice
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch