//1. Напишите функцию, которая принимает возраст в "годах" и возвращает возраст в "днях".

/* convertAge(65) ➞ 23725

convertAge(0) ➞ 0

converAge(20) ➞ 7300 */

/* Для этого задания используйте 365 дней в году.
Игнорируйте високосные годы и дни между прошлым днем рождения и настоящим днем.
Ожидайте ввода только положительных целых чисел. */

function convertAge(year) {

    var a = 365;
    year = a * year;
    console.log(year);

}
convertAge(65);
convertAge(0);
convertAge(20);




// 2. Напишите функцию, которая принимает целые минуты и преобразует их в секунды.

/* convertMinutes(5) ➞ 300

convertMinutes(3) ➞ 180

convertMinutes(2) ➞ 120 */


function convertMinutes(sec) {
    var a = 60;
    sec = a * sec;
    console.log(sec);
}

convertMinutes(5);
convertMinutes(3);
convertMinutes(2);





// 3. Напишите функцию, которая берет base и height треугольника и возвращает его площадь.

/* triArea(3, 2) ➞ 3

triArea(7, 4) ➞ 14

triArea(10, 10) ➞ 50 */

//Площадь треугольника: (base * height) / 2

function triArea(base, height) {
    var plo;
    plo = (base * height) / 2;
    console.log(plo);
}
triArea(3, 2);
triArea(7, 4);
triArea(10, 10);






// 4. Для двух чисел верните true, если сумма обоих чисел меньше 100. В противном случае верните false.

/* remainder(1, 3) ➞ 1

remainder(3, 4) ➞ 3

remainder(-9, 45) ➞ -9

remainder(5, 5) ➞ 0 */

//В тестах используются только положительные и отрицательные целые числа.
function remainder(sum1, sum2) {
    var sum3;
    sum3 = sum1 + sum2;

    if (sum3 < 100) {
        console.log(true);
    } else console.log(false);

}

remainder(1, 3);
remainder(3, 4);
remainder(-9, 45);
remainder(5, 5);






// 5. Создайте функцию, которая берет количество побед, ничьих и поражений и вычисляет количество очков, набранных футбольной командой.
/* победы получают 3 очка
ничьи получают 1 очко
проигрыши получают 0 баллов */

/* footPoints(3, 4, 2) ➞ 13

footPoints(5, 0, 2) ➞ 15

footPoints(0, 0, 1) ➞ 0 */

//Входными данными будут числа больше или равные 0.

function footPoints(pob, nic, por) {
    var result;
    var pob = pob * 3;
    var nic = nic * 1;
    var por = por * 0;
    result = pob + nic + por;

    console.log(result);
}

footPoints(3, 4, 2);
footPoints(5, 0, 2);
footPoints(0, 0, 1);
