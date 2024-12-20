const toogleBtn = document.querySelector('.navbar__toogle');
const menu = document.querySelector('.navbar__menu');
const icons = document.querySelector('.navbar__icons');

const reviewSort = document.querySelector('.review__writing');
const menuSort = document.querySelector('.container__menu');

const block2 = document.querySelector('#review');
const block = document.querySelector('#menu');
const random = document.querySelector('#random');

const reviewInput = document.getElementById('review-input');
const submitReviewBtn = document.getElementById('submit-review-btn');
const reviewList = document.getElementById('review-list');

var menuArray = new Array();
menuArray[0] = "언제나처럼 커피";
menuArray[1] = "몸 건강을 위해 디카페인";
menuArray[2] = "콜드브루";
menuArray[3] = "부드럽게 밀크";
menuArray[4] = "시원하게 스무디";
menuArray[5] = "달달한 에이드";
menuArray[6] = "몸을 위한 티";
menuArray[7] = "맛있는 생과일 주스";

toogleBtn.addEventListener('click', function () {
    menu.classList.toggle('active');
    icons.classList.toggle('active');
});


block.addEventListener('click', function () {
    menuSort.classList.add('active');
    reviewSort.classList.remove('active');
    document.querySelector("#review__record").style.display = 'none';       
});


random.addEventListener('click', function () {
    let imgNum = Math.round(Math.random() * 7);
    let selected = menuArray[imgNum];
    alert("오늘은 " + selected + " 어떠신가요?");
});

block2.addEventListener('click', function () {
    reviewSort.classList.add('active');
    menuSort.classList.remove('active');
    document.querySelector("#review__record").style.display = 'block';

});


function addReview() {
    const reviewText = reviewInput.value.trim();
    if (reviewText === '') {
        alert('리뷰를 작성해주세요!');
        return;
    }

    const reviewItem = document.createElement('p');
    reviewItem.textContent = reviewText;

    reviewList.appendChild(reviewItem);

    reviewInput.value = '';
}

submitReviewBtn.addEventListener('click', addReview);
