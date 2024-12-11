// Função para fazer o slideshow
let slideIndex = 0;

function showSlides() {
    const slides = document.querySelectorAll(".slides");
    
    // Esconde todas as imagens
    slides.forEach(slide => {
        slide.style.display = "none";
    });

    // Avança para a próxima imagem
    slideIndex++;

    // Se o índice for maior que o número de imagens, reinicia o índice
    if (slideIndex >= slides.length) { // Alterado de > para >=
        slideIndex = 0; // Alterado de 1 para 0 para corresponder ao índice do array
    }

    // Exibe a imagem atual
    slides[slideIndex].style.display = "block"; // Alterado de slideIndex - 1 para slideIndex

    // Chama a função novamente após 3 segundos
    setTimeout(showSlides, 3000);
}

// Inicializa o slideshow
showSlides();

const createHeart = () => {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 2 + 3 + 's';
    document.body.appendChild(heart);
    
    setTimeout(() => {
        heart.remove();
    }, 5000);
};

// Cria um coração a cada 300 milissegundos
setInterval(createHeart, 300);