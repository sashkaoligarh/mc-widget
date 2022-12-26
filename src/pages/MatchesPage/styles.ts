import styled from 'styled-components'
import { Typography } from '../../components'

export const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  padding:${({theme}) => theme.spacing.big};
  border-radius: 0px 0px 8px 8px;
  background-color: ${({theme}) => theme.palette.surface.background};
  /* height: 100%;
  width: calc((476 / 1920) * 100vw);
  height: calc((884 / 1080) * 100vh); */
  width: 476px;
  height: 736px;
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
`
export const DivisionWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width:100%;
  margin-left: 12px;
`

export const MatchesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 24px;
`
export const NoDataWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 56px;
  position: relative;
`
export const NoDataImg = styled.img`
  
`

export const NoDataInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 138px;
  height: 112px;
  position: absolute;
`

export const NoDataHeader = styled(Typography.HeadlineLarge)`
  text-align: center;
  box-sizing: border-box;
  width: 138px;
  height: 32px;
  background-color: ${({theme}) => theme.palette.surface.onBackground};
  border-radius: 4px 4px 0px 0px;
  color:${({theme}) => theme.palette.secondary.main};
  padding: 4px 16px;
`

export const NoDataBody = styled(Typography.BodyLarge2)`
  text-align: center;
  box-sizing: border-box;
  border: 1px solid ${({theme}) => theme.palette.surface.onBackground};
  padding: 8px;
  width: 138px;
  height: 80px;
  background-color: ${({theme}) => theme.palette.surface.background};
  border-radius: 0px 0px 4px 4px;
  color:${({theme}) => theme.palette.secondary.dark};

`

export const DifferenceMonthComponent = styled(Typography.BodyLarge1)`
  color:${({theme}) => theme.palette.secondary.dark};
  margin:20px 0 20px 0;
  text-transform: capitalize;
`

export const DifferenceMonthWrappper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  `