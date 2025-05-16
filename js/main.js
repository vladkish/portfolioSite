document.addEventListener('DOMContentLoaded', () => {
    class BinaryBackground {
        constructor() {
            this.container = document.createElement('div');
            this.container.className = 'binary-container';
            document.body.appendChild(this.container);

            this.digits = ['0', '1'];
            this.count = 50;
            this.elements = [];

            this.init();
        }

        init() {
            this.container.innerHTML = '';

            for (let i = 0; i < this.count; i++) {
                const element = document.createElement('div');
                element.className = 'binary-digit';
                element.textContent = this.randomDigit();

                const size = 36 + Math.random() * 48;
                const x = Math.random() * 100;
                const y = Math.random() * 100;
                const delay = Math.random() * 3;
                const duration = 10 + Math.random() * 20;
                const opacity = 0.7 + Math.random() * 0.3;
                const rotation = Math.random() * 360;
                const brightness = 70 + Math.random() * 30;

                Object.assign(element.style, {
                    fontSize: `${size}px`,
                    left: `${x}%`,
                    top: `${y}%`,
                    animationDelay: `${delay}s`,
                    animationDuration: `${duration}s`,
                    opacity,
                    transform: `rotate(${rotation}deg)`,
                    filter: `brightness(${brightness}%)`,
                    position: 'absolute',
                    color: 'lime'
                });

                this.container.appendChild(element);
                this.elements.push(element);
            }
        }

        randomDigit() {
            return this.digits[Math.floor(Math.random() * this.digits.length)];
        }
    }


    window.addEventListener('DOMContentLoaded', () => {
        new BinaryBackground();

        const burger = document.getElementById('burger');
        const navList = document.getElementById('navList');
        if (burger && navList) {
            burger.addEventListener('click', () => {
                navList.classList.toggle('active');
            });
        }

        const anchors = document.querySelectorAll('nav li');
        anchors.forEach(item => {
            item.addEventListener('click', () => {
            });
        });
    });
});