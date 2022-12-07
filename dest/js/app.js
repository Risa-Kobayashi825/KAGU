/*
ハンバーガーメニュー(ヘッダー)
*/
const menuButton = document.querySelector('.js-button__inner');
const menu = document.querySelector('.js-menu__nav');
const menuList = document.querySelector('.js-menu__list');

menuButton.addEventListener('click', function(){
    menuButton.classList.toggle('active');
    menu.classList.toggle('active');
});
menuList.addEventListener('click', function(){
    menuButton.classList.remove('active');
    menu.classList.remove('active');
});

/*
アコーディオン(フッター)
*/

const accordion = document.querySelectorAll(".js-accordion");

function toggle() {
    const content = this.nextElementSibling;
    const children = this.firstElementChild;
    this.classList.toggle("is-active");
    content.classList.toggle("is-open");
    children.classList.toggle("is-open");
}

for (let i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener("click", toggle);
}
