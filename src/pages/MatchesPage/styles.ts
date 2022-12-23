import styled from 'styled-components'
import palette from '../../theme/palette'


export const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  padding:24px;
  border-radius: 0px 0px 8px 8px;
  background-color: ${({theme}) => theme.palette.surface.background};
  height:calc(100vh - 149px);
  width: 100%;
  overflow-y: scroll;
  overflow-x: hidden;

  ::-webkit-scrollbar {
    width: 6px;
  }
  ::-webkit-scrollbar-thumb {
    box-shadow: inset 0 0 2px 2px ${({theme}) => theme.palette.error};
    border-width: 0 2px 0 0;
    border-color: rgba(28,28,28,0);
    border-style: solid;
    border-radius: 4px;
  }
  ::-webkit-scrollbar-track {
    margin: 24px 0 24px 0;
  }
  ::-webkit-scrollbar-button{
    display: none;
  }

`
export const FilterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`

export const NavWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-top: 24px;
  margin-bottom: 24px;
`
export const DivisionWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width:100%;
`

export const MatchesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  

`