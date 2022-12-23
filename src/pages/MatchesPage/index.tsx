import * as React from 'react';
import {
  Container,
  FilterWrapper,
  NavWrapper,
  DivisionWrapper,
  MatchesWrapper,
} from './styles'
import { Button, DropDown, FilterComponent, MatchCard } from '../../components';
import { useQueryParam, StringParam } from 'use-query-params';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

const MatchesPage:React.FC = () => {
  const [stages, setStages] = useQueryParam('stages', StringParam);
  const [division, setDivision] = useQueryParam('division', StringParam);
  const [filter, setFilter] = useQueryParam('filter', StringParam);
  const state:any = useSelector((state:RootState) => state)
  console.log('state', state);
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
          <DivisionWrapper>
            {state.additionalData.division.map((item:any) => (
              <Button
                key={item.id}
                onClick={() => setDivision(item.name)}
                title={item.name}
                isIcon={true}
                active={division === item.name}
              />
            ))}
          </DivisionWrapper>
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
      <MatchesWrapper>
        {state.matchesData.matches.map((item:any) => (
          <MatchCard
            team1={item.teams[0]}
            team2={item.teams[1]}
            key={item.id} id={item.id}
          />
        ))}
      </MatchesWrapper>
    </Container>
  );
}
 
export default MatchesPage;