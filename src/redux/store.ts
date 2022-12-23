import { configureStore } from '@reduxjs/toolkit'
import additionalDataSlice from './slices/additionalDataSlice'
import matchesSlice from './slices/matchesSlice'

export const store = configureStore({
  reducer: {
    additionalData: additionalDataSlice,
    matchesData: matchesSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch