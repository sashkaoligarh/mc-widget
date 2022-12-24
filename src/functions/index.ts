export const  timeConverterMMHHMM = (timestamp:any) => {
  const utc = Date.parse(timestamp)
  const a = new Date(utc);
  const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  return `${a.getDate()}  ${months[a.getMonth()]}   
  ${a.getHours().toString().length > 1 ?
    a.getHours()
    : 
    '0' + (a.getHours())
  }
  : 
  ${a.getMinutes().toString().length > 1 ?
    a.getMinutes()
    : 
    '0' + (a.getMinutes())
  }`;
}

export const  timeConverterHHMMSS = (timestamp:any) => {
  const utc = Date.parse(timestamp)
  const a = new Date(utc);
  return ` 
    ${a.getHours().toString().length > 1 ?
      a.getHours()
      : 
      '0' + (a.getHours())
    }h
    : 
    ${a.getMinutes().toString().length > 1 ?
      a.getMinutes()
      : 
      '0' + (a.getMinutes())
    }m
    :
    ${a.getSeconds().toString().length > 1 ?
      a.getSeconds()
      : 
      '0' + (a.getSeconds())
    }s
  `
}



export const checkActiveCountDown = (dateIn:any) => {
  const dateNow:any = new Date()
  const dateTo:any = Date.parse(dateIn)
  const newDateTo:any = new Date(dateTo)
  const dayMilliseconds = 12*60*60*1000;
  const toCheck:any = newDateTo - dayMilliseconds
  return toCheck > dateNow 
}

export const checkDifferenceMonth = (dateItem1:any, dateItem2:any) => {
  const datefrom:any = Date.parse(dateItem2)
  const newDateFrom:any = new Date(datefrom)
  const dateTo:any = Date.parse(dateItem1)
  const newDateTo:any = new Date(dateTo)

  const monthMilliseconds = 31*24*60*60*1000;
  const weekMilliseconds = 7*24*60*60*1000;
  
  const toCheck:any = newDateTo - newDateFrom 


  const toCheckWeek:any = (toCheck / monthMilliseconds) / weekMilliseconds 

  if(toCheck < monthMilliseconds) return false

  return `${Math.ceil(toCheck / monthMilliseconds)} Month / Week ${Math.ceil(toCheckWeek / weekMilliseconds)}`
}

export const checkDifferenceWeek = (dateItem1:any, dateItem2:any) => {
  const datefrom:any = Date.parse(dateItem2)
  const newDateFrom:any = new Date(datefrom)
  const dateTo:any = Date.parse(dateItem1)
  const newDateTo:any = new Date(dateTo)
  const weekMilliseconds = 7*24*60*60*1000;
  
  const toCheck:any = newDateTo - newDateFrom 
  if(toCheck < weekMilliseconds) return false
  return `Week ${Math.ceil(toCheck / weekMilliseconds)}`
}