// Method: Multiple pointers
function isSubsequence(str1, str2){
    // Do something
    var arr1 = str1.split('')
    var arr2 = str2.split('')
    var i = 0
    for(var j = 0; j < arr2.length; j++) {
        if(arr2[j] === arr1[i]){
            i++
            if(i === arr1.length) {
                return true
            }
        }
    }
    return false
}
console.log(isSubsequence('hello', 'hello world'))      // true
console.log(isSubsequence('sing', 'sting'))             // true
console.log(isSubsequence('abc', 'abracadabra'))        // true
console.log(isSubsequence('abc', 'acb'))                // false (order matters)

