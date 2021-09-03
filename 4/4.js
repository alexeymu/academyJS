/* Создайте функцию, которая принимает число как строку n и возвращает число без конечных и стартовых нулей.
Конечные нули - это нули после десятичной точки, которые не влияют на значение (например, последние три нуля в 6.7000 и 6.07000).
Стартовые нули - это нули перед целым числом, которые не влияют на значение (например, первые три нуля в 000427 и 000930).
removeLeadingTrailing("190.000") ➞ "190"
removeLeadingTrailing("00803") ➞ "803"
removeLeadingTrailing("07.1200") ➞ "7.12"
removeLeadingTrailing("90") ➞ "90"
//Вернуть строку.
//Если вы получаете число с .0 в конце, верните целочисленное значение (например, верните «4», а не «4,0»).
//Если число 0, 0,0, 000, 00,00 и т. Д. ... верните «0». */


/* function removeLeadingTrailing(x) {
    const parsed = parseFloat(x);
    if (isNaN(parsed)) { return 0; }
    return parsed;
}
console.log(removeLeadingTrailing("190.000"));
console.log(removeLeadingTrailing("00803"));
console.log(removeLeadingTrailing("07.1200"));
console.log(removeLeadingTrailing("90"));
 */



/* . Разработать «чистую» функцию treeSum, которая получает массив, элементы которого могут быть числами или снова массивами, и так до любого уровня.
Функция должна рассчитать и вернуть сумму всех числовых элементов массива со всех уровней.
При написании функции не описывать каких-либо вложенных в неё функций.
Проверить работу функции можно на следующем массиве (сумма 50):
 */



function getSum(receivedArray) {
    if (!Array.isArray(receivedArray)) {
        receivedArray = [receivedArray];
    }
    var sum = 0;
    for (var i = 0; i < receivedArray.length; i++) {
        if (Array.isArray(receivedArray[i])) {
            sum += getSum(receivedArray[i]);
        } else {
            sum += receivedArray[i];
        }
    }
    return sum;
}

function treeSum() {
    var a = [5, 7, [4, [2], 8, [1, 3], 2],
        [9, []],
        1, 8
    ];
    console.log('Сумма всех элементов массива: ' + getSum(a));
}
treeSum();
