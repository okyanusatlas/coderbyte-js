function BasicRomanNumerals(str) {
    const obj = {M:1000,CM:900,D:500,CD:400,C:100,L:50,XL:40,X:10,V:5,I:1}
    //if val at i+1 > i  use substract else  add
    const arr =str.split('');
    let res = 0;
    for(let i = 0; i< arr.length; i++) {
        if(!arr[i+1]) {
            res = res+obj[arr[i]];
        } else {
            if(obj[arr[i]] < obj[arr[i+1]]) {
                res = res +obj[arr[i+1]]- obj[arr[i]]
                i++;
            } else {
                res = res + obj[arr[i]];
            }
        }
    }
    return res;
}