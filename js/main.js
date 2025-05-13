class BinaryBackground {
    constructor() {
        this.container = document.getElementById('binaryContainer');
        this.digits = ['0', '1', '0', '1', '0', '1', '#'];
        this.count = 100;
        this.elements = [];
        
        this.init();
    }
    
    init() {
        // Очищаем контейнер
        this.container.innerHTML = '';
        
        for (let i = 0; i < this.count; i++) {
            const element = document.createElement('div');
            element.className = 'binary-digit';
            element.textContent = this.digits[Math.floor(Math.random() * this.digits.length)];
            
            const size = 36 + Math.random() * 48;
            const x = Math.random() * 100;
            const y = Math.random() * 100;
            const delay = Math.random() * 3;
            const duration = 10 + Math.random() * 20;
            const opacity = 0.7 + Math.random() * 0.3;
            const rotation = Math.random() * 360;
            
            element.style.fontSize = `${size}px`;
            element.style.left = `${x}%`;
            element.style.top = `${y}%`;
            element.style.animationDelay = `${delay}s`;
            element.style.animationDuration = `${duration}s`;
            element.style.opacity = opacity;
            element.style.transform = `rotate(${rotation}deg)`;
            
            const brightness = 70 + Math.random() * 30;
            element.style.filter = `brightness(${brightness}%)`;
            
            this.container.appendChild(element);
            this.elements.push(element);
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // Инициализация фона
    new BinaryBackground();
    
    // Выбор цвета
    const colorSpans = document.querySelectorAll('.colors span');
    colorSpans.forEach(span => {
        span.addEventListener('click', function() {
            colorSpans.forEach(s => s.classList.remove('active'));
            this.classList.add('active');
            
            // Можно добавить логику изменения темы
            // document.documentElement.style.setProperty('--primary-color', this.style.backgroundColor);
        });
    });
    
    // Плавная прокрутка для ссылок
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if(targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if(targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});