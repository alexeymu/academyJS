/* 1.	Написать «чистую» функцию для эффективного подсчёта количества русских гласных букв в строке.
            Регулярные выражения (кто умеет) не использовать.
            Спросить у пользователя строку. Вывести в консоль количество русских                  гласных букв в ней.
 */

/* 
function strGl(str) {
    var count = 0;

    var obj = {
        а: true,
        о: true,
        у: true,
        и: true,
        ы: true,
        э: true,
        е: true,
        ё: true,
        ю: true,
        я: true
    }
    for (var i = 0; i < str.length; i++) {
        var elem = str[i];
        var keyValue = obj[elem];
        if (keyValue === true) {
            count++;
        }

    }
    return count;
}


console.log(strGl('хороший денёк')); */


/* 2.	У вас есть два массива. Один показывает имена людей, а другой показывает их род занятий. Ваша задача - создать объект, отображающий каждого человека по его роду занятий.
            var names = ["Max", "Vera", "Joe", "Annette", "Sussan"]
            var jobs = ["Butcher", "Programmer", "Doctor", "Teacher", "Lecturer"]

combineNameWork (names, jobs) ➞ {
Max: "Butcher",
Vera: "Programmer",
Joe: "Doctor",
Annette: "Teacher",
Sussan: "Lecturer"
}

//Два массива имеют одинаковую длину.
//Индекс имени в массиве имен совпадает с индексом работы человека в массиве вакансий, как показано в таблице выше. */

/* function combineNameWork(names, jobs) {
    var nameJobs = {};


    for (var i = 0; i < names.length; i++) {
        var name = names[i];
        var job = jobs[i];
        nameJobs[name] = job;
    }

    return nameJobs;
}
var names = ["Max", "Vera", "Joe", "Annette", "Sussan"];
var jobs = ["Butcher", "Programmer", "Doctor", "Teacher", "Lecturer"];
console.log(combineNameWork(names, jobs)); */













/* 3.	У вас есть входной массив (из строк с двумя буквами) и массив слов
Напишите функцию, которая возвращает true, если каждую (строку с двумя буквами) из первого массива можно найти хотя бы один раз в массиве
                          слов(втором массиве).



canFind(["at", "be", "th", "au"], ["beautiful", "the", "hat"]) ➞ true
canFind(["ay", "be", "ta", "cu"], ["maybe", "beta", "abet", "course"]) ➞ false
# "cu" не найден ни в одном из слов.
canFind(["th", "fo", "ma", "or"], ["the", "many", "for", "forest"]) ➞ true
canFind(["oo", "mi", "ki", "la"], ["milk", "chocolate", "cooks"]) ➞ false */

/* function canFind(name1, name2) {
    var count = 0;
    for (var i = 0; i < name1.length; i++) {
        var searches1 = name1[i];
        for (var j = 0; j < name2.length; j++) {
            var searches2 = name2[j];
            if (searches2.indexOf(searches1) != -1) {
                count++;
                break;
            }
        }
    }
    return count === name1.length;
}

console.log(canFind(["at", "be", "th", "au"], ["beautiful", "the", "hat"]));
console.log(canFind(["ay", "be", "ta", "cu"], ["maybe", "beta", "abet", "course"]));
console.log(canFind(["th", "fo", "ma", "or"], ["the", "many", "for", "forest"]));
console.log(canFind(["oo", "mi", "ki", "la"], ["milk", "chocolate", "cooks"])); */