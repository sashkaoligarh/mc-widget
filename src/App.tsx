import React, { useEffect } from 'react';
import './App.css';
import {theme} from './theme/index';
import {DropDown, Button, MatchCard} from './components';
import {ThemeProvider} from 'styled-components'
import teamService from './api/teamService';
import {useDispatch, useSelector} from 'react-redux'
import { setTeams } from './redux/slices/teamsSlice';
import RootNavigator from './routes';



function App() {
  const dispatch = useDispatch()
  const teams = useSelector((state:any) => state.teams.teams)
  useEffect(() => {
    dispatch(setTeams(teamService))
  }, [])
  return (
    <ThemeProvider theme={theme}>
      <RootNavigator/>
    </ThemeProvider>
  );
}

export default App;
