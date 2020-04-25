const countingMinutes = str => {
  const [time1, time2] = str.split('-');
  const newTime1 = turnTo24hClock(time1);
  const newTime2 = turnTo24hClock(time2);
  let calculation = (newTime2[0]*60 + newTime2[1] - (newTime1[0]*60 + newTime1[1]));
  return calculation > 0 ? calculation : 1440 + calculation
};
const turnTo24hClock = time => {
  const [h, rest] = time.split(':');
  const m = Number(rest.substr(0,2));
  let hour = time.includes('pm') ? ((Number(h) + 12)%24) : Number(h);
  return [hour, m]
};

console.log(countingMinutes("12:30pm-12:00am")) //690
console.log(countingMinutes("2:03pm-1:39pm")) //1416