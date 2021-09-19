function changePirctureInitial1() {
    var currentImg = document.getElementById('current-cat');
    currentImg.src = 'images/cat1.jpg';
    currentImg.innerText = 'котик номер 1';
    var currentCat = document.getElementById('current-title');
    currentCat.innerText = 'котик №1';
    var currentCatBottom = document.getElementById('current-content');
    currentCatBottom.innerText = 'Здесь должно быть описание 1-го котика';
}

function changePirctureInitial2() {
    var currentImg2 = document.getElementById('current-cat');
    currentImg2.src = 'images/cat2.jpg';
    currentImg2.innerText = 'котик номер 2';
    var currentCat2 = document.getElementById('current-title');
    currentCat2.innerText = 'котик №2';
    var currentCatBottom2 = document.getElementById('current-content');
    currentCatBottom2.innerText = 'Здесь должно быть описание 2-го котика';
}

function changePirctureInitial3() {
    var currentImg3 = document.getElementById('current-cat');
    currentImg3.src = 'images/cat3.jpg';
    var currentCat3 = document.getElementById('current-title');
    currentCat3.innerText = 'котик №3';
    var currentCatBottom3 = document.getElementById('current-content');
    currentCatBottom3.innerText = 'Здесь должно быть описание 3-го котика';
}

function changeInfoCat() {
    var infoCat = document.getElementById('cat-info');
    infoCat.innerHTML += " <tr> <td> Барсик </td> <td> Англия </td> <td> 2009 </td> </tr> ";
}


function changeTheme() {
    var themeCat = document.querySelector('img');
    themeCat.src = "./images/moon.svg";

    var textCat = document.querySelector('div');
    textCat.style.background = 'black';

    var textCatColor = document.querySelector('h1');
    textCatColor.style.color = 'white';

    var textCatColor2 = document.querySelector('table');
    textCatColor2.style.color = 'white';

    var textCatColor3 = document.querySelector('img');
    textCatColor3.style.background = 'white';

    var textCatColor4 = document.querySelector('#switcher');
    textCatColor4.style.color = 'white';
}