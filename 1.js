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
    var pensConfirm;



    enterFio();

    enterAge();
    enterPol();




    function enterFio() {
        function enterFio(question) {
            var answer = prompt(question);
            if (!answer || isFinite(parseInt(answer))) {
                enterFio(question);
            } else {
                fio += answer + " ";
            }
        }
        enterFio("Ваша фамилию: ");
        enterFio("Ваше имя: ");
        enterFio("Ваше отчество: ");

    }

    function enterAge() {

        age = parseInt(prompt("Введите возраст"));
        if (isFinite(age)) {
            ageDay = age * 365;
            resulAge = age + 5;
        } else {
            enterAge();
        }
    }

    function enterPol() {
        pol = confirm("Ваш пол - мужской?");
        pol ? pens = 65 : pens = 60;
        if (pens === 65 && age >= pens || pens === 60 && age >= pens) {
            pensConfirm = "да";
        } else {
            pensConfirm = "нет";
        }
        if (pol) {
            pol = "мужской";
        } else {
            pol = "женский";
        }
    }



    if (age !== 0 && fio.length !== 0) {
        alert('ФИО: ' + fio + '\n\r ' + 'возраст, лет: ' + age +
            '\n\r ' + 'возраст, дней: ' + ageDay + '\n\r ' + 'Через 5 лет Вам будет: ' + resulAge +
            '\n\r' + " пол: " + pol + '\n\r ' + 'пенсионный возраст: ' + pensConfirm);
    } else {
        alert("Введите данные снова в корректной форме");
    }


}
