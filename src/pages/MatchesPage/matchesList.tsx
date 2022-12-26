import React, { FC, useState } from 'react';
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
import {useSelector} from 'react-redux'
import { RootState } from '../../redux/store';
import icons from '../../images';
import { DateTime, Interval } from "luxon";
import humanizeDuration from "humanize-duration"

type ListProps = {
  loading:boolean,
}

const MatchesList:FC<ListProps> = ({loading}) => {
  const matches = useSelector((state:RootState) => state.matchesData.matches) 

  const differenceMonth = (item1:any, item2:any) => {
    const dateNow = new Date()
    const finish = DateTime.fromISO(item1);
    const start = DateTime.fromISO(item2);
    const weekMilliseconds = 7*24*60*60*1000;
    const formattedDifferenceMatches = Interval
    .fromDateTimes(start, finish)
    .toDuration()
    .valueOf()
    const formatted = Interval
    .fromDateTimes(dateNow, finish)
    .toDuration()
    .valueOf()
    return (
      <>
        {formattedDifferenceMatches > weekMilliseconds ? 
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
            differenceMonth(
              matches?.[index]?.startAt,
              matches?.[index - 1]?.startAt
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