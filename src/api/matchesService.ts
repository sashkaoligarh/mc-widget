import {default as data} from './widget_data.json';


const sorted =  data.tournament.matches.sort((a:any, b:any) => {
  const first: any = new Date(a.startAt)
  const second: any = new Date(b.startAt)
  return  first - second
})
export default sorted