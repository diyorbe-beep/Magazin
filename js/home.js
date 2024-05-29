const resNav = document.querySelector('.resNav')
const bars = document.querySelector('.bars')
const close =document.querySelector('.close')
const dowinCard1 = document.querySelectorAll('.dowin_card_1')
const toCard = document.querySelectorAll('.toCard')
bars.addEventListener('click', ()=>{
      resNav.classList.toggle('active')
})

close.addEventListener('click', ()=>{
      resNav.classList.toggle('active')
})

dowinCard1.addEventListener('mouseenter', ()=>{
      toCard.classList.add('toCard_active')
})