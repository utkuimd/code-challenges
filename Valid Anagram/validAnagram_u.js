// Method: Frequency Counter
function validAnagram(str1, str2) {
    let arr1 = str1.split('')
    let arr2 = str2.split('')

    if(arr1.length !== arr2.length) {
        return false
    }

    var frequencyCounter1 = {}
    for(var i = 0; i < arr1.length; i++) {
        if(frequencyCounter1.hasOwnProperty(arr1[i])) {
            frequencyCounter1[arr1[i]]++
        } else {
            frequencyCounter1[arr1[i]] = 1
        }
    }
    var frequencyCounter2 = {}
    for(var i = 0; i < arr2.length; i++) {
        if(frequencyCounter2.hasOwnProperty(arr2[i])) {
            frequencyCounter2[arr2[i]]++
        } else {
            frequencyCounter2[arr2[i]] = 1
        }
    }

    for(var key in frequencyCounter1) {
        if(!(key in frequencyCounter2)) {
            return false
        }
        if(frequencyCounter1[key] !== frequencyCounter2[key]) {
            return false
        }
    }

    return true
}
console.log(validAnagram('', ''))
console.log(validAnagram('aaz', 'zza'))
console.log(validAnagram('anagram', 'nagaram'))
console.log(validAnagram('rat', 'car'))
console.log(validAnagram('awesome', 'awesom'))
console.log(validAnagram('qwerty', 'qeywrt'))
console.log(validAnagram('texttwisttime', 'timetwisttext'))



