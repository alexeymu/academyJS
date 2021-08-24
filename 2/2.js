/* /* 1. Учитывая число(в виде аргумента), верните массив, содержащий две половины числа. Если число нечетное, сделайте крайнее правое число выше.
//Все числа должны быть целыми.
//Вы также можете ожидать отрицательные числа.
numberSplit(4) ➞ [2, 2]
numberSplit(10) ➞ [5, 5]
numberSplit(11) ➞ [5, 6]
numberSplit(-9) ➞ [-5, -4] */




function numberSplit(number) {
    const half = parseInt(number / 2);
    const difference = number - half;

    if (difference > half) {
        return [half, difference];
    }

    return [difference, half];
}

console.log(numberSplit(4));
console.log(numberSplit(10));
console.log(numberSplit(11));
console.log(numberSplit(-9));







/* 
2. Создайте функцию, которая возвращает количество " true” значений в массиве.
numericTrue([true, false, false, true, false]) ➞ 2
 numericTrue ([false, false, false, false]) ➞ 0
 numericTrue ([]) ➞ 0 */
//Вернуть 0, если дан пустой массив.
//Все элементы массива имеют тип bool (true или false).






function numericTrue(arr) {
    let count = 0;

    arr.forEach(function(item) {
        if (item) {
            count++;
        }
    })

    return count;
}

console.log(numericTrue([true, false, false, true, false]));
console.log(numericTrue([false, false, false, false]));
console.log(numericTrue([]));





/* 3..Вернуть наибольшее и наименьшее числа
Создайте функцию, которая принимает массив чисел, и возвращает наибольшее и наименьшее число */


function highLow(arr) {
    var newArray = [];
    arr.forEach(function() {
        newArray[0] = Math.max.apply(Math, arr);
        newArray[1] = Math.min.apply(Math, arr);
    });
    return newArray;
}
console.log(highLow([1, 2, 3, 4, 5]));
console.log(highLow([1, 2, -3, 4, 5]));
console.log(highLow([1, 9, 3, 4, -5]));
console.log(highLow([13]));
