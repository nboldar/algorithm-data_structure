function quickSort(array) {
    let length = array.length;
    /**
     * проверяем если массив состоит из 1 елемента
     */
    if (length < 2) {
        return array;
    }
    let key = Math.floor((length - 1) / 2);
    /**
     * выбираем средний элемент в качестве опорного для максимальной скорости сортировки
     */
    let rootNode = array.splice(key, 1)[0];
    let bigger = [];
    let smaller = [];

    array.forEach(function (item) {
        item > rootNode ? bigger.push(item) : smaller.push(item);
    });
    /**
     * используем возможности ES2015 а именно оператор расширения, для лаконичности кода.
     */
    return [...quickSort(smaller), rootNode, ...quickSort(bigger)];
}

let arr = [24, 52, 4, -124, 24, 85, 1, -21, 0, 45, 1111, 87];

console.log(quickSort(arr));