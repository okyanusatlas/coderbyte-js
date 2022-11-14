function GCF(arr) {
    const smallerNum = Math.min(...arr);
    for(let i = smallerNum; i >= 1; i--){
        if(arr.every(num => num % i === 0)) return i;
    }
}

console.log(GCF([45,12]));