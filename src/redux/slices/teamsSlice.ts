import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'

interface CounterState {
  teams: any[]
}

const initialState: CounterState = {
  teams: [],
}

export const teamSlice = createSlice({
  name: 'teams',
  initialState,
  reducers: {
    setTeams: (state, action: PayloadAction<any[]>) => {
      state.teams = action.payload
    },
  },
})

export const { setTeams } = teamSlice.actions

// export const selectCount = (state: RootState) => state.counter.value

export default teamSlice.reducer