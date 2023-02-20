// Method: Multiple Pointers
function averagePair(arr, avr) {
    // Do something
    if(arr.length < 2) {
        return false
    }

    var leftIndx = 0
    var rightIndx = arr.length - 1

    while(leftIndx < rightIndx) {
        if((arr[leftIndx] + arr[rightIndx]) / 2 === avr) {
            return true
        } else if((arr[leftIndx] + arr[rightIndx]) / 2 > avr) {
            rightIndx--
        } else {
            leftIndx++
        }
    }

    return false
}
console.log(averagePair([1,2,3],2.5))                   // true
console.log(averagePair([1,3,3,5,6,7,10,12,19],8))      // true
console.log(averagePair([-1,0,3,4,5,6], 4.1))           // false
console.log(averagePair([],4))                          // false

