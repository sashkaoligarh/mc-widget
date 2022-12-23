import styled from 'styled-components'


export const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  padding:24px;
  border-radius: 0px 0px 8px 8px;
  background-color: ${({theme}) => theme.palette.surface.background};
  height:calc(100vh - 149px);
  width: 100%;
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
  justify-content: space-around;
  width:100%;
`