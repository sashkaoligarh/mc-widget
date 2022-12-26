import styled from 'styled-components'

type NavComponentProps = {
  active:boolean
}

export const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  padding: ${({theme}) => theme.spacing.big};
  border-radius: 8px 8px 0px 0px;
  height: 148px;
  width: 476px;
  background-color: ${({theme}) => theme.palette.surface.onBackground};
`

export const TopComponent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const NavWrapper = styled.div`
  border-radius: 100px;
  margin-top: 25px;
  display: flex;
  flex-direction: row;
  padding-top: ${({theme}) => theme.spacing.small};
  padding-bottom: ${({theme}) => theme.spacing.small};
  height: 48px;
  width: 100%;
  background-color: ${({theme}) => theme.palette.surface.background};
  justify-content: space-evenly;
  box-sizing: border-box;
`
export const Close = styled.img`
  &:hover{
      cursor: pointer;
  }
`
export const NavComponent = styled.div<NavComponentProps>`
  color: ${({active, theme}) => active ? theme.palette.secondary.light : theme.palette.secondary.main};
  background-color: ${({active, theme}) => active ? theme.palette.surface.onBackground : 'none'};
  border-radius: 100px;
  height: 32px;
  width:100%;
  margin: 0 8px 0 8px;
  display:flex;
  justify-content: center;
  align-items: center;
  &:hover{
    cursor: pointer;
    color: ${({theme}) => theme.palette.secondary.light};
  }
`