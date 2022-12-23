import { FC } from 'react'
import Typography from '../typography'
import {
  Container,
  CardInfoComponent,
  PairParticipants
} from './styles'

type CardProps = {

}

const MatchCard:FC<CardProps> = (props) => {
  return (
    <Container>
      <CardInfoComponent>
        <Typography.BodyLarge2>
          Region / Stage / Format
        </Typography.BodyLarge2>
      </CardInfoComponent>


      
      <PairParticipants>
        <Typography.BodyLarge1 style={{textAlign:'right'}}>
          Participant's Name
        </Typography.BodyLarge1>

        <Typography.BodyLarge1>
          Participant's Name
        </Typography.BodyLarge1>
      </PairParticipants>



      <CardInfoComponent>
        <Typography.BodyLarge2>
          00 Month 00:00 / channel_0
        </Typography.BodyLarge2>
      </CardInfoComponent>
    </Container>
  )
}

export default MatchCard