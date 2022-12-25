import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface MatchesState {
  matches: any[];
}

const initialState: MatchesState = {
  matches: [],
}

export const teamSlice = createSlice({
  name: 'teams',
  initialState,
  reducers: {
    setMatches: (state, action: PayloadAction<any[]>) => {
      state.matches = action.payload
    },
  },
})

export const { setMatches } = teamSlice.actions
export default teamSlice.reducer