function sortByChoice(arr) {
    let result = [];
    let max = null;
    let idx = null;
    if (arr.length === 0) {
        return "the array is empty!";
    }
    while (arr.length > 0) {
        arr.forEach((item, i, arr) => {
            if (item > max || max === null) {
                max = item;
                idx = i;
            }
        });
        result.push(max);
        max = null;
        arr.splice(idx, 1);
        idx = null;
    }


    return result;
}

let array = [13, 5, 85, 41, 120, 85, 47, 41, 2, 36, 98, 111, 8255, 1205];
console.log(sortByChoice(array));