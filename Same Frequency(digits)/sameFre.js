// Method: Frequency Counter
function sameFrequency(d1, d2) {
    // Do something
    var arr1 = d1.toString().split('')
    var arr2 = d2.toString().split('')
    
    if(arr1.length !== arr2.length) {
        return false
    }

    var freCnt1 = {}
    for(var i = 0; i < arr1.length; i++) {
        freCnt1[arr1[i]] = (freCnt1[arr1[i]] || 0) + 1
    }
    var freCnt2 = {}
    for(var i = 0; i < arr2.length; i++) {
        freCnt2[arr2[i]] = (freCnt2[arr2[i]] || 0) + 1
    }

    for(var key in freCnt1) {
        if(!(key in freCnt2)) {
            return false
        }
        if(freCnt1[key] !== freCnt2[key]) {
            return false
        }
    }

    return true
}
console.log(sameFrequency(182, 281))
console.log(sameFrequency(34, 14))
console.log(sameFrequency(3589578, 5879385))
console.log(sameFrequency(22, 222))
