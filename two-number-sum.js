function twoNumberSum(array, targetSum, map = new Map()) {
    for(num of array){
          solution = targetSum - num
        while(map.has(solution)) return [num, solution]
        map.set(num)
    }
    return []
}

// Do not edit the line below.
exports.twoNumberSum = twoNumberSum;
