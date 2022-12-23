import React, {FC, useRef, useState, useEffect} from 'react';
import {DropDown, OptionsWrapper, Option, Container, ImgArrow} from './styles'
import icons from '../../images';
import Typography from '../typography';

type DropdownProps = {
  data: any[],
  selectedValue:any;
  onChange: (selected:any) => void;
}

const StyledDropDown:FC<DropdownProps> = ({data, selectedValue, onChange}) => {
  const dropDownRef:any = useRef()
  const [active, setActive] = useState<boolean>(false)

  useEffect(() => {
		document.addEventListener('click', handleClickOutside, true);
		return () => {
				document.removeEventListener('click', handleClickOutside, true);
		};
  });

  const handleClickOutside = (event:any) => {
    if (dropDownRef && !dropDownRef.current.contains(event.target)){
      setActive(false)
    }
  }
  
  const changeValue = (value:any) => {
    onChange(value)
    setActive(false)
  }
  return (
    <Container ref={dropDownRef}>
      <DropDown active={active} onClick={() => setActive(!active)}>
        <Typography.BodyLarge1>
          {selectedValue}
        </Typography.BodyLarge1>
        <ImgArrow src={active ? icons.ArrowUp : icons.ArrowDown}/>
      </DropDown>
      {active ? 
        <OptionsWrapper>
          {data.map((item:any) => (
            <Option onClick={() => changeValue(item.title)} key={item.id}>
              <Typography.BodyLarge1>
                {item.title}
              </Typography.BodyLarge1>
            </Option>
          ))}
        </OptionsWrapper>
      : null}
    </Container>
  )
}

export default StyledDropDown