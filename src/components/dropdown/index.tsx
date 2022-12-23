import React, {FC, useRef, useState} from 'react';
import {DropDown, OptionsWrapper, Option, Container, ImgArrow} from './styles'
import icons from '../../images';
import Typography from '../typography';

const StyledDropDown:FC = () => {
  const dropDownRef = useRef()
  const [active, setActive] = useState<boolean>(false)
  return (
    <Container>
      <DropDown active={active} onClick={() => setActive(!active)}>
        <Typography.BodyLarge1>
          kek
        </Typography.BodyLarge1>
        <ImgArrow src={active ? icons.ArrowUp : icons.ArrowDown}/>
      </DropDown>
      {active ? 
        <OptionsWrapper>
          <Option>
            <Typography.BodyLarge1>
              kek
            </Typography.BodyLarge1>
          </Option>
        </OptionsWrapper>
      : null}
    </Container>
  )
}

export default StyledDropDown