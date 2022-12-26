import React, { useEffect } from 'react';
import './App.css';
import {theme} from './theme/index';
import {Header} from './components';
import {ThemeProvider} from 'styled-components'
import addData from './api/addDataService';
import { useDispatch } from 'react-redux'
import {
  setTeams,
  setPages,
  setFilters,
  setStages,
  setTournament,
} from './redux/slices/additionalDataSlice';
import RootNavigator from './routes';
import { QueryParamProvider } from 'use-query-params';
import { ReactRouter6Adapter } from 'use-query-params/adapters/react-router-6';
import matches from './api/matchesService'


function App() {

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(setTeams(addData.teams))
    dispatch(setPages(addData.pages))
    dispatch(setFilters(addData.filters))
    dispatch(setStages(addData.stages))
    dispatch(setTournament(addData.tournament))
  }, [])

  return (
    <QueryParamProvider adapter={ReactRouter6Adapter}>
      <ThemeProvider theme={theme}>
        <Header/>
        <RootNavigator/>
      </ThemeProvider>
    </QueryParamProvider>
  );
}

export default App;
