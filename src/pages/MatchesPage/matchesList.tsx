import React, {useEffect, useState} from 'react';
import {MatchCard, Typography} from '../../components'
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
import { checkDifferenceMonth, checkDifferenceWeek} from '../../functions';

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

  const differenceMonth = (item1:any, item2:any) => {
    return (
      <>
        {checkDifferenceMonth(item1, item2) ? 
          <DifferenceMonthWrappper>
            <DifferenceMonthComponent>
              {checkDifferenceMonth(item1, item2)}
              {/* 00 Month / Week 0 */}
            </DifferenceMonthComponent>
          </DifferenceMonthWrappper>
        : 
          checkDifferenceWeek(item1, item2)  ? 
            <DifferenceMonthWrappper>
              <DifferenceMonthComponent>
                {checkDifferenceWeek(item1, item2)}
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
            differenceMonth(
              matches?.[index]?.startAt,
              matches?.[0]?.startAt
            )
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