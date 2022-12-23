import { FC, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { timeConverterMMHHMM, timeConverterHHMMSS } from '../../functions'
import icons from '../../images'
import { RootState } from '../../redux/store'
import Typography from '../typography'
import {
  Container,
  CardInfoComponent,
  CardInfoTopComponent,
  PairParticipants,
  Participant,
  LogoImg,
  Score,
  ParticipantTitle,
  UpcomingTime
} from './styles'

type CardProps = {
  id:number,
  team1: any,
  team2: any,
}

const MatchCard:FC<CardProps> = ({id, team1, team2}) => {
  const match = useSelector((state:RootState) => state.matchesData.matches.find((item:any) => item.id === id))
  const participant1 = useSelector((state:RootState) => state.additionalData.teams.find((item:any) => item.id === team1.id) )
  const participant2 = useSelector((state:RootState) => state.additionalData.teams.find((item:any) => item.id === team2.id) )

  return (
    <Container>
      <CardInfoTopComponent>
        <Typography.BodyLarge2>
          {match.title}
        </Typography.BodyLarge2>
      </CardInfoTopComponent>


      
      <PairParticipants>
        <Participant>
          <ParticipantTitle style={{textAlign:'right'}}>
            {participant1.name}
          </ParticipantTitle>
          <LogoImg src={participant1.logo}/>
          <Score status={true}>
            <Typography.HeadlineLarge>
              {team1.score}
            </Typography.HeadlineLarge>
          </Score>
        </Participant>
        <img  src={icons.IconVs}/>
        <Participant>
          <Score status={false}>
            <Typography.HeadlineLarge>
              {team2.score}
            </Typography.HeadlineLarge>
          </Score>
          <LogoImg src={participant2.logo}/>
          <ParticipantTitle>
            {participant2.name}
          </ParticipantTitle>
        </Participant>
      </PairParticipants>



      <CardInfoComponent>
        <UpcomingTime>
          {timeConverterHHMMSS(match.startAt)} 
        </UpcomingTime>
        <Typography.BodyLarge2>
        &nbsp;{match.channel}
        </Typography.BodyLarge2>
        {/* <Typography.BodyLarge2>
          {timeConverterMMHHMM(match.startAt)} / {match.channel}
        </Typography.BodyLarge2> */}
      </CardInfoComponent>
    </Container>
  )
}

export default MatchCard