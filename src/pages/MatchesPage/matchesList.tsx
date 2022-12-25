import React, {useEffect, useState} from 'react';
import {MatchCard} from '../../components'
import {
  MatchesWrapper,
  NoDataWrapper,
  NoDataImg,
  NoDataInfo,
  NoDataHeader,
  NoDataBody,
  DifferenceMonthComponent,
  DifferenceMonthWrappper,
} from './styles'
import {useSelector, useDispatch} from 'react-redux'
import { RootState } from '../../redux/store';
import { useQueryParam, StringParam } from 'use-query-params';
import { setMatchesView } from '../../redux/slices/additionalDataSlice';
import icons from '../../images';
import { DateTime, Interval } from "luxon";
import humanizeDuration from "humanize-duration"

const MatchesList = () => {
  const dispatch = useDispatch()
  const [loading, setLoading] = useState<boolean>(false)
  const [stages, setStages] = useQueryParam('stages', StringParam);
  const [filter, setFilter] = useQueryParam('filter', StringParam);
  const state = useSelector((state:RootState) => state)
  const matches = useSelector((state:RootState) => state.additionalData.matchesToView) 
  
  useEffect(() => {
    if(stages && filter) {
      let stage = state.additionalData.stages.find((item:any) => item.title === stages)
      let matches = state.additionalData.filters.find((item:any) => item.name === filter)?.matches
      dispatch(setMatchesView({stage:stage.id, matches}))
    }
  },[stages, filter])

  const differenceMonth = (item1:any) => {
    const start = new Date()
    const finish = DateTime.fromISO(item1);
    const weekMilliseconds = 7*24*60*60*1000;
    const formatted = Interval
    .fromDateTimes(start, finish)
    .toDuration()
    .valueOf()
    return (
      <>
        {formatted > weekMilliseconds ? 
          <DifferenceMonthWrappper>
            <DifferenceMonthComponent>
              {humanizeDuration(formatted, { largest: 2 })}
            </DifferenceMonthComponent>
          </DifferenceMonthWrappper>
        : 
          null 
        }
      </>
    )
  }

  if(loading) return (
    <>
      
    </>
  )
  if (matches.length === 0) return (
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
      {matches.map((item:any, index:any) => (
        <div style={{width:'100%'}} key={item.id} >
          {
            differenceMonth(matches?.[index]?.startAt)
          }
          <MatchCard
            team1={item.teams[0]}
            team2={item.teams[1]}
            id={item.id}
          />
        </div>
      ))}
    </MatchesWrapper>
   );
}
 
export default MatchesList;