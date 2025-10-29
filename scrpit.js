
//     // Меняем направление анусного змея
//     if (content.classList.contains('active')) {
//         arrow.src = 'img/Arrow up.svg';
//     } else {
//         arrow.src = 'img/Arrow down.svg';
//     }
//     })

// document.addEventListener('DOMContentLoaded', () => {
//     const faqContainer = document.querySelector('.faq-wrap')

//     faqContainer.addEventListener('click', (e) => {
//         // const openText = e.target.closest('.faq-item-title-text')

//         // if(!openText) return

//         // const group = openText.parentElement
//         // const toggleElement = group.querySelector('.faq-item-text-hidden')

//         function toggleElement(button){
            
//             const block = button.closest('.faq-item')
//             const dropText = block.querySelector('.faq-item-text-hidden')

//             if (dropText.classList.contains('hidden')) {
//                 dropText.classList.remove('hidden')
//                 dropText.classList.add('active')
//             } else {
//                 dropText.classList.remove('active')
//                 dropText.classList.add('hidden')
//             }
//         } 

//         toggleElement(button)
//     })
// })

// BURGER MENU

const menuIcon = document.querySelector('.burger-menu-btn');
const menu = document.querySelector('.navbar-burger-links');

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('active');
    menu.classList.toggle('active');
});

// FAQ DROP

function toggleContent(image) {
  // Находим родительский блок
  const block = image.closest('.faq-item');

  // Находим скрытый текст
  const hiddenText = block.querySelector('.faq-item-text-hidden');

  // Проверяем текущее состояние изображения
  if (image.src.includes('down')) {
    // Меняем изображение на "up"
    image.src = 'img/Arrow up.svg';

    // Показываем текст
    hiddenText.classList.remove('hidden');
    hiddenText.classList.add('visible');
  } else {
    // Возвращаем изображение "down"
    image.src = 'img/Arrow down.svg';

    // Скрываем текст
    hiddenText.classList.remove('visible');
    hiddenText.classList.add('hidden');
  }
}

// Добавляем обработчики для всех изображений
document.querySelectorAll('.faq-item-arrow-switch').forEach(img => {
  img.addEventListener('click', () => {
    toggleContent(img);
  });
});