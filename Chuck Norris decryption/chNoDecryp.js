function toBinary(str) {
    var arr = str.split(" ")    // Created an array. Elements with even indexes defines bit type,
                                // elements with odd indexes defines that how many times this bit repeated.
    var binArr = []     // Our binary array.
    while(arr.length !== 0) {   // The while loop continues until all elements in the array are removed.
        if(arr[0] === "0") {    // If first element is "0", bit type is "1".
            binArr.push("1".repeat(arr[1].length))  // Pushed 1's to our binary array depending on second element length.
        }
        else if(arr[0] === "00") {  // If first elements is "00", bit type is "0".
            binArr.push("0".repeat(arr[1].length))  // Pushed 0's to our binary array depending on second element length.
        }
        arr.splice(0,2) // First two elements removed.
    }
    return binArr.join("")      // Binary array converted to string.
}

function toStr(str) {
    var arr = str.match(/.{1,7}/g)  // 1000010101010100... -> ['1000010', '1010101', '00...']
    var newArr = []     // Our result array.
    for(var i = 0; i < arr.length; i++) {
        newArr.push(String.fromCharCode(parseInt(arr[i], 2)))   // First, converted to ascii code each element in the array.
                                                                // Second, these ascii codes converted to characters and pushed to new array.
    }
    return newArr.join("")      // New array converted to string and its our result same time :)
}

function chNoDecryp(str) {
    var bins = toBinary(str)    // "toBinary" function converts that encrypted code to binaries.
    var result = toStr(bins)    // "toStr" function converts binaries to our result string.
    return result
}

const case1 = "0 0 00 0000 0 00"
const case2 = "0 0 00 0000 0 000 00 0000 0 00"
const case3 = "0 0 00 00 0 0 00 000 0 00 00 0 0 0 00 00 0 0 00 0 0 0 00 000000 0 0000 00 000 0 00 00 00 0 00"
console.log(chNoDecryp(case3))