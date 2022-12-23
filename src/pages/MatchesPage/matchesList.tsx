import React, {useEffect} from 'react';
import {MatchCard} from '../../components'
import {MatchesWrapper} from './styles'
import {useSelector, useDispatch} from 'react-redux'
import { RootState } from '../../redux/store';
import { useQueryParam, StringParam } from 'use-query-params';
import { setMatchesView } from '../../redux/slices/additionalDataSlice';

const MatchesList = () => {
  const dispatch = useDispatch()
  const [stages, setStages] = useQueryParam('stages', StringParam);
  const [filter, setFilter] = useQueryParam('filter', StringParam);
  const state = useSelector((state:RootState) => state)
  useEffect(() => {
    if(stages && filter) {
      let stage = state.additionalData.stages.find((item:any) => item.title === stages)
      let matches = state.additionalData.filters.find((item:any) => item.name === filter)?.matches
      dispatch(setMatchesView({stage:stage.id, matches}))
    }
  },[stages, filter])

  return ( 
    <MatchesWrapper>
      {state.additionalData.matchesToView.map((item:any) => (
        <MatchCard
          team1={item.teams[0]}
          team2={item.teams[1]}
          key={item.id} id={item.id}
        />
      ))}
    </MatchesWrapper>
   );
}
 
export default MatchesList;