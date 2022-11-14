function FizzBuzz(num) {
    let toReturn = '';
    for(let i = 1; i<= num; i++) {
        if(i % 15 === 0) {
            toReturn+='FizzBuzz '
            continue;
        }
        if(i % 3 === 0) {
            toReturn+='Fizz '
            continue;
        }
        if(i % 5 === 0) {
            toReturn+='Buzz '

        }
        else {
            toReturn+=`${i} `
        }
    }
    return toReturn.substring(0,toReturn.length-1)
}