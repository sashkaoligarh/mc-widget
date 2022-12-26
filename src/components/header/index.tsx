import * as React from 'react';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import icons from '../../images';
import { RootState } from '../../redux/store';
import Typography from '../typography';
import {
  Container,
  TopComponent,
  NavWrapper,
  NavComponent,
  Close,
} from './styles'


const Header:React.FC = () => {
  const pages = useSelector((state:RootState) => state.additionalData.pages)
  const navigate = useNavigate()
  const location = useLocation()

  return (
    <Container>
      <TopComponent>
        <img src={icons.LogoMainCast}/>
        <Close src={icons.CloseIcon}/>
      </TopComponent>
      <NavWrapper>
        {pages.map((item) => (
          <NavComponent
            key={item.name}
            onClick={() => navigate(item.name)}
            active={location.pathname.replace("/", '') === item.name}
            
          >
            <Typography.HeadlineLarge>
              {item.title}
            </Typography.HeadlineLarge>
          </NavComponent>
        ))}
      </NavWrapper>
    </Container>
  );
}
 
export default Header;