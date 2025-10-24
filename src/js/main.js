// Inicializa AOS

AOS.init({
    duration: 800,
    easing: 'ease',
    once: true
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.nav');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// Data de lançamento
const releaseDate = new Date('2025-10-24T11:40:42').getTime();

// Função para formatar números com zero à esquerda
const formatNumber = (number) => {
    return number < 10 ? `0${number}` : number;
};

// Atualiza o contador a cada segundo
const countdown = setInterval(() => {
    const now = new Date().getTime();
    const distance = releaseDate - now;

    // Cálculo de tempo
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Atualiza os elementos HTML com animação
    const updateWithAnimation = (elementId, value) => {
        const element = document.getElementById(elementId);
        if (element.textContent !== formatNumber(value)) {
            element.style.transform = 'translateY(-20px)';
            element.style.opacity = '0';
            setTimeout(() => {
                element.textContent = formatNumber(value);
                element.style.transform = 'translateY(0)';
                element.style.opacity = '1';
            }, 200);
        }
    };

    updateWithAnimation('days', days);
    updateWithAnimation('hours', hours);
    updateWithAnimation('minutes', minutes);
    updateWithAnimation('seconds', seconds);

    // Quando o contador chegar a zero
    if (distance < 0) {
        clearInterval(countdown);
        const countdownTimer = document.querySelector('.countdown-timer');
        countdownTimer.innerHTML = `
            <div class="countdown-complete" data-aos="zoom-in">
                <h2>Música Lançada!</h2>
                <p>Ouça agora nas principais plataformas de streaming!</p>
            </div>
        `;
        AOS.refresh();
    }
}, 1000);

// Smooth scroll para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });

});
