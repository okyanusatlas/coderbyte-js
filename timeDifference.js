function TimeDifference(strArr) {
    const minutes = strArr.map(time => {
        let toReturn = 0;
        if(time.includes('pm')) toReturn += 12 * 60;
        const [hours, minutes] = time.split(':');
        toReturn += Number(hours) * 60;
        toReturn += Number(minutes.substring(0,2));
        return toReturn;
    }).sort((a,b) => b-a)
    return minutes.reduce((acc, curr, i, arr) => {
        //check time diff with mod 720
        return arr[i+1] && (curr - arr[i+1]) < acc ?  curr - arr[i+1] : acc;
    }, minutes[0]-minutes[1])
}
//["1:10pm", "4:40am", "5:00pm"]
console.log(TimeDifference(["1:10pm", "4:40am", "5:00pm"]));
console.log(720 % 704)