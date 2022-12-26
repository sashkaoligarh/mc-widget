import React, {useEffect, FC, useState} from 'react';
import {
  Container,
  FilterWrapper,
  NavWrapper,
  DivisionWrapper,
} from './styles'
import { Button, DropDown, FilterComponent } from '../../components';
import { useQueryParam, StringParam } from 'use-query-params';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import {setMatches} from '../../redux/slices/matchesSlice'
import MatchesList from './matchesList'
import getMatchesWithFilter from '../../api/matchesService';

const MatchesPage:FC = () => {
  const dispatch = useDispatch()
  const [loading, setLoading] = useState<boolean>(true)
  const [stages, setStages] = useQueryParam('stages', StringParam);
  const [division, setDivision] = useQueryParam('division', StringParam);
  const [filter, setFilter] = useQueryParam('filter', StringParam);
  const state:RootState = useSelector((state:RootState) => state)
  const filters:any = useSelector((state:RootState) => state.additionalData.filters)
  const stageList:any = useSelector((state:RootState) => state.additionalData.stages)
  useEffect(() => {
    setStages(state.additionalData.stages[0]?.title)
    setDivision('I')
    setFilter(state.additionalData.filters.find((item) => item.default === true)?.name)
  },[filters, stageList])

  useEffect(() => {
    if(stages && filter) {
      let stage = state.additionalData.stages.find((item:any) => item.title === stages)
      let matches = state.additionalData.filters.find((item:any) => item.name === filter)?.matches
      getMatchesWithFilter({stage:stage?.id, matches})
      .then((res) => {
        dispatch(setMatches(res))
      })
      .catch((e) => {
        console.log('error get matches', e);
      })
      .finally(() => {
        setLoading(false)
      })
    }
  },[stages, filter])

  if(state.additionalData.stages.length === 0) return <></>
  return (
    <Container>
      <FilterWrapper>
        <FilterComponent title={'Stages'}>
          <DropDown
            data={state.additionalData.stages}
            onChange={setStages}
            selectedValue={stages}
          />
        </FilterComponent>
        <FilterComponent title={'Division'}>
          {state.additionalData.division.map((item:any) => (
            <DivisionWrapper key={item.id}>
              <Button
                onClick={() => setDivision(item.name)}
                title={item.name}
                isIcon={true}
                active={division === item.name}
              />
            </DivisionWrapper>
          ))}
        </FilterComponent>
      </FilterWrapper>
      <NavWrapper>
        {state.additionalData.filters.map((item:any) => (
          <Button
            active={filter === item.name}
            key={item.title}
            onClick={() => setFilter(item.name)}
            title={item.title}
          />
        ))}
      </NavWrapper>
      <MatchesList loading={loading}/>
    </Container>
  );
}
 
export default MatchesPage;