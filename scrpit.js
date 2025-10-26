const arrowDown = document.querySelector('.faq-item-arrow')
const dropText = document.querySelector('.faq-item-text-hidden')

arrowDown.addEventListener('click', () => {
    dropText.classList.toggle('close')
})