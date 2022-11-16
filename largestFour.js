const largestFour = arr => {
    if(arr.length < 4) return arr.reduce((acc, curr) => acc+curr);
    const [a,b,c,d] = arr.sort((a,b) => b-a);
    return a+b+c+d;
}

console.log(largestFour([0, -1, 2, 3, 7, 1]));