const largestPair =
  (num) => String(num)
    .split('')
    .reduce((acc, curr, index, arr) => acc >= Number(curr + arr[index+1]) || (!arr[index+1]) ?
                                                                            acc : Number(curr + arr[index+1]), 0);


console.log(largestPair(4759472))