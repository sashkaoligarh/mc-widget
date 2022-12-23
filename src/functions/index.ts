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