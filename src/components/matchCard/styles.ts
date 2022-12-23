import styled from 'styled-components'


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 12px;
  width: 428px;
  height: 112px;
  background-color: ${({theme}) => theme.palette.surface.onBackground};
`
export const CardInfoComponent = styled.div`

`
export const PairParticipants = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
export const LogoImg = styled.img`
`
// export const 