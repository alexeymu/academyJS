var name = prompt("Ваше имя?", " ");
var surname = prompt("Ваша фамилия?", " ");
var patron = prompt("Ваше отчество?", " ");
var age = Number(prompt("Ваш возраст (количество лет)?", ""));
var resulage = age + 5;
var ageDate = age * 365;
var isMan = confirm("ваш пол - мужской?");

var gender = isMan ? "мужской" : "женский"
var pensAge = isMan && age >= 60 || !isMan && age >= 55 ? "да" : 'нет';

alert('ФИО: ' + name + ' ' + surname + ' ' + patron + '\n\r ' + 'возраст, лет: ' + age +
    '\n\r ' + 'возраст, дней: ' + ageDate + '\n\r ' + 'Через 5 лет Вам будет: ' + resulage +
    '\n\r' + " пол: " + gender + '\n\r ' + 'пенсионный возраст: ' + pensAge);