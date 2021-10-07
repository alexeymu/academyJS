var inputData = document.getElementById('inputTask');
var btnAdd = document.getElementById('btn-add');
var ulList = document.getElementById('list');
var spans = document.getElementsByTagName('span');
var justNow = new Date();
var search2 = document.querySelector('.search2');

function addTodo() {

    isName();
    var inputContent = inputData.value;
    if (inputContent.length < 1) {
        return;
    }
    inputData.value = '';

    var newLi = document.createElement('li');
    newLi.innerText = inputContent;

    var newSpan = document.createElement('span');
    newSpan.onclick = function() {
        newSpan.closest('li').remove();
    }
    newSpan.innerText = ' Delete  ';


    var newDate = document.createElement('span');
    newDate.innerText = justNow;
    newDate.style.color = 'black';

    ulList.appendChild(newLi).appendChild(newSpan).appendChild(newDate);
    /*     deleteTodo();
     */

    getTextStr();
    setText();

}

function deleteTodo() {
    for (let spanItem of spans) {
        spanItem.onclick = function() {
            spanItem.parentElement.remove();
        };

    }
    setText();
}
/* <form name="form2">
<div class="first-name-element">
    <input type="text" placeholder="Lastname" name="lastName">
    <p class="error-message-lastname" style="color: red; display: none;">Введите корректно данные. Lastname не может быть менее 3 букв.</p>
</div>

<div><a class="waves-effect waves-light btn" id="btn-submit-lastname">Submit Lastname</a></div>
</form> */


/*    <div class="row g-3">
    <div class="col-8">
        <input type="text" class="form-control" id="inputTask" placeholder="Input task">
    </div>
    <button class="btn btn-primary col-4" id="btn-add">Add task</button>
</div> */


function isName() {
    var elemLastName = document.getElementById('inputTask');

    var errorMessage = document.querySelector('#error1');
    if (elemLastName.value.length <= 0) {
        elemLastName.focus();
        errorMessage.style.display = 'block';
        elemLastName.style.border = '5px solid red';
    } else {
        errorMessage.style.display = 'none';
        elemLastName.style.border = 'none';
    }
}





var infoButton = document.getElementById('open_info');
var infoModal = document.getElementById('my_modal');

function getContent() {

    infoButton.addEventListener('click', function() {
        infoModal.classList.add('modal_open');
        infoModal.innerText = 'Николаев Алексей';

    });


    window.addEventListener('keydown', function(e) {
        if (e.code === 'Escape') {
            infoModal.classList.remove('modal_open');
        }
    });
}
var infoLength = document.querySelector('.search');

function getTextStr() {

    var infoTextStr = document.getElementsByTagName('li');

    for (let elem of infoTextStr) {
        elem.addEventListener('click', function() {
            elem.classList.add('text_strok');

            setText();
        });
    }


}
var length1 = document.getElementById('lengthStr');
var length2 = document.getElementById('lengthStr2');

function setText() {
    let strokLength = 0;
    let infoTextStr = document.getElementsByTagName('li');

    for (let elem of infoTextStr) {

        if (elem.classList.contains('text_strok')) {
            strokLength++;

        };

    }
    length1.innerHTML = strokLength;
    length2.innerHTML = infoTextStr.length - strokLength;
}


btnAdd.onclick = addTodo;

deleteTodo();
getContent();
getTextStr();
setText();