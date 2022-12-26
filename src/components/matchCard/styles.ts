import styled from 'styled-components'
import Typography from '../typography'
type ScoreProps = {
  status:boolean
}

export const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 12px;
  width: 100%;
  height: 112px;
  border-radius: 2px;
  margin-bottom: 4px;
  background-color: ${({theme}) => theme.palette.surface.onBackground};
`
export const MissingContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px;
  width: 100%;
  height: 112px;
  border: 1px dashed #1D1F2A;
  border-radius: 2px;
  margin-bottom: 4px;
`
export const CardInfoTopComponent = styled.div`
  color:${({theme}) => theme.palette.secondary.light};
  display: flex;
  justify-content: center;
`
export const CardInfoComponent = styled.div`
  color:${({theme}) => theme.palette.secondary.dark};
  display: flex;
  justify-content: center;
`
export const PairParticipants = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  justify-content: center;
  color:${({theme}) => theme.palette.secondary.light};
`
export const Participant = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  justify-content:right;
`
export const ParticipantTitle = styled(Typography.BodyLarge1)`
  max-width:94px;
`

export const VersusImg = styled.img`
  width: 24px;
  height:24px;
  margin: 0 12px 0 12px;
`
export const DashImg = styled.img`
  width: 24px;
  height:24px;
  margin: 0 19px 0 19px;
`


export const Score = styled.div<ScoreProps>`
  color: ${({status, theme}) => status ? theme.palette.success : theme.palette.error};
  margin: 0 12px 0 12px;
`
export const UpcomingTime = styled(Typography.Label)`
  box-sizing: border-box;
  padding: 2px 4px;
  min-width: 72px;
  height: 16px;
  background: ${({theme}) => theme.palette.surface.outline};
  color: ${({theme}) => theme.palette.secondary.light};
  border-radius: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const LiveBox = styled(Typography.Label)`
  box-sizing: border-box;
  padding: 2px 4px;
  width: 27px;
  height: 16px;
  background-color: ${({theme}) => theme.palette.primary.enabled};
  border-radius: 2px;
  color: ${({theme}) => theme.palette.secondary.light};
`