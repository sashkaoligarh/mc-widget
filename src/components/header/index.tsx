import * as React from 'react';
import icons from '../../images';
import Typography from '../typography';
import {
  Container,
  TopComponent,
  NavWrapper,
  NavComponent,
} from './styles'


const Header:React.FC = () => {
  return (
    <Container>
      <TopComponent>
        <img src={icons.LogoMainCast}/>
        <img src={icons.CloseIcon}/>
      </TopComponent>
      <NavWrapper>
        <NavComponent active={true}>
          <Typography.HeadlineLarge>
            Matches
          </Typography.HeadlineLarge>
        </NavComponent>
        <NavComponent active={false}>
          <Typography.HeadlineLarge>
            Info
          </Typography.HeadlineLarge>
        </NavComponent>
      </NavWrapper>
    </Container>
  );
}
 
export default Header;