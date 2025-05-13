class BinaryBackground {
    constructor() {
        this.container = document.getElementById('binaryContainer');
        this.digits = ['0', '1'];
        this.count = 80;
        this.elements = [];
        
        this.init();
    }
    
    init() {
        for (let i = 0; i < this.count; i++) {
            const element = document.createElement('div');
            element.className = 'binary-digit';
            element.textContent = this.digits[Math.floor(Math.random() * this.digits.length)];
            
            const size = 24 + Math.random() * 36;
            const x = Math.random() * 100;
            const y = Math.random() * 100;
            const delay = Math.random() * 2;
            const duration = 8 + Math.random() * 15;
            const opacity = 0.7 + Math.random() * 0.3;
            
            element.style.fontSize = `${size}px`;
            element.style.left = `${x}%`;
            element.style.top = `${y}%`;
            element.style.animationDelay = `${delay}s`;
            element.style.animationDuration = `${duration}s`;
            element.style.opacity = opacity;
            
            const brightness = 70 + Math.random() * 30;
            element.style.filter = `brightness(${brightness}%)`;
            
            this.container.appendChild(element);
            this.elements.push(element);
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new BinaryBackground();
});