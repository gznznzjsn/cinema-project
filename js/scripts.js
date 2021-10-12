const schemeSvg = document.querySelector('.scheme-svg')
const priceTotal = document.querySelector('.price-total')
const cost = 800
let total = 0

schemeSvg.addEventListener('click', (event) => {
    if (!event.target.classList.contains('booked') && event.target.tagName === 'path' && !event.target.classList.contains('light')) {
        event.target.classList.toggle('active')
        total = schemeSvg.querySelectorAll('.active').length * cost
    }

    priceTotal.textContent = total
})