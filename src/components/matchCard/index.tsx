import { FC } from 'react'
import { useSelector } from 'react-redux'
import { timeConverterMMHHMM } from '../../functions'
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
  Score,
  ParticipantTitle,
  UpcomingTime,
  LiveBox,
  MissingContainer,
  VersusImg,
  DashImg
} from './styles'
import { DateTime, Interval } from "luxon";
import TeamLogo from '../teamLogo'

type CardProps = {
  id:number,
  team1: any,
  team2: any,
}

const MatchCard:FC<CardProps> = ({id, team1, team2}) => {
  const match = useSelector((state:RootState) => state.matchesData.matches.find((item:any) => item.id === id))
  const participant1 = useSelector((state:RootState) => state.additionalData.teams.find((item:any) => item.id === team1.id))
  const participant2 = useSelector((state:RootState) => state.additionalData.teams.find((item:any) => item.id === team2.id))
  const discipline = useSelector((state:RootState) => state.additionalData.tournament.discipline)
  const timerDown = useCountdown(match.startAt)
  const checkActiveCountDown = (dateIn:any) => {
    const start = new Date()
    const finish = DateTime.fromISO(dateIn);
    const dayMilliseconds = 12*60*60*1000;
    const formatted = Interval
    .fromDateTimes(start, finish)
    .toDuration()
    .valueOf()
    return formatted > dayMilliseconds 
  }
  if(!match.title) return (
    <MissingContainer>
      <DashImg  src={icons.MissingIcon}/>
      <VersusImg  src={icons.IconVs}/>
      <DashImg  src={icons.MissingIcon}/>
    </MissingContainer>
  )
  return (
    <Container key={id}>
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
          <TeamLogo img={participant1.logo} isDota={discipline.alias !== 'CSGO'} />
          <Score status={true}>
            <Typography.HeadlineLarge>
              {team1.score}
            </Typography.HeadlineLarge>
          </Score>
        </Participant>
        <VersusImg  src={icons.IconVs}/>
        <Participant style={{justifyContent:'left'}}>
          <Score status={false}>
            <Typography.HeadlineLarge>
              {team2.score}
            </Typography.HeadlineLarge>
          </Score>
          <TeamLogo img={participant2.logo} isDota={discipline.alias !== 'CSGO'} />
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