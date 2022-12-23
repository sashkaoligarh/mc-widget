import { FC, useState } from 'react'
import {Button} from './styles'
import Typography from '../typography'

type ButtonProps = {
  title:string,
  onClick:() => void;
  withArrow?:boolean;
  isIcon?:boolean;
  active:boolean;
}

const ButtonIcon:FC<ButtonProps> = (props) => {
  const {
    title,
    onClick,
    withArrow,
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