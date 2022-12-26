import React, { useEffect, useRef, useState } from 'react';
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
import styled from 'styled-components'

const StyledRoot = styled.div`
  box-sizing: border-box;
  width:100vw;
  height: 100%;
  position: relative;
  background: rgba(175, 33, 33, 0);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  padding-right:7.91665vw;
`
function App() {
  const dispatch = useDispatch()
  const width = window.outerWidth
  const height = window.outerHeight
  const rootRef:any = useRef()
  const [scale, setScale] = useState<number>()
  const [loading, setLoading] = useState<boolean>(true)
  const updateSize = () => {
    const scaled = Math.min(
      rootRef.current.getBoundingClientRect().width / width,    
      rootRef.current.getBoundingClientRect().height / height
    )
    setScale(scaled)
    setLoading(false)
   };
   
  useEffect(() => {
    window.addEventListener('resize', updateSize);
    return () => {
      window.addEventListener('resize', updateSize);
    };
  },[]);
  useEffect(() => {
    updateSize()
  },[]);
  
  useEffect(() => {
    dispatch(setTeams(addData.teams))
    dispatch(setPages(addData.pages))
    dispatch(setFilters(addData.filters))
    dispatch(setStages(addData.stages))
    dispatch(setTournament(addData.tournament))
  }, [])
  if(loading) return <StyledRoot ref={rootRef}></StyledRoot>
  return (
    <StyledRoot ref={rootRef}>
      <div 
        style={{transform :`scale(${scale})`}}
        className='spec'
      >
        <QueryParamProvider adapter={ReactRouter6Adapter}>
          <ThemeProvider theme={theme}>
              <Header/>
              <RootNavigator/>
          </ThemeProvider>
        </QueryParamProvider>
      </div>
    </StyledRoot>
  );
}

export default App;
