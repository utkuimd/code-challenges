function same(arr1, arr2) {
    // Do Something
    var sqArr1 = arr1.map(el => Math.pow(el, 2))    // Take a square all elements in the array 1.
    sqArr1.sort((a, b) => a - b)                    // Descending order for array1.
    arr2.sort((a, b) => a - b)                      // Descending order for array2.
    // These arrays can be same that as an order and values?
    return sqArr1.length === arr2.length && sqArr1.every((el, indx) => el === arr2[indx]) ? true : false
}

const case1 = same([1, 2, 3], [4, 1, 9])
const case2 = same([1, 2, 3], [1, 9])
const case3 = same([1, 2, 1], [4, 4, 1])
const case4 = same([1, 2, 3, 2], [9, 1, 4, 4])
console.log(case1)
console.log(case2)
console.log(case3)
console.log(case4)


