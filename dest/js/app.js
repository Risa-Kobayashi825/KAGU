/*
ハンバーガーメニュー
*/
const menu_area = document.querySelector('.header-button__inner');
const menu = document.querySelector('.header__nav');

menu_area.addEventListener('click', function(){
    menu_area.classList.toggle('active');
    menu.classList.toggle('active');
});


// メインビジュアル画像切り替え
// const img = ["images/top/keyv-pc_01.jpg","images/top/keyv-pc_02.jpg", "images/top/keyv-pc_03.jpg"];
// let count = -1;

// picChange(); // 関数を実行

// function picChange() {

// count++;

// // カウントが最大になれば配列を初期値に戻すため「0」を指定する
// if (count == img.length) count = 0;

// // 画像選択
// document.getElementById("pic").src = img[count];

// // 5秒ごとに実行
// setTimeout("picChange()", 5000);

// }


// フッターのアコーディオン
const accordion = document.querySelectorAll(".js-accordion");

function toggle() {
    const content = this.nextElementSibling;
    this.classList.toggle("is-active");
    content.classList.toggle("is-open");
}

for (let i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener("click", toggle);
}
