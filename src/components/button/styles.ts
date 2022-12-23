import styled from "styled-components";

type ButtonProps = {
  isIcon?:boolean;
  active:boolean;
}
export const Button = styled.button<ButtonProps>`
  box-sizing: border-box;
  height: ${({isIcon}) => isIcon ? '36px' : '28px'};
  width: ${({isIcon}) => isIcon ? '36px' : ''};
  border-radius: ${({isIcon}) => isIcon ? '4px' : '100px'};
  padding: ${({isIcon}) => isIcon ? '' : '2px 24px'};
  border: 1px solid ${({theme, active}) => active ? theme.palette.secondary.light : theme.palette.secondary.main};
  color: ${({theme, active}) => active ? theme.palette.surface.onBackground : theme.palette.secondary.main};
  background-color: ${({theme, active}) => active ? theme.palette.secondary.light : 'rgba(28,28,28,0)'};
  &:hover{
    cursor: pointer;
    color: ${({theme, active}) => active ? 'none' : theme.palette.secondary.light};
    border: 1px solid ${({theme, active}) => active ? 'none' : theme.palette.secondary.light};
  }
  &:active{
    background-color: ${({theme}) => theme.palette.secondary.light};
    border: 1px solid ${({theme}) => theme.palette.secondary.light};
    color: ${({theme, active}) => theme.palette.surface.onBackground};
  }
`