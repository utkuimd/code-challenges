function binarySearch(arr, val) {
    // Do something
    var left = 0;
    var right = arr.length - 1;
    var mid = Math.floor((left + right) / 2);

    while(arr[mid] !== val && left <= right) {
        if(arr[mid] < val) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
        mid = Math.floor((right + left) / 2);
    }
    return arr[mid] === val ? mid : -1;
}
console.log(binarySearch([1,2,3,4,5], 4));