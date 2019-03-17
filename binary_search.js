function binarySearch(search, arr = []) {
    let arraySize = arr.length;
    if (arraySize === 0) {
        return "array is empty";
    }
    let firstIdx = 0;
    let lastIdx = arr.length - 1;
    let result = null;
    let searchFunc = function () {
        let currentIdx = Math.floor((firstIdx + lastIdx) / 2);
        if (arr[currentIdx] === search) {
            result = currentIdx;
        } else if ((lastIdx - firstIdx) === 0) {
            result = `There is no such number as ${search}`;
        } else if (arr[currentIdx] > search) {
            lastIdx = currentIdx;
            searchFunc();
        } else {
            firstIdx = currentIdx + 1;
            searchFunc();
        }
    };
    searchFunc();
    return result;
}

let arr = [1, 3, 4, 6, 8, 10, 11, 22, 45, 56, 100, 102];
console.log(binarySearch(1, arr));
console.log(binarySearch(3, arr));
console.log(binarySearch(4, arr));
console.log(binarySearch(6, arr));
console.log(binarySearch(8, arr));
console.log(binarySearch(10, arr));
console.log(binarySearch(11, arr));
console.log(binarySearch(22, arr));
console.log(binarySearch(45, arr));
console.log(binarySearch(56, arr));
console.log(binarySearch(100, arr));
console.log(binarySearch(5, arr));
console.log(binarySearch(0, arr));
console.log(binarySearch((-2), arr));
console.log(binarySearch(101, arr));