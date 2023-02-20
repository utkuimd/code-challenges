// Method: Frequency Counter
function areThereDuplicates() {
    // Do something
    var cols = {}
    for(var val in arguments) {
        cols[arguments[val]] = (cols[arguments[val]] || 0) + 1
    }

    for(var key in cols) {
        if(cols[key] > 1) {
            return true
        }
    }

    return false
}
console.log(areThereDuplicates(1, 2, 3))
console.log(areThereDuplicates(1, 2, 2))
console.log(areThereDuplicates('a', 'b', 'b', 'e'))

