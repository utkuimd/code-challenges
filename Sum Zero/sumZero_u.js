// Method: Multiple pointer
function sumZero(arr) {
    var left = 0
    var right = arr.length - 1
    while(left < right) {
        if(arr[left] + arr[right] === 0) {
            return [arr[left], arr[right]]
        } else if(arr[left] + arr[right] > 0) {
            right--
        } else {
            left++
        }
    }
    return undefined
}
console.log(sumZero([-6,-4,-2,0,2,4,6]))
console.log(sumZero([-4,0,2,6]))
console.log(sumZero([1,2,3]))

