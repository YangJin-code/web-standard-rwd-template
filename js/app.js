// const wrap =document.querySelector('#wrap')
// const fixedTopBtn = document.querySelector('.fixedTop')

// console.log(wrap);

// fixedTopBtn.addEventListener('click',()=>{
//     window.scrollTo({
//         top:0,
//         behavior:'smooth'
//     })
// })



// window.addEventListener('scroll',()=>{
//     console.log(window.scrollY)
//     if(window.scrollY>100){
//         wrap.classList.add('scroll')
        
//     }else{
//         wrap.classList.remove('scroll')

//     }

// })








// // 별 보기 가이드 탭
// const tabs = document.querySelectorAll(".guide-tabs li");
// const cards = document.querySelectorAll(".guide-content li");

// function showGuide(index) {
//     // 1. 전부 on 빼기
//     tabs.forEach((tab) => tab.classList.remove("on"));
//     cards.forEach((card) => card.classList.remove("on"));
//     // 2. 선택한 번호에만 on 붙이기
//     tabs[index].classList.add("on");
//     cards[index].classList.add("on");
// }

// tabs.forEach((tab, index) => {
//     tab.addEventListener("click", () => showGuide(index));
// });
// cards.forEach((card, index) => {
//     card.addEventListener("click", () => showGuide(index));
// });

// const body = document.querySelector('body')
// const topBtn = document.querySelector('.top')

// window.addEventListener('scroll', () => {
//     if (window.scrollY > 100) {
//         body.classList.add('scroll')

//     } else {

//         body.classList.remove('scroll')
//     }
// })

// topBtn.addEventListener('click', () => {
//     window.scrollTo({
//         top: 0,
//         behavior: 'smooth'
//     })
// })

// 별 보기 가이드 탭
// const tabs = document.querySelectorAll(".guide-tabs li");
// const cards = document.querySelectorAll(".guide-content li");

// function showGuide(index) {
//     // 1. 전부 on 빼기
//     tabs.forEach((tab) => tab.classList.remove("on"));
//     cards.forEach((card) => card.classList.remove("on"));
//     // 2. 선택한 번호에만 on 붙이기
//     tabs[index].classList.add("on");
//     cards[index].classList.add("on");
// }

// tabs.forEach((tab, index) => {
//     tab.addEventListener("click", () => showGuide(index));
// });
// cards.forEach((card, index) => {
//     card.addEventListener("click", () => showGuide(index));
// });

// const body = document.querySelector('body')
// const topBtn = document.querySelector('.top')
// const mNavBtn = document.querySelector('.mob-nav-btn')
// window.addEventListener('scroll', () => {
//     if (window.scrollY > 100) {
//         body.classList.add('scroll')

//     } else {

//         body.classList.remove('scroll')
//     }
// })

// topBtn.addEventListener('click', () => {
//     window.scrollTo({
//         top: 0,
//         behavior: 'smooth'
//     })
// })

// mNavBtn.addEventListener('click',(e)=>{
//     e.preventDefault()
//     body.classList.toggle('m-nav-open')
// })


// 별 보기 가이드 탭
const tabs = document.querySelectorAll(".guide-tabs li");
const cards = document.querySelectorAll(".guide-content li");

function showGuide(index) {
    // 1. 전부 on 빼기
    tabs.forEach((tab) => tab.classList.remove("on"));
    cards.forEach((card) => card.classList.remove("on"));
    // 2. 선택한 번호에만 on 붙이기
    tabs[index].classList.add("on");
    cards[index].classList.add("on");
}

tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => showGuide(index));
});
cards.forEach((card, index) => {
    card.addEventListener("click", () => showGuide(index));
});

const body = document.querySelector('body')
const topBtn = document.querySelector('.top')
const mNavBtn = document.querySelector('.mob-nav-btn')
const navBtns = document.querySelectorAll('nav ul li a')

console.log(navBtns.length)
navBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault()
        
        const id = btn.getAttribute('href')
        const target = document.querySelector(id)
        const headerH = document.querySelector('header').offsetHeight
        window.scrollTo({
            top: target.offsetTop - headerH,
            behavior: 'smooth'
        })
        body.classList.remove('m-nav-open')

    })
})













window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        body.classList.add('scroll')

    } else {

        body.classList.remove('scroll')
    }
})

topBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
})

mNavBtn.addEventListener('click', (e) => {
    e.preventDefault()
    body.classList.toggle('m-nav-open')
})