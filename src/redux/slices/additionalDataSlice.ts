import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface DataState {
  teams: any[];
  filters: any[];
  pages:any[];
  stages:any[];
  division:any[];
  matches: any[];
  matchesToView:any[];
}

const initialState: DataState = {
  teams: [],
  filters: [],
  pages:[],
  stages:[],
  division:[
    {
      id:1,
      name:'I'
    },
    {
      id:2,
      name:'II'
    }
  ],
  matches: [],
  matchesToView:[],
}

export const addInfoSlice = createSlice({
  name: 'teams',
  initialState,
  reducers: {
    setTeams: (state, action: PayloadAction<any[]>) => {
      state.teams = action.payload
    },
    setPages: (state, action: PayloadAction<any[]>) => {
      state.pages = action.payload
    },
    setFilters: (state, action: PayloadAction<any[]>) => {
      state.filters = action.payload
    },
    setStages: (state, action: PayloadAction<any[]>) => {
      state.stages = action.payload
    },
    setMatches: (state, action: PayloadAction<any[]>) => {
      state.matches = action.payload
    },
  },
})

const filterByStageMatches = () => {

}
const filterMatches = () => {

}

export const {
  setTeams,
  setPages,
  setFilters,
  setStages,
  setMatches
 } = addInfoSlice.actions


export default addInfoSlice.reducer