window.onload = function() {
    new_user();
};

function new_user() {
    var fio = "";

    var age;
    var resulAge;
    var ageDay;
    var pol;
    var pens;
    var pens_confirm;



    enter_fio();

    enter_age();
    enter_pol();




    function enter_fio() {
        function enter_fio(question) {
            var answer = prompt(question);
            if (!answer || isFinite(parseInt(answer))) {
                enter_fio(question);
            } else {
                fio += answer + " ";
            }
        }
        enter_fio("Ваша фамилию: ");
        enter_fio("Ваше имя: ");
        enter_fio("Ваше отчество: ");

    }

    function enter_age() {

        age = parseInt(prompt("Введите возраст"));
        if (isFinite(age)) {
            ageDay = age * 365;
            resulAge = age + 5;
        } else {
            enter_age();
        }
    }

    function enter_pol() {
        pol = confirm("Ваш пол - мужской?");
        pol ? pens = 65 : pens = 60;
        if (pens == 65 && age >= pens || pens == 60 && age >= pens) {
            pens_confirm = "да";
        } else {
            pens_confirm = "нет";
        }
        if (pol) {
            pol = "мужской";
        } else {
            pol = "женский";
        }
    }



    if (age != 0 && fio.length != 0) {
        alert('ФИО: ' + fio + '\n\r ' + 'возраст, лет: ' + age +
            '\n\r ' + 'возраст, дней: ' + ageDay + '\n\r ' + 'Через 5 лет Вам будет: ' + resulAge +
            '\n\r' + " пол: " + pol + '\n\r ' + 'пенсионный возраст: ' + pens_confirm);
    } else {
        alert("Введите данные снова в корректной форме");
    }


}
