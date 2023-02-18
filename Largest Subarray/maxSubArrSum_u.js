// Method: Sliding window pattern
function maxSubArrSum(arr, num) {
    if(arr.length < num) {
        return null
    }
    var maxSum = 0
    var tempSum = 0
    for(var i = 0; i < num; i++) {
        maxSum += arr[i]
    }
    tempSum = maxSum
    for(var i = num; i < arr.length; i++) {
        tempSum = tempSum + arr[i] - arr[i - num]
        maxSum = Math.max(maxSum, tempSum)
    }
    return maxSum
}
console.log(maxSubArrSum([1,2,5,2,8,1,18], 4))
console.log(maxSubArrSum([], 4))

