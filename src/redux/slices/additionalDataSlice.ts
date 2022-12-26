import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface DataState {
  teams: any[];
  filters: any[];
  pages:any[];
  stages:any[];
  division:any[];
  tournament:any;
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
  tournament:null,
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
    setTournament: (state, action: PayloadAction<any>) => {
      state.tournament = action.payload
    }
  },
})



export const {
  setTeams,
  setPages,
  setFilters,
  setStages,
  setTournament
 } = addInfoSlice.actions


export default addInfoSlice.reducer