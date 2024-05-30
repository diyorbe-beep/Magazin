const resNav = document.querySelector('.resNav')
const bars = document.querySelector('.bars')
const close = document.querySelector('.close')
const dowinCard1 = document.querySelectorAll('.dowin_card_1')
const toCard = document.querySelectorAll('.toCard')
const _1 = document.querySelectorAll('._1')
const top_select = document.querySelector('.top_select')
const top_p = document.querySelector('.top_p')
const top_a = document.querySelector('.top_a')
bars.addEventListener('click', () => {
      resNav.classList.toggle('active')
})

close.addEventListener('click', () => {
      resNav.classList.toggle('active')
})

top_select.addEventListener('change',  ()=>{
      translet()
      translet1()
})


function translet() {
      if (top_select.value = 'Russion') {
            top_p.textContent = `Летняя распродажа на все купальники и бесплатная экспресс-доставка — СКИДКА 50%!`
      }
}

function translet1() {
      if (top_select.value = 'Uzbekistan') {
            top_p.textContent = `Barcha cho'milish kostyumlari uchun yozgi sotuv va bepul tezkor yetkazib berish - 50% chegirma!`
      }
}