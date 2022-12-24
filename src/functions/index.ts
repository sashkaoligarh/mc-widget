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