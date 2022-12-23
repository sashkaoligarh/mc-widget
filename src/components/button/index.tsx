import { FC } from 'react'
import {Button} from './styles'
import Typography from '../typography'
type ButtonProps = {
  title:string,
  onClick:() => void;
  withArrow?:boolean;
}

const StyledButton:FC<ButtonProps> = (props) => {
  const {
    title,
    onClick,
    withArrow,
  } = props
  
  return (
    <Button onClick={onClick}>
      <Typography.BodyLarge1>
        {title}
      </Typography.BodyLarge1>
    </Button>
  )
}

export default StyledButton