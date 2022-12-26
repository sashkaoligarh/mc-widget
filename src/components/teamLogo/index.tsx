import React, {FC} from 'react';
import {LogoImg} from './styles'
import icons from '../../images';
type LogoCompponentProps = {
  img:string,
  isDota:boolean
}
const TeamLogo:FC<LogoCompponentProps> = ({img, isDota}) => {
  return (
    <>
      {img ? 
        <LogoImg src={img}/>
      :
        isDota ?
          <LogoImg src={icons.NoTeamImageDota}/>
        :
        <LogoImg src={icons.NoTeamImageCsGo}/>
      }
    </>
  );
}
 
export default TeamLogo;