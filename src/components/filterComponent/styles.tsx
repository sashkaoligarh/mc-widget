import styled from 'styled-components'


export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  /* justify-content: space-between; */
  color: ${({theme}) => theme.palette.secondary.dark};
  width: 100%;
`