import styled from "styled-components";


export const Button = styled.button`
  height: 28px;
  border: 1px solid ${({theme}) => theme.palette.secondary.main};
  border-radius: 100px;
  padding: 2px 24px;
  background-color: rgba(28,28,28,0);
  color: ${({theme}) => theme.palette.secondary.main};
  &:hover{
    cursor: pointer;
    color: ${({theme}) => theme.palette.secondary.light};
    border: 1px solid ${({theme}) => theme.palette.secondary.light};

  }
  &:active{
    background-color: ${({theme}) => theme.palette.secondary.light};;
    border: 1px solid ${({theme}) => theme.palette.secondary.light};
    color: ${({theme}) => theme.palette.surface.onBackground};
  }
`