const cardBtnBtns1 = document.querySelector('.card_btn_btns1')
const cardBtnBtns2 = document.querySelector('.card_btn_btns2')
const cardBtnSpan = document.querySelector('.card_btn_span')
const cardBtnsBtnIcon = document.querySelector('.card_btns_btn_icon')


let level = cardBtnSpan.textContent
let over = true

cardBtnsBtnIcon.addEventListener('click', ()=>{
      cardBtnsBtnIcon.classList.toggle('click')
})


cardBtnBtns1.addEventListener('click', ()=>{
      if(level > 0){
            level--
            cardBtnSpan.textContent = level
            console.log(level);
      }
})

cardBtnBtns2.addEventListener('click', ()=>{
            level++
            cardBtnSpan.textContent = level
})