import {default as data} from './widget_data.json';

const addData = {
  teams:data.tournament.teams,
  pages:data.pages,
  filters:data.tournament.filters,
  stages:data.tournament.stages,
  tournament: {
    title:data.tournament.title,
    logo:data.tournament.logo,
    background:data.tournament.background,
    startOn:data.tournament.startOn,
    endOn:data.tournament.endOn,
    prizePool:data.tournament.prizePool,
    discipline:data.tournament.discipline,
  } 
}

export default addData