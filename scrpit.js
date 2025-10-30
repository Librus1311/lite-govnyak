// BURGER MENU

const menuIcon = document.querySelector('.burger-menu-btn');
const menu = document.querySelector('.navbar-burger-links');

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('active');
    menu.classList.toggle('active');
});

// TICKET COUNT

document.addEventListener('DOMContentLoaded', function() {
  // Находим все счётчики на странице
  const counters = document.querySelectorAll('.tickets-date-ticket-count');
  
  counters.forEach(counter => {
    const minusBtn = counter.querySelector('.switch-minus');
    const plusBtn = counter.querySelector('.switch-plus');
    const valueEl = counter.querySelector('.ticket-value');
    
    // Начальное значение берём из текста элемента
    let count = parseInt(valueEl.textContent) || 0;
    
    // Функция обновления отображения
    function updateDisplay() {
      valueEl.textContent = count;
    }
    
    // Обработчик для кнопки «−»
    minusBtn.addEventListener('click', function() {
      if (count > 0) {
        count--;
        updateDisplay();
      }
    });
    
    // Обработчик для кнопки «+»
    plusBtn.addEventListener('click', function() {
      count++;
      updateDisplay();
    });
  });
});

// BUY FORM

const buyBtn = document.getElementById('buy-hook');
const buyForm = document.querySelector('.buy-form');

buyBtn.addEventListener('click', () => {
    buyForm.classList.add('active')
})

// Закрываем при клике вне формы
document.addEventListener('click', (event) => {
  if (
    !buyForm.contains(event.target) && 
    !buyBtn.contains(event.target)
  ) {
    buyForm.classList.remove('active');
  }
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

// VIDEO SCROLL

document.addEventListener('DOMContentLoaded', function() {
  // const slider = document.querySelector('.video');
  const images = document.querySelectorAll('.video-pic img');
  const prevBtn = document.querySelector('.prev-switch');
  const nextBtn = document.querySelector('.next-switch');
  
  let currentIndex = 0; // Текущий индекс изображения
  
  // Функция для показа изображения по индексу
  function showImage(index) {
    // Скрываем все изображения
    images.forEach(img => img.classList.remove('active'));
    
    // Показываем нужное изображение
    images[index].classList.add('active');
    currentIndex = index;
  }
  
  // Обработчик для кнопки «вперёд»
  nextBtn.addEventListener('click', function() {
    let nextIndex = currentIndex + 1;
    if (nextIndex >= images.length) {
      nextIndex = 0; // Возвращаемся к первому изображению
    }
    showImage(nextIndex);
  });
  
  // Обработчик для кнопки «назад»
  prevBtn.addEventListener('click', function() {
    let prevIndex = currentIndex - 1;
    if (prevIndex < 0) {
      prevIndex = images.length - 1; // Переходим к последнему изображению
    }
    showImage(prevIndex);
  });
  
  // Показываем первое изображение при загрузке
  showImage(0);
});