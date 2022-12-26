import styled from 'styled-components'


export const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  padding:24px;
  border-radius: 0px 0px 8px 8px;
  background-color: ${({theme}) => theme.palette.surface.background};
  height:calc(100vh - 149px);
  width: 476px;
  height: 736px;
  overflow-y: scroll;
  overflow-x: hidden;
  ::-webkit-scrollbar {
    width: 6px;
  }
  ::-webkit-scrollbar-thumb {
    box-shadow: inset 0 0 2px 2px ${({theme}) => theme.palette.error};
    border-width: 0 2px 0 0;
    border-color: rgba(28,28,28,0);
    border-style: solid;
    border-radius: 4px;
  }
  ::-webkit-scrollbar-track {
    margin: 24px 0 24px 0;
  }
  ::-webkit-scrollbar-button{
    display: none;
  }

`