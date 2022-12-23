import styled from 'styled-components'


export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: ${({theme}) => theme.palette.secondary.dark};
  width: 100%;
`