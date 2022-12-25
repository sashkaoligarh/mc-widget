import {default as data} from './widget_data.json';

type ApiProps = {
  matches?:string,
  stage?:string,
}
const getMatchesWithFilter = async (props:ApiProps) => {
  const sorted =  data.tournament.matches.sort((a:any, b:any) => {
    const first: any = new Date(a.startAt)
    const second: any = new Date(b.startAt)
    return  first - second
  })
  return sorted
  .filter((x:any) => props.matches?.includes(x.id))
  .filter((x:any) => props.stage === x.stageId)
}
export default getMatchesWithFilter