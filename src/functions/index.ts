export const  timeConverterMMHHMM = (timestamp:any) => {
  const utc = Date.parse(timestamp)
  const a = new Date(timestamp);
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
