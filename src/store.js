import { configureStore } from '@reduxjs/toolkit'
import  activeuserSlice  from './slices/activeuserSlice'

export const store = configureStore({
  reducer: {
    activeuser:activeuserSlice
  }
})