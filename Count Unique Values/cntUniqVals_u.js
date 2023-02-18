function cntUniqVals(arr) {
    var res = 0
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] !== arr[i + 1]) {
            res++
        }
    }
    return res
}
console.log(cntUniqVals([1,2,3,4,4,5,6,6,10,10,11]))
console.log(cntUniqVals([-3,-2,-2,0,2]))
console.log(cntUniqVals([]))


