import { FC } from 'react'
import {Button} from './styles'
import Typography from '../typography'

type ButtonProps = {
  title:string,
  onClick:() => void;
  isIcon?:boolean;
  active:boolean;
}

const ButtonIcon:FC<ButtonProps> = (props) => {
  const {
    title,
    onClick,
    isIcon,
    active
  } = props
  
  return (
    <Button active={active} isIcon={isIcon} onClick={onClick}>
      <Typography.BodyLarge1>
        {title}
      </Typography.BodyLarge1>
    </Button>
  )
}

export default ButtonIcon