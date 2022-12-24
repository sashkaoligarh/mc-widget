import { useEffect, useState } from 'react';

const useCountdown = (targetDate:any) => {
  const utc = Date.parse(targetDate)
  const countDownDate = new Date(utc).getTime();
  const [countDown, setCountDown] = useState(
    countDownDate - new Date().getTime()
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCountDown(countDownDate - new Date().getTime());
    }, 1000);

    return () => clearInterval(interval);
  }, [countDownDate]);

  return getReturnValues(countDown);
};

  const getReturnValues = (countDown:any) => {
    const hours = Math.floor(
      (countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((countDown % (1000 * 60)) / 1000);
    
    return  `
    ${hours.toString().length > 1 ? hours : 0 + hours.toString()}h
    :
    ${minutes.toString().length > 1 ? minutes : 0 + minutes.toString()}m
    : 
    ${seconds.toString().length > 1 ? seconds : 0 + seconds.toString()}s`;
  };

export { useCountdown };