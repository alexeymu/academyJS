/* домашка  1 */
function changeTitle1() {
    var title = document.getElementById('description');
    title.innerText = ' привет, как дела? ';
}

/* домашка 2  */
function changeTitle2() {
    var title22 = document.querySelectorAll('collection');
    title22.innerHTML += '<a href="#!" class="collection-item"> Item бесконечность </a>';
}