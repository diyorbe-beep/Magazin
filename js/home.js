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

top_select.addEventListener('change', translet)


function translet() {
      if (top_select.value = 'Russion') {
            top_p.textContent = `Летняя распродажа на все купальники и бесплатная экспресс-доставка — СКИДКА 50%!`
      } else if (top_select.value = 'Uzbekistan') {
            top_p.textContent = 'aadawd'
      }
}

let mybutton = document.querySelector(".toTop");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
      scrollFunction()
};

function scrollFunction() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            mybutton.style.display = "block";
      } else {
            mybutton.style.display = "none";
      }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
}