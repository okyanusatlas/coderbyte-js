function CorrectPath(str) {
    //start 1,1 -> end 5,5
    // let x= 1;
    // let y= 1;
    // if r; x+1,  if l; x-1 --- if d; y+1, if u; y-1;
    //calculate current values;
    let newStrArr = str.split('').filter(el => el !== '?');
    let [x,y] = newStrArr.reduce((acc, curr) => {
        switch(curr) {
            case 'r':
                acc[0]+=1
                break;
            case 'l':
                acc[0]-=1
                break;
            case 'd':
                acc[1]+=1
                break;
            case 'u':
                acc[1]-=1
                break;
            default:
            // code block
        }
        return acc;
    }, [1,1])
    let requiredX = 5-x;
    let requiredY = 5-y;
    let strArr = str.split('');
    const newArr = strArr.map(el => {
        if(el === '?') {
            if(requiredX > 0) {
                requiredX-=1
                return 'r'
            }
            if(requiredY > 0) {
                requiredY-=1
                return 'd'
            }
            return el;
        } else return el;
    })
    return newArr.join('');

}
