import React, {useEffect, FC} from 'react';
import {
  Container,
  FilterWrapper,
  NavWrapper,
  DivisionWrapper,
  MatchesWrapper,
} from './styles'
import { Button, DropDown, FilterComponent } from '../../components';
import { useQueryParam, StringParam } from 'use-query-params';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

import MatchesList from './matchesList'
const MatchesPage:FC = () => {
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
            <DivisionWrapper>
              <Button
                key={item.id}
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
      <MatchesList/>
    </Container>
  );
}
 
export default MatchesPage;