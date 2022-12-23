import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface MatchesState {
  matches: any[];
  matchesToView:any[];
}

const initialState: MatchesState = {
  matches: [],
  matchesToView:[],
}

export const teamSlice = createSlice({
  name: 'teams',
  initialState,
  reducers: {
    setMatches: (state, action: PayloadAction<any[]>) => {
      state.matches = action.payload
    },
    // setWithFilters: (state, action: PayloadAction<any[]>) => {
    //   state.matchesToView = 
    // }
  },
})

export const { setMatches } = teamSlice.actions
export default teamSlice.reducer