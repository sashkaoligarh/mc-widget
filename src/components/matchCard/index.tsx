import { FC, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { timeConverterMMHHMM, checkActiveCountDown } from '../../functions'
import { useCountdown } from '../../functions/useCountDown'
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
  UpcomingTime,
  LiveBox
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
  const timerDown = useCountdown(match.startAt)
  
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
        {match.status === 'live' ? 
          <>
            <LiveBox>
              LIVE
            </LiveBox>
            <Typography.BodyLarge2>
              &nbsp;{match.channel}
            </Typography.BodyLarge2>
          </>
        :
          null
        }
        {match.status === 'future' ? 
          <>
            {checkActiveCountDown(match.startAt) ? 
            <Typography.BodyLarge2>
            {timeConverterMMHHMM(match.startAt)}&nbsp; / 
            &nbsp;{match.channel}
          </Typography.BodyLarge2>
            :

            <UpcomingTime>

              {timerDown}
            </UpcomingTime>
            }
            <Typography.BodyLarge2>
              &nbsp;{match.channel}
            </Typography.BodyLarge2>
          </>
        :
          null
        }
        {match.status === 'past' ? 
          <Typography.BodyLarge2>
            {timeConverterMMHHMM(match.startAt)}&nbsp; / 
            &nbsp;{match.channel}
          </Typography.BodyLarge2>
        :
          null
        }
      </CardInfoComponent>
    </Container>
  )
}

export default MatchCard