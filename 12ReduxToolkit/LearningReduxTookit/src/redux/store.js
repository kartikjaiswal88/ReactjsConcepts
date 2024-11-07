import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})


/*
1. Create the Store
2. Wrap the application using Provider with store
3. Create the Slice with reducer and initial state
4. Register the reducer inside the store
*/