function charCount(str) {
    const result = {}
    var clnArr = str.replace(/[^A-z0-9]/g, "").toLowerCase().split("")  // Remove non-alphanumeric characters and converted to lowercase and array.
    for(var i = 0; i < clnArr.length; i++) {
        if(result.hasOwnProperty(clnArr[i])) {  // Check is there any desired key in our object?
            result[clnArr[i]]++     // Important note: If our key is the element of any array, we must not to use "result.clnArr[i]" method.
        } else {
            result[clnArr[i]] = 1   // If we persist to use it, we will receive "result.clnArr is not UNDEFINED" error.
        }
    }
    return result
}

const case1 = "Your PIN number is *1234!!"
const case2 = "Hello hi"
const case3 = "aaaabbb"
console.log(charCount(case3))


