import styled from 'styled-components'

type DropDownProps = {
  active:boolean;
}
export const Container = styled.div`
  position: relative;
`
export const DropDown = styled.div<DropDownProps>`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 192px;
  height: 36px;
  background-color: ${({theme}) => theme.palette.surface.onBackground};
  border-radius: ${({active}) => active ? '4px 4px 0px 0px' : '4px'};
  padding: 6px 24px 6px 24px;
  border: none;
  color: ${({theme}) => theme.palette.secondary.main};
  &:hover{
    cursor: pointer;
    color: ${({theme}) => theme.palette.secondary.light};
  }
`

export const ImgArrow = styled.img`
  
`

export const OptionsWrapper = styled.div`
  top:36px;
  position: absolute;
  display: flex;
  flex-direction: column;
  border-radius: 0px 0px 4px 4px;
  background-color: ${({theme}) => theme.palette.surface.onBackground};
  width: 192px;
`
export const Option = styled.div`
  box-sizing: border-box;
  display: flex;
  padding: 10px 24px;
  &:hover{
    cursor: pointer;
  }
`