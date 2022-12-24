import React, {useEffect, useState} from 'react';
import {MatchCard} from '../../components'
import {
  MatchesWrapper,
  NoDataWrapper,
  NoDataImg,
  NoDataInfo,
  NoDataHeader,
  NoDataBody,
} from './styles'
import {useSelector, useDispatch} from 'react-redux'
import { RootState } from '../../redux/store';
import { useQueryParam, StringParam } from 'use-query-params';
import { setMatchesView } from '../../redux/slices/additionalDataSlice';
import icons from '../../images';

const MatchesList = () => {
  const dispatch = useDispatch()
  const [loading, setLoading] = useState<boolean>(false)
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
  console.log('matches', state.additionalData);
  if(loading) return (
    <>
    
    </>
  )
  if (state.additionalData.matchesToView.length === 0) return (
    <NoDataWrapper>
      <NoDataImg src={icons.NoDataIcon}/>
      <NoDataInfo>
        <NoDataHeader>
          No matches!
        </NoDataHeader>
        <NoDataBody>
          There are no
          matches in this tab,
          but you can always
          look in others!
        </NoDataBody>
      </NoDataInfo>
    </NoDataWrapper>
  )
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