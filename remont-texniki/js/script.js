// Плавная прокрутка для якорей
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Модальное окно
const modal = document.getElementById('modal');
const openBtns = document.querySelectorAll('.open-modal');
const closeBtn = document.querySelector('.close');

openBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        modal.style.display = 'flex';
    });
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// Бургер-меню
const burger = document.createElement('div');
burger.className = 'burger';
burger.innerHTML = '<span></span><span></span><span></span>';
const headerContainer = document.querySelector('.header-container');
const nav = document.querySelector('.nav');
if (headerContainer && nav) {
    headerContainer.appendChild(burger);
    burger.addEventListener('click', () => {
        nav.classList.toggle('open');
    });
}