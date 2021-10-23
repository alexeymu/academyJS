var inputData = document.getElementById('inputTask');
var btnAdd = document.getElementById('btn-add');
var ulList = document.getElementById('list');
var spans = document.getElementsByTagName('span');

//<li>Task1 <span>Delete</span></li>

function addTodo() {
    var inputContent = inputData.value;
    inputData.value = '';

    var newLi = document.createElement('li');
    newLi.innerText = inputContent;
    var newSpan = document.createElement('span');
    newSpan.innerText = ' DELETE';

    ulList.appendChild(newLi).appendChild(newSpan);
    getTextStr();
    deleteTodo();
}

function deleteTodo() {
    for (let spanItem of spans) {
        spanItem.onclick = function() {
            spanItem.parentElement.remove();
        }
    }
}


function getTextStr() {

    var infoTextStr = document.getElementsByTagName('li');

    for (let elem of infoTextStr) {
        elem.addEventListener('click', function() {
            elem.classList.add('text_strok');


        });
    }


}
btnAdd.onclick = addTodo;
getTextStr();
deleteTodo();


let closeLi = document.getElementsByTagName('li');
document.querySelector('#btn-add').addEventListener('click', () => {
    localStorage.setItem('inputValue', ulList.innerHTML);

});
document.querySelector('#btn-clear').addEventListener('click', () => {
    localStorage.setItem('inputValue', '');
    document.getElementById("list").innerHTML = "";
});


document.querySelector('#btn-save').addEventListener('click', () => {
    localStorage.setItem('inputValue', ulList.innerHTML);
})



let showContent = () => {
    ulList.innerHTML = localStorage.getItem('inputValue');
}



let delContent = () => {
    closeLi.innerHTML = localStorage.getItem('inputValue');
}

showContent();
delContent();