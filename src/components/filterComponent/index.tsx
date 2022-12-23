import React, {FC} from 'react';
import Typography from '../typography';
import {Container} from './styles'
type FilterProps = {
  children:any,
  title:string,
}

const FilterComponent:FC<FilterProps> = ({children, title}) => {
  return (
    <Container>
      <Typography.BodyLarge2 style={{marginRight:'12px'}}>
        {title}:
      </Typography.BodyLarge2>
      {children}
    </Container>
  );
}
 
export default FilterComponent;